<template>
  <!-- <iframe id="frame" :src="d()" name="my-iframe" /> -->
  <div class="row">
    <div class="cvinput col-md-6">
      <selector @keyup="print" />
      <button @click="DownloadPdf">Download PDF</button>
    </div>
    <div ref="printMe" id="content">
      <theme-2 />
      <!-- SOURCE -->
    </div>
    <!-- OUTPUT -->
    <div class="col-md-6">
      <img id="content-image" :src="output" />
    </div>
  </div>
</template>

<script>
import { jsPDF } from "jspdf";
import $ from "jquery";
//import mycontent from "./content.vue";
import theme2 from "./them2/theme2.vue";
import selector from "./selector.vue";
export default {
  name: "my-pdf",
  data() {
    return { doc: null, f: "", output: null, el: null };
  },
  methods: {
    async print() {
      this.doc = new jsPDF({
        orientation: "p",
        unit: "px",
        format: "a4",
        hotfixes: ["px_scaling"],
      });

      this.el = this.$refs.printMe;
      // add option type to get the image version
      // if not provided the promise will return
      // the canvas.

      this.output = await this.$html2canvas(this.el, {
        type: "dataURL",
        onclone: function (cl) {
          $(cl).find("#content").css("display", "block");
        },
      });
    },
    DownloadPdf() {
      this.print();
      this.doc.addImage(
        this.output,
        "PNG",
        0,
        0,
        this.doc.internal.pageSize.getWidth(),
        this.doc.internal.pageSize.getHeight()
      );
      this.doc.save("a.pdf");

      // this.doc.text(this.text, 10, 10);
      // window.open(this.doc.output("bloburl"), "_blank", "width=200,height=100");
      // return this.doc.output("bloburl");

      /*  html2canvas(this.$refs.foo, {
        width: this.doc.internal.pageSize.getWidth(),
        height: this.doc.internal.pageSize.getHeight(),
      }).then((canvas) => {
        const img = canvas.toDataURL("image/png");
        this.doc.addImage(
          img,
          "png",
          140,
          10
          //  this.doc.internal.pageSize.getWidth(),
          //  this.doc.internal.getHeight()
        );
      });
      this.doc.save("a4.pdf");*/
      /*  html2canvas(this.$refs.foo, {
        onrendered: function (canvas) {
          var pagedata = canvas.toDataURL("image/jpeg", 1.0);
          const pdf = new jsPDF("", "pt", "a4");
          pdf.addImage(
            pagedata,
            "JPEG",
            0,
            0,
            595.28,
            (592.28 / canvas.width) * canvas.height
          );
          pdf.save("f.pdf");
        },
      });*/
    },
  },
  mounted() {
    this.print();
  },
  updated() {
    this.print();
  },
  computed: {},
  components: { theme2, selector },
};
</script>

<style lang="scss" scoped>
#frame {
  position: absolute;
  width: 50%;
  height: 80%;
  border: none;
}
.pdf {
  position: absolute;
  float: left;
}
#content {
  display: none;
}
#content-image {
  width: 500px;
  height: 500px;
}
</style>

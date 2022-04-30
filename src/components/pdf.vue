<template>
  <!-- <iframe id="frame" :src="d()" name="my-iframe" /> -->
  <div class="row">
    <div class="cvinput col-md-6">
      <selector @keyup="print" />
      <work-selector @keyup="print" />
    </div>
    <div ref="printMe" id="content">
      <theme-2 />
      <!-- SOURCE -->
    </div>
    <!-- OUTPUT -->
    <div class="col-md-6 pdf-section">
      <img id="content-image" :src="output" />
      <button @click="DownloadPdf" class="btn btn-success">
        Download PDF <i class="fa-solid fa-download"> </i>
      </button>
    </div>
  </div>
</template>

<script>
import { jsPDF } from "jspdf";
import * as html2canvas from "html2canvas";
import $ from "jquery";
//import mycontent from "./content.vue";
import theme2 from "./them2/theme2.vue";
import selector from "./selector.vue";
import workSelector from "./them2/them2Components/workSelector.vue";
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

      /* this.output = await this.$html2canvas(this.el, {
        type: "dataURL",
        useCORS: true,
        onclone: function (cl) {
          $(cl).find("#content").css("display", "block");
        },
      });*/
      html2canvas(this.el, {
        onclone: function (cl) {
          $(cl).find("#content").css("display", "block");
        },
      }).then((canvas) => {
        canvas.mozImageSmoothingEnabled = false;
        canvas.webkitImageSmoothingEnabled = false;
        canvas.msImageSmoothingEnabled = false;
        canvas.ImageSmoothingEnabled = false;
        this.output = canvas.toDataURL("image/png", 1);
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
  components: { theme2, selector, workSelector },
};
</script>

<style lang="scss" scoped>
.row {
  height: 100%;
}
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
  width: 600px;
  height: 600px;
}
.btn {
  margin-top: 20px;
}
.cvinput {
  background-color: #fff;
}
.pdf-section {
  position: fixed;
  right: 0;
  height: 100%;
  background-color: #eee;
}
</style>

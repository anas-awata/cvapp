<template>
  <div>
    <fieldset class="form-section">
      <div class="expansion-panel-header">
        <div class="expansion-panel-title">
          <h4 class="form-title">Experience</h4>
          <button
            id="expansionPanelPersonal"
            type="button"
            @click="this.workhidden = !this.workhidden"
            class="col-1 btn btn-outline-secondary"
          >
            <i class="fa-solid fa-angle-down"> </i>
          </button>
        </div>
      </div>
      <div class="work-container" :class="{ open: !workhidden }">
        <div>
          <button @click="pushWork" class="btn btn-success">
            add new work
            <i class="fa-solid fa-plus"> </i>
          </button>
          <component
            v-for="(work, index) in works"
            :key="index"
            :is="work"
            :deleteMe="deleteWork"
            @toggle-work="toggleMyWork"
          >
          </component>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
import workItem from "./workItems.vue";
export default {
  name: "work-selector",
  components: { workItem },
  data() {
    return {
      workhidden: false,
      works: ["workItem"],
      Jobtitle: [],
      Company: "",
      Location: "",
      From: "",
      To: "",
    };
  },
  methods: {
    pushWork() {
      this.works.push("workItem");
    },
    deleteWork(index) {
      this.works.splice(index, 1);
    },
    toggleMyWork({ jobtitle, company, location, from, to }) {
      for (let index = 0; index < this.works.length; index++) {
        (this.Jobtitle[index] = jobtitle),
          (this.Company = company),
          (this.Location = location),
          (this.From = from),
          (this.To = to);
        console.log(this.Jobtitle[index]);

        this.emitter.emit("toggle-thework", {
          J: this.Jobtitle[index],
          C: this.Company,
          L: this.Location,
          F: this.From,
          T: this.To,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
.work-container {
  display: none;
  background-color: #fff;
  margin-bottom: 20px;
}
.open {
  display: block;
  animation: growDown 0.5s ease-in-out forwards;
  transform-origin: top center;
}
@keyframes growDown {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.form-title {
  display: inline;
  padding: 10px;
  margin-left: 2.5rem;
}
.expansion-panel-title {
  display: flex;
  justify-content: space-between;
}
.expansion-panel-title {
  background-color: #fff;
}
#expansionPanelPersonal {
  display: inline;
  align-self: center;
  border-radius: 8px;
  padding: 0px;
  margin-right: 2.7rem;
}
label {
  display: table;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 2px;
  font-size: 18px;
}
</style>

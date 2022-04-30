<template>
  <div>
    <fieldset class="form-section">
      <div class="expansion-panel-header">
        <div class="expansion-panel-title">
          <button
            @click="deleteMe"
            class="btn btn-danger fa-solid fa-trash col-1 btndelete"
          ></button>
          <h4 class="form-title">Work 1 details</h4>
          <button
            id="expansionPanelPersonal"
            type="button"
            @click="this.Hidden = !this.Hidden"
            class="col-1 btn btn-outline-secondary"
          >
            <i class="fa-solid fa-angle-down"> </i>
          </button>
        </div>
      </div>
      <div class="grid-container" :class="{ open: !Hidden }">
        <div class="item1">
          <label for="jtitle" class="form-label"
            ><i class="fa-solid fa-suitcase"> </i> Job Title</label
          >
          <input
            id="jtitle"
            type="text"
            class="form-control"
            ref="input"
            v-model="jobtitle"
            @keyup="toggleWork"
          />
        </div>
        <div class="item2">
          <label for="company" class="form-label"
            ><i class="fa-solid fa-user"> </i> Company</label
          >
          <input
            id="company"
            type="text"
            class="form-control"
            v-model="company"
            @keyup="toggleWork"
          />
        </div>
        <div class="item3">
          <label for="Location" class="form-label"
            ><i class="fa-solid fa-envelope"> </i> Location</label
          >
          <input
            id="Location"
            type="text"
            class="form-control"
            v-model="location"
            @keyup="toggleWork"
          />
        </div>
        <div class="item4">
          <label for="from" class="form-label"
            ><i class="fa-solid fa-phone"> </i> From</label
          >
          <input
            id="from"
            type="date"
            class="form-control"
            v-model="from"
            @keyup="toggleWork"
          />
        </div>
        <div class="item5">
          <label for="To" class="form-label"
            ><i class="fa-solid fa-home"> </i> To</label
          >
          <input
            id="To"
            type="date"
            class="form-control"
            v-model="to"
            @keyup="toggleWork"
          />
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "work-item",
  data() {
    return {
      Hidden: false,
      jobtitle: "front end",
      company: "microsoft",
      location: "us",
      from: "2020",
      to: "2021",
    };
  },
  methods: {
    toggleWork() {
      this.$emit("toggle-work", {
        jobtitle: this.jobtitle,
        company: this.company,
        location: this.location,
        from: this.from,
        to: this.to,
      });
    },
    mounted() {
      this.toggleWork();
    },
  },
  props: ["deleteMe"],
};
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  gap: 0;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto auto;
  justify-content: center;
  align-content: center;
  display: none;
  background-color: #fff;
  grid-gap: 10px;
  margin-bottom: 20px;
}
.open {
  display: grid;
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
.item7 {
  grid-column: 1/3;
}
label {
  display: table;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 2px;
  font-size: 18px;
}
#expansionPanelPersonal {
  display: inline;
  align-self: center;
  border-radius: 8px;
  padding: 0px;
  margin-right: 2.7rem;
}
.form-title {
  display: inline;
  padding: 10px;
}
.expansion-panel-title {
  display: flex;
  justify-content: space-between;
}
.expansion-panel-title {
  background-color: #fff;
}
svg {
  margin-right: 3px;
}
.btndelete {
  display: inline;
  align-self: center;
  border-radius: 8px;
  padding: 4px;
  margin-left: 60px;
}
.item1 {
  grid-column: 1/3;
}
</style>

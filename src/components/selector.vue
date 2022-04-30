<template>
  <div>
    <fieldset class="form-section">
      <div class="expansion-panel-header">
        <div class="expansion-panel-title">
          <h4 class="form-title">Personal details</h4>
          <button
            id="expansionPanelPersonal"
            type="button"
            @click="this.personalHidden = !this.personalHidden"
            class="col-1 btn btn-outline-secondary"
          >
            <i class="fa-solid fa-angle-down"> </i>
          </button>
        </div>
      </div>
      <div class="grid-container" :class="{ open: !personalHidden }">
        <div class="item1">
          <label for="first-name" class="form-label"
            ><i class="fa-solid fa-user"> </i> First name</label
          >
          <input
            id="first-name"
            type="text"
            class="form-control"
            ref="input"
            v-model="Fname"
            @keyup="togglePersonal"
          />
        </div>
        <div class="item2">
          <label for="last-name" class="form-label"
            ><i class="fa-solid fa-user"> </i> Last name</label
          >
          <input
            id="last-name"
            type="text"
            class="form-control"
            v-model="Lname"
            @keyup="togglePersonal"
          />
        </div>
        <div class="item3">
          <label for="job-pos" class="form-label"
            ><i class="fa-solid fa-suitcase"> </i> Job Title</label
          >
          <input
            id="job-pos"
            type="text"
            class="form-control"
            v-model="Jtitle"
            @keyup="togglePersonal"
          />
        </div>
        <div class="item4">
          <label for="email" class="form-label"
            ><i class="fa-solid fa-envelope"> </i> Email</label
          >
          <input
            id="email"
            type="email"
            class="form-control"
            v-model="Email"
            @keyup="togglePersonal"
          />
        </div>
        <div class="item5">
          <label for="phone" class="form-label"
            ><i class="fa-solid fa-phone"> </i> Phone number</label
          >
          <input
            id="phone"
            type="tel"
            class="form-control"
            v-model="Phone"
            @keyup="togglePersonal"
          />
        </div>
        <div class="item6">
          <label for="location" class="form-label"
            ><i class="fa-solid fa-home"> </i> Address</label
          >
          <input
            id="location"
            type="text"
            class="form-control"
            v-model="Address"
            @keyup="togglePersonal"
          />
        </div>
        <div class="item7">
          <label for="aboutme" class="form-label"
            ><i class="fa-solid fa-user-circle"> </i> About me</label
          >
          <textarea
            id="aboutme"
            name="aboutme"
            cols="30"
            rows="10"
            class="form-control"
            v-model="About"
            @keyup="togglePersonal"
          ></textarea>
        </div>
      </div>
      <!-- Social Section -->
      <div class="expansion-panel-header">
        <div class="expansion-panel-title">
          <h4 class="form-title">Social details</h4>
          <button
            id="expansionPanelPersonal"
            type="button"
            @click="this.socialHidden = !this.socialHidden"
            class="col-1 btn btn-outline-secondary"
          >
            <i class="fa-solid fa-angle-down"> </i>
          </button>
        </div>
      </div>
      <div class="grid-container" :class="{ open: !socialHidden }">
        <div class="item1">
          <label for="Linkedin" class="form-label"
            ><i class="fa-brands fa-linkedin"> </i> linkedIn</label
          >
          <input
            id="Linkedin"
            type="text"
            class="form-control"
            ref="input"
            v-model="LinkedIn"
            @keyup="toggleSocial"
          />
        </div>
        <div class="item2">
          <label for="Twitter" class="form-label"
            ><i class="fa-brands fa-twitter"> </i> Twitter</label
          >
          <input
            id="Twitter"
            type="text"
            class="form-control"
            v-model="Twitter"
            @keyup="toggleSocial"
          />
        </div>
        <div class="item3">
          <label for="Instagram" class="form-label"
            ><i class="fa-brands fa-instagram"> </i> Instagram</label
          >
          <input
            id="Instagram"
            type="text"
            class="form-control"
            v-model="Instagram"
            @keyup="toggleSocial"
          />
        </div>
        <div class="item4">
          <label for="Facebook" class="form-label"
            ><i class="fa-brands fa-facebook"> </i> Facebook</label
          >
          <input
            id="Facebook"
            type="text"
            class="form-control"
            v-model="Facebook"
            @keyup="toggleSocial"
          />
        </div>
        <div class="item5">
          <label for="github" class="form-label"
            ><i class="fa-brands fa-github"> </i> gitHub</label
          >
          <input
            id="github"
            type="text"
            class="form-control"
            v-model="Github"
            @keyup="toggleSocial"
          />
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "my-selector",
  data() {
    return {
      personalHidden: true,
      socialHidden: false,
      Fname: "anas",
      Lname: "parker",
      Jtitle: "Web Developer",
      Email: "j.anderson@gmail.com",
      Phone: "+34 123 456 789",
      Address: "Los Angeles, CA",
      About:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod congue nisi, nec consequat quam. In consectetur faucibus turpis eget laoreet. Sed nec imperdiet purus.",
      LinkedIn: "Ronaldo",
      Twitter: "Ronaldo",
      Instagram: "Ronaldo",
      Facebook: "Ronaldo",
      Github: "Ronaldo",
    };
  },
  methods: {
    togglePersonal() {
      this.emitter.emit("toggle-personal", {
        Fname: this.Fname,
        Lname: this.Lname,
        Jtitle: this.Jtitle,
        Email: this.Email,
        Phone: this.Phone,
        Address: this.Address,
        About: this.About,
      });
    },
    toggleSocial() {
      this.emitter.emit("toggle-social", {
        LinkedIn: this.LinkedIn,
        Twitter: this.Twitter,
        Instagram: this.Instagram,
        Facebook: this.Facebook,
        Github: this.Github,
      });
    },
  },
  mounted() {
    setTimeout(() => this.togglePersonal(), 200);
    setTimeout(() => this.toggleSocial(), 200);
  },
};
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  gap: 0;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto auto;
  justify-content: space-around;
  align-content: center;
  display: none;
  background-color: #fff;
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
  margin-left: 2.5rem;
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
</style>

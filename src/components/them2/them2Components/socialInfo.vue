<template>
  <div class="contact-info clearfix">
    <ul class="list-logos">
      <li v-if="linkedIn"><i class="fa-brands fa-linkedin"> </i></li>
      <li v-if="twitter"><i class="fa-brands fa-twitter"> </i></li>
      <li v-if="instagram"><i class="fa-brands fa-instagram"> </i></li>
      <li v-if="facebook"><i class="fa-brands fa-facebook"> </i></li>
      <li v-if="gitHub"><i class="fa-brands fa-github"> </i></li>
    </ul>
    <ul class="list-titles">
      <li v-if="linkedIn">LinkedIn</li>
      <li v-if="twitter">Twitter</li>
      <li v-if="instagram">Instagram</li>
      <li v-if="facebook">Facebook</li>
      <li v-if="gitHub">gitHub</li>
    </ul>
    <ul class="list-content">
      <li v-if="linkedIn">{{ linkedIn }}</li>
      <!-- YOUR linkedIn USER  -->
      <li v-if="twitter">{{ twitter }}</li>
      <!-- YOUR Twitter USER  -->
      <li v-if="instagram">{{ instagram }}</li>
      <!-- YOUR Instagram USER  -->
      <li v-if="facebook">{{ facebook }}</li>
      <!-- YOUR Facebook USER  -->
      <li v-if="gitHub">{{ gitHub }}</li>
      <!-- YOUR github USER  -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "social-info",
  data() {
    return {
      linkedIn: "",
      twitter: "",
      instagram: "",
      facebook: "",
      gitHub: "",
    };
  },
  mounted() {
    this.emitter.on(
      "toggle-social",
      ({ LinkedIn, Twitter, Instagram, Facebook, Github }) => {
        (this.linkedIn = LinkedIn),
          (this.twitter = Twitter),
          (this.instagram = Instagram),
          (this.facebook = Facebook),
          (this.gitHub = Github);
      }
    );
  },
  updated() {
    this.emitter.on(
      "toggle-social",
      ({ LinkedIn, Twitter, Instagram, Facebook, Github }) => {
        (this.linkedIn = LinkedIn),
          (this.twitter = Twitter),
          (this.instagram = Instagram),
          (this.facebook = Facebook),
          (this.gitHub = Github);
      }
    );
  },
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
svg {
  display: inline;
}
.list-logos {
  float: left;
  text-align: left;
  font-weight: 600;
  width: 10%;
  color: #4a4e51;
  margin-left: -18px;
}
</style>

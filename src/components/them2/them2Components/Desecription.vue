<template>
  <div class="name-wrapper">
    <h1>{{ mytext }} <br />Anderson</h1>
    <!-- YOUR NAME AND LAST NAME  -->
  </div>

  <div class="contact-presentation">
    <!-- YOUR PRESENTATION RESUME  -->
    <p>
      <span class="bold">Lorem</span> ipsum dolor sit amet, consectetur
      adipiscing elit. Vivamus euismod congue nisi, nec consequat quam. In
      consectetur faucibus turpis eget laoreet. Sed nec imperdiet purus.
    </p>
  </div>
  <div class="contact-info clearfix">
    <ul class="list-titles">
      <li>Call</li>
      <li>Mail</li>
      <li>Web</li>
      <li>Home</li>
    </ul>
    <ul class="list-content">
      <li>+34 123 456 789</li>
      <!-- YOUR PHONE NUMBER  -->
      <li>j.anderson@gmail.com</li>
      <!-- YOUR EMAIL -->
      <li><a href="#">janderson.com</a></li>
      <!-- YOUR WEBSITE  -->
      <li>Los Angeles, CA</li>
      <!-- YOUR STATE AND COUNTRY  -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "my-description",
  data() {
    return {
      mytext: "",
    };
  },
  mounted() {
    this.emitter.on("toggle-name", (text) => {
      this.mytext = text;
    });
  },
  updated() {
    this.emitter.on("toggle-name", (text) => {
      this.mytext = text;
    });
  },
};
</script>

<style lang="scss" scoped>
.name-wrapper {
  float: left;
  width: 60%;
  margin-top: -190px;
}
</style>

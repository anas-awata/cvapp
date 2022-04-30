<template>
  <div class="name-wrapper row">
    <h1 class="col-12">{{ Firstname }} <br />{{ Lastname }}</h1>
    <!-- YOUR NAME AND LAST NAME  -->
    <h4 class="col-12">{{ Jobtitle }}</h4>
    <!-- YOUR JOB TITLE  -->
  </div>

  <div class="contact-presentation">
    <!-- YOUR PRESENTATION RESUME  -->
    <p class="bold">
      {{ about }}
    </p>
  </div>
  <div class="contact-info clearfix">
    <ul class="list-logos">
      <li><i class="fa-solid fa-phone"> </i></li>
      <li><i class="fa-solid fa-envelope"> </i></li>
      <li><i class="fa-solid fa-home"> </i></li>
    </ul>
    <ul class="list-titles">
      <li>Call</li>
      <li>Mail</li>
      <li>Home</li>
    </ul>
    <ul class="list-content">
      <li>{{ phone }}</li>
      <!-- YOUR PHONE NUMBER  -->
      <li>{{ email }}</li>
      <!-- YOUR EMAIL -->
      <li>{{ address }}</li>
      <!-- YOUR STATE AND COUNTRY  -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "my-description",
  data() {
    return {
      Firstname: "",
      Lastname: "",
      Jobtitle: "",
      email: "",
      phone: "",
      address: "",
      about: "",
    };
  },
  mounted() {
    this.emitter.on(
      "toggle-personal",
      ({ Fname, Lname, Jtitle, Email, Phone, Address, About }) => {
        this.Firstname = Fname;
        this.Lastname = Lname;
        this.Jobtitle = Jtitle;
        this.email = Email;
        this.phone = Phone;
        this.address = Address;
        this.about = About;
      }
    );
  },
  updated() {
    this.emitter.on(
      "toggle-personal",
      ({ Fname, Lname, Jtitle, Email, Phone, Address, About }) => {
        this.Firstname = Fname;
        this.Lastname = Lname;
        this.Jobtitle = Jtitle;
        this.email = Email;
        this.phone = Phone;
        this.address = Address;
        this.about = About;
      }
    );
  },
};
</script>

<style lang="scss" scoped>
.name-wrapper {
  float: left;
  width: 60%;
  margin-top: -190px;
}
.list-logos {
  float: left;
  text-align: left;
  font-weight: 600;
  width: 10%;
  color: #4a4e51;
  margin-left: -18px;
}
li {
  list-style: none;
}
</style>

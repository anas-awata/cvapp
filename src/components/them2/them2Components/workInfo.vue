<template>
  <div class="container">
    <h3 class="experience-title">EXPERIENCE</h3>

    <div class="experience-wrapper">
      <div class="company-wrapper clearfix">
        <div class="experience-title">{{ Company }}</div>
        <!-- NAME OF THE COMPANY YOUWORK WITH  -->
        <div class="time">{{ From }} - {{ To }}</div>
        <!-- THE TIME YOU WORK WITH THE COMPANY  -->
      </div>

      <div class="job-wrapper clearfix">
        <div class="experience-title">{{ Jobtitle }}</div>
        <!-- JOB TITLE  -->
        <div class="company-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
            elit facilisis, adipiscing leo in, dignissim magna.
          </p>
          <!-- JOB DESCRIPTION  -->
        </div>
      </div>

      <div class="company-wrapper clearfix">
        <div class="experience-title">Company name</div>
        <!-- NAME OF THE COMPANY YOUWORK WITH  -->
        <div class="time">Nov 2010 - Present</div>
        <!-- THE TIME YOU WORK WITH THE COMPANY  -->
      </div>

      <div class="job-wrapper clearfix">
        <div class="experience-title">
          Freelance, Web Designer / Web Developer
        </div>
        <!-- JOB TITLE  -->
        <div class="company-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
            elit facilisis, adipiscing leo in, dignissim magna.
          </p>
          <!-- JOB DESCRIPTION  -->
        </div>
      </div>

      <div class="company-wrapper clearfix">
        <div class="experience-title">Company name</div>
        <!-- NAME OF THE COMPANY YOUWORK WITH  -->
        <div class="time">Nov 2009 - Nov 2010</div>
        <!-- THE TIME YOU WORK WITH THE COMPANY  -->
      </div>

      <div class="job-wrapper clearfix">
        <div class="experience-title">Web Designer</div>
        <!-- JOB TITLE  -->
        <div class="company-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
            elit facilisis, adipiscing leo in, dignissim magna.
          </p>
          <!-- JOB DESCRIPTION  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "work-info",
  data() {
    return {
      Jobtitle: "",
      Company: "",
      Location: "",
      From: "",
      To: "",
    };
  },
  mounted() {
    this.emitter.on("toggle-thework", ({ J, C, L, F, T }) => {
      (this.Jobtitle = J),
        (this.Company = C),
        (this.Location = L),
        (this.From = F),
        (this.To = T);
    });
  },
  updated() {
    this.emitter.on("toggle-thework", ({ J, C, L, F, T }) => {
      (this.Jobtitle = J),
        (this.Company = C),
        (this.Location = L),
        (this.From = F),
        (this.To = T);
    });
  },
};
</script>

<style lang="scss" scoped></style>

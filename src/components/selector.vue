<template>
  <div>
    <input ref="input" v-model="text" @keyup="togglename" />
    <button @click="togglename">update</button>
  </div>
</template>

<script>
export default {
  name: "my-selector",
  data() {
    return {
      text: "anas",
    };
  },
  methods: {
    togglename() {
      this.emitter.emit("toggle-name", this.text);
    },
  },
};
</script>

<style lang="scss" scoped></style>

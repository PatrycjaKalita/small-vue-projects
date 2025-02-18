<template>
  <!-- <button @click="add">+ 2</button> -->
  <button @click="increment">+ 6</button>
  <button @click="increase({ value: 2 })">+ 4</button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    // add() {
    //   this.$store.dispatch("increment");
    // },
    ...mapActions(["increment", "increase"]),
  },
};
</script>

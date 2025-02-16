<template>
  <button @click="add">+ 2</button>
</template>

<script>
export default {
  methods: {
    add() {
      this.$store.dispatch("increment");
    },
  },
};
</script>

<template>
  <p>* 2 =</p>
  <h3>{{ counter }}</h3>
  <p>Here something is more...</p>
</template>

<script>
export default {
  computed: {
    counter() {
      //return this.$store.getters.normalizedCounter;
      return this.$store.getters["numbers/normalizedCounter"];
    },
  },
};
</script>

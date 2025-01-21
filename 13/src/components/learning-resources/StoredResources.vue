<template>
  <ul>
    <learning-resource
      v-for="result in resources"
      :key="result.id"
      :id="result.id"
      :title="result.title"
      :description="result.description"
      :link="result.link"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from "./LearningResource.vue";
export default {
  inject: ["resources"],
  components: {
    LearningResource,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>

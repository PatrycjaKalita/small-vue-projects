<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>

      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>

      <p v-if="isLoading">Loading...</p>

      <p v-else-if="!isLoading && error">{{ error }}</p>

      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored data. Please add something!
      </p>

      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from "./SurveyResult.vue";

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  mounted() {
    this.loadExperiences();
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      // send by deafault
      // method: "GET"

      fetch(
        "https://small-vue-projects-default-rtdb.europe-west1.firebasedatabase.app/surveys.json"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          //console.log(data);

          this.isLoading = false;
          const results = [];

          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }

          this.results = results;
        })
        .catch((error) => {
          console.log(error);

          this.isLoading = false;
          this.error = "Failed to fetch data - try again!";
        });
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

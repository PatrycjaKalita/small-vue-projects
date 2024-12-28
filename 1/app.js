const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "MASTER VUE!",
      courseGoalB: "<h3>Be better developer!</h3>",
      vueLink: "https://vuejs.org/guide/quick-start.html",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();

      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");

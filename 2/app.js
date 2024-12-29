const app = Vue.createApp({
  data() {
    return {
      counter: 7,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    addCounter(number) {
      this.counter = this.counter + number;
    },
    removeCounter(number) {
      this.counter = this.counter - number;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    submitForm() {
      alert("Submitted!");
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");

const app = Vue.createApp({
  data() {
    return {
      counter: 7,
      name: "",
      lastname: "",
      fullnameWatch: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
    // name(value) {
    //   if (value === "") {
    //     this.fullnameWatch = "";
    //   } else {
    //     this.fullnameWatch = value + " " + this.lastname;
    //   }
    // },
    // lastname(value) {
    //   if (value === "") {
    //     this.fullnameWatch = "";
    //   } else {
    //     this.fullnameWatch = this.name + " " + value;
    //   }
    // },
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
    // outputFullname() {
    //   if (this.name === "") {
    //     return "";
    //   } else {
    //     return this.name + " " + "Kalita";
    //   }
    // },
  },
  computed: {
    fullname() {
      if (this.name === "" || this.lastname === "") {
        return "";
      } else {
        return this.name + " " + this.lastname;
      }
    },
  },
});

app.mount("#events");

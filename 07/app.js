const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log("Before created...");
  },
  created() {
    console.log("Component created!");
  },
  beforeMount() {
    console.log("Before mounted...");
  },
  mounted() {
    console.log("Component mounted!");
  },
  beforeUpdate() {
    console.log("Before update...");
  },
  updated() {
    console.log("Component updated!");
  },
  beforeUnmount() {
    console.log("Before unmounted...");
  },
  unmounted() {
    console.log("Component unmounted!");
  },
});

app.mount("#app");

setTimeout(function () {
  app.unmount();
}, 10000);

const secondApp = Vue.createApp({
  template: `
    <p>Hello World my fav meal is {{favoriteMeal}}</p>
  `,
  data() {
    return {
      favoriteMeal: "Salad",
    };
  },
});

secondApp.mount("#second-app");

// JavaScript
// let message = "Hello";
// let longMessage = message + " World";

// console.log(longMessage);

// message = "Hello!!!!";

// console.log(longMessage);

// Proxy
const data = {
  message: "Hello!",
  longMessage: "Hello World!",
};

const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.longMessage = value + " World!";
    }
    target.message = value;
  },
};

const proxy = new Proxy(data, handler);
proxy.message = "Hellooo!!!";

console.log(proxy.longMessage);

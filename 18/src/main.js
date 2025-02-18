import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";
const counterModule = {
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 3;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter * 2; //state.counter

      if (finalCounter < 0) {
        return 0;
      }

      if (finalCounter > 100) {
        return 100;
      }

      return finalCounter;
    },
  },
  actions: {
    increment(context) {
      setTimeout(function () {
        context.commit("increment");
      }, 1000);
    },
    increase(context, payload) {
      // console.log(context);
      context.commit("increase", payload);
    },
  },
};

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
  actions: {
    login(context) {
      context.commit("setAuth", { isAuth: true });
    },
    logout(context) {
      context.commit("setAuth", { isAuth: false });
    },
  },
});

const app = createApp(App);

app.use(store);
app.mount("#app");

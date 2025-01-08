import { createApp } from "vue";
import App from "./App.vue";
import ContactList from "./components/ContactList.vue";
// createApp(App).mount('#app')

const app = createApp(App);

app.component("contact-list", ContactList);

app.mount("#app");

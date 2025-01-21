<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResBtnMode"
      >Stored Resources</base-button
    >
    <base-button @click="setSelectedTab('add-resource')" :mode="adddResBtnMode"
      >Add Resource</base-button
    >
  </base-card>

  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";

export default {
  data() {
    return {
      selectedTab: "stored-resources",
      storedResources: [
        {
          id: "official-guide",
          title: "Oficial Guide",
          description: "The official Vue.js documentation.",
          link: "https://vuejs.org/",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to google.",
          link: "https://www.google.com/",
        },
      ],
    };
  },
  components: {
    StoredResources,
    AddResource,
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
  computed: {
    storedResBtnMode() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },
    adddResBtnMode() {
      return this.selectedTab === "add-resource" ? null : "flat";
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: link,
      };

      this.storedResources.unshift(newResource);
      this.selectedTab = "stored-resources";
    },
    removeResource(id) {
      const index = this.storedResources.findIndex((res) => res.id === id);
      this.storedResources.splice(index, 1);
    },
  },
};
</script>

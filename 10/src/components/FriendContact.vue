<template>
  <li>
    <h2>{{ name }}{{ isFavorite ? " (Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">click</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
    </ul>
    <!-- <button @click="deleteFriend">Delete</button> -->
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ["name", "phone", "email", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  // emits: ["event"],
  emits: {
    event: function (id) {
      if (id) {
        return true;
      } else {
        console.log("ID is missing!");
        return false;
      }
    },
    delete: function (id) {
      if (id) {
        return true;
      } else {
        console.log("ID is missing!");
        return false;
      }
    },
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("event", this.id);
    },
    // deleteFriend(){
    //   this.$emit('delete');
    // }
  },
};
</script>

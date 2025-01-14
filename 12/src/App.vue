<template>
  <div>
    <TheHeader />
    <!-- <the-header></the-header> -->
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <!-- #default can be put here because in his file there is only one slot -->
    <CourseGoals #default="againAnyName">
      <!-- <template #default="againAnyName"> -->
      <h2>{{ againAnyName.anyname }}</h2>
      <p>{{ againAnyName.nextProp }}</p>
      <!-- </template> -->
    </CourseGoals>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoals.vue";

export default {
  components: {
    TheHeader,
    // 'the-header': TheHeader,
    "user-info": UserInfo,
    "badge-list": BadgeList,
    CourseGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Patrycja Kalita",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>

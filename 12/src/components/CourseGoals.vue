<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :anyname="goal" next-prop="..."></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Goal 1", "Goal 2"],
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>

  <div class="container">
    <transition
      name="para"
      @before-enter="beforeEnter"
      @before-leave="beforeLeave"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <p v-if="paraIsVisible">Do you see me?</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>

  <div class="container">
    <transition name="fade" mode="out-in">
      <button @click="showUser" v-if="!usersAreVisible">Show Users</button>
      <button @click="hideUser" v-else>Hide Users</button>
    </transition>
  </div>

  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      usersAreVisible: false,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showUser() {
      this.usersAreVisible = true;
    },
    hideUser() {
      this.usersAreVisible = false;
    },
    beforeEnter(el) {
      console.log("beforeEnter " + el);
    },
    beforeLeave(el) {
      console.log("beforeLeave " + el);
    },
    enter(el) {
      console.log("enter " + el);
    },
    afterEnter(el) {
      console.log("afterEnter " + el);
    },
    leave(el) {
      console.log("leave " + el);
    },
    afterLeave(el) {
      console.log("afterLeave " + el);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  animation: slide-fade 0.3s ease-out forwards;
}

/* First version 
v-enter and v-leave is default class for <transition>*/
/* .v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.v-enter-active {
  transition: all 0.3s ease-out;
} */

/* Second version */
/* .v-enter-active,
.para-enter-active {
  animation: slide-fade 0.3s ease-out;
} */

/* Animation for first click 
 Classes can custom named,
 this classes need to be defined in <transition>*/
.para-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.para-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.para-enter-active {
  transition: all 0.5s ease-out;
}

/* Animation for second click */
.para-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.para-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.para-leave-active {
  transition: all 0.5s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-eave-active {
  transition: opacity 0.3s ease-in;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>

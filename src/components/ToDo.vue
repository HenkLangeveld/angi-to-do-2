<template>
  <li class="c-app__list-item" :class="{ 'is-done': isDone }">
    <label :for="id">{{ toDo }} {{ isDone }}</label>
    <input type="checkbox" :id="id" :checked="isDone" @click="toggleIsDone" />
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    toDo: {
      type: String,
      required: true,
    },
    isDone: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  // data() {
  //   return {
  //     isDone: false,
  //   };
  // },
  methods: {
    toggleIsDone() {
      // this.isDone = !this.isDone;
      this.$emit("toggle-is-done", this.id);
    },
  },
};
// import { defineComponent } from "@vue/composition-api";

// export default defineComponent({
//   data() {
//     friendContact: "read";
//   },
//   setup() {},
// });
</script>

<style lang="scss">
.c-app__list-item {
  color: red;
}

.is-done {
  background-color: lightgreen;
}
</style>

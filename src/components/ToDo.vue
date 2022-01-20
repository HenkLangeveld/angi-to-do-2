<template>
  <li class="c-app__list-item" :class="{ 'is-done': isDone }">
    <label :for="id">{{ toDo }}</label>
    <input type="checkbox" :id="id" :checked="isDone" @click="toggleIsDone" />
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
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
  emits: {
    "toggle-is-done": function (id) {
      if (id) {
        return true;
      } else {
        console.warn("id is missing");
        return false;
      }
    },
  },
  // data() {
  //   return {
  //     isDone: false,
  //   };
  // },
  methods: {
    toggleIsDone() {
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

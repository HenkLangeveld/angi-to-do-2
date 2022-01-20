<template>
  <li class="c-app__list-item" :class="{ 'is-done': isDone }">
    {{ toDo }} <input type="checkbox" @click="toggleIsDone" />
  </li>
</template>

<script>
export default {
  data() {
    return {
      toDo: "Read",
      isDone: false,
    };
  },
  methods: {
    toggleIsDone() {
      this.isDone = !this.isDone;
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

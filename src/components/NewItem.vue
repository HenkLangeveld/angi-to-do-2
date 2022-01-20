<template>
  <form class="c-app__form" @submit.prevent="addToDo">
    <input
      class="c-app__form-input"
      type="text"
      placeholder="Your task..."
      v-model="newToDo"
    />
    <button class="o-button c-app__form-button">Add to-do</button>
  </form>
</template>

<script>
export default {
  emits: {
    "add-item": function (newToDo) {
      if (newToDo) {
        return true;
      } else {
        return false;
      }
    },
  },
  data() {
    return {
      newToDo: "",
    };
  },
  methods: {
    addToDo() {
      this.$emit("add-item", this.newToDo);
      this.newToDo = "";
    },
  },
};
// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//   setup() {

//   },
// })
</script>

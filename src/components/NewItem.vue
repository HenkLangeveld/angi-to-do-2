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

<style lang="scss">
$primary-color: #179ce4;
$text-color--inverted: #ffffff;
$text-color--light: #aeaeae;
$border-color: #dedede;
$breakpoint-1: 600px;

.c-app {
  &__form {
    display: grid;
    grid-template-columns: 1fr auto;
    align-content: center;
    column-gap: 0.7rem;
    margin: 1rem 0 2rem;

    @media (min-width: $breakpoint-1) {
      column-gap: 1.5rem;
      margin: 1rem 0 4rem;
    }

    &-input,
    &-button {
      font-family: inherit;
      font-size: 0.9rem;
    }

    &-input {
      border: 1px solid $border-color;
      border-radius: 4px;
      padding-inline: 1rem;
      transition: border-color 0.5s;

      &::placeholder {
        color: $text-color--light;
      }

      &:hover,
      &:focus {
        border: 2px solid $primary-color;
        outline: none;
      }
    }
  }
}

.o-button {
  background-color: $primary-color;
  border: 1px solid $primary-color;
  border-radius: 4px;
  color: $text-color--inverted;
  padding: 0.875rem 1rem;
  transition: background-color 0.3s, border-color 0.3s;

  @media (min-width: $breakpoint-1) {
    padding: 0.875rem 2.038rem;
  }

  &:hover,
  &:focus {
    background-color: lighten($primary-color, 15%);
    border-color: lighten($primary-color, 15%);
  }
}
</style>

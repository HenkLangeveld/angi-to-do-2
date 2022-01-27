<template>
  <li class="c-app__list-item" :class="{ 'is-done': isDone }">
    <label :for="id">{{ toDo }}</label>
    <input
      type="checkbox"
      class="c-app__list-item__checkbox"
      :id="id"
      :checked="isDone"
      @click="toggleIsDone"
    />
    <button @click="deleteToDo">Delete item</button>
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
    deleteItem: function (id) {
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
    deleteToDo() {
      this.$emit("deleteItem", this.id);
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
$primary-color: #179ce4;
$text-color--light: #aeaeae;
$border-color: #dedede;
$done-color: #8bc241;
$done-color--light: #e2f0cf;

$breakpoint-1: 600px;

.c-app {
  &__list {
    padding: 0;
    margin-top: 0.75rem;
    border: 1px solid $border-color;
    border-radius: 4px;

    li + li {
      border-top: 1px solid $border-color;
    }

    &-item {
      display: grid;
      grid-template-columns: 1fr auto auto;
      align-content: center;
      column-gap: 0.7rem;
      padding-inline: 1rem;
      min-height: 51px;
      align-items: center;
      transition: background-color 0.3s, color 0.3s;

      @media (min-width: $breakpoint-1) {
        column-gap: 1.5rem;
      }

      &--edit {
        font-size: inherit;
        width: 100%;
        min-height: 51px;
        border: 2px solid $primary-color;
        border-radius: 4px;
        padding: 0 1rem;
        color: inherit;
        background-color: inherit;
      }

      &__checkbox {
        cursor: pointer;
        position: relative;
        appearance: none;
        width: 1.5rem;
        height: 1.5rem;
        border: 1px solid $border-color;
        border-radius: 50%;
        transition: border-color 0.3s, background-color 0.3s;

        &:hover {
          border: 2px solid $done-color;
          background-color: $done-color--light;
        }

        &::after {
          content: "\f00c";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          font-family: "Font Awesome 5 Free";
          font-size: 0.95rem;
          font-weight: 900;
          font-style: normal;
          font-variant: normal;
          text-rendering: auto;
          -webkit-font-smoothing: antialiased;
          color: $done-color--light;
          opacity: 0;
          transition: opacity 0.3s;
        }

        &:checked {
          color: $done-color--light;
          background-color: $done-color;

          &::after {
            opacity: 1;
          }
        }
      }
    }
  }
}

.is-done {
  color: $done-color;
  background-color: $done-color--light;
}
</style>

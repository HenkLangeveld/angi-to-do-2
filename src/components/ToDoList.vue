<template>
  <h2 class="c-app__title">New to-do</h2>
  <new-item @add-item="addToDo"></new-item>

  <h2 class="c-app__title">Current to-do's</h2>
  <p class="c-app__has-no-list" v-if="toDos.length === 0">
    No current things to do.
  </p>
  <ul class="c-app__list" v-else>
    <to-do
      v-for="toDo in toDos"
      :key="toDo.id"
      :id="toDo.id"
      :toDo="toDo.value"
      :isDone="toDo.isDone"
      @toggle-is-done="toggleIsDone"
      @deleteItem="deleteItem"
    ></to-do>
  </ul>
</template>

<script>
import ToDo from "./ToDo.vue";
import NewItem from "./NewItem.vue";

export default {
  components: {
    ToDo,
    NewItem,
  },
  data() {
    return {
      id: 3,
      toDos: [
        {
          id: 1,
          value: "Reading about Angi Studio",
          isDone: false,
        },
        {
          id: 2,
          value: "Writing a letter",
          isDone: true,
        },
        {
          id: 3,
          value: "Gathering Code",
          isDone: false,
        },
      ],
    };
  },
  methods: {
    toggleIsDone(id) {
      const identifiedToDo = this.toDos.find((toDo) => toDo.id === id);
      identifiedToDo.isDone = !identifiedToDo.isDone;
    },
    addToDo(item) {
      this.id++;
      this.toDos.push({
        id: this.id,
        value: item,
        isDone: false,
      });
    },
    deleteItem(item) {
      this.toDos = this.toDos.filter((toDo) => toDo.id !== item);
    },
  },
};
</script>

<style lang="scss">
$text-color--light: #aeaeae;
$border-color: #dedede;

.c-app {
  &__title {
    font-size: 1rem;
    font-weight: 600;
    padding-inline: 1rem;
  }

  &__has-no-list {
    margin-top: 0.75rem;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 1rem;
    color: $text-color--light;
  }
}
</style>

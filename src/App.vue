<template>
  <div class="o-wrapper">
    <header class="c-main-header">
      <div class="c-main-header__logo">Logo</div>
      <h1 class="c-main-header__title">Job application</h1>
      <p class="c-main-header__text">
        This to-do list contains the tasks I need to complete so I can apply to
        a job well prepared.
      </p>
    </header>
    <main>
      <h2>New to-do</h2>
      <new-item @add-item="addToDo"></new-item>

      <h2>Current to-do's</h2>
      <ul>
        <to-do
          v-for="toDo in toDos"
          :key="toDo.id"
          :id="toDo.id"
          :toDo="toDo.value"
          :isDone="toDo.isDone"
          @toggle-is-done="toggleIsDone"
        ></to-do>
      </ul>
    </main>
    <footer>
      <h2 class="c-footer__title">Usefull links</h2>
    </footer>
  </div>
  <!-- o-wrapper -->
</template>

<script>
import NewItem from "./components/NewItem.vue";
import ToDo from "./components/ToDo.vue";
export default {
  components: { ToDo, NewItem },
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
  },
};
// import HelloWorld from "./components/HelloWorld.vue";

// export default {
//   name: "App",
//   components: {
//     HelloWorld,
//   },
// };
</script>

<style lang="scss">
$breakpoint-1: 600px;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  .c-main-header {
    &__logo {
      width: 106.3px;
    }

    &__title {
      font-size: 2.3rem;
      font-weight: 600;
      margin-top: 30px;

      @media (min-width: $breakpoint-1) {
        font-size: 3rem;
        margin-top: 68.8px;
      }
    }

    &__text {
      font-weight: 300;
      max-width: 36ch;
      margin-top: 1rem;

      @media (min-width: $breakpoint-1) {
        font-size: 1.5625rem;
        margin-bottom: 30px;
      }
    }
  }

  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}
</style>

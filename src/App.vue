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
      <ul>
        <to-do></to-do>
        <to-do></to-do>
      </ul>
    </main>
    <footer>
      <h2 class="c-footer__title">Usefull links</h2>
    </footer>
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
export default {
  data() {
    return {
      toDos: [
        "Reading about Angi Studio",
        "Writing a letter",
        "Gathering Code",
      ],
    };
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

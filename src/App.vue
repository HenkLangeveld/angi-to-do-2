<template>
  <h1>Job application</h1>
  <p>
    This to-do list contains the tasks I need to complete so I can apply to a
    job well prepared.
  </p>
  <ul>
    <li></li>
  </ul>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

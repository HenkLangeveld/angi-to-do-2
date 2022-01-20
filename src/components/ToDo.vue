<template>
  <li>{{ toDo }} <input type="checkbox" /></li>
</template>

<script>
export default {
  data() {
    return {
      toDo: "Read",
    };
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

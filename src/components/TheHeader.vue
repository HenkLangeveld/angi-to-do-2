<template>
  <header class="c-main-header">
    <div class="c-main-header__logo">Logo</div>
    <h1 class="c-main-header__title">Job application</h1>
    <p class="c-main-header__text">
      This to-do list contains the tasks I need to complete so I can apply to a
      job well prepared.
    </p>
  </header>
</template>

<style lang="scss" scoped>
$breakpoint-1: 600px;

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
</style>

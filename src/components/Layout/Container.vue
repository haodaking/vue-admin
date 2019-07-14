<template>
  <section class="main-container">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style lang="scss">
.main-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin-left: 160px;
  transition: all 0.28s;
}
.sidebar-collapse .main-container {
  margin-left: 64px;
}
</style>

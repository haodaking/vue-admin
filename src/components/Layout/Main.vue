<template>
  <section class="main-wrap">
    <breadcrumb></breadcrumb>
    <div class="main-content">
      <slot />
    </div>
  </section>
</template>

<script>
import Breadcrumb from './Breadcrumb'
export default {
  name: 'Main',
  components: { Breadcrumb }
}
</script>

<style lang="scss">
.main-wrap {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 20px;
}
.main-content {
  position: relative;
  flex: 1;
  background-color: #fff;
}
</style>

<template>
  <section class="main-layout" :class="className">
    <layout-aside />
    <layout-container>
      <!-- 头部 -->
      <layout-header />
      <!-- 主体部分 -->
      <layout-main>
        <router-view />
      </layout-main>
    </layout-container>
  </section>
</template>

<script>
import LayoutAside from './Layout/Aside'
import LayoutContainer from './Layout/Container'
import LayoutHeader from './Layout/Header'
import LayoutMain from './Layout/Main'

export default {
  name: 'Layout',
  components: { LayoutAside, LayoutContainer, LayoutHeader, LayoutMain },
  computed: {
    collapse() {
      return this.$store.state.menuCollapse
    },
    className() {
      return {
        // 'has-sidebar': this.hasSidebar,
        'sidebar-collapse': this.collapse
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main-layout {
  min-height: 100vh;
}
</style>

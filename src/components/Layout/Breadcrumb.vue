<template>
  <div class="main-breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(route, index) in routes" :key="`nav_${route.path}_${index}`">
        <template v-if="routes.length-1 === index">{{route.title}}</template>
        <router-link :to="route.path" v-else>{{route.title}}</router-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumb',
  computed: {
    routes() {
      let matched = this.$route.matched.filter(item => item.meta.title)
      return matched.map(item => {
        return { path: item.path, title: item.meta.title }
      })
    }
  }
}
</script>

<style lang="scss">
.main-breadcrumb {
  margin-bottom: 20px;
}
</style>

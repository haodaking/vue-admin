<template>
  <aside class="main-sidebar">
    <div class="logo"></div>
    <el-menu
      :default-active="defaultActive"
      :collapse="collapse"
      :router="true"
      class="custom-menus"
    >
      <template v-for="menu in menuList">
        <template v-if="menu.children && menu.children.length">
          <el-submenu :index="menu.id" :key="menu.id" popper-class="custom-submenus">
            <template slot="title">
              <i :class="menu.icon"></i>
              <span>{{menu.name}}</span>
            </template>
            <el-menu-item
              v-for="item in menu.children"
              :index="item.path"
              :key="item.id"
            >{{item.name}}</el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="menu.path" :key="menu.id">
            <i :class="menu.icon"></i>
            <span slot="title">{{menu.name}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      defaultActive: '',
      menuList: [
        {
          id: '1',
          name: '关于系统',
          icon: 'el-icon-cpu',
          children: [
            { id: '1-1', name: '系统状态', path: '/system/status' },
            { id: '1-2', name: '系统日志', path: '/system/log' },
            { id: '1-3', name: '全局设置', path: '/system/settings' }
          ]
        },
        {
          id: '2',
          name: '公司信息',
          icon: 'el-icon-info',
          path: '/company'
        },
        {
          id: '3',
          name: '成员管理',
          icon: 'el-icon-user',
          children: [
            { id: '3-1', name: '成员管理', path: '/member' },
            { id: '3-2', name: '角色管理', path: '/member/roles' }
          ]
        }
      ]
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        this.defaultActive = to.path
      }
    }
  },
  computed: {
    collapse() {
      return this.$store.state.menuCollapse
    }
  }
}
</script>

<style lang="scss">
.main-sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 160px;
  background: #fff;
  transition: all 0.28s;
  z-index: 10;
  overflow-y: auto;
  box-shadow: 0px 0px 2px 0px rgba(40, 120, 255, 0.3);

  .el-menu {
    border-right: 0;
    background-color: #fff;
  }
}
.sidebar-collapse .main-sidebar {
  width: 64px;
}
</style>

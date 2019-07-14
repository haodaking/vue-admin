<template>
  <header class="main-header">
    <div class="header-left">
      <div class="menu" @click="toggleMenuCollapse">
        <i class="el-icon-s-unfold" v-if="collapse"></i>
        <i class="el-icon-s-fold" v-else></i>
      </div>
      <h1 class="title">幕童后台管理系统</h1>
    </div>
    <div class="header-right">
      <div class="search">
        <el-input placeholder="搜索你想要的" suffix-icon="el-icon-search" v-model="searchValue"></el-input>
      </div>
      <div class="message">
        <el-badge :value="3" :max="99">
          <i class="el-icon-message-solid"></i>
        </el-badge>
      </div>
      <el-dropdown>
        <div class="user">
          <div class="avatar"></div>
          <div class="name">NickName</div>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      searchValue: ''
    }
  },
  computed: {
    collapse() {
      return this.$store.state.menuCollapse
    }
  },
  methods: {
    toggleMenuCollapse() {
      this.$store.commit('toggleMenuCollapse', !this.collapse)
    }
  }
}
</script>

<style lang="scss">
.main-header {
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 46px;
  background: #fff;
  box-shadow: 0px 0px 2px 0px rgba(40, 120, 255, 0.15);

  .header-left {
    display: flex;
    align-items: center;

    .menu {
      font-size: 18px;
      color: #179bff;
      cursor: pointer;
    }

    .title {
      margin-left: 14px;
      font-size: 14px;
      font-weight: 400;
    }
  }

  .header-right {
    display: flex;
    align-items: center;

    .search {
      width: 350px;

      .el-input__inner {
        height: 35px;
        line-height: 35px;
        background: #f6f7fa;
        border: 0;
      }

      .el-input__icon {
        line-height: 35px;
      }
    }

    .message {
      margin: 0 20px;
      cursor: pointer;

      .el-icon-message-solid {
        font-size: 20px;
        color: #a7abb4;

        &:hover {
          color: #179bff;
        }
      }
    }

    .user {
      display: flex;
      align-items: center;
      cursor: pointer;

      .avatar {
        width: 30px;
        height: 30px;
        background-color: #179bff;
        border-radius: 50%;
      }

      .name {
        margin-left: 10px;
      }
    }
  }
}
</style>

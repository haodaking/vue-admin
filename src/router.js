import Vue from 'vue'
import Router from 'vue-router'

// 账号
import account from './modules/account/router.js'
// 系统
import system from './modules/system/router.js'
// 公司
import company from './modules/company/router.js'
// 成员
import member from './modules/member/router.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/system' },
    ...account,
    ...system,
    ...company,
    ...member
  ]
})

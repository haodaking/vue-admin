export default [
  {
    path: '/login',
    meta: { title: '登录' },
    component: () =>
      import(/* webpackChunkName: "account" */ './components/Login.vue')
  },
  {
    path: '/account',
    component: () =>
      import(/* webpackChunkName: "account" */ '@/components/Layout'),
    children: [
      {
        path: '',
        meta: { title: '个人信息' },
        component: () =>
          import(/* webpackChunkName: "account" */ './components/My.vue')
      }
    ]
  }
]

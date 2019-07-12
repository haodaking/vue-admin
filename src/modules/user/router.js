export default [
  {
    path: '/user',
    meta: { title: '用户管理' },
    component: import(/* webpackChunkName: "user" */ '@/components/Layout'),
    children: [
      { path: '', redirect: '/index' },
      {
        path: '/index',
        component: () =>
          import(/* webpackChunkName: "user" */ './components/Users.vue'),
        meta: { title: '用户管理' }
      },
      {
        path: '/roles',
        component: () =>
          import(/* webpackChunkName: "user" */ './components/Roles.vue'),
        meta: { title: '角色管理' }
      }
    ]
  }
]

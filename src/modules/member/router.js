export default [
  {
    path: '/member',
    meta: { title: '成员管理' },
    component: () =>
      import(/* webpackChunkName: "member" */ '@/components/Layout'),
    children: [
      { path: '', redirect: 'index' },
      {
        path: 'index',
        component: () =>
          import(/* webpackChunkName: "member" */ './components/Member.vue'),
        meta: { title: '成员管理' }
      },
      {
        path: 'roles',
        component: () =>
          import(/* webpackChunkName: "member" */ './components/Roles.vue'),
        meta: { title: '角色管理' }
      }
    ]
  }
]

export default [
  {
    path: '/system',
    meta: { title: '关于系统' },
    component: () =>
      import(/* webpackChunkName: "system" */ '@/components/Layout'),
    children: [
      { path: '', redirect: 'status' },
      {
        path: 'status',
        meta: { title: '系统状态' },
        component: () =>
          import(/* webpackChunkName: "system" */ './components/Status.vue')
      },
      {
        path: 'log',
        meta: { title: '系统日志' },
        component: () =>
          import(/* webpackChunkName: "system" */ './components/Log.vue')
      },
      {
        path: 'settings',
        meta: { title: '全局设置' },
        component: () =>
          import(/* webpackChunkName: "system" */ './components/Settings.vue')
      }
    ]
  }
]

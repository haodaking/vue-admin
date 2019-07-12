export default [
  {
    path: '/company',
    meta: { title: '公司管理' },
    component: () =>
      import(/* webpackChunkName: "company" */ '@/components/Layout'),
    children: [
      {
        path: '',
        component: () =>
          import(
            /* webpackChunkName: "company" */ './components/CompanyList.vue'
          ),
        meta: { title: '公司列表' }
      },
      {
        path: ':id',
        component: () =>
          import(
            /* webpackChunkName: "company" */ './components/CompanyDetail'
          ),
        meta: { title: '查看详情' }
      }
    ]
  }
]

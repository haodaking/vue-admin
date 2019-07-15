import httpRequest from '@/utils/axios'

// 登录
export function login(data) {
  return httpRequest({
    url: '/api/login',
    method: 'post',
    data
  })
}

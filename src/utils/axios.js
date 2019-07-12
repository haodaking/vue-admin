import axios from 'axios'
// import qs from 'qs'
import { Message } from 'element-ui'
// import router from '@/router'
// import store from '../store'

const httpRequest = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 60000,
  headers: { token: 'token' }
})

// 请求拦截
httpRequest.interceptors.request.use(
  function(config) {
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

// 响应拦截
httpRequest.interceptors.response.use(
  function(response) {
    return response.data
  },
  function(error) {
    Message({ type: 'error', message: error })
    return Promise.reject(error)
  }
)

export default httpRequest

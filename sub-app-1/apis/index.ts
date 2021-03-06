import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://dev-api.jt-gmall.com'
})

instance.interceptors.response.use((reply: any) => reply.data)

/**
 * 快速登录
 */
export const ApiGetUserInfo = (token: any) => {
  return instance.post(
    '/member',
    {
      query:
        '{ getUserInfo { nickname avatarUrl gender country province city } }'
    },
    {
      headers: {
        'x-auth-token': token
      }
    }
  )
}

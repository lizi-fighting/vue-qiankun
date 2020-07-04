import store from './store'
import { UserModule } from '@/store/modules/user'

class Shared {
  /**
   * 获取 Token
   */
  public getToken(): string {
    return UserModule.TOKEN || ''
  }

  /**
   * 设置 Token
   */
  public setToken(token: string): void {
    UserModule.SetToken(token)
  }
}

const shared = new Shared()
export default shared

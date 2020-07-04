class Shared {
  /**
   * 获取 Token
   */
  public getToken(): string {
    return localStorage.getItem('token') || ''
  }

  /**
   * 设置 Token
   */
  public setToken(token: string): void {
    localStorage.setItem('token', token)
  }
}

class SharedModule {
  static shared = new Shared()

  static overloadShared(shared: any) {
    SharedModule.shared = shared
  }

  static getShared() {
    return SharedModule.shared
  }
}

export default SharedModule

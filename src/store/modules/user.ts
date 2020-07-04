import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface IUserState {
  token: string
}

@Module({ dynamic: true, store, name: 'user', namespaced: true })
class User extends VuexModule implements IUserState {
  public token = ''

  get TOKEN() {
    return `${this.token}`
  }

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }

  @Action
  public SetToken(token: string) {
    this.SET_TOKEN(token)
  }
}

export const UserModule = getModule(User)

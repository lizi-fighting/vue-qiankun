<template>
  <el-form
    ref="loginForm"
    :model="loginForm"
    label-width="100px"
    class="login-form"
  >
    <el-form-item
      label="用户名"
      prop="username"
    >
      <el-input
        v-model="loginForm.username"
        type="username"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item
      label="密码"
      prop="password"
    >
      <el-input
        v-model="loginForm.password"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="login"
      >
        提交
      </el-button>
      <el-button @click="resetForm('loginForm')">
        重置
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import actions from '@/shared/actions'
import { ApiLoginQuickly } from '../apis'

@Component({
  name: 'Login'
})
export default class Login extends Vue {
  private loginForm: any = {
    username: '',
    password: ''
  }

  mounted() {
    actions.onGlobalStateChange((state, preState) => {
      console.log('主应用观察者：token 改变前的值为 ', preState.token)
      console.log('主应用观察者：token 改变后的值为 ', state.token)
    })
  }

  private async login() {
    const result = await ApiLoginQuickly()
    const { token } = (result.data as any).loginQuickly
    actions.setGlobalState({ token })
    this.$router.push('/')
  }

  private resetForm(formName: string) {
    (this.$refs[formName] as any).resetFields()
  }
}
</script>

<style scoped>
.login-form {
  width: 500px;
}
</style>

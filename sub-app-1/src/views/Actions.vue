<template>
  <div v-if="userInfo">
    <div>
      <span>用户名：</span>
      {{ userInfo.nickname }}
    </div>
    <div>
      <span>性别：</span>
      {{ userInfo.gender ? "男" : "女" }}
    </div>
    <div>
      <span>所在地：</span>
      {{ `${userInfo.country} ${userInfo.province} ${userInfo.city}` }}
    </div>
  </div>
  <h3 v-else>
    请先登录！！
  </h3>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import actions from '@/shared/actions'
import { ApiGetUserInfo } from '@/apis'
import SharedModule from '@/shared'

@Component({
  name: 'Communication'
})

export default class Communication extends Vue {
  private userInfo: any = null

  mounted() {
    const shared = SharedModule.getShared()

    const token = shared.getToken()

    if (token) {
      this.getUserInfo(token)
    }

    // actions.onGlobalStateChange((state: any) => {
    //   const { token } = state
    //
    //   // if (!token) {
    //   //   this.$message({
    //   //     message: '请登录',
    //   //     type: 'error'
    //   //   })
    //   // }
    //   if (token) {
    //     this.getUserInfo(token)
    //   }
    // }, true)
  }

  private async getUserInfo(token: string) {
    const result = await ApiGetUserInfo(token)
    this.userInfo = result.data.getUserInfo
  }
}
</script>

<style scoped>

</style>

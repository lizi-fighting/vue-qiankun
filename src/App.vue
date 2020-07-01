<template>
  <div id="app">
    <!--<router-view />-->
    <router-view v-show="$route.name" />
    <section
      v-show="!$route.name"
      id="frame"
    />
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class App extends Vue {
  menus = [
    {
      key: 'Home',
      title: '主页',
      path: '/'
    }
  ]
}
</script>

<template>
  <div id="main">
    <!--<router-view />-->
    <h3>---------- Main ----------</h3>
    <p>--- Menu ---</p>
    <ul>
      <li>
        <router-link to="/">
          Main-Home
        </router-link>
      </li>
      <li>
        <router-link to="/app1">
          App1-Home
        </router-link>
      </li>
      <li>
        <router-link to="/app1/about">
          App1-About
        </router-link>
      </li>
      <li>
        <router-link to="/app2">
          App2-Home
        </router-link>
      </li>
      <li>
        <router-link to="/app2/about">
          App2-About
        </router-link>
      </li>
    </ul>
    <div>
      <section v-show="$route.name">
        <p>--------- Router View --------</p>
        <router-view />
      </section>
      <section v-show="!$route.name">
        <p>--------- Sub App --------</p>
        <section id="frame" />
      </section>
    </div>
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

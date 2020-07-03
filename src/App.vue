<template>
  <div id="main">
    <h3>---------- Main ----------</h3>
    <div v-show="!$route.meta.withoutLayout">
      <p>--- Menu ---</p>
      <ul>
        <li
          v-for="item in menus"
          :key="item.key"
        >
          <router-link :to="item.path">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </div>
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
      title: 'Home',
      path: '/'
    },
    {
      key: 'App1-Home',
      title: 'App1-Home',
      path: '/app1'
    },
    {
      key: 'App1-About',
      title: 'App1-About',
      path: '/app1/about'
    },
    {
      key: 'App1-Actions',
      title: 'App1-Actions',
      path: '/app1/actions'
    },
    {
      key: 'App2-Home',
      title: 'App2-Home',
      path: '/app2'
    },
    {
      key: 'App2-About',
      title: 'App2-About',
      path: '/app2/about'
    }
  ]
}
</script>

<template>
  <div class="home">
    <H3>SUB-APP-2</H3>
    <P>HOME...</P>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Home'
})

export default class Home extends Vue {}
</script>

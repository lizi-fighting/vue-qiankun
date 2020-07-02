<template>
  <div class="about">
    <H3>SUB-APP-1</H3>
    <P>About...</P>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'About'
})

export default class About extends Vue {}
</script>

<style scoped>

</style>

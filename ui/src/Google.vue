<template>
  <div>
    <h1>Google</h1>
    <div>
      <div>
        <v-btn @click="new_campaign()" color="primary">新建Campaign</v-btn>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    new_campaign() {
      this.$router.push('/google/new_campaign');
    }
  }
}
</script>

<style>
</style>

<template>
  <div>
    <v-layout row wrap>
      <v-flex xs6>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div class="headline">Google搜索广告</div>
            <div>广告展现在Google搜索，以及其他Google合作伙伴搜索引擎。</div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat dark>Listen now</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card color="blue-grey darken-2" class="white--text">
          <v-card-title primary-title>
            <div class="headline">Google合作伙伴展示网站</div>
            <div>例如博客，新闻网站，嵌入Google广告位的网站。</div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat dark>Listen now</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-form>
      <v-text-field
        label="您的网站地址"
        v-model="name"
        required></v-text-field>
    </v-form>
    <v-btn color="primary">确认</v-btn>
  </div>
</template>

<script>

export default {
  data () {
    return {
      name: ''
    }
  }
}
</script>

<style>
</style>

<template>
  <v-app>
    <v-navigation-drawer app fixed :mini-variant="miniVariant"
                         :clipped="clipped" v-model="drawer" >
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i"
                     @click="clickMenu(item.path)">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <router-view></router-view>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: true,
      items: [
        { icon: 'bubble_chart', title: 'Facebook', path: 'facebook' },
        { icon: 'bubble_chart', title: 'Google', path: 'google' }
      ],
      miniVariant: false,
      title: '告海外 -- 海外广告管理平台'
    }
  },
  methods: {
    clickMenu(path) {
      this.$router.push(path);
      console.log('xxxxx');
    }
  }
}
</script>

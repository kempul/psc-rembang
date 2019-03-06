<template>
<div id="app">
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Public Savety Service @ Dinas Kesehatan Kab. Rembang</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item @click="$router.push('/')">
            <md-icon>home</md-icon>
            <span class="md-list-item-text">Home</span>
          </md-list-item>

          <md-list-item @click="$router.push('/peta')">
            <md-icon>my_location</md-icon>
            <span class="md-list-item-text">Peta</span>
          </md-list-item>

          <md-list-item>
            <md-icon>textsms</md-icon>
            <span class="md-list-item-text">Chat</span>
          </md-list-item>

          <md-list-item @click="$router.push('/about')">
            <md-icon>contact_support</md-icon>
            <span class="md-list-item-text">About</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <div>
          <router-view/>
        </div>
      </md-app-content>
    </md-app>
  </div>
</div>
</template>

<script>
  export default {
    name: 'PersistentFull',
    data: () => ({
      menuVisible: false,
    }),
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      }
    }

  }
</script>

<style lang="scss" scoped>
  .md-app {
    height: 100vh;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .leaflet-fake-icon-image-2x {
  background-image: url(../node_modules/leaflet/dist/images/marker-icon-2x.png);
}
.leaflet-fake-icon-shadow {
  background-image: url(../node_modules/leaflet/dist/images/marker-shadow.png);
}
@import "../node_modules/leaflet/dist/leaflet.css";

body {
  margin: 0px;
  font-family: Helvetica, Verdana, sans-serif;
}

#side {
  float:left;
  width:208px;
}

#full_div {
  min-height: 80%;
  position: absolute;
  overflow-x: auto;
  top: 64px;
  right: 0;
  left: 0;
  bottom: 0;
  padding-left: 1px;
  border-left: 1px solid #ccc;
}

</style>

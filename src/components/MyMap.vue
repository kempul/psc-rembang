<template id="my-map">
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="marker"></l-marker>
    </l-map>
  </template>

<script>
  import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

  export default {
    components: {
        LMap,
        LTileLayer,
        LMarker
    },
    el: '#app',
  components: { LMap, LTileLayer, LMarker },
  data() {
    return {
      zoom:13,
      center: L.latLng(47.413220, -1.219482),
      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(47.413220, -1.219482),
    }
  }
}
</script>
<style scoped>
  #mymap {
  height: 500px;
  }
</style>

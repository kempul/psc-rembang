<template>
  <div id="dasar">
    <l-map
      :zoom="zoom"
      :center="center"
      style="height: 100%">
      <l-tile-layer
        :url="url"
        :attribution="attribution"/>


      <l-marker :lat-lng="[-6.7058149, 111.3415]">
        <l-icon
          :icon-anchor="staticAnchor">
          <div class="headline">{{ customText }}</div>
          <img src="../assets/ambulance-5.png">
        </l-icon>
      </l-marker>
      <caller-item></caller-item>

    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LIcon, L } from 'vue2-leaflet';
import CallerItem from './CallerItem'

export default {
  name: 'Icon',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    CallerItem
  },
  data () {
    return {
      zoom: 11,
      center: L.latLng(-6.79, 111.5),
      url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',

      icon: L.icon({
        iconUrl: '../assets/baseball-marker.png',
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      }),
      staticAnchor: [16, 37],
      customText: 'PSC',
      iconSize: 32
    };
  },
  computed: {
    dynamicSize () {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor () {
      return [this.iconSize / 2, this.iconSize * 1.15];
    }
  },
  methods: {
  }
};
</script>

<style>
  .someExtraClass {
    background-color: aqua;
    padding: 1px;
    border: 1px solid #333;
    border-radius: 0 10px 10px 10px;
    box-shadow: 3px 2px 6px rgba(0,0,0,0.2);
    text-align: center;
    width: auto !important;
    height: auto !important;
    margin: 0 !important;
  }

</style>

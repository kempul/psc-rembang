<template>
  <div>
    <l-map
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 100%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker :lat-lng="withPopup">
        <l-popup>
          <div @click="innerClick">
            I am a popup
            <p v-show="showParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi. Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-popup>
      </l-marker>
      <l-marker :lat-lng="[-6.705803,111.3415875]">
        <l-icon
          :icon-anchor="staticAnchor"
          class-name="someExtraClass">
          <div class="headline"> PSC </div>
          <img alt="Vue logo" src="../assets/logo.png">
        </l-icon>
       
      </l-marker>
      
    </l-map>
  </div>
</template>

<script>

import { L, LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';
import 'leaflet.icon.glyph';

export default {
  name: 'Simple',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data () {
    return {
      zoom: 11,
      center: L.latLng(-6.8048134,111.3777416),
      url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      icon: L.icon({
        iconUrl: "static/images/baseball-marker.png",
        iconSize: [32, 32],
        iconAnchor: [16, 37]
      }),
      withTooltip: L.latLng(-6.7058149,111.3393079),
      withPopup: L.latLng(-6.8048134,111.3777416),
      currentZoom: 10,
      currentCenter: L.latLng(-6.8048134,111.3777416),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      }
    };
  },
  methods: {
    zoomUpdate (zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate (center) {
      this.currentCenter = center;
    },
    showLongText () {
      this.showParagraph = !this.showParagraph;
    },
    innerClick () {
      alert('Click!');
    }
  }
};
</script>

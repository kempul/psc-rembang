<template>
    <l-marker :lat-lng="coord">
        <l-icon
          :icon-anchor="staticAnchor">
          <div class="headline"> {{identitas}} </div>
          <img src="../assets/call.png">
        </l-icon>
      </l-marker>
</template>
<script>
import { LMarker, LIcon } from 'vue2-leaflet'
export default {
    name: 'CallerItem',
    data: function(){
        return {
            coord: [-6.7208149, 111.3415],
            identitas: "Caller"
        }
    },
    components: {
        LIcon,
        LMarker
    }
}
</script>


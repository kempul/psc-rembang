<template>
    <div>
        <component
            id="full_div"
            :is="currentView"/>
    </div>
</template>

<script>
import Simple from '../components/Simple';
import Icon from '../components/Icon';
  export default {
    name: 'Peta',
    components: {
      Simple,
      Icon
    },
    data: () => ({
      currentView: 'icon'
    })
  }
</script>

<style lang="scss" scoped>
 
  .leaflet-fake-icon-image-2x {
  background-image: url(/node_modules/leaflet/dist/images/marker-icon-2x.png);
}
.leaflet-fake-icon-shadow {
  background-image: url(/node_modules/leaflet/dist/images/marker-shadow.png);
}
@import "/node_modules/leaflet/dist/leaflet.css";

body {
  margin: 0px;
  font-family: Helvetica, Verdana, sans-serif;
}


#full_div {
  position: absolute;
  overflow-x: auto;
  top: 66px;
  right: 0;
  left: 0;
  bottom: 0;
  padding-left: 1px;
  border-left: 1px solid #ccc;
}

</style>

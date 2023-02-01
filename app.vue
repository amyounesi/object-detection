<template>
  <div>
    <GoogleMap api-key="" style="width: 100%; height: 500px" :center="markers[0]" :zoom="20">

<Marker @click="openInfoWindow(key)"
  :clickable="true" v-for="(marker,key) in markers" :options="{ position: marker }" :key="'m'+key" >
  <InfoWindow :options="{ position: { lat: marker.lat, lng: marker.lng } }">
  <div>
    <h1>Info</h1>
    <div>{{ marker.lat }}</div>
    <div>{{ marker.lng }}</div>
  </div>
</InfoWindow>
</Marker>
</GoogleMap>
<hr>
<div class="flex">
  <template v-for="(marker,key) in markers"  :key="'l'+key">
    <div>
      <h2>Item {{ key + 1 }}</h2>
      <div>{{ marker.lat }}</div>
    <div>{{ marker.lng }}</div>
    </div>
</template>
</div>

  </div>
  
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker,InfoWindow } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker,InfoWindow },
  async setup() {
    const { data: markers } = await useFetch('/api/position')
    function openInfoWindow(key){
      markers[key].popup=true;
    }
    return { markers,openInfoWindow };
  },
});
</script>
<template>
  <div>
    <GoogleMap api-key="" style="width: 100%; height: 500px" :center="{ lat: parseFloat(markers[0].Latitude), lng: parseFloat(markers[0].Longitude) }" :zoom="20">

<Marker @click="openInfoWindow(key)"
  :clickable="true" v-for="(marker,key) in markers" :options="{ position: { lat: parseFloat(marker.Latitude), lng: parseFloat(marker.Longitude) } }" :key="'m'+key" >
  <InfoWindow :options="{ position: { lat: parseFloat(marker.Latitude), lng: parseFloat(marker.Longitude) } }">
  <div>
    <h1>Info</h1>
    <div>{{ marker.Latitude }}</div>
    <div>{{ marker.Longitude }}</div>
  </div>
</InfoWindow>
</Marker>
</GoogleMap>
<hr>
<div class="container mx-auto mt-10">
  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
     
      <div class="mt-5 md:col-span-2 md:mt-0">
        
      
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="bg-white px-4 py-5 sm:p-6">
              <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Add New Location</h3>
          <p class="mt-1 mb-6 text-sm text-gray-600">Add New LocationAdd New LocationAdd New Location</p>
        </div>
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="Category" class="block text-sm font-medium text-gray-700">Category</label>
                  <select v-model="locationData.Category" id="Category" name="Category"  class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    <option value="1">one</option>
                    <option value="2">two</option>                    
                  </select>
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="Condition" class="block text-sm font-medium text-gray-700">Condition</label>
                  <select v-model="locationData.Condition"  id="Condition" name="Condition"  class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    <option value="1">one</option>
                    <option value="2">two</option>                    
                  </select>
                </div>
                <div class="col-span-6 sm:col-span-3">
                  <label for="Longitude" class="block text-sm font-medium text-gray-700">Longitude</label>
                  <input v-model="locationData.Longitude"  type="text" name="Longitude" id="Longitude"  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="Latitude" class="block text-sm font-medium text-gray-700">Latitude</label>
                  <input v-model="locationData.Latitude"  type="text" name="Latitude" id="Latitude"  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
                
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6 flex align-center">
              <button 
              @click="addNewItem"
              :disabled="loading"  class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-2">
                <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
                Add New Item
              </button>
              <button :disabled="loading" type="reset" class="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Reset Form</button>
            </div>
          </div>
      </div>
      <!-- <div class="mt-5 md:col-span-1 md:mt-0">
        
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="bg-white px-4 py-5 sm:p-6">
              <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Location List</h3>
          <p class="mt-1 mb-6 text-sm text-gray-600">Location ListLocation ListLocation ListLocation List</p>
        </div>
        <div class="mt-8">
                      <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                          <li v-for="(marker,key) in markers" :key="key" class="flex py-6">
                            <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img src=""  class="h-full w-full object-cover object-center" />
                            </div>

                            <div class="ml-4 flex flex-1 flex-col">
                              <div>
                                <div class="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a>dsdsdsd</a>
                                  </h3>
                                  <p class="ml-4">34324234</p>
                                </div>
                                <p class="mt-1 text-sm text-gray-500">red</p>
                              </div>
                              <div class="flex flex-1 items-end justify-between text-sm">
                                <p class="text-gray-500">Qty 1</p>

                                <div class="flex">
                                  <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
            </div>
          
          </div>
      </div> -->
    </div>
  </div>
</div>

  </div>
  
</template>
<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker,InfoWindow } from "vue3-google-map";
import { reactive } from 'vue'
const locationData = {
  Category:1,
  Condition:2
};

export default defineComponent({
  components: { GoogleMap, Marker,InfoWindow },
  async setup() {
    let loading=false;
    const { data: markers } = await useFetch('/api/position')
    function openInfoWindow(key){
      this.markers[key].popup=true;
    }
    const addNewItem=(async(e)=>{
      loading=true;
      console.log("ee")
      const { data, pending, error, refresh } =  await useFetch('/api/position',{
        method:'POST',
        body:locationData
});
console.log(data);
markers.value.push(data);
loading=false;
    }); 
    return { markers,openInfoWindow,loading,locationData,addNewItem };
  },
});
</script>
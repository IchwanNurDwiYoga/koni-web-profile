<template>
  <div class="home">
    <h1>Daftar 10 atlet terbaik</h1>
    <div class="container mx-auto">
      <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3  space-y-4 md:space-y-0">
        <div v-for="(atlet, index) in atlet" :key="index"
          class=" w-full px-6 pt-6 pb-2 transform hover:scale-105 transition duration-500 ">
          <router-link :to="{ name: 'atlet.detail', params: { id: atlet.id } }">
            <div
              class="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div
                class="relative m-0 w-2/6 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                {{ atlet.profil.foto }}
                <img
                  :src="atlet.profil.foto !== null ? 'https://dc.koniriau.org/storage/' + atlet.profil.foto : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'"
                  alt="image" class="h-full w-full object-cover" />
              </div>
              <div class="p-6 text-start flex flex-col items-start w-full">
                <h6
                  class="mb-0 block font-sans text-xs font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased ">
                  {{ atlet.cabor.nama }}
                </h6>
                <h4
                  class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {{ atlet.profil.nama }}
                </h4>
                <div class="flex flex-row ">
                  <span class="text-xs pr-2">Emas: {{ atlet.medalCounts.emas > 0 ? atlet.medalCounts.emas : 0 }}</span>
                  <span class="text-xs pr-2">Perak: {{ atlet.medalCounts.perak > 0 ? atlet.medalCounts.perak : 0
                    }}</span>
                  <span class="text-xs pr-2">Perunggu: {{ atlet.medalCounts.perunggu > 0 ? atlet.medalCounts.perunggu :
          0 }}</span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import api from '../api'

onMounted(() => {
  fetchAtlets()
});

const atlet = ref({});
const fetchAtlets = async () => {
  return await api.get('/top-ten-atlet').then((response) => {
    atlet.value = response.data.data
  }).catch((error) => {
    console.log(error);
  })
}
</script>

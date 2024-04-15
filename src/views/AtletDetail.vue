<template>
    <div class="container mx-auto my-5" v-for="(atlet, index) in atlet" :key="index">
        <section
            class="bg-center bg-no-repeat bg-[url('https://dc.koniriau.org/images/bg.jpg')] object-fill bg-gray-100 bg-blend-multiply p-5 rounded-lg w-full h-full">
            <div class="md:flex no-wrap md:-mx-2 ">
                <div class="w-full md:w-3/12 md:mx-2 ">
                    <div class="bg-white bg-opacity-35 p-3 border-t-4 border-sky-400 rounded-xl shadow-xl">
                        <div class="image overflow-hidden">
                            <img :src="atlet.foto !== null ? '/assets/img/profil.png' + atlet.foto : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'"
                                :alt="atlet.nama" class="h-auto w-full mx-auto rounded-lg">
                        </div>
                        <h1 class="text-gray-900 font-bold text-xl leading-8 mt-4 mb-6 my-1">{{ atlet.nama }}
                        </h1>
                        <div class="">
                            <img :src="atlet.foto_cabor !== null && atlet.foto_cabor !== 'https://via.placeholder.com/150' ? 'https://dc.koniriau.org/storage/' + atlet.foto_cabor : 'https://dc.koniriau.org/images/koniriau.ico'"
                                :alt="atlet.foto_cabor" class="h-auto w-full mt-6">
                        </div>
                        <p class="mt-10 font-bold text-sm text-gray-500 hover:text-gray-600 leading-6">
                            {{ atlet.nama_cabor }}
                        </p>
                        <p class="text-start mt-6 font-bold text-sm text-gray-500 hover:text-gray-600 leading-6">
                            Pelatih :
                            <!-- {{ pelatih.profil.nama }} -->
                        </p>
                        <div v-for="(pel, index) in pelatih" :key="index"
                            class="text-start mt-1 text-md text-gray-500 hover:text-gray-600 leading-6">
                            <router-link :to="{ name: 'pelatih.detail', params: { id: pel.id_pelatih } }">
                                - {{ pel.nama }}
                            </router-link>
                        </div>
                        <ul
                            class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-10 divide-y rounded shadow-sm">
                            <li class="flex items-center py-3">
                                <span>Status</span>
                                <span class="ml-auto">
                                    <span v-if="atlet.is_aktif" class="bg-sky-500 py-1 px-2 rounded text-white text-sm">
                                        Aktif
                                    </span>
                                    <span v-else class="bg-red-500 py-1 px-2 rounded text-white text-sm">
                                        Tidak Aktif
                                    </span>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <!-- end profil card -->
                    <div class="my-4"></div>
                </div>
                <!-- sisi kanan -->
                <div class="w-full md:w-9/12 mx-2 h-64">
                    <div class="bg-white bg-opacity-35 p-3 shadow-xl rounded-xl">
                        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span class="text-green-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-text">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                                    <path
                                        d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                                    <path d="M9 12h6" />
                                    <path d="M9 16h6" />
                                </svg>
                            </span>
                            <span class="tracking-wide">Prestasi</span>
                        </div>
                        <div>
                            <table class="m-auto w-full">
                                <thead class="border-b">
                                    <tr class="flex text-start w-full mb-4">
                                        <th class="p-4 w-3/12">Event</th>
                                        <th class="p-4 w-3/12">Cabor</th>
                                        <th class="p-4 w-1/12">Gender</th>
                                        <th class="p-4 w-2/12">Nomor Pertandingan</th>
                                        <th class="p-4 w-1/12">Fase</th>
                                        <th class="p-4 w-1/12">Medali</th>
                                    </tr>
                                </thead>
                                <!-- Remove the nasty inline CSS fixed height on production and replace it with a CSS class — this is just for demonstration purposes! -->
                                <tbody
                                    class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full"
                                    style="height: 30vh;">
                                    <tr class="flex items-center w-full mb-4 border-b"
                                        v-for="(prestasi, index) in prestasi" :key="index">
                                        <td class="p-4 w-3/12">
                                            <div class="flex flex-col text-start">
                                                {{ prestasi.nama_event }}
                                                <span class="text-sm">Jenis: {{ prestasi.jenis }}</span>
                                                <span class="text-sm">Tanggal: {{ dateFormat(prestasi.tanggal_mulai)
                                                    }}</span>
                                            </div>
                                        </td>
                                        <td class="p-4 w-3/12">{{ prestasi.nama_cabor }}</td>
                                        <td class="p-4 w-1/12">{{ prestasi.gender }}</td>
                                        <td class="p-4 w-2/12">{{ prestasi.nomor }}</td>
                                        <td class="p-4 w-1/12">{{ prestasi.fase }}</td>
                                        <td class="p-4 w-1/12">
                                            <div class="" v-if="prestasi.medali == 'EMAS'">
                                                <img src="@/assets/img/gold.png" alt="">
                                                {{ prestasi.medali }}
                                            </div>
                                            <div class="" v-else-if="prestasi.medali == 'PERAK'">
                                                <img src="@/assets/img/silver.png" alt="">
                                                {{ prestasi.medali }}
                                            </div>
                                            <div class="" v-else-if="prestasi.medali == 'PERUNGGU'">
                                                <img src="@/assets/img/bronze.png" alt="">
                                                {{ prestasi.medali }}
                                            </div>
                                            <div class="" v-else>
                                                Tidak Ada Medali
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- grafik -->
                    <div class=" w-full mt-5 rounded-xl shadow-xl bg-white bg-opacity-20 p-5">
                        <div class="col-span-6">
                            <div class="col-span-2 mt-8 xl:mt-0">
                                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                    <span clas="text-green-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="icon icon-tabler icons-tabler-outline icon-tabler-heart-rate-monitor">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path
                                                d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
                                            <path d="M7 20h10" />
                                            <path d="M9 16v4" />
                                            <path d="M15 16v4" />
                                            <path d="M7 10h2l2 3l2 -6l1 3h3" />
                                        </svg>
                                    </span>
                                    <span class="tracking-wide">Grafik Prestasi</span>
                                </div>
                                <!-- <div v-if="monitoring.length == 0"
                                    class="text-gray-400 items-center justify-center text-center">
                                    Belum ada data monitoring
                                </div> -->
                                <div class="text-gray-400">
                                    <div class="w-full bg-yellow-200 bg-opacity-0 rounded-b-lg p-4 md:p-6">
                                        <div id="column-chart"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
</template>
<script setup>
import Api from '@/api';
import { onMounted, ref, } from 'vue';
import { useRoute, } from 'vue-router';
import ApexCharts from 'apexcharts';
// import Pagination from './Pagination.vue'
// import { usePage } from '@inertiajs/vue3'

onMounted(() => {
    isComponentMounted.value = true
    fetchDataAtlet()
    fetchPelatih()
    fetchPrestasi()
    renderCharts()
    fetchMedaliAtlet()
    console.log(monitoring);
})

const route = useRoute()
let atlet = ref({})
let pelatih = ref({})
let prestasi = ref([{}])
let monitoring = ref([])
let isComponentMounted = ref(false)
// const monitoring1 = []


const fetchDataAtlet = async () => {
    return await Api.get('/atlet-detail/' + route.params.id).then((response) => {
        atlet.value = response.data
    })
};

const fetchPelatih = async () => {
    return await Api.get('/pelatih-atlet/' + route.params.id).then((response) => {
        pelatih.value = response.data
    }).catch((error) => {
        console.log(error);
    })
};

const fetchPrestasi = async () => {
    return await Api.get('/prestasi-atlet/' + route.params.id).then((response) => {
        prestasi.value = response.data
    }).catch((error) => {
        console.log(error);
    })
};

const fetchMedaliAtlet = async () => {
    return await Api.get('/medali-atlet/' + route.params.id).then((response) => {
        monitoring.value = response.data
    }).catch((error) => {
        console.log(error);
    })
}

const dateFormat = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(date).toLocaleDateString('id-ID', options)
}
// const totalPages = computed(() => {
//     return Math.ceil(usePage().prestasi / perPage.value)
// })

// const onPageChanged = (page) => {
//     currentPage.value = page
// };

// const perPage = ref(5);
// const currentPage = ref(1);

// const filteredPrestasiData = computed(() => {
//     const data = usePage().prestasi
//     const start = (currentPage.value - 1) * perPage.value
//     const end = currentPage.value * perPage.value
//     return data.slice(start, end)
// })
const renderCharts = () => {
    if (isComponentMounted.value && typeof ApexCharts !== 'undefined') {
        console.log('ok');
        // console.log(monitoring.data);
        const options = {
            colors: ["#1A56DB", "#FDBA8C"],
            series: [
                {
                    name: "Emas",
                    color: "#FFDF00",
                    // data: monitoring[0]
                },
                {
                    name: "Perak",
                    color: "#a3a4a8",
                    // data: monitoring[1]
                },
                {
                    name: "Perunggu",
                    color: "#b2511f",
                    // data: monitoring[2],
                },
            ],
            chart: {
                type: "bar",
                height: "320px",
                fontFamily: "Inter, sans-serif",
                toolbar: {
                    show: false,
                },
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "70%",
                    borderRadiusApplication: "end",
                    borderRadius: 8,
                },
            },
            tooltip: {
                shared: true,
                intersect: false,
                style: {
                    fontFamily: "Inter, sans-serif",
                },
            },
            states: {
                hover: {
                    filter: {
                        type: "darken",
                        value: 1,
                    },
                },
            },
            stroke: {
                show: true,
                width: 0,
                colors: ["transparent"],
            },
            grid: {
                show: false,
                strokeDashArray: 4,
                padding: {
                    left: 2,
                    right: 2,
                    top: -14
                },
            },
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: false,
            },
            xaxis: {
                floating: false,
                labels: {
                    show: true,
                    style: {
                        fontFamily: "Inter, sans-serif",
                        cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
                    }
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            yaxis: {
                show: false,
            },
            fill: {
                opacity: 1,
            },
        }

        if (document.getElementById("column-chart")) {
            const chart = new ApexCharts(document.getElementById("column-chart"), options);
            chart.render();
        }
    } else {
        console.log('mo');
    }
};
</script>
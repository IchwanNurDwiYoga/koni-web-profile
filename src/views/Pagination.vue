<template>
    <ul class="inline-flex items-stretch -space-x-px">
        <li>
            <button
                class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 "
                :class="{
                    'hover:bg-gray-100 hover:text-gray-700': !isInFirstPage,
                    'text-gray-200 disabled-link': isInFirstPage || totalPages == 0,
                }" @click="onClickFirstPage" :disabled="isInFirstPage || totalPages == 0">
                Awal
            </button>
        </li>
        <li>
            <button
                class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 "
                :class="{
                    'hover:bg-gray-100 hover:text-gray-700': !isInFirstPage,
                    'text-gray-200 disabled-link': isInFirstPage || totalPages == 0,
                }" @click="onClickPreviousPage" :disabled="isInFirstPage || totalPages == 0">
                <IconChevronLeft class="w-5 h-5" />
            </button>
        </li>
        <li v-for="page in pages" :key="page.name">
            <button
                class="flex items-center justify-center h-full w-auto text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300"
                :class="{
                    'text-gray-700 font-bold': isPageActive(page.name),
                    'hover:bg-gray-100 hover:text-gray-700': !page.isDisabled,
                }" type="button" @click="onClickPage(page.name)" :disabled="page.isDisabled || totalPages == 0">
                <span class="sr-only">Page</span>
                {{ page.name }}
            </button>
        </li>
        <li>
            <button
                class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 "
                :class="{
                    'hover:bg-gray-100 hover:text-gray-700': !isInLastPage && totalPages != 0,
                    'text-gray-200 disabled-link': isInLastPage || totalPages == 0,
                }" @click="onClickNextPage" :disabled="isInLastPage || totalPages == 0">
                <IconChevronRight class="w-5 h-5" />
            </button>
        </li>
        <li>
            <button
                class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300"
                :class="{
                    'hover:bg-gray-100 hover:text-gray-700': !isInLastPage && totalPages != 0,
                    'text-gray-200 disabled-link': isInLastPage || totalPages == 0,
                }" @click="onClickLastPage" :disabled="isInLastPage || totalPages == 0">
                Akhir
            </button>
        </li>
    </ul>
</template>

<script>
import {
    IconChevronLeft,
    IconChevronRight
} from '@tabler/icons-vue';

export default {
    name: 'PaginationPage',
    props: {
        maxVisibleButtons: {
            type: Number,
            required: false,
            default: 3
        },
        totalPages: {
            type: Number,
            required: true
        },
        perPage: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        }
    },
    computed: {
        startPage() {
            // When on the first page
            if (this.currentPage === 1) {
                return 1;
            }
            // When on the last page
            if (this.currentPage === this.totalPages) {
                const start = this.totalPages - (this.maxVisibleButtons - 1);

                if (start === 0) {
                    return 1;
                } else {
                    return start;
                }
            }
            // When inbetween
            return this.currentPage - 1;
        },
        pages() {
            const range = [];
            for (let i = this.startPage; i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages); i++) {
                range.push({
                    name: i,
                    isDisabled: i === this.currentPage
                });
            }
            return range;
        },
        isInFirstPage() {
            return this.currentPage === 1;
        },
        isInLastPage() {
            return this.currentPage === this.totalPages;
        },
    },
    methods: {
        onClickFirstPage() {
            this.$emit('pageChanged', 1);
        },
        onClickPreviousPage() {
            this.$emit('pageChanged', this.currentPage - 1);
        },
        onClickPage(page) {
            this.$emit('pageChanged', page);
        },
        onClickNextPage() {
            this.$emit('pageChanged', this.currentPage + 1);
        },
        onClickLastPage() {
            this.$emit('pageChanged', this.totalPages);
        },
        isPageActive(page) {
            return this.currentPage === page;
        }
    },
    components: { IconChevronLeft, IconChevronRight }
};
</script>
<style scoped>
.disabled-link {
    pointer-events: none;
    /* Mencegah tautan diklik */
    color: #ccc;
    /* Ganti warna untuk menunjukkan non-interactivity */
    cursor: not-allowed;
    /* Ganti kursor saat hover */
}
</style>

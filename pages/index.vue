<template>
  <div class="h-auto min-h-screen mt-64 w-full relative">
    <div
      class="flex mx-auto w-full items-center justify-center xl:max-w-screen-2xl"
    >
      <div v-if="isLoading">
        <svg
          class="h-6 animate-spin w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        </svg>
      </div>
      <div
        v-else
        class="mx-auto mt-8 max-w-screen-2xl grid px-4 gap-4 grid-cols-2 md:mt-0 md:px-0 md:gap-10 xl:grid-cols-5"
      >
        <ProductCard
          v-for="(product, index) in allProducts"
          :key="index"
          :data="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import allProducts from '~/apollo/queries/allProducts'

export default {
  name: 'IndexPage',
  data: () => ({
    allProducts: [],
    isLoading: false,
  }),
  // apollo: {
  //   allProducts: {
  //     prefetch: true,
  //     query: allProducts,
  //   },
  // },
  mounted() {
    this.getAllProducts()
  },
  methods: {
    async getAllProducts() {
      this.isLoading = true
      try {
        const response = await this.$apollo.query({
          query: allProducts,
        })
        this.allProducts = response.data.allProducts.productFeed
        this.$store.commit('products/setAllProducts', this.allProducts)
      } catch (e) {
        console.error(e)
      }
      this.isLoading = false
    },
  },
}
</script>

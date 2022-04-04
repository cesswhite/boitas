<template>
  <div class="flex flex-col justify-between">
    <button @click="setID(data)">
      <div class="py-4 md:py-14">
        <img
          loading="lazy"
          height="200"
          width="200"
          :src="getUrl"
          alt=""
          class="object-contain h-36 w-full"
        />
      </div>
      <div class="mt-4 text-left">
        <h1 class="font-semibold h-16 text-sm md:text-lg">{{ data.name }}</h1>
        <button
          class="rounded-xl font-normal bg-[#fd4a1f] mt-2 text-sm py-2 px-4 text-gray-50 hidden md:flex"
        >
          Comprar ahora
        </button>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    getUrl() {
      return this.data.images[0].src
    },
  },

  methods: {
    setID(data) {
      this.$store.commit('products/setCurrentId', data.id)
      this.$router.push({ name: 'product-slug', params: { slug: data.slug } })
      localStorage.setItem('currentProduct', JSON.stringify(data))
    },
  },
}
</script>

<template>
  <div class="h-auto">
    <div
      v-if="getCart.length <= 0"
      class="flex h-screen items-center justify-center"
    >
      <div class="mx-auto mt-12 text-center">
        <p class="font-semibold text-2xl text-gray-500">
          No tienes productos en tu carrito
        </p>
        <svg
          class="mx-auto h-8 fill-current text-gray-500 w-8"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
          ></path>
        </svg>
      </div>
    </div>
    <div
      v-else
      class="flex flex-col mx-auto mt-64 max-w-screen-2xl gap-10 md:flex-row"
    >
      <div class="flex flex-col w-full lg:w-1/2">
        <h3 class="font-medium mt-8 text-xl text-gray-700 md:mt-0">
          Productos
        </h3>
        <div class="gap-4 grid-cols-5 hidden items-center justify-end md:grid">
          <span
            class="font-bold text-center col-start-4 col-span-1 inline-block"
            >Cantidad</span
          >
          <span class="font-bold text-center inline-block">Total</span>
        </div>
        <div class="divide-y flex flex-col px-4 md:px-0">
          <div
            v-for="(product, index) in getCart"
            :key="index"
            class="grid py-4 gap-4 grid-cols-5 items-center"
          >
            <img
              :src="product.images[0].src"
              alt=""
              class="rounded-xl object-contain hidden md:flex md:h-40 md:w-40"
            />

            <div class="flex flex-col col-span-5 md:col-span-2">
              <a href="" class="font-semibold text-normal text-gray-900">{{
                product.name
              }}</a>
              <small class="text-gray-400">{{ product.sku }}</small>
              <span class="font-bold mt-2 inline-block">
                ${{ product.price.toFixed(2) }}</span
              >
              <small class="text-gray-400">Por pieza</small>
            </div>
            <div class="flex gap-2 col-span-2">
              <div class="flex mt-4 gap-2">
                <button
                  class="rounded-lg flex bg-gray-50 border-2 border-gray-200 h-16 w-16 items-center justify-center group hover:border-gray-300"
                  @click="quantity--"
                >
                  <svg
                    class="h-8 fill-current text-gray-300 w-8 group-hover:text-gray-800"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <input
                  v-model="quantity"
                  max="10"
                  min="1"
                  type="number"
                  class="rounded-lg flex font-bold bg-gray-50 border-2 border-gray-200 h-16 text-center pl-3 text-3xl text-gray-900 w-20 tabular-nums items-center justify-center"
                />
                <button
                  class="rounded-lg flex bg-gray-50 border-2 border-gray-200 h-16 w-16 items-center justify-center group hover:border-gray-300"
                  @click="quantity++"
                >
                  <svg
                    class="h-8 fill-current text-[#f00] w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="flex items-center justify-center">
                <span class="font-bold mt-2 mr-2 inline-block">
                  ${{ (product.price * quantity).toFixed(2) }}</span
                >
                <svg
                  class="h-6 fill-current text-red-500 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2">
        <div class="flex flex-col mx-auto w-1/2">
          <h2 class="font-medium text-xl text-gray-700">Total del carrito</h2>
          <div class="mt-4">
            <div class="flex items-center justify-between">
              <span class="font-normal inline-block">Subtotal</span>
              <span class="font-normal inline-block"
                >${{ getFinalPrice.toFixed(2) }}</span
              >
            </div>
            <div class="flex items-center justify-between">
              <span class="font-normal inline-block">Total</span>
              <span class="font-bold inline-block"
                >${{ getFinalPrice.toFixed(2) }}</span
              >
            </div>
            <button
              class="rounded-full font-medium bg-[#fd4a1f] mt-4 text-sm w-full py-2 text-gray-50"
            >
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 1,
    }
  },
  computed: {
    getCart() {
      return this.$store.getters['products/getAllCart']
    },

    getFinalPrice() {
      return this.$store.getters['products/getPriceOfCart']
    },
  },
}
</script>

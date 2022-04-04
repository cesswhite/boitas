<template>
  <div class="mt-64 w-full">
    <div class="mx-auto max-w-screen-2xl">
      <div v-if="product" class="flex-col flex gap-8 justify-start md:flex-row">
        <div class="mt-12 w-full pb-4 md:mt-0 md:pb-10 md:w-1/2">
          <img
            :src="product.images[0].src"
            width="200"
            height="600"
            class="object-contain h-56 w-full md:h-[600px]"
            alt=""
          />
        </div>
        <div class="w-full px-4 md:px-0 md:w-1/2">
          <p class="font-medium">
            <span class="font-normal text-gray-900/40 inline-block">SKU:</span>
            <span class="text-gray-900 inline-block">{{ product.sku }}</span>
          </p>
          <div class="mt-6">
            <h1 class="font-bold text-2xl md:text-3xl">{{ product.name }}</h1>
            <div class="flex mt-4 justify-between">
              <h2 class="font-extrabold text-xl mb-2 text-[#fd4a1f]">
                MXN${{ product.price.toFixed(2) }}
              </h2>
              <button class="flex gap-1 justify-center items-center">
                <svg
                  class="h-4 fill-current text-gray-900 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="font-normal text-xs inline-block"
                  >Reportar precio</span
                >
              </button>
            </div>
            <div class="mt-4">
              <h4 class="font-medium text-lg hidden md:inline">Descripcion:</h4>
              <button
                class="border-solid rounded-xl border-2 border-gray-200 text-lg w-full py-2 inline md:hidden"
                @click="isShowDescription = !isShowDescription"
              >
                Ver Descripción
              </button>
              <div
                v-if="isShowDescription"
                class="flex flex-col font-normal mt-4 text-base text-gray-900/60 items-start md:mt-0"
                v-html="product.description"
              ></div>

              <div class="flex mt-4 gap-2">
                <button
                  class="border-solid rounded-lg flex bg-gray-50 border-2 border-gray-200 h-16 w-full items-center justify-center group md:w-16 hover:border-gray-300"
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
                  class="border-solid rounded-lg flex font-bold bg-gray-50 border-2 border-gray-200 h-16 text-center w-full pl-2 text-3xl text-gray-900 tabular-nums items-center justify-center md:w-20"
                />
                <button
                  class="border-solid rounded-lg flex bg-gray-50 border-2 border-gray-200 h-16 w-full items-center justify-center group md:w-16 hover:border-gray-300"
                  @click="quantity++"
                >
                  <svg
                    class="h-8 fill-current text-gray-300 w-8 group-hover:text-gray-800"
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

              <div class="flex mt-4 gap-2">
                <button
                  class="border-solid border rounded-lg border-[#f00] py-2 px-4"
                >
                  Pieza
                </button>
                <button
                  class="border-solid border rounded-lg border-gray-200 py-2 px-4"
                >
                  Caja 24
                </button>
              </div>
              <div class="flex mt-4 gap-10">
                <span class="font-medium text-lg inline-block">Subtotal:</span>
                <span
                  class="font-extrabold text-xl mb-2 text-[#fd4a1f] inline-block"
                >
                  MXN${{ (quantity * product.price).toFixed(2) }}</span
                >
              </div>
              <div class="mt-4 w-full">
                <button
                  class="rounded-xl font-semibold bg-[#fd4a1f] text-lg text-center w-full py-4 text-gray-50"
                  @click="addToCart(product)"
                >
                  Añadir al carrito
                </button>
              </div>
              <div class="mt-4">
                <span class="font-medium text-lg inline-block"
                  >Métodos de pago:</span
                >
                <div class="flex mt-2 gap-1 items-center justify-start">
                  <img
                    width="200"
                    height="50"
                    src="https://boitas.com/_nuxt/img/visa.7e2e09f.svg"
                    alt=""
                    class="object-contain h-8 w-auto"
                  />
                  <img
                    width="200"
                    height="50"
                    src="https://boitas.com/_nuxt/img/mastercard.e69033f.svg"
                    alt=""
                    class="object-contain h-8 w-auto"
                  />
                  <img
                    width="200"
                    height="50"
                    src="https://boitas.com/_nuxt/img/spei.9eab6b1.svg"
                    alt=""
                    class="object-contain h-8 w-auto"
                  />
                </div>
                <span class="font-medium mt-4 text-lg inline-block"
                  >Envio:</span
                >
                <p class="font-normal text-sm text-gray-900/60">
                  Recibirá su pedido 24 horas hábiles posteriores a la
                  confirmación de su compra. Actualmente sólo despachamos en
                  Monterrey.
                  <br />
                  <br />
                  Puede pagar contra entrega
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 mb-12 px-4 md:px-0">
        <h1 class="font-medium text-lg">Productos Opcionales</h1>
        <!-- <pre>{{ getOptionalProducts.length }}</pre> -->
        <div class="grid grid-cols-2 md:grid-cols-5">
          <ProductCard
            v-for="(product, index) in getOptionalProducts"
            :key="index"
            :data="product"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import product from '~/apollo/queries/product'
export default {
  data: () => ({
    quantity: 1,
    price: product.price,
    isShowDescription: true,
  }),
  apollo: {
    product: {
      query: product,
      prefetch: true,
      variables() {
        return { id: this.getId }
      },
    },
  },
  computed: {
    getId() {
      const getCurrentProduct = localStorage.getItem('currentProduct')
      const product = JSON.parse(getCurrentProduct)
      if (product.id) {
        return product.id
      }
      return this.$store.getters['products/getCurrentID'].toString()
    },
    getOptionalProducts() {
      return this.$store.getters['products/getSimilarProducts']
    },
  },
  methods: {
    addToCart(product) {
      this.$store.commit('products/addProductToCart', product)
    },
  },
}
</script>

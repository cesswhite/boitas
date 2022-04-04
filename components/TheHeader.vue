<template>
  <div class="bg-gray-50 text-center w-full px-4 md:px-0">
    <div
      class="border-b flex mx-auto border-gray-200 w-full py-2 justify-between items-center md:py-0 xl:max-w-screen-2xl"
    >
      <div class="flex mr-9">
        <nuxt-link to="/">
          <img
            width="200"
            height="180"
            src="https://res.cloudinary.com/boitas/image/upload/v1643734801/site_logo/logo_rbsdc7.svg"
            alt=""
            class="h-auto max-h-16 w-[400px] md:w-[218px]"
          />
        </nuxt-link>
      </div>
      <div class="flex w-full items-center justify-end md:w-7/12">
        <div class="mr-7 w-full hidden relative md:flex md:w-7/12">
          <input
            type="text"
            placeholder="¿Qué estás buscando?"
            class="rounded-tl-md rounded-bl-md bg-gray-700/10 text-base w-full py-2 px-2 placeholder:text-sm placeholder:font-light placeholder:text-gray-400 focus:outline-none"
          />
          <button
            class="rounded-md flex bg-[#f00] h-[41px] min-w-[41px] w-[41px] items-center justify-center"
          >
            <svg
              class="h-5 fill-current text-gray-50 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div class="flex w-auto gap-5 justify-between">
          <button class="relative" @click="goToCart">
            <div
              class="rounded-full flex font-semibold bg-[#f00] h-4 text-xs -top-3 -right-2 text-gray-50 w-4 items-center justify-center absolute"
            >
              {{ lengthCart.length }}
            </div>

            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzNSAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC4zIiBkPSJNMTcuNSA2LjA4Mjc1TDExLjMyODcgMTIuODUzNkMxMC44MTMgMTMuNDE5MyA5Ljg5MzQ3IDEzLjQ5NTcgOS4yNzQ3NCAxMy4wMjQzQzguNjU2IDEyLjU1MjkgOC41NzI0IDExLjcxMjEgOS4wODgwMiAxMS4xNDY0TDE2LjM3OTcgMy4xNDY0NEMxNi45NjI3IDIuNTA2NzcgMTguMDM3MyAyLjUwNjc3IDE4LjYyMDMgMy4xNDY0NEwyNS45MTIgMTEuMTQ2NEMyNi40Mjc2IDExLjcxMjEgMjYuMzQ0IDEyLjU1MjkgMjUuNzI1MyAxMy4wMjQzQzI1LjEwNjUgMTMuNDk1NyAyNC4xODcgMTMuNDE5MyAyMy42NzE0IDEyLjg1MzZMMTcuNSA2LjA4Mjc1WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjExMTY5IDExLjk5OTlDNi4xNzU2MiAxMS45OTk5IDUuNTU2MzQgMTIuOTcyMSA1Ljk1MTk4IDEzLjgyMDRMMTAuNjMzMSAyMy44NTc3QzExLjI2MzYgMjUuMjA5NyAxMi42MjA0IDI2LjA3NCAxNC4xMTIyIDI2LjA3NEgyMC44ODc3QzIyLjM3OTYgMjYuMDc0IDIzLjczNjQgMjUuMjA5NiAyNC4zNjY5IDIzLjg1NzRMMjkuMDQ3IDEzLjgyMDNDMjkuNDQyNSAxMi45NzIgMjguODIzMiAxMS45OTk5IDI3Ljg4NzIgMTEuOTk5OUg3LjExMTY5Wk0yMC40MTY4IDE5Ljk5OTlDMjAuNDE2OCAyMS40NzI2IDE5LjExMSAyMi42NjY2IDE3LjUwMDEgMjIuNjY2NkMxNS44ODkzIDIyLjY2NjYgMTQuNTgzNSAyMS40NzI2IDE0LjU4MzUgMTkuOTk5OUMxNC41ODM1IDE4LjUyNzEgMTUuODg5MyAxNy4zMzMyIDE3LjUwMDEgMTcuMzMzMkMxOS4xMTEgMTcuMzMzMiAyMC40MTY4IDE4LjUyNzEgMjAuNDE2OCAxOS45OTk5WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="
              alt=""
            />
          </button>
          <button class="flex md:hidden">
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden md:flex">
            <button class="font-bold text-sm text-[#fd4a1f]">
              Iniciar sesión
            </button>
            <button
              class="rounded-xl font-bold bg-[#fd4a1f] text-sm py-2 px-3 text-gray-50"
            >
              Registrarme
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex mt-2 w-full relative md:hidden">
      <input
        type="text"
        placeholder="¿Qué estás buscando?"
        class="rounded-tl-md rounded-bl-md bg-gray-700/10 h-[41px] text-base w-full px-2 placeholder:text-sm placeholder:font-light placeholder:text-gray-400 focus:outline-none"
      />
      <button
        class="rounded-md flex bg-[#f00] h-[41px] min-w-[41px] w-[41px] items-center justify-center"
      >
        <svg
          class="h-6 fill-current text-gray-50 w-6 md:h-5 md:w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    lengthCart() {
      return this.$store.getters['products/getAllCart']
    },
  },
  methods: {
    goToCart() {
      this.$router.push({ name: 'cart' })
    },
  },
}
</script>

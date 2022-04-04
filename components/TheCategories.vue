<template>
  <nav class="mx-auto bg-gray-50 mt-6 w-full xl:max-w-screen-2xl">
    <div class="w-full px-4 overflow-x-scroll md:px-0 md:overflow-auto">
      <ul class="flex mx-auto gap-1 justify-between md:justify-center">
        <li
          v-for="(category, index) in categories"
          :key="index"
          class="rounded-xl"
        >
          <nuxt-link
            :to="category.route"
            class="rounded-xl font-normal text-base w-full p-4 whitespace-nowrap inline-block hover:bg-red-100 hover:text-red-500"
          >
            {{ category.displayName }}
          </nuxt-link>
        </li>
      </ul>
    </div>

    <div class="mt-1 w-full overflow-x-scroll">
      <ul class="flex mx-auto gap-4 justify-between">
        <li
          v-for="(category, index) in subcategories"
          :key="index"
          class="rounded-xl"
        >
          <nuxt-link
            :to="category.route"
            class="border rounded-lg font-medium border-gray-300 text-sm w-full py-1 px-2 whitespace-nowrap inline-block hover:bg-gray-200 hover:text-gray-900"
          >
            {{ category.displayName }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
// import categories from '~/apollo/queries/categories'
export default {
  data: () => ({
    categories: [
      {
        displayName: 'Todos',
        route: '/',
      },
      {
        displayName: 'Abarrotes',
        route: '',
      },
      {
        displayName: 'Bebidas y Jugos',
        route: '',
      },
      {
        displayName: 'Desechables',
        route: '',
      },
      {
        displayName: 'Limpieza',
        route: '',
      },
    ],
    subcategories: [
      {
        displayName: 'Aceites, Vinagres y Aderezos',
        route: '',
      },
      {
        displayName: 'Alimentos Instantaneos',
        route: '',
      },
      {
        displayName: 'Arroz, Frijol y Pastas',
        route: '',
      },
      {
        displayName: 'Azucares',
        route: '',
      },
      {
        displayName: 'Barras, Cereales y Galletas',
        route: '',
      },
      {
        displayName: 'Botanas y Nueces',
        route: '',
      },
      {
        displayName: 'Cafe, Te y Endulzantes',
        route: '',
      },
      {
        displayName: 'Dulces y Postres',
        route: '',
      },
      {
        displayName: 'Especies, con',
        route: '',
      },
      {
        displayName: 'Especies, con',
        route: '',
      },
      {
        displayName: 'Especies, con',
        route: '',
      },
      {
        displayName: 'Especies, con',
        route: '',
      },
    ],
  }),
  // apollo: {
  //   categories: {
  //     prefetch: true,
  //     query: categories,
  //   },
  // },
}
</script>

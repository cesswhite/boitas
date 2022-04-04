<template>
  <div class="mt-4 w-full">
    <div class="bg-[#1f1f26] p-4 md:py-8">
      <div class="mx-auto max-w-screen-2xl grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
          <div v-for="(col, index) in columns" :key="index">
            <h2 class="font-bold text-2xl text-[#fd4a1f]">{{col.title}}</h2>
            <ul  class="mt-8 w-full">
              <li v-for=" (link, _index) in col.links" :key="_index" class="flex font-normal text-base py-1 text-gray-50 items-center">
                <a :href="link.route" target="_blank"  rel="noopener noreferrer nofollow" class="h-full w-full inline-block">{{link.title}}</a>
              </li>
            </ul>
          </div>
      </div>
    </div>
    <div class="flex flex-col bg-[#2a2a35] py-2 px-4 items-center justify-center md:flex-row">
      <p class="font-normal mr-2 text-lg text-gray-50">
        Plataforma de Oportunidades SAPI, de CV 2022. Todos los derechos
        reservados.
        <div class="flex mt-2 gap-2 items-center justify-start md:mt-0">
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
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data:()=>({
    columns:[
      {
        title: 'Comprar',
        links:[
          {
            title: 'Abarrotes',
            route: 'https://boitas.com/categoria/abarrotes'
          },
          {
            title: 'Desechables',
            route: 'https://boitas.com/categoria/desechables'
          },
          {
            title: 'Limpieza',
            route: 'https://boitas.com/categoria/limpieza'
          },
        ]
      },
      {
        title: 'Información',
        links:[
          {
            title: 'Acerca de nosotros',
            route: 'https://boitas.com/pages/acerca-de-nosotros'
          },
          {
            title: '¿Por qué comprar con nosotros?',
            route: 'https://boitas.com/pages/por-que-comprar-con-nosotros'
          },
        ]
      },
      {
        title: 'Servicio al cliente',
        links:[
          {
            title: 'Preguntas Frecuentes',
            route: 'https://boitas.com/pages/preguntas-frecuentes'
          },
          {
            title: 'Pago seguro',
            route: 'https://boitas.com/pages/pago-seguro'
          },
          {
            title: 'Cambios y Devoluciones',
            route: 'https://boitas.com/pages/politica-de-devoluciones'
          },
          {
            title: 'Términos y Condiciones',
            route: 'https://boitas.com/pages/terminos-y-condiciones'
          },
          {
            title: 'Aviso de Privacidad',
            route: 'https://boitas.com/pages/aviso-de-privacidad'
          },
        ]
      },
      {
        title: 'Reclutamiento',
        links:[
          {
            title: 'Enviar CV',
            route: 'https://soyboitas.com/jobs/'
          },
          {
            title: 'Se parte de nuestro equipo',
            route: 'https://soyboitas.com/boirider/'
          },
        ]
      },
      {
        title: 'Contáctanos',
        links:[
          {
            title: 'Correo: hola@boitas@com',
            route: ''
          },
          {
            title: 'Teléfono: (+52) 8184724445',
            route: ''
          },
          {
            title: 'Whatsapp: (+52) 18130815692',
            route: ''
          },
        ]
      },
    ]
  })
}
</script>

<style scoped></style>

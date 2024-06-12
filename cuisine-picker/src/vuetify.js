// src/plugins/vuetify.js
import 'vuetify/styles';
import 'vuetify/styles' // Global CSS has to be imported
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    themes: {
      light: {
        primary: '#6200ea', // Custom primary color
      },
    },
  },
  defaults: {
    VBtn: {
      density: 'default',
      size: 'large',
      rounded: 'lg',
      color: 'primary',
      class: 'mx-2 my-4',
      style: {
        'background-color': 'aquamarine',
        'font-size': '1.5em',
        'padding': '20px'
      },
    }
  },
})

export default vuetify

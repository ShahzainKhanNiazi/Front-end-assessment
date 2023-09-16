/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        textPrimary : '#646464',
        "danger-main" : '#E33E38',
        'background-color': '#EEF2F7',
        focused : '#6590FF'
      },
      boxShadow:{

      }
    },
  },
  purge: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  plugins: [],
}


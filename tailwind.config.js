/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.tsx"],
  theme: {

    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'red': {
        900: '#680001',
        700: '#A80003',
        500: '#ED0007',
        300: '#FF8787',
        100: '#FFD9D9',
      },
      'purple': {
        900: '#440C41',
        700: '#791D73',
        500: '#9E2896',
        300: '#E48CDD',
        100: '#F0DCEE',
      },
      'blue': {
        900: '#003253',
        700: '#005587',
        500: '#007BC0',
        300: '#56B0FF',
        100: '#D1E4FF',
        50: '#E8F0FC',
      },
      'turquoise': {
        900: '#053634',
        700: '#0E5B57',
        500: '#18837E',
        300: '#66B8B2',
        100: '#B6EDE8',
      },
      'green': {
        900: '#00381B',
        700: '#005F32',
        500: '#00884A',
        300: '#5EBD82',
        100: '#B8EFC9',
      },
      'gray': {
        900: '#2E3033',
        700: '#43464A',
        500: '#71767C',
        300: '#A4ABB3',
        200: '#e5e7eb',
        100: '#F3F4F6',
        50: '#F6F6F6',
      },
      'yellow': {
        600: '#EAB308',
        500: '#FFC700',
        300: '#FDE047',
        100: '#FEF08A',
      },

      'orange': {
        900: '#7c2d12',
        700: '#c2410c',
        500: '#f97316',
        100: '#ffedd5',
        50: '#fff7ed'
      },
    },

    'transparent': 'transparent',
    extend: {},
  },
  plugins: [],
}

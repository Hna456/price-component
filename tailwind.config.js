/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cyan: '#2ab2af',
        brightYellow: '#c0df34',
        lightGray: '#e5eff5',
        Light_Grayish_Violet: '#f5f3f7',
        grayishBlue: '#98a6bd'
      },
      fontFamily: {
        'Karla': ['Karla', 'sans-serif']
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/images/hero.jpg')",
      },
    },
    colour:{
      'secondary': '#333333'
    }
  },
  plugins: [],
}


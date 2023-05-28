/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        navbarColor:{
          final:"#001e3c"

        }
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        "port-bg": "#131514",
        "port-dark": "#090B0A",
        "port-yellow": "#FFC86A",
        "port-gray": "#242524",
        "port-light-gray": "#F3F3F3",
        "port-white": "#F9F9F9"
      },
    },
  },
  plugins: [],
}


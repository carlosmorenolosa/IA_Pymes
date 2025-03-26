/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#003d8e",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

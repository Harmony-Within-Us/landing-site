/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./content/**/*.{js,ts,vue,md}",
    "./content/.vitepress/**/*.{js,ts,vue}"
  ],
  theme: {
    extend: {
      colors: {
        trans: {
          blue: '#5bcefa',
          pink: '#f5a9b8',
          white: '#ffffff'
        }
      }
    }
  },
  plugins: []
}
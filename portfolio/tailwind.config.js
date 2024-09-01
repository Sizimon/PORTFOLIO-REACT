/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'MainDark': '#1E201E',
        'SubDark': '#3C3D37',
        'MainLight': '#ECDFCC',
        'SubLight': '#697565'
      },
      fontFamily: {
        Anton: ['Anton', 'sans-serif'],
        WorkSans: ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

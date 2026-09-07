/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fiPurple: {
          light: "#7C3AED",
          DEFAULT: "#4F46E5",
          dark: "#2E0854"
        }
      }
    },
  },
  plugins: [],
}
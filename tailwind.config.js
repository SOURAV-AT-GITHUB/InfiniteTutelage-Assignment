// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust if you have other file types
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust if you have other file types
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideInFromLeft: 'slideInFromLeft 0.5s ease-out',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          'overflow': 'hidden',
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          'display': 'none',
        },
        '.hide-scrollbar': {
          'scrollbar-width': 'none',
        },
      });
    },
  ],
};

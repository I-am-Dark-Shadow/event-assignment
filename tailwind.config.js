/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-moving': 'linear-gradient(270deg, #080309, #1E0C33, #080309)',
      },
      animation: {
        'bg-move': 'moveBG 1s ease infinite',
      },
      keyframes: {
        moveBG: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}
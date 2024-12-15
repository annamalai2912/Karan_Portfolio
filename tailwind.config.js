/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00ff95',
        secondary: '#1a1a1a',
        background: '#0a0a0a',
      },
      animation: {
        gradient: 'gradient 15s ease infinite',
        wave: 'wave 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
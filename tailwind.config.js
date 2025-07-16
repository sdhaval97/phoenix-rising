/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        phoenix: {
          50: '#fef7ee',
          100: '#fdebd3',
          200: '#fbd4a6',
          300: '#f7b26e',
          400: '#f28534',
          500: '#ee6611',
          600: '#df4d07',
          700: '#b83808',
          800: '#922c0e',
          900: '#78260f',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(238, 102, 17, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(238, 102, 17, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
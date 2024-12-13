/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom mint color palette with a more blueish-greenish tint
        mint: {
          // Lighter shade for subtle backgrounds and hover states
          light: '#5eead4',
          // Primary mint color for buttons and important elements
          DEFAULT: '#2dd4bf',
          // Darker shade for hover states and emphasis
          dark: '#14b8a6',
        }
      }
    },
  },
  plugins: [],
};
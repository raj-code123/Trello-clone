/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      backgroundColor: {
        'custom-light': '#F0F0F0', // Define a custom background color for light mode
        'background-dark': 'rgb(51 65 85)',  // Define a custom background color for dark mode
        'list-dark': '#1F2937', // Define a custom list
        'list-blue': '#1976D2'
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'], // Enable dark mode variants
    },
  },
  plugins: [],
}


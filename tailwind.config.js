/** @type {import('tailwindcss').Config} */
module.exports = {
  // This tells the extension where to look for Tailwind classes in your project
  content: [
    "./index.html",         // Specifically for your main file
    "./src/**/*.{html,js}",  // For any files inside a 'src' folder
    "./*.{html,js}"          // For any html/js files in the root folder
  ],
  theme: {
    extend: {
      // You can add custom values here that the extension will then suggest
      colors: {
        'brand-blue': '#1da1f2',
      },
    },
  },
  plugins: [],
}
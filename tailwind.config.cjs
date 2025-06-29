/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      colors: {
        slot: {
          online: '#4CAF50',
          offline: '#FF7043',
          mix: '#1E88E5',
          blocked: '#795548',
          available: '#E0E0E0'
        }
      }
    }
  },
  plugins: []
};

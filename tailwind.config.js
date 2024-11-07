/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
  
      boxShadow :{
        'custom' :'0 0 20px rgba(255,0,0,0.5)',
      }
  
  },
  plugins: [
    require('tailwindcss')
  ],
}
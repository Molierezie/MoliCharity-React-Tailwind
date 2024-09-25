/** @type {import('tailwindcss').Config} */

export default {

  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {

   screens: {

      'sm': { 'min': '375px' },

      'md': { 'min': '760px' },

      'lg': { 'min': '1024px' },

      'xl': { 'min': '1324px' },

      
    },


    fontFamily: {
    
     
     'Cormorant' :  ["Cormorant Garamond", 'serif'],

     'Sofadi' : ["Sofadi One", 'serif'],

     'Edu' : ["Edu AU VIC WA NT Dots", 'serif'],
      
      
    },


    gridTemplateColumns : {

      gridAutoFit : 'repeat(auto-fit , minmax(280px,1fr))',
    },

    gridTemplateRows : {

      'sub' : 'subgrid',
    
    },


    
  }
}
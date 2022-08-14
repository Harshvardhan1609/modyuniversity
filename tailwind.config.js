/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",],
  theme: {
    extend: {
      'animation': {
            'text':'text 5s ease infinite',
        },
        'keyframes': {
            'text': {
                '0%, 100%': {
                   'background-size':'200% 200%',
                    'background-position': 'left center'
                },
                '50%': {
                   'background-size':'200% 200%',
                    'background-position': 'right center'
                }
            },
            'swing':{
              '20%' : {
                transform: 'rotate3d(0,0,1,15deg)',
              },
              '40%':{
                tranform: 'rotate3d(0,0,1,-10deg)',
              },
              '60%':{
                tranform: 'rotate3d(0,0,1,5deg)',
              },
              '80%':{
                tranform: 'rotate3d(0,0,1,-5deg)',
              },
              to:{
                tranform: 'rotate3d(0,0,1,0deg)',
              },
            },
        },
        animation: {
          swing: 'swing 2s ease-out infinite'
        }
    },
  },
  plugins: [],
}
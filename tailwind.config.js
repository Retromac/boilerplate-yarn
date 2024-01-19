/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.js",
    "./src/**/*.vue",
    "./*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      maxWidth: {
        project: "2560px",
        'container': "1920px",
        'container-box': "1536px",
      },
      colors:{    
        body: "#000000",
        anchorLink: "#0086FF",
        primary:{
          600 : "#004D99",
          500 : "#003061",
          400 : "#004D99",
          300 : "#0086FF",
          200 : "#53ADFF",
          150 : "#C3DDFD",
          100 : "#F1F8FF",
        },
        secondary:{
          100: "#F9B916"
        },
        green: {
            600: "#E02424"
        }
      },  
      aspectRatio: {
        '5/2': '5/2',
        '16/10': '16/10',
        '320/512': '320/512',
        '1920/928': '1920/928',
      },
    },

    fontFamily: {
      'sans': ['SoleilRegular', 'Arial', 'sans-serif'],
      'book': ['SoleiBook', 'Arial', 'sans-serif'],
      'bold': ['SoleilBold', 'Arial', 'sans-serif'],
      'light': ['SoleilLight', 'Arial', 'sans-serif'],
    },   
  },
  plugins: [],
}


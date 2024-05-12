/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }

      },
      fontFamily: {
        body: ['Nunito']
      },
    },

    screens: {
      xs: "540px",
      sm: "649px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl":"1536px"
    },

  },
  plugins: [],
}


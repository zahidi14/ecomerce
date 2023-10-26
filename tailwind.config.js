/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      xl: "1440px",
    },
    fontSize: {
      head: ["1.32rem", { fontWeight: "800" }],
      paragraph: ["18px", { fontWeight: "400" }],
      big: ["48px", { fontWeight: "800", lineHeight: "1em" }],
      cart: ["12px"],
    },
    colors: {
      orange: "hsl(26, 100%, 55%)",
      paleOrange: "hsl(25, 100%, 80%)",
      Verydarkblue: "hsl(220, 13%, 13%)",
      Darkgrayishblue: "hsl(219, 9%, 45%)",
      Grayishblue: "hsl(220, 14%, 75%)",
      Lightgrayishblue: "hsl(223, 64%, 98%)",
      White: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      sans: ["Kumbh Sans", "sans-serif"],
    },
    extend: {
      width: {
        discount: "50px",
        butt: "150px",
      },
      height: {
        discount: "30px",
      },
      flexBasis: {
        logo: "20%",
        menu: "50%",
        cart: "30%",
        main: "50%",
      },
    },
  },
  plugins: [],
};

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        30: "0 1 31.5%",
        20: "0 1 20%",
        80: "0 1 85%",
        18: "0 1 18%",
        15: "0 1 15%"
      },
      boxShadow: {
        custom: "0px 0px 15px 8px rgba(0, 0, 0, .2)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

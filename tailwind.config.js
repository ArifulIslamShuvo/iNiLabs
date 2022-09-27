
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#5BB5A2",
            secondary: "#E8F2EE",
            accent: "#F1DFDF",
            caA: "#DFE1F1",
            caB: "#DFEAF1",
            "base-100": "#ffffff",
          },
        },
        "light",
        "cupcake",
      ],
    },
  plugins: [require("daisyui")],
}

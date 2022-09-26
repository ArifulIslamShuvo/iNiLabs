
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
            ca1: "#F1DFDF",
            ca2: "#DFE1F1",
            ca3: "#DFEAF1",
            "base-100": "#ffffff",
          },
        },
        "light",
        "cupcake",
      ],
    },
  plugins: [require("daisyui")],
}

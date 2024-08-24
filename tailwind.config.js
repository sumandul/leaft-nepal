/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mons: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        modalanimation: {
          "0%": { transform: " translateY(-100%)" },
          "100%": {
            transform: " translateY(0%)",
          },
        },
      },
      animation: {
        modalanimation: "modalanimation 0.7s linear ",
      },
      // Add custom theme extensions here if needed
    },
  },
  plugins: [],
};

const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'lime': '#a3e635', // Define sua nova cor
        'custom-green': '#16a34a',
        
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        lexend: ['var(--font-lexend)'],  // Aqui você definiu a fonte Inter
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          primary: "#00000", // Mapear "primary" para o azul desejado
        },
        dark: {
          primary: "#00000", // Outra cor para o modo escuro, se necessário
        },
      },
    }),
  ],
};

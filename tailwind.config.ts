import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../public/imgs/Landing Image 1.png')",
        'places-pattern': "url('../public/imgs/eventBG1.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        gray: '#696969',
        gray2: '#626262',
        blue: '#041562',
        lightBlue: '#51728E',
        lighterBlue: '#2D93EA',
        lighttBlue: '#3045A5',
        lightGray: '#F3F3F3',
        orange: '#FF5403',
        red: '#DA1212',
      }
    },
  },
  plugins: [],
};
export default config;

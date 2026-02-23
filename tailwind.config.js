/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#CCAD8E",
        "secondary-color": "#704c13",
        "heading-color": "#2B2B2B",
        "body-color": "#6B6B6B",
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', "serif"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

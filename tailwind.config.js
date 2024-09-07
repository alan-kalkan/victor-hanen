/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        33: "33rem",
      },
      screens: {
        sm: "576px",
        md: "960px",
        lg: "1440px",
      },
    },
  },
  plugins: [],
};
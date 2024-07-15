/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        buttonBg: "#729005",
        pageBg: "#1b2838",
        badgeBg: "rgba(103, 193, 245, 0.1)",
        cardBg: "#16202d",
        blueText: "rgb(102, 192, 244)",
      },
    },
  },
  plugins: [],
};

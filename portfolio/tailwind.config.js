/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      keyframes:{
        textCycle: {
          '0%': { content:"Freelancer" },
          '50%': { content: 'MERN Stack Developer|' },
          '100%': { content: 'Open Source Contributor' },
        },
        blink: {
          '50%': { opacity: 0 },
        },
      },
      animation: {
        textCycle: "textCycle 8s infinite",
        blink:"blink 0.8s  infinite"
      },
    },
  },
  plugins: [],
}


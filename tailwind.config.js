/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#0c0c0c",
        bgSecondaryColor: "#19191a",
        textColor: "#fff",
        textSecondaryColor: "#ffffffa6",
      },
    },
  },
  plugins: [],
}

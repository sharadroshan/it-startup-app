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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#4ecdc4",
        primaryHover: "#3bb4a0",
      },
      container: {
        center: true, // Centers the container horizontally
        padding: "2rem", // Adds padding to the container
        screens: {
          sm: "100%",
          md: "720px",
          lg: "960px",
          xl: "1200px",
        },
      },
    },
  },
  plugins: [],
};

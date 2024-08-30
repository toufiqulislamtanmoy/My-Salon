import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#A8D5BA',   // Soft Mint Green
        secondary: '#E6E3F1', // Light Lavender
        accent: '#FF6F61',    // Coral Pink
        darkPrimary: '#2C3E50',  // Darker primary for dark mode
        darkSecondary: '#34495E', // Darker secondary for dark mode
        darkAccent: '#E74C3C',    // Darker accent for dark mode
      },

    },
  },
  plugins: [],
};
export default config;

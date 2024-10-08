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
      fontFamily :{ 
        athletic: ["athletic","sans-serif"],
      },
      colors: {
        primary: '#A8D5BA',   // Soft Mint Green
        secondary: '#E6E3F1', // Light Lavender
        accent: '#5D52C2',    // Coral Pink
        darkPrimary: '#2C3E50',  // Darker primary for dark mode
        darkSecondary: '#34495E', // Darker secondary for dark mode
        darkAccent: '#E74C3C',    // Darker accent for dark mode
        textPrimary: '#6B7280',   // Text color for dark mode
      },
      borderRadius: {
        'mid': '10px',
        'large': '17px',
      },

    },
  },
  plugins: [],
};
export default config;

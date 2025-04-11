import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      screens: {
        'laptop': '1180px',
        'wide': '1440px',
        '3xl': '1600px',
        '4k': '1920px',
        '2k': '2560px',
        'mobile': '500px'
      }
    },
  },
  plugins: [],
};
export default config;

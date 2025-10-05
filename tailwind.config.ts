import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          100: "#ffffff",
          300: "#b0c1c1",
          400: "#505050",
          600: "#373737",
          900: "#303030",
        },
        accent: {
          400: "#29c3e5",
          600: "#167a7a",
        },
      },
      fontSize: {
        100: "0.75rem",
        300: "0.875rem",
        400: "1rem",
        500: "1.25rem",
        600: "2.25rem",
        900: "3rem",
      },
      fontWeight: {
        light: "200",
        regular: "300",
        bold: "600",
        black: "900",
      },
      fontFamily: {
        primary: "var(--ff-primary)",
        secondary: "var(--ff-secondary)",
      },
      boxShadow: {
        custom:
          "0.25em 0.25em 0.75em rgba(0, 0, 0, 0.25), 0.125em 0.125em 0.25em rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
} satisfies Config;

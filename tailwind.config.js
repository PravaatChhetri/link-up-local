/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F5F5EA",

          secondary: "#007663",

          accent: "#47473E",

          neutral: "#8B8B82",

          "base-100": "#f5f5f4",

          info: "#009deb",

          success: "#1d8500",

          warning: "#facc15",

          error: "#bd1f3f",
        },
      },
    ],
  },
  plugins: [daisyui],
};

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,md,mdx,json}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#07080A",
          900: "#0B0D10",
          850: "#101318",
          800: "#141A22",
          700: "#1D2430",
          600: "#2A3444"
        },
        ember: {
          500: "#FF4D1A",
          400: "#FF6A3D",
          300: "#FF8A66"
        },
        bone: {
          50: "#F7F7F5",
          100: "#ECECE8",
          200: "#D9D9D2"
        }
      },
      boxShadow: {
        "soft": "0 10px 30px rgba(0,0,0,0.35)",
        "edge": "0 0 0 1px rgba(255,255,255,0.06)"
      },
      letterSpacing: {
        "tightest": "-0.04em"
      }
    },
  },
  plugins: [],
};
export default config;

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
        "input-border-dark": "#795B29",
        "input-border-light": "#C7A96D",
        "input-default": "#010A13",
        "input-dark": "#061019",
        "input-light": "#161F25",
        "input-text-placeholder": "#A09B8C",
        "input-text": "#F0E6D2",
        "cell-dark": "#6B5028",
        "cell-light": "#B89C60",
        "cell-dark-hover": "#8D6C2B",
        "cell-light-hover": "#E4C88F",
        "cell-good": "#0C8346",
        "cell-bad": "#A31621",
        "cell-partial": "#8D6C2B",
        "btn-border-light": "#29BEBC",
        "btn-border-dark": "#106D8D",
        "btn-bg": "#1D252B",
      },
    },
  },
  plugins: [],
};
export default config;

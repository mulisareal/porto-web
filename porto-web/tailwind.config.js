/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#F6F0E2",
        "primary-inverse": "#02132e",
        secondary: "#aec6fd",
        "accent-silver": "#465e8e",
        "accent-gold": "#C9A24B",
        "paper-bg": "#02132e",
        "card-bg": "#0a1b37",
        "sky-tint": "#16315f",
        "on-surface": "#F6F0E2",
        "on-surface-variant": "#d6e3ff",
        "outline-variant": "#465e8e",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      spacing: {
        "notebook-margin": "48px",
        "container-max": "1200px",
        "section-gap": "120px",
        gutter: "24px",
      },
      maxWidth: {
        "container-max": "1200px",
      },
      fontFamily: {
        "body-md": ["Cormorant Garamond", "serif"],
        "display-script": ["Great Vibes", "cursive"],
        "label-caps": ["Mulish", "sans-serif"],
        "headline-lg": ["Playfair Display", "serif"],
        "headline-xl": ["Playfair Display", "serif"],
      },
      fontSize: {
        "body-md": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "display-script": ["48px", { lineHeight: "1.2", letterSpacing: "0.02em", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "1.4", letterSpacing: "0.1em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "headline-xl": ["40px", { lineHeight: "1.2", fontWeight: "700" }],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

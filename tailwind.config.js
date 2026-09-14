/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        muted: "#737373",
        mutedSoft: "#666666",
        line: "#e5e5e5",
        soft: "#f5f5f5",
      },
    },
  },
};

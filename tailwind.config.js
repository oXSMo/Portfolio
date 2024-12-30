/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cursor: {
        fancy:
          "url('https://cdn.custom-cursor.com/db/pointer/32/cs_go_pointer.png')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradiant1":
          "linear-gradient(to bottom left, #adadde 0%, #7a7ad5 100%)",
      },
    },
  },
  plugins: [],
};

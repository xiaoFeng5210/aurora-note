/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{tsx}", "./component/**/*.{tsx}"],
  theme: {
    extend: {},
  },
  plugins: [nativewind()],
}

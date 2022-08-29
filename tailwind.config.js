/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

    },
    colors: {
      'White': 'hsl(0, 0 %, 100 %)',
      'Light-gray': 'hsl(212, 45%, 89%)',
      'Grayish-blue': 'hsl(220, 15 %, 55 %)',
      'Dark-blue': 'hsl(218, 44 %, 22 %)',
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    plugins: [],
  }
}
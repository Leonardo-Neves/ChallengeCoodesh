module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderColor: theme => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        'primary': '#A9B6C2',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      })
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'backgroundModal': '#F7F9FA',
      'blue-dark': '#3F4E5A'
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

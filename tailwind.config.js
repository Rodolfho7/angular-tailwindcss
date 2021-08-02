module.exports = {
  prefix: '',
  purge: {
    enabled: false, // change to true for production
    content: ['./src/**/*.html'],
  },
  darkMode: 'class',
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
};

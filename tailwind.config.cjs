/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{ts,tsx,mdx}',
    './src/_components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx,mdx}',
    './src/theme.config.tsx',
    './node_modules/nk-plus-antd/**/*.js'
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  darkMode: 'class'
}

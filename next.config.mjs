import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.tsx',
  latex: true,
  flexsearch: {
    codeblock: false
  },
  defaultShowCopyCode: true
})

export default withNextra({
  reactStrictMode: true
})

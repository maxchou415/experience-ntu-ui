const config = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm'
  ],
  core: {},
  docs: {
    autodocs: 'tag'
  },
  framework: {
    name: '@storybook/html-vite',
    options: {}
  }
}
export default config

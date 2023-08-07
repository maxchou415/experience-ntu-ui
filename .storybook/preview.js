/** @type { import('@storybook/html').Preview } */

import '../src/base.pcss'

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    designToken: {
      defaultTab: 'Colors'
    }
  }
}

export default preview

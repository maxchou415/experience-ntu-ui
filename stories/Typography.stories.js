import { createTypography } from './Typography'

export default {
  title: 'Components/Typography',
  tags: ['autodocs'],
  render: ({ text, ...args }) => {
    return createTypography({ text, ...args })
  },
  argTypes: {
    text: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'body', 'small']
    }
  }
}

export const Heading1 = {
  args: {
    text: 'Heading 1',
    type: 'h1'
  }
}

export const Heading2 = {
  args: {
    text: 'Heading 2',
    type: 'h2'
  }
}

export const Heading3 = {
  args: {
    text: 'Heading 3',
    type: 'h3'
  }
}

export const Heading4 = {
  args: {
    text: 'Heading 4',
    type: 'h4'
  }
}

export const Body = {
  args: {
    text: 'Body',
    type: 'span'
  }
}

export const Small = {
  args: {
    text: 'Caption',
    type: 'small'
  }
}

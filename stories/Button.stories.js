import { createButton } from './Button'

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: ({ label, ...args }) => {
    return createButton({ label, ...args })
  },
  argTypes: {
    label: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['sm', 'lg']
    },
    type: {
      control: { type: 'select' },
      options: ['outline', 'bezeled', 'filled']
    }
  }
}

export const Large = {
  args: {
    size: 'lg',
    label: 'Button',
    type: 'filled'
  }
}

export const Small = {
  args: {
    size: 'sm',
    label: 'Button',
    type: 'filled'
  }
}

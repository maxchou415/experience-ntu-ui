import { createLabel } from './Label'

export default {
  title: 'Components/Label',
  tags: ['autodocs'],
  render: ({ text, ...args }) => {
    return createLabel({ text, ...args })
  },
  argTypes: {
    text: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['success', 'pending', 'failed', 'netural']
    }
  }
}

export const Success = {
  args: {
    text: 'Success',
    type: 'success'
  }
}

export const Pending = {
  args: {
    text: 'Pending',
    type: 'pending'
  }
}

export const Failed = {
  args: {
    text: 'Failed',
    type: 'failed'
  }
}

export const Natural = {
  args: {
    text: 'Netural',
    type: 'netural'
  }
}

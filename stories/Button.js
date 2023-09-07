import '../src/components/button.pcss'

export const createButton = ({
  filled = true,
  size = 'sm',
  diasbled = false,
  label,
  onClick,
  type
}) => {
  const btn = document.createElement('button')
  btn.type = 'button'
  btn.innerText = label

  btn.disabled = diasbled === true

  btn.className = ['btn', 'btn-default', `btn-${size}`, `btn-${type}`].join(' ')

  return btn
}

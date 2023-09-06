import '../src/components/label.pcss'

export const createLabel = ({ text, type }) => {
  const label = document.createElement('span')
  label.type = 'success'
  label.innerText = text

  label.className = ['label', `label-${type}`].join(' ')

  return label
}

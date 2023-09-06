import '../src/components/typography.pcss'

export const createTypography = ({ text, type }) => {
  const typography = document.createElement(type)
  typography.innerText = text

  return typography
}

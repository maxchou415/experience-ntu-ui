function getColorProperty ({
  properties = ['text', 'bg'],
  prefix,
  propertyValue
}) {
  const textColors = []
  const backgroundColors = []

  properties.forEach(p => {
    if (p.includes('text')) {
      textColors.push(`.${p}-${prefix} { color: ${propertyValue}; }`)
    }
    if (p.includes('bg')) {
      backgroundColors.push(
        `.${p}-${prefix} { background-color: ${propertyValue}; }`
      )
    }
  })

  return [...textColors, ...backgroundColors]
}

module.exports = getColorProperty

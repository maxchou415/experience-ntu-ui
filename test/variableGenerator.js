const postcss = require('postcss')
const should = require('should')

describe('variableGenerator', () => {
  it('should return a valid css', () => {
    const variableGenerator = require('../utils/variableGenerator')

    const variables = variableGenerator({})

    postcss.parse(variables).nodes.length.should.be.above(0)
  })

  it('should save to file', () => {
    const fs = require('fs')
    const variableGenerator = require('../utils/variableGenerator')

    variableGenerator({ toFile: true })

    fs.existsSync('./src/components/variables.pcss').should.be.equal(true)
  })
})

describe('colorVariableGenerator', () => {
  it('should return a valid css', () => {
    const colorVariableGenerator = require('../utils/colorVariableGenerator')

    let variables = colorVariableGenerator({
      properties: ['text', 'bg'],
      prefix: 'fu-100',
      propertyValue: '#000'
    })

    variables = variables.join('\n').replace(/,/g, '\n')

    postcss.parse(variables).nodes.length.should.be.above(0)

    postcss.parse(variables).nodes[0].selector.should.be.equal('text-fu-100:')
    postcss.parse(variables).nodes[0].nodes[0].prop.should.be.equal('color')
    postcss.parse(variables).nodes[0].nodes[0].value.should.be.equal('#000')

    postcss.parse(variables).nodes[1].selector.should.be.equal('bg-fu-100:')
    postcss
      .parse(variables)
      .nodes[1].nodes[0].prop.should.be.equal('background-color')
    postcss.parse(variables).nodes[1].nodes[0].value.should.be.equal('#000')
  })
})

const tokens = require('../src/tokens.json')
const writeToVariableFile = require('./writeToVariableFile')

const getColorProperty = require('./colorVariableGenerator')

function variableGenerator ({ toFile = false }) {
  const variables = []

  Object.keys(tokens).forEach(type => {
    for (const key in tokens[type]) {
      Object.entries(tokens[type][key]).forEach(value => {
        const prefix = `${key}-${value[0]}`
        const propertyValue = value[1].value

        if (execMethod(type, prefix, propertyValue)) {
          variables.push(execMethod(type, prefix, propertyValue))
        }
      })
    }
  })

  if (toFile) {
    return writeToVariableFile(variables.join('\n').replace(/,/g, '\n'))
  }

  return variables.join('\n').replace(/,/g, '\n')
}

const methods = {
  getColorProperty
}

const execMethod = (type, prefix, propertyValue) => {
  const functionName = `get${
    type.charAt(0).toUpperCase() + type.slice(1)
  }Property`

  if (Object.keys(methods).indexOf(functionName) === -1) {
    return
  }

  if (methods[functionName] && typeof methods[functionName] === 'function') {
    return methods[functionName]({ prefix, propertyValue })
  }
}

module.exports = variableGenerator

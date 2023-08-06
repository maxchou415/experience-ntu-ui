const version = require('../package.json').version

function description () {
  return `"Experience NTU UI" is an UI library for NTU students to use in their projects.`
}

function rules () {
  return `
    #1 Rules
    #1.1 You are not allowed to use this project for commercial purposes.
    #1.2 You are not allowed to use this project for any illegal purposes.
    #1.3 You are not allowed to use this project for any immoral purposes.
  `
}

function restrictions () {
  return `
    #2 Restrictions
    #2.1 NTU bodies
      -  If you are an official NTU body, please use it and stating that you are using it in your web page footer.
      -  You are also required to use a hyperlink to link to this project's GitHub page in your footer.
    #2.2 Students
      - If you are a student, feel free to use it in your projects.
  `
}

function footerStatement () {
  return `
    #3 Footer statement
    This project uses Experience NTU UI, which developed by Team Experience NTU.
    #3.1 Statement for Chinese
    這個專案使用了由「Team Experience NTU」開發的 Experience NTU UI。
  `
}

function generate () {
  return `
    Experience NTU UI "v${version}"
    ${description()}
    ${rules()}
    ${restrictions()}
    ${footerStatement()}
  `
}

module.exports = generate

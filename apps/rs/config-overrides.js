const { override } = require("customize-cra")

let config = override((config) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    "shared/src": "shared/lib",
    "shared-two/src": "shared-two/lib",
  }
  return config
})

module.exports = config

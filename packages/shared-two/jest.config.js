const path = require("path")

module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      {},
    "\\.(css|less)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["../../setup-tests.js"],
  transform: {
    //https://github.com/facebook/jest/issues/3845#issuecomment-582511237
    "\\.js$": [
      "babel-jest",
      { configFile: path.resolve(__dirname, "../../.babelrc.js") },
    ],
  },
}

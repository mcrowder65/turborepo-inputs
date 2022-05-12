function rename({ path, folder, filename }) {
  if (filename.includes(`/${folder}`)) {
    const value = path.node.source.value

    if (value.indexOf("src/") === 0) {
      path.node.source.value = `${folder}${value}`
      return
    }
  }
}
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3, // or 2,
        targets: {
          firefox: "64", // or whatever target to choose .
        },
      },
    ],
    "@babel/preset-react",
  ],
  plugins: [
    function myCustomPlugin() {
      return {
        visitor: {
          CallExpression(path) {
            if (path.node.callee.name === "require") {
              if (this.filename.includes("/rs/")) {
                if (path.node.arguments[0].value.indexOf("src/") === 0) {
                  path.node.arguments[0].value = `rs/${path.node.arguments[0].value}`
                  debugger
                }
              }
            }
          },
          ImportDeclaration(path) {
            rename({ path, filename: this.filename, folder: "shared/" })
            rename({ path, filename: this.filename, folder: "shared-two/" })
            rename({ path, filename: this.filename, folder: "rs/" })
            rename({ path, filename: this.filename, folder: "rstwo/" })
          },
        },
      }
    },
    // [
    //   "module-resolver",
    //   {
    //     alias: {
    //       "src/components": "shared/src/components",
    //       src: "rs/src",
    //     },
    //   },
    // ],
  ],
}

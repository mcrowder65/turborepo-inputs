module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins:
    process.env.NODE_ENV !== "test"
      ? [
          [
            "module-resolver",
            {
              alias: {
                "src/functions": "./lib/functions",
              },
            },
          ],
        ]
      : [],
}

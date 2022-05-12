module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins:
    process.env.NODE_ENV !== "test"
      ? [
          [
            "module-resolver",
            {
              alias: {
                "src/hooks": "./lib/hooks",
                "src/components": "./lib/components",
              },
            },
          ],
        ]
      : [],
}

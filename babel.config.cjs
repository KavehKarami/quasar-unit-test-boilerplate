/* eslint-disable */

module.exports = (api) => {
  return {
    presets: [
      [
        "@quasar/babel-preset-app",
        "@vue/cli-plugin-babel/preset",
        "@quasar/babel-preset-app",
        api.caller((caller) => caller && caller.target === "node")
          ? { targets: { node: "current" } }
          : {},
      ],
    ],
  };
};

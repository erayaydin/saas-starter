/** @type {import("eslint").Linter.Config} */
module.exports = {
    ignorePatterns: ["packages/**"],
    extends: ["@saas/eslint-config/library.js"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: true,
    },
};

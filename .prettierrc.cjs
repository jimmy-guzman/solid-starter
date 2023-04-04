module.exports = {
  $schema: 'http://json.schemastore.org/prettierrc',
  semi: false,
  singleQuote: true,
  printWidth: 80,
  jsxSingleQuote: true,
  arrowParens: 'always',
  trailingComma: 'es5',
  quoteProps: 'consistent',
  plugins: [require('prettier-plugin-tailwindcss')],
}

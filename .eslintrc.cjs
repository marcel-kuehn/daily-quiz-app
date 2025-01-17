/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: { 
    /// disabled because Primevue component library violates this rule
    'vue/multi-word-component-names': 0, 
    // disabled because Primevue component library violates this rule
    'vue/no-reserved-component-names': 0,

    'import/no-unresolved': 'error', // Ensure all imports resolve correctly
    'import/named': 'error', // Ensure named imports correspond to a named export in the remote file
    'import/default': 'error', // Ensure a default export is present, if importing default
    'import/namespace': 'error', // Ensure imported namespaces contain valid properties
    'import/no-absolute-path': 'error' // Disallow import of modules using absolute paths
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: ['./tsconfig.json', './tsconfig.app.json', './tsconfig.node.json', './tsconfig.vitest.json'],
      },
    },
  },
}

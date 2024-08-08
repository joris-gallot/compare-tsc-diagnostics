import antfu from '@antfu/eslint-config'

export default antfu(
  {
    files: ['**/*.test.ts'],
    rules: {
      'test/consistent-test-it': ['error', { fn: 'test' }],
    },
  },
)

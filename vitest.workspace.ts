import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  {
    extends: './vitest.config.ts',
    test: {
      name: 'fizz-buzz',
      include: ['src/01-fizz-buzz/**/*.test.js'],
    }
  },
  {
    extends: './vitest.config.ts',
    test: {
      name: 'count-by-x',
      include: ['src/02-count-by-x/**/*.test.js'],
    }
  },
  {
    extends: './vitest.config.ts',
    test: {
      name: 'find-the-vowels',
      include: ['src/03-find-the-vowels/**/*.test.js'],
    }
  },
  {
    extends: './vitest.config.ts',
    test: {
      name: 'turkish-numbers',
      include: ['src/04-turkish-numbers/**/*.test.js'],
    }
  },
  {
    extends: './vitest.config.ts',
    test: {
      name: 'your-order-please',
      include: ['src/05-your-order-please/**/*.test.js'],
    }
  },
])

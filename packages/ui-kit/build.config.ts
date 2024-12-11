import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index'],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
    esbuild: {
      jsx: 'automatic',
    },
  },
  externals: [
    'react',
    'react-dom',
    'tailwindcss',
    '@next-auth-collections/shared',
  ],
})

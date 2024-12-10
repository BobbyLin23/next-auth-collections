import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: [
    {
      builder: "mkdist",
      input: './src',
      pattern: ['**/*']
    },
  ]
})

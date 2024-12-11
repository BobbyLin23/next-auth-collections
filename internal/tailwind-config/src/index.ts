import type { Config } from 'tailwindcss'

import path from 'node:path'
import fs from 'node:fs'

import { addDynamicIconSelectors } from '@iconify/tailwind'
import { getPackagesSync } from '@manypkg/get-packages'
import typographyPlugin from '@tailwindcss/typography'
import animate from 'tailwindcss-animate'

const { packages } = getPackagesSync(process.cwd())

const tailwindPackages: string[] = []

packages.forEach((pkg) => {
  if (fs.existsSync(path.join(pkg.dir, 'tailwind.config.mjs'))) {
    tailwindPackages.push(pkg.dir)
  }
})

export default {
  content: [
    './index.html',
    ...tailwindPackages.map((item) => path.join(item, 'src/**/*.{ts,tsx}')),
  ],
  darkMode: 'class',
  plugins: [animate, typographyPlugin, addDynamicIconSelectors()],
  prefix: '',
  safelist: ['dark'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
} satisfies Config

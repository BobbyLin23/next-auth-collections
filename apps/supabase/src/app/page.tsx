import { Poppins } from 'next/font/google'

import { LoginButton } from '@next-auth-collections/ui-kit'
import { Button } from '@next-auth-collections/ui-kit'
import { cn } from '@next-auth-collections/shared'

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
})

export default function Page() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            'text-6xl font-semibold text-white drop-shadow-md',
            font.className,
          )}
        >
          🔐 Auth
        </h1>
        <p className="text-lg text-white">
          A simple authentication service by Next.js
        </p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  )
}

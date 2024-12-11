import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { Button } from '@next-auth-collections/ui-kit'

export default async function Page() {
  const supabase = await createClient()

  const { data } = await supabase.auth.getSession()

  if (!data.session) {
    return redirect('/auth/sign-in')
  }

  return (
    <div className="h-screen">
      <Button>Click</Button>
    </div>
  )
}

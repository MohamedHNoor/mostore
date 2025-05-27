'use client'

import Image from 'next/image'
import logo from '@/public/images/logo.svg'
import { APP_NAME } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

function NoFoundPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Image
        src={logo}
        alt={`${APP_NAME} logo`}
        width={48}
        height={48}
        priority={true}
      />
      <div className='p-6 rounded-lg shadow-md w-1/3 text-center'>
        <h1 className='text-3xl font-bold mb-4'>Not Found</h1>
        <p className='text-destructive'>Could not find the requested page.</p>
        <Link
          href={'/'}
          className={`${buttonVariants({ variant: 'outline' })} mt-4 ml-2`}
        >
          Back To Home
        </Link>
      </div>
    </div>
  )
}

export default NoFoundPage

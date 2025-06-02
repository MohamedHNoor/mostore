'use client'

import Image from 'next/image'
import logo from '@/public/images/logo.svg'
import { APP_NAME } from '@/lib/constants'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'

function NotFound() {
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
        <Button
          variant='outline'
          className='mt-4 ml-2'
          onClick={() => (window.location.href = '/')}
        >
          Back to home
        </Button>
      </div>
    </div>
  )
}

export default NotFound

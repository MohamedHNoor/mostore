'use client'
import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0)
  return (
    <div className='space-y-4'>
      <Image
        src={images[current]}
        alt='Product image'
        width={1000}
        height={1000}
        className='min-h-[300px] object-cover object-center'
      />
      <div className='flex'>
        {images.map((image, index) => (
          <div
            className={cn(
              'border mr-2 cursor-pointer hover:scale-105 duration-300',
              current === index && 'border-primary'
            )}
            key={image}
            onClick={() => setCurrent(index)}
          >
            <Image src={image} alt='Image' width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImages

'use server'
import { LATEST_PRODUCTS_LIMIT } from '../constants'
import prisma from '@/db/prisma'
import { convertToPlainObject } from '../utils'

// get latest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: {
      createdAt: 'desc',
    },
  })

  return convertToPlainObject(data)
}

// get single product by it's slug
export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: {
      slug: slug,
    },
  })
}

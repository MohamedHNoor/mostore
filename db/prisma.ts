import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'
import { neonConfig } from '@neondatabase/serverless'
import ws from 'ws'

neonConfig.webSocketConstructor = ws
neonConfig.poolQueryViaFetch = true

const connectionString = `${process.env.DATABASE_URL}`
const adapter = new PrismaNeon({ connectionString })

// Define the extended Prisma client
const extendedPrisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        compute(product) {
          return product.price.toString()
        },
      },
      rating: {
        compute(product) {
          return product.rating.toString()
        },
      },
    },
  },
})

// 👇 Correctly infer the type of the extended Prisma client
type ExtendedPrismaClient = typeof extendedPrisma

declare global {
  var prisma: ExtendedPrismaClient | undefined
}

const prisma: ExtendedPrismaClient = global.prisma ?? extendedPrisma

if (process.env.NODE_ENV === 'development') global.prisma = prisma

export default prisma

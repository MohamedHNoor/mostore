import { z } from 'zod'
import { insertProduct } from '@/lib/validators'

export type Product = z.infer<typeof insertProduct> & {
  id: string
  rating: string
  numReviews: number
  createdAt: Date
}

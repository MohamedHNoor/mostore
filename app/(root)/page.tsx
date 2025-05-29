import { type Metadata } from 'next'
import ProductList from '@/components/shared/product/product-list'
import { getLatestProducts } from '@/lib/actions/product.action'

export const metadata: Metadata = {
  title: 'Home',
}

async function HomePage() {
  const latestProducts = await getLatestProducts()
  return (
    <>
      <ProductList data={latestProducts} title='Newest Arrivals' limit={4} />
    </>
  )
}

export default HomePage

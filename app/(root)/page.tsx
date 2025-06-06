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
      <ProductList
        title='Newest Arrivals'
        data={latestProducts.map((product) => ({
          ...product,
          price: product.price.toString(),
          rating: product.rating.toString(),
        }))}
        limit={Number(4)}
      />
    </>
  )
}

export default HomePage

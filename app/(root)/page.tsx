import { type Metadata } from 'next'
import ProductList from '@/components/shared/product/product-list'
import sampleData from '@/db/sample-data'

export const metadata: Metadata = {
  title: 'Home',
}

function HomePage() {
  return (
    <>
      <ProductList
        data={sampleData.products}
        title='Newest Arrivals'
        limit={4}
      />
    </>
  )
}

export default HomePage

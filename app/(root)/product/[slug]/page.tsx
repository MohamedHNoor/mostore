import ProductPrice from '@/components/shared/product/product-price'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getProductBySlug } from '@/lib/actions/product.action'
import NotFound from '@/app/not-found'
import ProductImages from '@/components/shared/product/product-images'

async function ProductDetailPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params

  const product = await getProductBySlug(slug)

  if (!product) return <NotFound />

  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-5'>
        {/* Image Column */}
        <div className='col-span-2'>
          <ProductImages images={product.images} />
        </div>

        {/* Details Column */}
        <div className='col-span-2 p-5'>
          <div className='flex flex-col gap-6'>
            <p>
              {product.brand} {product.category}
            </p>
            <h1 className='h3-bold'>{product.name}</h1>
            <p>
              {Number(product.rating)} of {product.numReviews} Reviews
            </p>
            <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
              <ProductPrice
                value={Number(product.price)}
                className='w-24 rounded-full bg-yellow-100 text-primary px-5 py-2'
              />
            </div>
          </div>
          <div className='mt-10'>
            <p>Description:</p>
            <p>{product.description}</p>
          </div>
        </div>
        {/* Action Column */}
        <div>
          <Card>
            <CardContent className='p-4'>
              <div className='mb-2 flex justify-between'>
                <div>Price</div>
                <div>
                  <ProductPrice value={Number(product.price)} />
                </div>
              </div>
              <div className='mb-2 flex justify-between'>
                <div>Status</div>
                {product.stock > 0 ? (
                  <Badge variant='outline'>In stock</Badge>
                ) : (
                  <Badge variant='destructive'>Unavailable</Badge>
                )}
              </div>
              {product.stock > 0 && (
                <div className=' flex-center'>
                  <Button className='w-full'>Add to cart</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ProductDetailPage

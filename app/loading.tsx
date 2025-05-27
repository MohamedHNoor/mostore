import Image from 'next/image'
import loading from '@/public/loader.gif'

function LoadingPage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Image src={loading} width={150} height={150} alt='Loading...' />
    </div>
  )
}

export default LoadingPage

import { CartComponent } from './components/CartComponent'
import { CartProducts } from './components/CartProducts'
import { ProductComponent } from './components/ProductComponent'

function App() {

  return (
    <div className='bg-red-500 text-white'>
      <ProductComponent />
      <CartProducts/>
      <CartComponent />
    </div>
  )
}

export default App

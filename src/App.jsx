import { Guitar, Header } from './components';
import { useCart } from './hooks/useCart';

function App() {
  const {
    data,
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    isEmpty,
    calculateCartTotal,
  } = useCart();

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        calculateCartTotal={calculateCartTotal}
      />
      <main className='container-xl mt-5'>
        <h2 className='text-center fs-1 fw-bold text-uppercase'>Nuestra Colección</h2>
        <div className='row mt-5'>
          {/* Guitars */}
          {data.map(guitar => (
            <Guitar key={guitar.id} guitar={guitar} addToCart={addToCart} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;

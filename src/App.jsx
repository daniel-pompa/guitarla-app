import { useEffect, useState } from 'react';
import { Guitar, Header } from './components';
import { guitarData } from './data/data';

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  /**
   * Adds an item to the shopping cart.
   * If the item already exists in the cart, it increments the quantity of that item.
   * If the item is not in the cart, it adds it to the cart with an initial quantity of 1.
   *
   * @param {Object} item - The item to add to the cart.
   * @param {number} item.id - The unique identifier for the item.
   * @param {number} [item.quantity] - The quantity of the item.
   *
   * @returns {void}
   */
  const addToCart = item => {
    const itemInCart = cart.findIndex(cartItem => cartItem.id === item.id);

    if (itemInCart >= 0) {
      const updatedCart = [...cart];
      updatedCart[itemInCart].quantity++;
      setCart(updatedCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  };

  /**
   * Removes an item from the shopping cart by its ID.
   *
   * This function filters out the item with the specified ID from the current cart and updates the cart state with the remaining items.
   *
   * @param {number|string} id - The ID of the item to be removed from the cart.
   * @returns {void} This function does not return a value.
   */
  const removeFromCart = id => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  useEffect(() => {
    setData(guitarData);
  }, []);

  return (
    <>
      <Header cart={cart} removeFromCart={removeFromCart} />
      <main className='container-xl mt-5'>
        <h2 className='text-center fs-1 fw-bold text-uppercase'>Nuestra Colección</h2>
        <div className='row mt-5'>
          {/* Guitars */}
          {data.map(guitar => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              setCart={setCart}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;

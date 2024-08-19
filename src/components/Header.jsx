import PropTypes from 'prop-types';
import { useState } from 'react';
import { PaymentForm } from './PaymentForm';

export const Header = ({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  isEmpty,
  calculateCartTotal,
}) => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handlePurchaseClick = () => {
    setShowPaymentForm(true);
  };

  const handleCloseForm = () => {
    setShowPaymentForm(false);
  };

  return (
    <header className='py-5 header'>
      <div className='container-xl'>
        <div className='row justify-content-center justify-content-md-between align-items-center'>
          <div className='col-8 col-md-3'>
            <a href='index.html' className='img-fluid'>
              <img src='/logo.svg' alt='Logo GuitarLA' />
            </a>
          </div>
          {/* Shopping Cart */}
          <div className='col-md-6 a mt-5 d-flex align-items-start justify-content-end shopping-cart-container'>
            <div className='cart position-relative'>
              <img
                className='img-fluid shopping-cart-image'
                src='/cart.png'
                alt='shopping-cart image'
              />
              <div
                id='cart'
                className='bg-white p-3 rounded shadow position-absolute end-0'
              >
                {/* Cart Items List Empty Message */}
                {isEmpty ? (
                  <div className='text-center fw-bold'>
                    <p>Tu carrito está vacío</p>
                    <p>¡Añade algunos productos!</p>
                  </div>
                ) : (
                  <>
                    {/* Display the number of items in the cart */}
                    <p className='text-center fw-bold'>
                      Hay {cart.length} {cart.length === 1 ? 'artículo' : 'artículos'} en
                      el carrito
                    </p>
                    {/* Render the table with the list of cart items */}
                    <table className='table text-center'>
                      <thead>
                        <tr>
                          <th>Imagen</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map(item => (
                          <tr className='align-middle' key={item.id}>
                            <td>
                              <img
                                className='img-fluid'
                                src={`/${item.image}.jpg`}
                                alt='guitar image'
                              />
                            </td>
                            <td>{item.name}</td>
                            <td className='fw-bold'>{item.price}</td>
                            <td>
                              <div className='d-flex align-items-center gap-1'>
                                <button
                                  type='button'
                                  className='btn btn-sm btn-primary'
                                  onClick={() => decreaseQuantity(item.id)}
                                >
                                  <i className='bi bi-dash'></i>
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                  type='button'
                                  className='btn btn-sm btn-primary'
                                  onClick={() => increaseQuantity(item.id)}
                                >
                                  <i className='bi bi-plus'></i>
                                </button>
                                <button
                                  className='btn btn-sm btn-danger'
                                  type='button'
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <i className='bi bi-trash-fill'></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {/* Total price, empty cart button, and checkout button */}
                    <p className='text-end'>
                      Total: <span className='fw-bold'>{calculateCartTotal}€</span>
                    </p>
                    <button
                      className='btn btn-sm btn-dark w-100 mt-3 p-2 fw-bold'
                      onClick={clearCart}
                    >
                      Vaciar carrito
                    </button>
                    <button
                      className='btn btn-sm btn-dark w-100 mt-3 p-2 fw-bold'
                      onClick={handlePurchaseClick}
                    >
                      Realizar compra
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* End Shopping Cart */}
        </div>
      </div>
      {/* Render payment form if active */}
      {showPaymentForm && (
        <PaymentForm calculateCartTotal={calculateCartTotal} onClose={handleCloseForm} />
      )}
    </header>
  );
};

Header.propTypes = {
  cart: PropTypes.array,
  removeFromCart: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
  isEmpty: PropTypes.bool.isRequired,
  calculateCartTotal: PropTypes.number.isRequired,
};

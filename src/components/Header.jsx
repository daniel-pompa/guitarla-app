import PropTypes from 'prop-types';

export const Header = ({ cart }) => {
  // Derived state: Check if the cart is empty
  const isEmpty = () => cart.length === 0;

  // Derived state: Calculate the total price of all items in the cart
  const calculateCartTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

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
                {isEmpty() ? (
                  <p className='text-center fs-5'>El carrito está vacío</p>
                ) : (
                  <>
                    {/* Display the number of items in the cart */}
                    <p className='text-center fs-5'>
                      Hay {cart.length} artículos en el carrito
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
                                <button type='button' className='btn btn-sm btn-primary'>
                                  <i className='bi bi-dash'></i>
                                </button>
                                <span>{item.quantity}</span>
                                <button type='button' className='btn btn-sm btn-primary'>
                                  <i className='bi bi-plus'></i>
                                </button>
                                <button className='btn btn-sm btn-danger' type='button'>
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
                      Total: <span className='fw-bold'>{calculateCartTotal()}€</span>
                    </p>
                    <button className='btn btn-sm btn-dark w-100 mt-3 p-2 fw-bold'>
                      Vaciar carrito
                    </button>
                    <button className='btn btn-sm btn-dark w-100 mt-3 p-2 fw-bold'>
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
    </header>
  );
};

Header.propTypes = {
  cart: PropTypes.array,
};

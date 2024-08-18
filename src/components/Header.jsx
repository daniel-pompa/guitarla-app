export const Header = () => {
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
                className='bg-white mt-2 p-3 rounded shadow position-absolute end-0'
              >
                <p className='text-center fs-5'>El carrito esta vacio</p>
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
                    <tr className='align-middle'>
                      <td>
                        <img
                          className='img-fluid'
                          src='/guitar-01.jpg'
                          alt='guitar image'
                        />
                      </td>
                      <td>Lukather</td>
                      <td className='fw-bold'>299€</td>
                      <td>
                        <div className='d-flex align-items-center gap-1'>
                          <button type='button' className='btn btn-sm btn-primary'>
                            <i className='bi bi-dash'></i>
                          </button>
                          1
                          <button type='button' className='btn btn-sm btn-primary'>
                            <i className='bi bi-plus'></i>
                          </button>
                          <button className='btn btn-sm btn-danger' type='button'>
                            <i className='bi bi-trash-fill'></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className='text-end'>
                  Total: <span className='fw-bold'>299€</span>
                </p>
                <button className='btn btn-sm btn-dark w-100 mt-3 p-2 fw-bold'>
                  Vaciar carrito
                </button>
                <button className='btn btn-sm btn-dark w-100 mt-3 p-2 fw-bold'>
                  Realizar compra
                </button>
              </div>
            </div>
          </div>
          {/* End Shopping Cart */}
        </div>
      </div>
    </header>
  );
};

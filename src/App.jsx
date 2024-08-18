function App() {
  return (
    <>
      {/* Header */}
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
      {/* End Header */}

      {/* Main */}
      <main className='container-xl mt-5'>
        <h2 className='text-center fs-1 fw-bold text-uppercase'>Nuestra Colección</h2>
        <div className='row mt-5'>
          {/* Guitar 1 */}
          <div className='col-md-6 col-lg-4 my-4'>
            <div className='card guitar-card'>
              <div className='row g-0'>
                <div className='col-md-4'>
                  <img
                    className='img-fluid'
                    src='/guitar-01.jpg'
                    alt='imagen guitarra Lukather'
                  />
                </div>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <h3 className='card-title fs-4 fw-bold text-uppercase'>Lukather</h3>
                    <p className='card-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae
                      labore odit magnam in autem nesciunt, amet deserunt
                    </p>
                    <p className='card-text fw-black fs-3 price'>320€</p>
                    <button type='button' className='btn btn-dark w-100'>
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Guitar 2 */}
          <div className='col-md-6 col-lg-4 my-4'>
            <div className='card guitar-card'>
              <div className='row g-0'>
                <div className='col-md-4'>
                  <img
                    className='img-fluid'
                    src='/guitar-02.jpg'
                    alt='imagen guitarra SRV'
                  />
                </div>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <h3 className='card-title fs-4 fw-bold text-uppercase'>SRV</h3>
                    <p className='card-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae
                      labore odit magnam in autem nesciunt, amet deserunt
                    </p>
                    <p className='card-text fw-black fs-3 price'>275€</p>
                    <button type='button' className='btn btn-dark w-100'>
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Guitar 3 */}
          <div className='col-md-6 col-lg-4 my-4'>
            <div className='card guitar-card'>
              <div className='row g-0'>
                <div className='col-md-4'>
                  <img
                    className='img-fluid'
                    src='/guitar-03.jpg'
                    alt='imagen guitarra Borland'
                  />
                </div>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <h3 className='card-title fs-4 fw-bold text-uppercase'>Borland</h3>
                    <p className='card-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae
                      labore odit magnam in autem nesciunt, amet deserunt
                    </p>
                    <p className='card-text fw-black fs-3 price'>299€</p>
                    <button type='button' className='btn btn-dark w-100'>
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Guitar 4 */}
          <div className='col-md-6 col-lg-4 my-4'>
            <div className='card guitar-card'>
              <div className='row g-0'>
                <div className='col-md-4'>
                  <img
                    className='img-fluid'
                    src='/guitar-04.jpg'
                    alt='imagen guitarra Vai'
                  />
                </div>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <h3 className='card-title fs-4 fw-bold text-uppercase'>Vai</h3>
                    <p className='card-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae
                      labore odit magnam in autem nesciunt, amet deserunt
                    </p>
                    <p className='card-text fw-black fs-3 price'>330€</p>
                    <button type='button' className='btn btn-dark w-100'>
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Guitar 5 */}
          <div className='col-md-6 col-lg-4 my-4'>
            <div className='card guitar-card'>
              <div className='row g-0'>
                <div className='col-md-4'>
                  <img
                    className='img-fluid'
                    src='/guitar-05.jpg'
                    alt='imagen guitarra Thompson'
                  />
                </div>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <h3 className='card-title fs-4 fw-bold text-uppercase'>Thompson</h3>
                    <p className='card-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae
                      labore odit magnam in autem nesciunt, amet deserunt
                    </p>
                    <p className='card-text fw-black fs-3 price'>310€</p>
                    <button type='button' className='btn btn-dark w-100'>
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Guitar 6 */}
          <div className='col-md-6 col-lg-4 my-4'>
            <div className='card guitar-card'>
              <div className='row g-0'>
                <div className='col-md-4'>
                  <img
                    className='img-fluid'
                    src='/guitar-06.jpg'
                    alt='imagen guitarra White'
                  />
                </div>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <h3 className='card-title fs-4 fw-bold text-uppercase'>White</h3>
                    <p className='card-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae
                      labore odit magnam in autem nesciunt, amet deserunt
                    </p>
                    <p className='card-text fw-black fs-3 price'>285€</p>
                    <button type='button' className='btn btn-dark w-100'>
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Guitar 7 */}
          <div className='col-md-6 col-lg-4 my-4'>
            <div className='card guitar-card'>
              <div className='row g-0'>
                <div className='col-md-4'>
                  <img
                    className='img-fluid'
                    src='/guitar-07.jpg'
                    alt='imagen guitarra Cobain'
                  />
                </div>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <h3 className='card-title fs-4 fw-bold text-uppercase'>Cobain</h3>
                    <p className='card-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae
                      labore odit magnam in autem nesciunt, amet deserunt
                    </p>
                    <p className='card-text fw-black fs-3 price'>340€</p>
                    <button type='button' className='btn btn-dark w-100'>
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Guitar 8 */}
          <div className='col-md-6 col-lg-4 my-4'>
            <div className='card guitar-card'>
              <div className='row g-0'>
                <div className='col-md-4'>
                  <img
                    className='img-fluid'
                    src='/guitar-08.jpg'
                    alt='imagen guitarra Dale'
                  />
                </div>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <h3 className='card-title fs-4 fw-bold text-uppercase'>Dale</h3>
                    <p className='card-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae
                      labore odit magnam in autem nesciunt, amet deserunt
                    </p>
                    <p className='card-text fw-black fs-3 price'>325€</p>
                    <button type='button' className='btn btn-dark w-100'>
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Guitar 9 */}
          <div className='col-md-6 col-lg-4 my-4'>
            <div className='card guitar-card'>
              <div className='row g-0'>
                <div className='col-md-4'>
                  <img
                    className='img-fluid'
                    src='/guitar-09.jpg'
                    alt='imagen guitarra Krieger'
                  />
                </div>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <h3 className='card-title fs-4 fw-bold text-uppercase'>Krieger</h3>
                    <p className='card-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae
                      labore odit magnam in autem nesciunt, amet deserunt
                    </p>
                    <p className='card-text fw-black fs-3 price'>320€</p>
                    <button type='button' className='btn btn-dark w-100'>
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Guitar 10 */}
          <div className='col-md-6 col-lg-4 my-4'>
            <div className='card guitar-card'>
              <div className='row g-0'>
                <div className='col-md-4'>
                  <img
                    className='img-fluid'
                    src='/guitar-10.jpg'
                    alt='imagen guitarra Campbell'
                  />
                </div>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <h3 className='card-title fs-4 fw-bold text-uppercase'>Campbell</h3>
                    <p className='card-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae
                      labore odit magnam in autem nesciunt, amet deserunt
                    </p>
                    <p className='card-text fw-black fs-3 price'>310€</p>
                    <button type='button' className='btn btn-dark w-100'>
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Guitar 11 */}
          <div className='col-md-6 col-lg-4 my-4'>
            <div className='card guitar-card'>
              <div className='row g-0'>
                <div className='col-md-4'>
                  <img
                    className='img-fluid'
                    src='/guitar-11.jpg'
                    alt='imagen guitarra Reed'
                  />
                </div>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <h3 className='card-title fs-4 fw-bold text-uppercase'>Reed</h3>
                    <p className='card-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae
                      labore odit magnam in autem nesciunt, amet deserunt
                    </p>
                    <p className='card-text fw-black fs-3 price'>295€</p>
                    <button type='button' className='btn btn-dark w-100'>
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Guitar 12 */}
          <div className='col-md-6 col-lg-4 my-4'>
            <div className='card guitar-card'>
              <div className='row g-0'>
                <div className='col-md-4'>
                  <img
                    className='img-fluid'
                    src='/guitar-12.jpg'
                    alt='imagen guitarra Hazel'
                  />
                </div>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <h3 className='card-title fs-4 fw-bold text-uppercase'>Hazel</h3>
                    <p className='card-text'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae
                      labore odit magnam in autem nesciunt, amet deserunt
                    </p>
                    <p className='card-text fw-black fs-3 price'>285€</p>
                    <button type='button' className='btn btn-dark w-100'>
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* End Main */}
    </>
  );
}

export default App;

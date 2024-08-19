import PropTypes from 'prop-types';

export const PaymentForm = ({ calculateCartTotal, onClose }) => {
  return (
    <div className='payment-form-container d-flex justify-content-center align-items-center'>
      <div className='card bg-light text-dark rounded-3 p-4 shadow'>
        <div className='card-body'>
          <div className='d-flex justify-content-between align-items-center mb-4'>
            <h4 className='mb-0'>Completar Compra</h4>
            <button className='btn-close' onClick={onClose}></button>
          </div>
          {/* Card details */}
          <p className='mb-2 fw-bold'>Método de pago</p>
          <div className='mb-3'>
            <i className='fab fa-cc-mastercard fa-2x me-2 text-mastercard'></i>
            <i className='fab fa-cc-visa fa-2x me-2 text-visa'></i>
            <i className='fab fa-cc-amex fa-2x me-2 text-amex'></i>
            <i className='fab fa-cc-paypal fa-2x me-2 text-paypal'></i>
            <i className='fab fa-cc-amazon-pay fa-2x text-amazon-pay'></i>
          </div>
          {/* Form details */}
          <form className='mt-4'>
            <div className='mb-4'>
              <label className='form-label fw-bold' htmlFor='cardHolderName'>
                Nombre del titular
              </label>
              <input
                type='text'
                id='cardHolderName'
                className='form-control form-control-lg'
                placeholder='Nombre del titular'
              />
            </div>

            <div className='mb-4'>
              <label className='form-label fw-bold' htmlFor='cardNumber'>
                Número de tarjeta
              </label>
              <input
                type='text'
                id='cardNumber'
                className='form-control form-control-lg'
                placeholder='1234 5678 9012 3457'
                minLength='19'
                maxLength='19'
              />
            </div>

            <div className='row mb-4'>
              <div className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-label fw-bold' htmlFor='cardExp'>
                    Expiración
                  </label>
                  <input
                    type='text'
                    id='cardExp'
                    className='form-control form-control-lg'
                    placeholder='MM/AAAA'
                    minLength='7'
                    maxLength='7'
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-label fw-bold' htmlFor='cardCvv'>
                    CVV
                  </label>
                  <input
                    type='password'
                    id='cardCvv'
                    className='form-control form-control-lg'
                    placeholder='&#9679;&#9679;&#9679;'
                    minLength='3'
                    maxLength='3'
                  />
                </div>
              </div>
            </div>
          </form>

          <hr className='my-4' />

          <div className='d-flex justify-content-between align-items-center py-2'>
            <p className='mb-0 fw-bold'>Envío</p>
            <p className='mb-0 fw-bold text-success'>Gratis</p>
          </div>

          <div className='d-flex justify-content-between align-items-center mb-4 py-2'>
            <p className='mb-0 fw-bold'>Total (Impuestos incluidos)</p>
            <p className='mb-0 fw-bold'>{calculateCartTotal}€</p>
          </div>

          <button
            type='button'
            className='btn btn-dark fw-bold w-100 d-flex align-items-center justify-content-center'
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

PaymentForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  calculateCartTotal: PropTypes.number.isRequired,
};

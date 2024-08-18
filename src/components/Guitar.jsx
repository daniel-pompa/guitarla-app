import PropTypes from 'prop-types';

export const Guitar = ({ guitar, addToCart }) => {
  const { id, name, image, description, price } = guitar;

  return (
    <div className='col-md-6 col-lg-4 my-4'>
      <div className='card guitar-card h-100'>
        <div className='row g-0'>
          <div className='col-md-4'>
            <img className='img-fluid' src={`/${image}.jpg`} alt={`${name} guitar`} />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h3 className='card-title fs-4 fw-bold text-uppercase'>{name}</h3>
              <p className='card-text'>{description}</p>
              <p className='card-text fw-black fs-3 price'>${price}</p>
              <button
                type='button'
                className='btn btn-dark w-100'
                onClick={() => addToCart(guitar)}
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Guitar.propTypes = {
  guitar: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};

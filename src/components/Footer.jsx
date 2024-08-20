export const Footer = () => {
  return (
    <footer className='bg-dark text-light py-5'>
      <div className='container'>
        <div className='row'>
          {/* Logo and Description */}
          <div className='col-md-4 mb-4 text-center text-md-start'>
            <img src='/logo.svg' alt='Logo' className='img-fluid' width='250' />
            <p className='mt-3'>
              Tu tienda en línea para guitarras de alta calidad. Encuentra el sonido que
              se adapte a ti.
            </p>
          </div>
          {/* Useful Links */}
          <div className='col-md-4 mb-4 text-center text-md-start'>
            <h5 className='fw-bold mb-3'>Enlaces útiles</h5>
            <ul className='list-unstyled'>
              <li>
                <a href='#' className='text-light text-decoration-none'>
                  <i className='fa-solid fa-house me-2'></i> Inicio
                </a>
              </li>
              <li>
                <a href='#' className='text-light text-decoration-none'>
                  <i className='fa-solid fa-store me-2'></i> Tienda
                </a>
              </li>
              <li>
                <a href='#' className='text-light text-decoration-none'>
                  <i className='fa-solid fa-tag me-2'></i> Ofertas
                </a>
              </li>
              <li>
                <a href='#' className='text-light text-decoration-none'>
                  <i className='fa-solid fa-address-book me-2'></i> Contacto
                </a>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div className='col-md-4 mb-4 text-center text-md-start'>
            <h5 className='fw-bold mb-3'>Contacto</h5>
            <ul className='list-unstyled'>
              <li>
                <i className='bi bi-telephone-fill me-2 fs-5'></i> +1 234 567 890
              </li>
              <li>
                <i className='bi bi-envelope-fill me-2 fs-5'></i> info@guitarla.com
              </li>
              <li>
                <i className='bi bi-geo-alt-fill me-2 fs-5'></i> Music Street, 123, LA
              </li>
            </ul>
            {/* Social networks */}
            <div>
              <a href='#' className='text-light me-3 fs-5'>
                <i className='bi bi-facebook'></i>
              </a>
              <a href='#' className='text-light me-3 fs-5'>
                <i className='bi bi-instagram'></i>
              </a>
              <a href='#' className='text-light me-3 fs-5'>
                <i className='fa-brands fa-youtube'></i>
              </a>
              <a href='#' className='text-light me-3 fs-5'>
                <i className='fa-brands fa-telegram'></i>
              </a>
              <a href='#' className='text-light me-3 fs-5'>
                <i className='fa-brands fa-tiktok'></i>
              </a>
              <a href='#' className='text-light me-3 fs-5'>
                <i className='fa-brands fa-whatsapp'></i>
              </a>
            </div>
          </div>
        </div>

        <div className='row mt-4'>
          <div className='col text-center'>
            <p>&copy; 2024 GuitarLA. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

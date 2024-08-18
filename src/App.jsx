import { useEffect, useState } from 'react';
import { Guitar, Header } from './components';
import { guitarData } from './data/data';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(guitarData);
  }, []);

  return (
    <>
      <Header />
      <main className='container-xl mt-5'>
        <h2 className='text-center fs-1 fw-bold text-uppercase'>Nuestra Colección</h2>
        <div className='row mt-5'>
          {/* Guitars */}
          {data.map(guitar => (
            <Guitar key={guitar.id} guitar={guitar} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;

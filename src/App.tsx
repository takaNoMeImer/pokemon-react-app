import { useEffect, useState } from 'react'
import './App.css';

import SplashScreen from './components/SplashScreen'
import useFetch from './hooks/useFetch';
import TableData from './components/Table';

function App() {
  const [splashVisible, setSplashVisible] = useState<boolean>(true);
  const { data } = useFetch("?limit=10");

  useEffect(() => {
    console.log(data)
    const timeVisible = setTimeout(() => {
      setSplashVisible(false);
    }, 3000);

    return () => clearTimeout(timeVisible);
  }, []);

  return (
    <>
      {splashVisible ? (
        <SplashScreen duration={3000} />
      ) : (
        <div>
          <div className='home'>

          </div>
          <TableData data={data.datos}/>
        </div>
      )}
    </>
  )
}

export default App

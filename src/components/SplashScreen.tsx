import { useEffect, useState } from 'react';
import '../styles/SplashScreen.css';
import { ClipLoader } from 'react-spinners';

interface SplashScreenProps {
  duration: number
}

const SplashScreen = ({ duration }: SplashScreenProps) => {

  const [hidden, setHidden] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <>
      <div className={`splash-screen ${hidden ? 'hidden' : ''}`}>
        <ClipLoader size={150}/>
      </div>
    </>
  );
}

export default SplashScreen;
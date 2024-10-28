import { useState, useEffect } from 'react';

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div>
      <p className='CurrentTime'>{currentTime}</p>
    </div>
  );
}

export default Clock;
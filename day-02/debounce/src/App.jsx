import './App.css'
import { useEffect, useCallback } from 'react';

function useDebounce(callback, delay) {
  const debouncedCallback = useCallback(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);

  useEffect(() => {
    return debouncedCallback();
  }, [debouncedCallback]);
}

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  const debouncedHandleClick = useDebounce(handleClick, 1000);

  return (
    <>
      <button onClick={debouncedHandleClick}>Click Me</button>
    </>
  );
}

export default App;
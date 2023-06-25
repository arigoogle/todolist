import { useState } from "react";
import { useEffect } from "react";
export function Counter() {
  const [count, setCount] =  useState(() => {
    const localValue = localStorage.getItem("COUNT")
    if(localValue == null) return 0
    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("COUNT", JSON.stringify(count))
  }, [count])

  const [theme, setTheme] = useState('Blue');

  function incrementCount() {
    setCount(prevCount => prevCount + 1);
  }

  function decrementCount() {
    setCount(prevCount => prevCount -1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span> {count} </span>
      <span> {theme} </span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

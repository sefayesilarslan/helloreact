import React, { useState, useEffect } from "react";

/*State örnekleri*/
function Counter() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);
  const [isRunning, setIsRunning] = useState(true);
  useEffect(() => {
    //console.log("Bir State Değişti");
  });

  useEffect(() => {
    let interval = setInterval(() => {
      console.log("interval");
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   console.log("Count veya Amaount state Değişti");
  // }, [count, amount]);

  return (
    <div>
      <h1>{count}</h1>
      <div>Arttırılacak Değer</div>
      <button onClick={() => setAmount(1)}>+1 Arttır</button>
      <button onClick={() => setAmount(3)}>+3 Arttır</button>
      <button onClick={() => setAmount(10)}>+10 Arttır</button>

      <h1>{amount}</h1>
      <button onClick={() => setCount(count + amount)}>Arttır</button>
    </div>
  );
}

export default Counter;

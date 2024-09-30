import React, { useState } from "react";

function Colors() {
  const [colors, setColors] = useState(["red", "green", "blue"]);
  const handleClick = () => {
    setColors([...colors, "Gri", Math.random()]);
  };
  return (
    <div>
      <h1>Renkler</h1>
      {colors.map((color, i) => (
        <div key={i}>{color}</div>
      ))}

      <button onClick={handleClick}>Ekle</button>
    </div>
  );
}

export default Colors;

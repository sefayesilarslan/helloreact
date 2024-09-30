import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("Sefa");
  const [surname, setUsername] = useState("Yeşilarslan");
  const [gender, setGender] = useState("");
  return (
    <div>
      <div>
        <div>İsim : </div>
        <input
          placeholder="İsminizi Girin"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
        <div>
          <strong>{name}</strong>
        </div>
        <div>Soyisim : </div>
        <input
          placeholder="Soyisminizi Girin"
          value={surname}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <div>
          <strong>{surname}</strong>
        </div>

        <div>
          <div>Cinsiyet : </div>
          <select
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <option value="0">Cinsiyet Seçiniz</option>
            <option value="1">Erkek</option>
            <option value="2">Kadın</option>
          </select>
          <div>
            <strong>
              {gender == 0 ? "Boş" : gender == 1 ? "Erkek" : "Kadın"}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;

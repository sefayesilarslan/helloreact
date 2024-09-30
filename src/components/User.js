import React from "react";

function User(props, friends) {
  return (
    <div>
      <h1>User</h1>
      {/* <div>İsim : {props.name}</div>
      <div>Yaş : {props.age}</div>
      <div>Şehir : {props.city}</div> */}

      <div>İsim : {props.data.name}</div>
      <div>Yaş : {props.data.age}</div>
      <div>Şehir : {props.data.city}</div>

      <h3>Arkadaşları</h3>
      {props.friends.map((friend, i) => (
        <div key={i}>{friend}</div>
      ))}
    </div>
  );
}

export default User;

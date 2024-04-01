/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
import React, { useState } from "react";
import "./App.css";
import WishInput from "./WishInput";
import WishList from "./WishList";

const wishes = [
  { text: "Travel to the moon", done: false },
  { text: "Make an intro course of React", done: true },
  { text: "Pay the gym", done: true },
  { text: "Go to the gym", done: false },
];

function App() {
  const [wishess, setWishess] = useState(wishes);
  return (
    <div className="app">
      <h1>My wishlist app</h1>
      <WishInput onNewWish={(wish) => setWishess([wish, ...wishess])} />
      <WishList wishes={wishess} onWishesChange={setWishess} />
      <button
        className="wish-clear"
        type="button"
        onClick={() => setWishess(wishes.filter((wish) => !wish.done))}
      >
        Archive done
      </button>
    </div>
  );
}

export default App;

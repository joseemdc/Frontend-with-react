/* eslint-disable jsx-quotes */
import React from 'react';
import './App.css';
import classNames from 'classnames';

const wishes = [
  { text: 'Travel to the moon', done: false },
  { text: 'Pay the gym', done: true },
  { text: 'Go to the gym', done: false },
];

function App() {
  return (
    <div className="app">
      <h1>My wishlist app</h1>
      <fieldset className="wish-input">
        <legend className="wish-input_label">New wish</legend>
        <input className="wish-input_field" type="text" placeholder="Enter your wish here" />
      </fieldset>
      <ul className='wish-list'>
        {wishes.map(({ text, done }, i) => (
          <li key={text} className={classNames('wish-list_item', { 'wish-list_item--done': done })}>
            <label htmlFor={`wish${i}`}>
              <input id={`wish${i}`} type="checkbox" checked={done} />
              {text}
            </label>
          </li>
        ))}
      </ul>
      <button className='wish-clear' type="button">Archive done</button>
    </div>
  );
}

export default App;

/* eslint-disable quotes */
/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import PropTypes from "prop-types";

const WishInput = ({ onNewWish }) => {
  const [newWishText, setNewWishtext] = useState("");
  return (
    <fieldset className="wish-input">
      <legend className="wish-input_label">New wish</legend>
      <input
        className="wish-input_field"
        type="text"
        placeholder="Enter your wish here"
        value={newWishText}
        onChange={(e) => setNewWishtext(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter" && newWishText.length) {
            onNewWish({ done: false, text: newWishText });
            setNewWishtext('');
          }
        }}
      />
    </fieldset>
  );
};

WishInput.propTypes = {
  onNewWish: PropTypes.func,
};
WishInput.defaultProps = {
  onNewWish: () => {},
};

export default WishInput;

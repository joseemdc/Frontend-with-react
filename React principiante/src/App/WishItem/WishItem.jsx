/* eslint-disable object-curly-newline */
/* eslint-disable react/function-component-definition */
/* eslint-disable quotes */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const WishItem = ({ done, text, id, onDoneChange }) => {
  const [age, setAge] = useState(0);
  useEffect(() => {
    let ageInterval;
    if (done) {
      setAge(0);
    } else {
      ageInterval = setInterval(() => {
        if (done) {
          clearInterval(ageInterval);
        } else {
          setAge((a) => a + 1);
        }
      }, 1000);
    }
    return () => clearInterval(ageInterval);
  }, [done]);

  return (
    <li
      className={classNames("wish-list-item", {
        "wish-list_item--done": done,
        "wish-list_item--warning": age >= 5 && age < 10,
        "wish-list_item--danger": age >= 10,
      })}
    >
      <input
        id={id}
        type="checkbox"
        onChange={(e) => onDoneChange(e.target.checked)}
        checked={done}
      />
      <label htmlFor={id}>{text}</label>
    </li>
  );
};

WishItem.propTypes = {
  done: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.string,
  onDoneChange: PropTypes.func,
};
WishItem.defaultProps = {
  done: false,
  text: "",
  id: "",
  onDoneChange: PropTypes.func,
};
export default WishItem;

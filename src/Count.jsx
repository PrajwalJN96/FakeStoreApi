import React, { useState } from "react";
import { cilBabyCarriage } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

const Count = ({ price }) => {
  const [count, setCount] = useState(0);

  let handleIncBuy = () => {
    setCount(count + 1);
  };

  let handleDecBuy = () => {
    setCount(count - 1);
  };

  return (
    <>
      {count === 0 ? (
        <div className="cart-div" onClick={handleIncBuy}>
          Buy
          <CIcon icon={cilBabyCarriage} id="cart" />
        </div>
      ) : (
        <>
          <div className="cart-div" id="cart-box">
            <div id="decre" onClick={handleDecBuy}>
              -
            </div>
            <div id="count">{count}</div>
            <div id="incre" onClick={handleIncBuy}>
              +
            </div>
          </div>
          <div id="amount">${count * price}</div>
        </>
      )}
    </>
  );
};

export default Count;

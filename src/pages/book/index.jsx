import React, { useCallback } from 'react';
import { useHistory } from "react-router-dom";
// import DragImage from "./components/dragImage";
import './index.scss';
function BookPage() {
  const history = useHistory();
  const gotoDrag = useCallback(
    () => {
      history.push("/products");
    },
    [],
  )
  return (
    <div className="book-container">
      <div className="video">
        <img src="/images/he2.gif" alt="" />
      </div>
      <div className="btn-container">
        <img className="btn" src="/images/btn1.png" alt="" onClick={gotoDrag} />
        <img className="btn" src="/images/btn2.png" alt="" />
      </div>
    </div>
  );
}

export default BookPage;

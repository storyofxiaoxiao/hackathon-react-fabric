import React, { useCallback } from 'react';
import { useHistory } from "react-router-dom";
import './index.scss';
function HomePage() {
  const history = useHistory();
  const clickPanda = useCallback(
    () => {
      history.push("/book");
    },
    [],
  )
  return (
    <div className="container-bg">
      <div className="top">
        <img className="head" src="/images/tab.gif" alt="brand" />
        <img className="sun" src="/images/sun.gif" alt="brand" />
      </div>
      <div className="bottom">
        <img className="head" src="/images/user.png" alt="brand" />
      </div>
      <div className="panda-container" onClick={clickPanda}>
        <img className="panda" src="/images/font.png" alt="brand" />
      </div>
      <img className="bg-pic" src="/images/bg.jpg" alt="brand" />
    </div>
  );
}

export default HomePage;

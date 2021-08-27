import React, { useCallback, useState } from 'react';
import DragImage from "./components/dragImage";
import DragImage1 from "./components/dragImage1";
import Video from "./components/video";
import Video1 from "./components/video1";
import './index.scss';
const width = document.body.clientWidth;
function BookPage() {
  const [state, setState] = useState(false);
  const [video, setVideo] = useState(false);
  const gotoDrag = useCallback(
    () => {
      setState(true)
    },
    [setState],
  )
  const cancelDrag = useCallback(
    () => {
      setState(false);
      setVideo(false);
    },
    [setState, setVideo],
  )
  const gotoVideo = useCallback(
    () => {
      setVideo(true);
      console.log('width', width);
    },
    [setVideo],
  )
  return (
    <div className="book-container">
      <div>
        <div className="pic-gif">
          <img src="/images/he2.gif" alt="" />
        </div>
        <div className="btn-container">
          <img className="btn" src="/images/btn1.png" alt="" onClick={gotoDrag} />
          <img className="btn" src="/images/btn2.png" alt="" onClick={gotoVideo} />
        </div>
      </div>
      {state &&
        <div className="popup sss">
          {width > 1440 ?
            <DragImage></DragImage>
            : <DragImage1></DragImage1>
          }

          <div className="close-btn" onClick={cancelDrag}>
            <img src="/images/bishun/close.png" alt="" />
          </div>
        </div>
      }
      {
        video &&
        <div className="popup video">
          {width > 1440 ?
            <Video></Video>
            :
            <Video1></Video1>
          }
          <div className="close-btn" onClick={cancelDrag}>
            <img src="/images/bishun/close.png" alt="" />
          </div>
        </div>
      }

    </div>
  );
}

export default BookPage;

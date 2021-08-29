import React from "react";
import YouTube from 'react-youtube';
export default function Video() {
  const opts = {
    height: '500',
    width: '800',
    playerVars: {
      autoplay: 1,
    },
  };
  const _onReady = (event) => {
    event.target.pauseVideo();
  }
  return (
    <div>
      <YouTube videoId="qCsjRw5lhso" opts={opts} onReady={_onReady} />
    </div>
  );
}
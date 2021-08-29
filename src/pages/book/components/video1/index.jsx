import React from "react";
import YouTube from 'react-youtube';
export default function Video1() {
  const opts = {
    height: '450',
    width: '600',
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
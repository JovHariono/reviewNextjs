"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const option = {
    width: "300",
    height: "250",
  };

  const [video, setVideo] = useState(false);

  const handleVideo = () => {
    setVideo(!video);
  };

  const handleErrorVideo = () => {
    alert("Maaf video sedang error")

    setVideo(!video)
  }

  const Player = () => {
    return (
      <div className="fixed bottom-0 right-0">
        <div>
          <button
            onClick={handleVideo}
            className="bg-color-primary px-3 py-1 font-bold rounded"
          >
            X
          </button>
          <YouTube
            videoId={youtubeId}
            onReady={(e) => e.target.pauseVideo()}
            onError={handleErrorVideo}
            opts={option}
          />
        </div>
      </div>
    );
  };

  return video ? (
    <button
      className="fixed bottom-0 right-0 bg-color-primary px-3 py-1 font-bold hover:text-color-accent transition-all rounded"
      onClick={handleVideo}
    >
      Lihat Trailer
    </button>
  ) : (
    <Player />
  );
};

export default VideoPlayer;

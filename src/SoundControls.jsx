import { useState, useRef } from "react";
import LofiSound from "./assets/lofi.mp3";
import { Howl } from "howler";

export default () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const lofiRef = useRef(null);
  const playAudio = () => {
    const lofiAudio = new Howl({
      src: LofiSound,
      loop: true,
      autoplay: true,
    });
    lofiRef.current = lofiAudio;
    setIsPlaying(true);
  };
  const pauseAudio = () => {
    lofiRef.current.pause();
    setIsPlaying(false);
  };
  return (
    <>
      <div className="soundControl">
        {isPlaying ? (
          <div onClick={pauseAudio} className="sound">
            <img
              src="./sound.svg"
              alt="Sound on button"
              width="30"
              height="30"
            />
          </div>
        ) : (
          <div onClick={playAudio} className="sound">
            <img
              src="./mute.svg"
              alt="Sound off button"
              width="30"
              height="30"
            />
          </div>
        )}
      </div>
      <audio ref={lofiRef} loop muted={!isPlaying}>
        <source src={LofiSound} type="audio/mpeg" />
      </audio>
    </>
  );
};

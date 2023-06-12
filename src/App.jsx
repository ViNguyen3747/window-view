import { Canvas } from "@react-three/fiber";
import Models from "./Models";
import SoundControls from "./SoundControls";
import Contribution from "./Contribution";
import { Loader } from "@react-three/drei";
const containerStyles = {
  background: `linear-gradient(
    0deg,
    hsl(296deg 86% 78%) 1%,
    hsl(293deg 87% 77%) 34%,
    hsl(290deg 88% 77%) 49%,
    hsl(287deg 88% 76%) 61%,
    hsl(285deg 89% 76%) 71%,
    hsl(282deg 90% 76%) 79%,
    hsl(279deg 91% 75%) 86%,
    hsl(276deg 92% 75%) 92%,
    hsl(274deg 93% 74%) 97%,
    hsl(271deg 94% 74%) 100%
      )`,
};
const barStyles = {
  height: "10px",
  borderRadius: "7px",
  background: " rgb(255, 255, 255)",
  transition: "0.5s",
};
const dataStyles = {
  fontSize: "1rem",
  fontFamily: '"Sono", sans-serif',
};
const innerStyles = {
  background: "rgba(236, 236, 238, 0.253)",
  borderRadius: "7px",
  height: "10px",
  width: "200px",
};
function App() {
  return (
    <>
      <div className="app-name">
        <div>Window</div>
        <div>View</div>
      </div>
      <a className="logo" href="https://vi-nguyen.vercel.app/" target="_blank">
        <span>Designed by </span>
        <span id="name">Vi Nguyen</span>
      </a>
      <Contribution />
      <SoundControls />

      <Canvas camera={{ position: [0, 0, 10], fov: 10 }}>
        <Models />
      </Canvas>
      <Loader
        containerStyles={containerStyles}
        barStyles={barStyles}
        innerStyles={innerStyles}
        dataStyles={dataStyles}
      />
    </>
  );
}

export default App;

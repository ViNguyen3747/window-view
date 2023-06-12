import { useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import { animated, useSpring } from "@react-spring/three";

const BUILDING_COLORS = [
  "#FF96FD",
  "#BF7FFB",
  "#ffa9cb",
  "#f992ad",
  "#f2a8ff",
  "#fa8893",
  "#a06ec4",
  "#936bff",
];

const DOOR_COLORS = [
  "#FF8EFD",
  "#BA77F9",
  "#e093b2",
  "#dd839b",
  "#EF97FF",
  "#ef7a85",
  "#9362b6",
  "#7d57e5",
];
const RobotFaces = ({ nodes }) => {
  const [faceNumber, setFace] = useState(10);
  const { gl } = useThree();
  const face1 = useSpring({
    eyes: faceNumber === 1 ? 1 : 0.5,
    from: { eyes: 0.5 },
    config: { mass: 2, tension: 400, velocity: 0 },
  });
  const face2 = useSpring({
    eyesPosition: faceNumber === 2 ? [-0.12, 0, 0] : [-0.12, 0.01, 0],
    eyeScale: faceNumber === 2 ? [1, 1, 1] : [1, 0.8, 1],
    from: { eyesPosition: [-0.12, 0.01, 0], eyeScale: [1, 0.8, 1] },
    config: { mass: 2, tension: 400, velocity: 0 },
  });
  const face3 = useSpring({
    mouth: faceNumber === 3 ? 1 : 0.8,
    eyesScale: faceNumber === 3 ? [1, 1, 1] : [1, 0.8, 1],
    eyesPosition: faceNumber === 3 ? [-0.12, 0, 0] : [-0.12, -0.01, 0],
    from: {
      eyesPosition: [-0.12, -0.01, 0],
      mouth: 0.8,
      eyesScale: [1, 0.8, 1],
    },
    config: { mass: 2, tension: 400, velocity: 0 },
  });
  const face4 = useSpring({
    eye1: faceNumber === 4 ? [-0.04, 0, 0] : [-0.03, 0, 0],
    eye2: faceNumber === 4 ? [-0.21, 0, 0] : [-0.22, 0, 0],
    mouth: faceNumber === 4 ? [1, 1, 1] : [1.2, 1, 1],
    from: { eye1: [-0.03, 0, 0], eye2: [-0.22, 0, 0], mouth: [1.2, 1, 1] },
    config: { mass: 2, tension: 400, velocity: 0 },
  });
  const face5 = useSpring({
    eyes: faceNumber === 5 ? [1, 1, 1] : [1, 0.8, 1],
    sweat: faceNumber === 5 ? [-0.24, -0.05, 0.005] : [-0.24, -0.03, 0.005],
    mouth: faceNumber === 5 ? [1, 1, 1] : [0.8, 1, 1],
    from: {
      eyes: [1, 0.8, 1],
      sweat: [-0.24, -0.03, 0.005],
      mouth: [0.8, 1, 1],
    },
    config: { mass: 2, tension: 400, velocity: 0 },
  });
  const face6 = useSpring({
    scale: faceNumber === 6 ? [1, 1, 1] : [0.8, 1, 1],
    from: {
      scale: [0.8, 1, 1],
    },
    config: { mass: 2, tension: 400, velocity: 0 },
  });
  const face7 = useSpring({
    scale: faceNumber === 7 ? [1, 1, 1] : [1, 0.5, 1],
    from: {
      scale: [1, 0.5, 1],
    },
    config: { mass: 2, tension: 400, velocity: 0 },
  });
  const face8 = useSpring({
    eyes: faceNumber === 8 ? [1, 1, 1] : [1, 0.5, 1],
    mouth: faceNumber === 8 ? [0.6, 1.1, 1] : [0.6, 0.5, 1],
    from: {
      eyes: [1, 0.5, 1],
      mouth: [0.6, 0.5, 1],
    },
    config: { mass: 2, tension: 400, velocity: 0 },
  });
  const face9 = useSpring({
    eyes: faceNumber === 9 ? [1.2, 1.2, 1.2] : [1, 0.5, 1],
    mouth: faceNumber === 9 ? [1, 1, 1] : [1, 0.5, 1],
    from: {
      eyes: [1, 0.5, 1],
      mouth: [1, 0.5, 1],
    },
    config: { mass: 2, tension: 400, velocity: 0 },
  });
  const face10 = useSpring({
    eyes: faceNumber === 10 ? 1.2 : 0.5,
    mouth: faceNumber === 10 ? [0.8, 0.6, 0.8] : [0.4, 0.2, 0.4],
    from: {
      eyes: 0.5,
      mouth: [0.4, 0.2, 0.4],
    },
    config: { mass: 2, tension: 400, velocity: 0 },
  });
  const handleClick = (e) => {
    e.stopPropagation();
    if (faceNumber === 10) {
      setFace(1);
    } else {
      setFace((prev) => prev + 1);
    }
  };

  return (
    <group
      onClick={handleClick}
      onPointerOver={(event) => {
        event.stopPropagation();
        gl.domElement.style.cursor = "url('/pointer.svg'), default";
      }}
      onPointerOut={(event) => {
        event.stopPropagation();
        gl.domElement.style.cursor = 'url("/cursor.svg"), default';
      }}
    >
      <mesh geometry={nodes.screen.geometry}>
        <meshBasicMaterial color={"#495057"} toneMapped={false} />
      </mesh>
      <group position={[0, 0.86, -0.53]} visible={faceNumber === 1}>
        <animated.mesh
          geometry={nodes.face1_eye1.geometry}
          position={[-0.03, 0, 0]}
          scale={face1.eyes}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
        <animated.mesh
          geometry={nodes.face1_eye2.geometry}
          position={[-0.2, 0, 0]}
          scale={face1.eyes}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
        <animated.mesh
          geometry={nodes.face1_2_mouth.geometry}
          position={[-0.12, -0.1, 0]}
          scale={face1.eyes}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
      </group>
      <group position={[0, 0.86, -0.53]} visible={faceNumber === 2}>
        <animated.mesh
          geometry={nodes.face2_eyes.geometry}
          position={face2.eyesPosition}
          scale={face2.eyeScale}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
        <animated.mesh
          geometry={nodes.face2_blush1.geometry}
          position={[-0.23, -0.07, 0]}
          scale={face2.eyeScale}
        >
          <meshBasicMaterial color={"#fa8893"} toneMapped={false} />
        </animated.mesh>
        <animated.mesh
          geometry={nodes.face2_blush2.geometry}
          position={[-0.02, -0.075, 0]}
          scale={face2.eyeScale}
        >
          <meshBasicMaterial color={"#fa8893"} toneMapped={false} />
        </animated.mesh>
        <animated.mesh
          geometry={nodes.face1_2_mouth.geometry}
          position={[-0.12, -0.1, 0]}
          scale={face1.eyes}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
      </group>
      <group position={[0, 0.88, -0.53]} visible={faceNumber === 3}>
        <animated.mesh
          geometry={nodes.face3_eye.geometry}
          position={face3.eyesPosition}
          scale={face3.eyesScale}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
        <animated.mesh
          geometry={nodes.face3_mouth.geometry}
          position={[-0.125, -0.11, 0]}
          scale={face3.mouth}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
      </group>
      <group position={[0, 0.86, -0.53]} visible={faceNumber === 4}>
        <animated.mesh
          geometry={nodes.face4_eye1.geometry}
          position={face4.eye1}
          scale={0.8}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
        <animated.mesh
          geometry={nodes.face4_eye2.geometry}
          position={face4.eye2}
          scale={0.8}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
        <animated.mesh
          geometry={nodes.face4_mouth.geometry}
          position={[-0.12, -0.1, 0]}
          scale={face4.mouth}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
      </group>
      <group position={[0, 0.88, -0.53]} visible={faceNumber === 5}>
        <animated.mesh
          geometry={nodes.face5_eyes.geometry}
          position={[-0.12, 0, 0]}
          scale={face5.eyes}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
        <animated.mesh
          geometry={nodes.face5_mouth.geometry}
          position={[-0.12, -0.1, 0]}
          scale={face5.mouth}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
        <animated.mesh
          geometry={nodes.face5_sweat.geometry}
          position={face5.sweat}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
      </group>
      <group position={[0, 0.86, -0.53]} visible={faceNumber === 6}>
        <animated.mesh
          geometry={nodes.face6_eye1.geometry}
          position={[-0.2, 0, 0]}
          scale={face6.scale}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
        <animated.mesh
          geometry={nodes.face6_eye2.geometry}
          position={[-0.05, 0, 0]}
          scale={face6.scale}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
        <animated.mesh
          geometry={nodes.face6_mouth.geometry}
          position={[-0.12, -0.09, 0]}
          scale={face6.scale}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
      </group>
      <group position={[0, 0.86, -0.53]} visible={faceNumber === 7}>
        <animated.mesh
          geometry={nodes.face5_eyes.geometry}
          position={[-0.12, 0, 0]}
          scale={face7.scale}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
        <animated.mesh
          geometry={nodes.face7_mouth.geometry}
          position={[-0.12, -0.04, 0]}
          scale={face7.scale}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
      </group>
      <group position={[0, 0.86, -0.53]} visible={faceNumber === 8}>
        <animated.mesh
          geometry={nodes.face1_eye1.geometry}
          position={[-0.2, 0, 0]}
          scale={face8.eyes}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
        <animated.mesh
          geometry={nodes.face8_eye1.geometry}
          position={[-0.05, 0, 0]}
          scale={face8.eyes}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
        <animated.mesh
          geometry={nodes.face4_mouth.geometry}
          position={[-0.12, -0.1, 0]}
          scale={face8.mouth}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
      </group>
      <group position={[0, 0.88, -0.53]} visible={faceNumber === 9}>
        <animated.mesh
          geometry={nodes.face8_eye1.geometry}
          position={[-0.2, 0, 0]}
          rotation={[0, 0, -Math.PI / 8]}
          scale={face9.eyes}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
        <animated.mesh
          geometry={nodes.face8_eye1.geometry}
          position={[-0.05, 0, 0]}
          rotation={[0, 0, Math.PI / 8]}
          scale={face9.eyes}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
        <animated.mesh
          geometry={nodes.face3_mouth.geometry}
          position={[-0.125, -0.12, 0]}
          scale={face9.mouth}
          rotation={[0, Math.PI / 8, Math.PI]}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
      </group>
      <group position={[0, 0.86, -0.53]} visible={faceNumber === 10}>
        <animated.mesh
          geometry={nodes.face10_eye1.geometry}
          position={[-0.2, 0, 0]}
          scale={face10.eyes}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
        <animated.mesh
          geometry={nodes.face10_eye2.geometry}
          position={[-0.05, 0, 0]}
          scale={face10.eyes}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
        <animated.mesh
          geometry={nodes.face7_mouth.geometry}
          position={[-0.12, -0.12, 0]}
          scale={face10.mouth}
          rotation={[0, 0, Math.PI]}
        >
          <meshBasicMaterial color={"#ffffff"} toneMapped={false} />
        </animated.mesh>
      </group>
    </group>
  );
};

export default () => {
  const { nodes } = useGLTF("./models.glb");
  const sceneRef = useRef();
  const vinylRef = useRef();

  const { mouse } = useThree();
  useFrame(({ clock }) => {
    sceneRef.current.rotation.y = MathUtils.lerp(
      sceneRef.current.rotation.y,
      (mouse.x * Math.PI * 2) / 80,
      0.1
    );
    sceneRef.current.rotation.x = MathUtils.lerp(
      sceneRef.current.rotation.x,
      (mouse.y * Math.PI * 2) / 80,
      0.1
    );
    vinylRef.current.rotation.y = -clock.getElapsedTime() / 2;
  });

  return (
    <>
      <group position={[0, -1.36, 0]} ref={sceneRef}>
        <ambientLight intensity={0.8} />
        <directionalLight intensity={0.2} position={[20, 0, 10]} />
        <spotLight intensity={0.9} angle={Math.PI} position={[0, 5, -4]} />
        <mesh geometry={nodes.wall.geometry}>
          <meshStandardMaterial color={"#c2a0ef"} />
        </mesh>
        <mesh geometry={nodes.window_frame_left.geometry}>
          <meshStandardMaterial color={"#ceb3f2"} />
        </mesh>
        <mesh geometry={nodes.window_frame_right.geometry}>
          <meshStandardMaterial color={"#ceb3f2"} />
        </mesh>
        <mesh geometry={nodes.glass_left.geometry}>
          <meshStandardMaterial color={"#af99ff"} transparent opacity={0.6} />
        </mesh>
        <mesh geometry={nodes.glass_right.geometry}>
          <meshStandardMaterial color={"#af99ff"} transparent opacity={0.6} />
        </mesh>
        <mesh geometry={nodes.table.geometry}>
          <meshStandardMaterial color={"#ffa9cb"} />
        </mesh>
        <group rotation={[0, Math.PI / 30, 0]}>
          <mesh geometry={nodes.computer.geometry}>
            <meshStandardMaterial color={"#e07a5f"} />
          </mesh>
          <mesh geometry={nodes.ears_1.geometry}>
            <meshStandardMaterial color={"#495057"} />
          </mesh>
          <mesh geometry={nodes.ears_2.geometry}>
            <meshStandardMaterial color={"#e07a5f"} />
          </mesh>
          <mesh geometry={nodes.computer_stripes.geometry}>
            <meshStandardMaterial color={"#f7ede2"} />
          </mesh>
          <RobotFaces nodes={nodes} />
        </group>
        <mesh geometry={nodes.keyboard.geometry}>
          <meshStandardMaterial color={"#c2a0ef"} />
        </mesh>
        <mesh geometry={nodes.mouse.geometry}>
          <meshStandardMaterial color={"#c2a0ef"} />
        </mesh>
        <mesh geometry={nodes.cubic.geometry} position={[-0.03, 0, 0]}>
          <meshStandardMaterial color={"#ff90b3"} />
        </mesh>
        <group>
          {[...Array(8)].map((_, i) => (
            <mesh key={i} geometry={nodes[`building${i + 1}`].geometry}>
              <meshStandardMaterial color={BUILDING_COLORS[i]} />
            </mesh>
          ))}
          {[...Array(8)].map((_, i) => (
            <mesh
              key={`door_dark${i + 1}`}
              geometry={nodes[`door_dark${i + 1}`].geometry}
            >
              <meshStandardMaterial color={DOOR_COLORS[i]} />
            </mesh>
          ))}
          {[...Array(8)].map((_, i) => (
            <mesh
              key={`door_light${i + 1}`}
              geometry={nodes[`door_light${i + 1}`].geometry}
            >
              <meshStandardMaterial color={DOOR_COLORS[i]} />
            </mesh>
          ))}
        </group>
        <group>
          <mesh
            geometry={nodes.city_shadow1.geometry}
            position={[-0.2, 0, -0.3]}
          >
            <meshStandardMaterial color={"#7d57e5"} />
          </mesh>
          <mesh
            geometry={nodes.city_shadow2.geometry}
            position={[0.2, 0.1, -1]}
          >
            <meshStandardMaterial color={"#7d57e5"} />
          </mesh>
          <mesh
            geometry={nodes.city_shadow3.geometry}
            position={[-0.2, 0.2, -2.5]}
          >
            <meshStandardMaterial color={"#7d57e5"} />
          </mesh>
          <mesh
            geometry={nodes.city_shadow4.geometry}
            position={[0.1, 0.1, -1]}
          >
            <meshStandardMaterial color={"#7d57e5"} />
          </mesh>
        </group>
        {/* Clouds */}
        <group position={[0, 0.6, 0]}>
          <group position={[-0.1, 0.2, -3]}>
            <mesh geometry={nodes.cloud1.geometry}>
              <meshToonMaterial color={"#f2a8ff"} />
            </mesh>
            <mesh geometry={nodes.cloud3.geometry}>
              <meshToonMaterial color={"#f2a8ff"} />
            </mesh>
            <mesh geometry={nodes.cloud5.geometry}>
              <meshToonMaterial color={"#f2a8ff"} />
            </mesh>
            <mesh geometry={nodes.cloud6.geometry}>
              <meshToonMaterial color={"#f2a8ff"} />
            </mesh>
            <mesh geometry={nodes.cloud7.geometry} position={[0.3, 0.2, 0]}>
              <meshToonMaterial color={"#f2a8ff"} />
            </mesh>
            <mesh geometry={nodes.cloud10.geometry}>
              <meshToonMaterial color={"#f2a8ff"} />
            </mesh>
            <mesh geometry={nodes.cloud11.geometry}>
              <meshToonMaterial color={"#f2a8ff"} />
            </mesh>
          </group>
        </group>
        {/* Light */}
        <mesh geometry={nodes.light_body.geometry}>
          <meshStandardMaterial color={"#ef7a85"} />
        </mesh>
        <Light
          bulbGeometry={nodes.bulb.geometry}
          lightGeometry={nodes.light.geometry}
        />
        {/* vinyl */}
        <group position={[0.35, 0.65, -0.6]} scale={1.1}>
          <mesh geometry={nodes.control1.geometry}>
            <meshStandardMaterial color={"#fa8893"} />
          </mesh>
          <mesh geometry={nodes.control2.geometry}>
            <meshStandardMaterial color={"#ffffff"} />
          </mesh>
          <mesh geometry={nodes.player.geometry}>
            <meshStandardMaterial color={"#fcd6f9"} />
          </mesh>
          <mesh geometry={nodes.sound_dark.geometry}>
            <meshStandardMaterial color={"#bfa9e4"} />
          </mesh>
          <mesh geometry={nodes.vinyl_stick.geometry}>
            <meshStandardMaterial color={"#e0cefd"} />
          </mesh>
          <mesh geometry={nodes.vinyl_stick2.geometry}>
            <meshStandardMaterial color={"#ffa9cb"} />
          </mesh>
          <group ref={vinylRef}>
            <mesh geometry={nodes.vinylcenter.geometry}>
              <meshStandardMaterial color={"#fa8893"} />
            </mesh>
            <mesh geometry={nodes.vinyl.geometry}>
              <meshStandardMaterial color={"#936bff"} />
            </mesh>
            <mesh geometry={nodes.vinyl_decor.geometry}>
              <meshStandardMaterial color={"#f992ad"} />
            </mesh>
            {/* flower */}
            <mesh geometry={nodes.petal.geometry}>
              <meshStandardMaterial color={"#fa8893"} />
            </mesh>
            <mesh geometry={nodes.pistil.geometry}>
              <meshStandardMaterial color={"#e0cefd"} />
            </mesh>
            <mesh geometry={nodes.stem.geometry}>
              <meshStandardMaterial color={"#936bff"} />
            </mesh>
          </group>
        </group>
      </group>
    </>
  );
};

const Light = ({ bulbGeometry, lightGeometry }) => {
  const [lightOn, setLightOn] = useState(false);
  const { gl } = useThree();

  const handleClick = (e) => {
    e.stopPropagation();
    setLightOn((prev) => !prev);
  };
  return (
    <>
      <mesh
        geometry={bulbGeometry}
        onClick={handleClick}
        onPointerOver={(event) => {
          event.stopPropagation();
          gl.domElement.style.cursor = "url('/pointer.svg'), default";
        }}
        onPointerOut={(event) => {
          event.stopPropagation();
          gl.domElement.style.cursor = 'url("/cursor.svg"), default';
        }}
      >
        <meshStandardMaterial color={"#fafac6"} toneMapped={!lightOn} />
      </mesh>
      <mesh geometry={lightGeometry} visible={lightOn}>
        <meshBasicMaterial
          color={"#fafac6"}
          transparent={true}
          opacity={0.3}
          toneMapped={false}
        />
      </mesh>
    </>
  );
};

useGLTF.preload("./models.glb");

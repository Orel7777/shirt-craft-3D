import { useRef } from "react";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={35}
      alphaTest={0.9}
      scale={7}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
      color="#262626"
      opacity={0.4}>
      <RandomizedLight
        amount={2}
        radius={5}
        intensity={0.45}
        ambient={0.7}
        position={[5, 5, -8]}
      />
      <RandomizedLight
        amount={2}
        radius={3}
        intensity={0.25}
        ambient={0.7}
        position={[-5, 5, -7]}
      />
      <RandomizedLight
        amount={2}
        radius={4}
        intensity={0.3}
        ambient={0.7}
        position={[0, 5, -6]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;

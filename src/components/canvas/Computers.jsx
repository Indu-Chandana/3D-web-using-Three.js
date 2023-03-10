import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber"; // canvas -> just an empty canvas allowing us to place somthing on it.
// they're going to help us to drW ON THIS CANVAS
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
//  useGLTF -> whitch is going to allow us to import 3D models
import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf"); // where can we get three models? search 3D model download 
  // where can we get three models? https://sketchfab.com/search?q=desktop&type=models 
  return (
    // vid -> 2:50:00
    // when creating 3jselements we are not gonna start with a div rather
    // we are going to start with mesh.
    <mesh>
      {/* inside that mesh we have to create a light otherwise we wouldn't be able to see anything */}
      {/* https://docs.pmnd.rs/react-three-fiber/getting-started/introduction */}
      <hemisphereLight intensity={0.15} groundColor="black" />
       {/* This is the main light */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* noww create point light (you can see on monitor whe u move around that light move as well) */}
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={0.75} // make it bit smaller
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// We load it into our react 3 fiber canvas
const ComputersCanvas = () => {
  return (
   
      <Canvas
        frameloop="demand"
        shadows
        // dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }} // This is most important part of every 3D scene. It is where are we looking at this model ( what is the angle, we are looking )
        // [20, 3, 5] = [x, y, z]
        // fov -> field off view -- How wide our field of view is going to be
        // In 3D world -> very important where the camara and light are comming from
        gl={{ preserveDrawingBuffer: true }}
      >
         <Suspense fallback={<CanvasLoader />}>
        {/* Suspense comming from react, This allows us to have loader while our model is loading... */}

        {/* OrbitControls -> these orbit controls allow us to move the model left and right */}
        <OrbitControls
          enableZoom={false} // don't want to zoom.
          maxPolarAngle={Math.PI / 2} // Now we can only rotate  it around a specific angle.
          minPolarAngle={Math.PI / 2} // Now we can only rotate  it around a specific angle.
        />
        <Computers />

        <Preload all />
        </Suspense>
      </Canvas>
   
  );
};

export default ComputersCanvas;

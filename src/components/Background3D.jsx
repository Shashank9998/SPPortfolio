// import { Canvas, useFrame } from '@react-three/fiber';
// import { Points, PointMaterial } from '@react-three/drei';
// import * as random from 'maath/random/dist/maath-random.esm';
// import React, { useState, useRef } from 'react';

// function StarField() {
//   const ref = useRef();
//   const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 15;
//     ref.current.rotation.y -= delta / 20;
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled>
//         <PointMaterial transparent color="#3b82f6" size={0.005} sizeAttenuation={true} depthWrite={false} />
//       </Points>
//     </group>
//   );
// }

// const Background3D = () => (
//   <Canvas camera={{ position: [0, 0, 1] }}>
//     <StarField />
//   </Canvas>
// );

// export default Background3D;


// import { Canvas, useFrame } from '@react-three/fiber';
// import { Points, PointMaterial, Float } from '@react-three/drei';
// import * as random from 'maath/random/dist/maath-random.esm';
// import React, { useState, useRef } from 'react';

// function StarField({ color, size, count, speed }) {
//   const ref = useRef();
//   // Generating a sphere of points
//   const [sphere] = useState(() => random.inSphere(new Float32Array(count), { radius: 1.5 }));

//   useFrame((state, delta) => {
//     // Rotation based on time
//     ref.current.rotation.x -= delta / (10 * speed);
//     ref.current.rotation.y -= delta / (15 * speed);
    
//     // Subtle mouse parallax effect
//     ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 3]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled>
//         <PointMaterial 
//           transparent 
//           color={color} 
//           size={size} 
//           sizeAttenuation={true} 
//           depthWrite={false} 
//           alphaTest={0.5}
//           opacity={0.8}
//         />
//       </Points>
//     </group>
//   );
// }

// const Background3D = () => {
//   return (
//     <div className="w-full h-full bg-[#020617]"> {/* Deep dark blue base */}
//       <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
//         {/* Floating effect for the entire scene */}
//         <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          
//           {/* Layer 1: Primary Blue Stars (Small & Fast) */}
//           <StarField color="#3b82f6" size={0.003} count={3000} speed={1} />
          
//           {/* Layer 2: Purple Nebula Dust (Larger & Slower) */}
//           <StarField color="#a855f7" size={0.006} count={1500} speed={2} />
          
//           {/* Layer 3: Distant White Highlights */}
//           <StarField color="#ffffff" size={0.002} count={1000} speed={0.5} />
          
//         </Float>
//       </Canvas>
      
//       {/* Overlay Gradient for "Depth" - Makes the center brighter */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />
//     </div>
//   );
// };

// export default Background3D;

import React, { useEffect, useState } from "react";

const Background3D = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const movePointer = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", movePointer);

    return () => {
      window.removeEventListener("mousemove", movePointer);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <div
        className="absolute w-64 h-64 rounded-full blur-3xl bg-blue-500/20 transition-all duration-200"
        style={{
          left: position.x - 120,
          top: position.y - 120,
        }}
      />
    </div>
  );
};

export default Background3D;
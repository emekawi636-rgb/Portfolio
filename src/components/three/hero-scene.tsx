"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x = -state.clock.elapsedTime * 0.08;
      wireRef.current.rotation.z = state.clock.elapsedTime * 0.12;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group>
        <mesh ref={meshRef} position={[3, 1, -2]}>
          <icosahedronGeometry args={[0.8, 1]} />
          <meshStandardMaterial
            color="#3B82F6"
            transparent
            opacity={0.15}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
        <mesh ref={wireRef} position={[-3, -1, -1]}>
          <octahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial
            color="#06B6D4"
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>
        <mesh position={[2, -2, -3]}>
          <torusGeometry args={[0.4, 0.15, 16, 32]} />
          <meshStandardMaterial
            color="#7C3AED"
            transparent
            opacity={0.2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </group>
    </Float>
  );
}

function ParticleField() {
  const count = 200;
  const meshRef = useRef<THREE.Points>(null);

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const ringOffset = (i % 7) - 3;
      pos[i * 3] = Math.sin(angle) * 10 + ringOffset * 0.4;
      pos[i * 3 + 1] = Math.cos(angle * 1.3) * 8 + ((i % 5) - 2) * 0.5;
      pos[i * 3 + 2] = (i % 17 - 8) * 0.7;
      sz[i] = ((i % 8) + 1) * 0.24;
    }
    return [pos, sz];
  }, [count]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#3B82F6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function GridPlane() {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.elapsedTime * 0.5) % 2;
    }
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[30, 30, "#3B82F6", "#1B1B1F"]}
      position={[0, -3, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#3B82F6" />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#7C3AED" />
        <FloatingGeometry />
        <ParticleField />
        <GridPlane />
        <Stars radius={50} depth={50} count={1000} factor={3} saturation={0.2} fade speed={0.5} />
      </Canvas>
    </div>
  );
}

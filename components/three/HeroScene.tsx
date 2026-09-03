'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Html, OrbitControls, Sparkles } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { Group } from 'three';
import LPGCylinder from './LPGCylinder';

function SceneLoader() {
  return <Html center><div className="scene-loader" role="status">LOADING CYLINDER...</div></Html>;
}

function SceneContent({ scale }: { scale: number }) {
  const rig = useRef<Group>(null);
  const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  useFrame((state) => { if (rig.current) { rig.current.rotation.x = state.pointer.y * 0.04; rig.current.rotation.z = -state.pointer.x * 0.035; } });
  return <>
    <ambientLight intensity={1.4} /><directionalLight position={[4, 5, 4]} intensity={3.4} color="#fff4e5" />
    <pointLight position={[-3, 1, 2]} intensity={7} distance={8} color="#e21b16" />
    <pointLight position={[3, -2, -1]} intensity={4} distance={7} color="#3a9bff" />
    <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.5}><group ref={rig}><LPGCylinder scale={scale} /></group></Float>
    <Sparkles count={isMobile ? 12 : 28} scale={[5, 5, 4]} size={2.2} speed={0.25} color="#f5d547" opacity={0.5} />
    <Environment preset="city" environmentIntensity={0.55} />
    <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} maxPolarAngle={Math.PI / 1.8} minPolarAngle={Math.PI / 2.8} enableDamping={false} />
  </>;
}
export default function HeroScene({ scale = 1 }: { scale?: number }) { return <div className="three-scene"><Canvas dpr={[1, 1.15]} camera={{ position: [0, 0.2, 5.2], fov: 35 }} gl={{ antialias: false, powerPreference: 'high-performance' }}><Suspense fallback={<SceneLoader />}><SceneContent scale={scale} /></Suspense></Canvas></div>; }

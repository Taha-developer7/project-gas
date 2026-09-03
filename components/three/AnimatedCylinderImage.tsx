'use client';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Texture } from 'three';

export default function AnimatedCylinderImage({ scale = 1 }: { scale?: number }) {
  const group = useRef<Group>(null);
  const texture = useTexture('/FEFE-removebg-preview.png') as Texture;

  useFrame((state) => {
    if (!group.current) return;
    const time = state.clock.getElapsedTime();
    group.current.rotation.y += 0.003;
    group.current.rotation.x = state.pointer.y * 0.04 + Math.sin(time * 0.5) * 0.025;
    group.current.rotation.z = -state.pointer.x * 0.035;
    group.current.position.y = Math.sin(time * 0.8) * 0.045;
  });

  return <group ref={group} scale={scale}>
    <sprite scale={[6.2, 6.2, 1]}>
      <spriteMaterial map={texture} transparent alphaTest={0.04} depthWrite={false} />
    </sprite>
  </group>;
}

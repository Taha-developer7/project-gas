'use client';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { Box3, Group, Vector3 } from 'three';
import { cylinderConfig } from '@/lib/config';

export default function LPGCylinder({ scale = 1, reduced = false }: { scale?: number; reduced?: boolean }) {
  const group = useRef<Group>(null);
  const { scene } = useGLTF(cylinderConfig.modelPath);
  const model = useMemo(() => scene.clone(true), [scene]);
  const bounds = useMemo(() => new Box3().setFromObject(model), [model]);
  const center = useMemo(() => bounds.getCenter(new Vector3()), [bounds]);
  const size = useMemo(() => bounds.getSize(new Vector3()), [bounds]);
  const normalizedScale = (cylinderConfig.targetHeight / Math.max(size.y, 0.001)) * scale;

  useMemo(() => {
    model.traverse((object) => {
      if ('castShadow' in object) object.castShadow = true;
      if ('receiveShadow' in object) object.receiveShadow = true;
    });
  }, [model]);

  useFrame((state) => {
    if (!group.current) return;
    const time = state.clock.getElapsedTime();
    group.current.rotation.y += reduced ? 0.001 : 0.003;
    group.current.rotation.x += (state.pointer.y * 0.04 - group.current.rotation.x) * 0.04;
    group.current.rotation.z += (-state.pointer.x * 0.035 - group.current.rotation.z) * 0.04;
    group.current.position.y = cylinderConfig.verticalOffset + Math.sin(time * 0.8) * 0.045;
  });

  return <group ref={group} scale={normalizedScale} rotation={cylinderConfig.rotation}>
    <primitive object={model} position={[-center.x, -center.y, -center.z]} />
  </group>;
}

useGLTF.preload(cylinderConfig.modelPath);

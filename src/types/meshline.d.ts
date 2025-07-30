// types/meshline.d.ts

declare module 'meshline' {
  import * as THREE from 'three';

  export class MeshLineGeometry extends THREE.BufferGeometry {
    setPoints(points: THREE.Vector3[] | number[]): void;
  }

  export class MeshLineMaterial extends THREE.ShaderMaterial {
    lineWidth: number;
    map: THREE.Texture;
    useMap: boolean;
    repeat: [number, number];
  }
}

// 🔥 Ini yang penting untuk JSX support
declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

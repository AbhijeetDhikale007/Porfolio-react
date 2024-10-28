import { useGLTF } from '@react-three/drei'

export function M3(props) {
  const { scene } = useGLTF('/M3/Bmw_m3.glb')

  return <primitive object={scene} {...props} />
}
import './App.css'
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import ExampleUI from "./components/UI/Example";
import MainScene from "./components/scenes/Main";

function App() {
    return (
        <Canvas camera={{
            position: [3, 3, 3]
        }}>
            <ExampleUI/>
            <MainScene/>
            <OrbitControls/>
        </Canvas>
    )
}

export default App

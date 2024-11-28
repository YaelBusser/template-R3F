import {PivotControls} from "@react-three/drei";
import {useRef} from "react";
import {Quaternion, Vector3} from "three";

// Composant générique pour le dev
// Le but est de pouvoir récupérer par exemple la nouvelle position du modèle
const PivotControlsUtil = ({children, ...props}: any) => {
    const {scale} = props;

    // Pour accéder aux propriétés du modèle on doit l'imbriquer dans un group car avec juste children on peut pas
    // onDragEnd => Quand on a finit de le positionner
    const ref: any = useRef();
    const getNewPosition = () => {
        {
            /*
                Ne marche pas (affiche tjrs 0) car le PivotControls englobe le group,
                Le group va toujours avoir une position à [0, 0, 0] car il garde la position de son parent PivotControls
                Donc on doit déterminer la valeur absolue du group => récupérable avec la position globale dans le monde 3D
                CODE :
                    const {position, rotation} = ref.current;
                    console.log(`PivotControls - ${children} - position = [${position.x}, ${position.y}, ${position.z}]`)
                    console.log(`PivotControls - ${children} - rotation = [${rotation.x}, ${rotation.y}, ${rotation.z}]`)
             */
        }
        const position = new Vector3();
        const rotation = new Quaternion(); // Quaternion car utilisable par getWorldQuaternion mais pareil qu'une rotation
        ref.current.getWorldPosition(position);
        ref.current.getWorldQuaternion(rotation);
        console.log(`PivotControls - position = [${position.x}, ${position.y}, ${position.z}]`)
        console.log(`PivotControls - rotation = [${rotation.x}, ${rotation.y}, ${rotation.z}]`)
    }

    return (
        <PivotControls scale={scale} depthTest={false} onDragEnd={() => getNewPosition()}>
            <group ref={ref}>
                {children}
            </group>
        </PivotControls>
    )
}

export default PivotControlsUtil;
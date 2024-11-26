import {createContext, useContext, useRef, useState} from "react";

// @ts-ignore
export const ExampleContext = createContext();

/*
    A mettre dans le main.tsx pour placer le context au dessus des composants et c'est ici qu'on définit les variables
    du context
 */
export const ExampleProvider = ({children}: any) => {
    const [color, setColor] = useState("white");
    const ref = useRef();
    return (
        <ExampleContext.Provider value={{color, setColor, ref}}>
            {children}
        </ExampleContext.Provider>
    )
}

/*
    A utiliser dans les composants qui ont besoin d'utiliser les variables
 */
export const useCube = () => {
    const context = useContext(ExampleContext);
    if (context === undefined) {
        throw new Error("theme must be used within a provider")
    }
    return context;
}
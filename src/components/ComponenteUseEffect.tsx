import { useEffect, useState } from "react";

export const ComponenteUseEffect = () => {
    //hook useState: permite cambiar el estado de un componente, variable, arreglo, etc
    const [bandera, setBandera] = useState<boolean>(false);

    //Función para cambiar el estado de la bandera
    const cambiar = (): void => {
        setBandera(!bandera); //false
        //setBandera(!true)  ---> false
    }

    //hook useEffect: permite ejecutar código en segundo plano
    //1. Se ejecuta cuando el componente se renderiza  - se carga la página
    //2. Se ejecuta cuando tiene una lista de dependencias

    useEffect(() => {
        //Bloque de código a ejecutar
        console.log("Desde useEffect");
    },[bandera]); //lista de dependencias

    return (
        <div>
            <h3>Hook - UseEffect</h3>
            <button onClick={cambiar}>Cambiar</button>
        </div>
    )
}

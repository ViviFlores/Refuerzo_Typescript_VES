//rafc+enter
export const TiposBasicos = () => {
    //Tipos de Datos
    //variables
    //let nombre: string | number = "Viviana";
    //constante
    const nombre: string = "Viviana";
    const edad: number = 32;
    const donanteOrganos: boolean = true;
    //arreglos
    const poderes: string[] =['velocidad', 'volar', 'invisibilidad'];
    //agregar datos en el arreglo
    poderes.push('fuerza');

    return (
        <div>
            <h3>Tipos Básicos</h3>
            {nombre}, {edad}, {donanteOrganos ? 'donante' : 'no donante'}
            <br/>
            {poderes.join(', ')}
        </div>
    )
}


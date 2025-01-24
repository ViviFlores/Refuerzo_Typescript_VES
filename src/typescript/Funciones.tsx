//rafc+enter
export const Funciones = () => {

    //Funciones sin parámetros
    /*const sumar = (): number => {
        return 6 + 1;
    }

    const informacion = (): void => {
        console.log('Hola Mundo');
    }*/

    //Funciones con parámetros
    const sumar = (num1: number, num2: number): number => {
        return num1 + num2; //12
    }

    return (
        <div>
            <h3>Funciones</h3>
            <span>El resultado es: {sumar(5, 7)}</span>
        </div>
    )
}

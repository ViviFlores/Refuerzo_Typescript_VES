import { useState } from "react";

export const Contador = () => {
  //hook useState: cambiar el estado de un componente, variable, arreglo, etc
  //estructura useState: const[variable, setVariable] = useState<tipo de dato>(valor inicial);
  const [valor, setValor] = useState<number>(0);

  //Función que se encargue de cambiar el estado de valor
  const contador = (numero: number): void => {
    setValor(valor + numero);  //10
    //setValor(10 + -1)=10-1=9
  }

  return (
    <div>
      <h3>Contador: <small>{valor}</small></h3>
      <button
        className="btn btn-primary"
        onClick={() => contador(1)}>+1
      </button>
      &nbsp;
      <button
        className="btn btn-primary"
        onClick={() => contador(-1)}>-1
      </button>
    </div>
  )
}

import { useState } from "react"




export const useCounter = ( inicialValue = 1) => {

    const [counter, setCounter] = useState(inicialValue);

    const increment = ( value: number = 1 ) => {
        setCounter( counter + value );
    }

    const decrement = ( value: number = 1 ) => {
        if( counter === 1 ) return;
        setCounter( counter - value );
    }

  return (
    {
     //properties
      counter,
      //methods
      increment,
      decrement
    }
  )
}

import { useCounter } from "@/hook/useCounter";
import { useMemo } from "react";


const heavyStuff =( iterationNumber:number  )=>{
    console.log("Heavy stuff stared")

    for (let index=0; index < iterationNumber; index++ ){
        console.log("ahi vamos....")
    }

    console.timeEnd("Heavy stuff stared")


    return `${iterationNumber} iteraciones realizadas`
}

export const MemoCounter = () => {
  const { counter, increment } = useCounter(40_0);
  const { counter: counter2, increment:increment2 } = useCounter(10);

  // Cada vez que cualquier estado cambie (counter o counter2), el 
  // componente se re-renderiza por completo. Esto provoca que heavyStuff 
  // se ejecute innecesariamente incluso si counter no ha cambiado.
  //const myHevyValue =  heavyStuff(counter);

  // De esta manera, heavyStuff SOLO se ejecuta si 'counter' cambia.
  // Si haces clic en increment2, el componente se renderiza pero usa el valor cacheado.
  const myHevyValue = useMemo(() => heavyStuff(counter),[counter]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2x1 font-bold">Memo - useMemos {myHevyValue} </h1>

      <h4>Counter: {counter}</h4>
      <h4>Counter: {counter2}</h4>

      <button className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer"
         onClick={() => increment()}>+1</button>
         
      <button className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer"
         onClick={() => increment2()}>+1 - Counter2</button>
    </div>
  );
};

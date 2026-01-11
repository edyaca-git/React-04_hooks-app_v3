import { useCallback, useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubTitle } from "./ui/MySubTitle";

 
export const MemoHook = () => {

    const [title, setTitle] = useState("Hola");
    const [subTitle, setSubTitle] = useState("Mundo");

    const handleMyAPICall = useCallback (()=>{
        console.log('Llamar mi API',subTitle)
    },[subTitle])

  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h1 className="text-2xl font-thin text-white">
            Memo Hook
        </h1>

        <MyTitle title={title}/>
        <MySubTitle subTitle={subTitle}
         callMyAPI={handleMyAPICall}
        
        />


        <button 
            className="bg-blue-500 text-white px-2 rounded-md cursor-pointer"
            onClick={ () => setTitle( "Hello," + new Date().getTime() ) }
        >
            Cambiar titulo
        </button>
        <button 
            className="bg-blue-500 text-white px-2 rounded-md cursor-pointer"
            onClick={ ()=> setSubTitle("World")}

        > 
            Cambiar subtitulo
        </button>

    </div>
  )
}

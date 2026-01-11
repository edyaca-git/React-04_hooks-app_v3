import { use,  type Usable } from "react"
import {  type User } from "./api/get-user.action"

 // se comento para poder hacer lo misco con el use
// export const ClientInformation = ({id}: {id:number}) => {

//     useEffect(()=>{
//         getUserAction(id)
//         .then(user => console.log(user))
//     },[id]);

interface Props {
    getUser: Usable<User>;
}

 
export const ClientInformation = ({getUser}: Props) => {
    
    const user = use(getUser);
    console.log(user);
  return (
    <div className="bg-gradient flex-col gap-4">
        <h2 className="text-4xl font-thin text-white">
            { user.name}
        </h2>
        <p className="text-white text-2xl">
            { user.location}
        </p>
        <p className="text-white text-xl">
           { user.role }
        </p>

    </div>
  )
}

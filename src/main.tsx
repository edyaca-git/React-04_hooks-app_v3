import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
// import { HookApp } from './HookApp'
import { Toaster } from "sonner";

import "./index.css";
// import { InstagromApp } from './07-useOptimistic/InstagromApp'
import { ClientInformation } from "./08-use-suspense/ClientInformation";
import { getUserAction } from "./08-use-suspense/api/get-user.action";
// import { MemoCounter } from './06-memos/ui/MemoCounter'
// import { Toggle } from './00-pruebas/Toggle'
// import Shipments from './00-pruebas/Shipments'
// import { MemoHook } from './06-memos/MemoHook'
// import { ScrambleWordsUseReducer } from './05-useReducer/ScrambleWordsUseReducer'
// import { ScrambleWordsUseStates } from './05-useReducer/ScrambleWordsUseStates'

// import { TaskAppConuseState } from './05-useReducer/TaskAppConuseState'
// import { TaskAppConReducer } from './05-useReducer/TaskAppConReducer'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { TrafficLightWithEffectHook } from './02-useEffect/TrafficLightWithEffectHook'

// import TrafficLightWithEffect from './02-useEffect/TrafficLightWithEffect'
//import TrafficLight from './01-useState/TrafficLight'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />
    {/* <HookApp /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithEffectHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TaskAppConuseState /> */}
    {/* <TaskAppConReducer /> */}
    {/* <ScrambleWordsUseStates /> */}
    {/* <ScrambleWordsUseReducer /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter/> */}
    {/* <Toggle/> */}
    {/* <Shipments/> */}
    {/* <InstagromApp/> */}
    <Suspense
      fallback={
        <div className="bg-gradient flex flex-col">
          <h1 className="text-2xl">Cargando...</h1>
        </div>
      }
    >
      <ClientInformation getUser={getUserAction(1000)} />
    </Suspense>
  </StrictMode>
);

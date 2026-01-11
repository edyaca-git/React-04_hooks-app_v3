# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Temas puntuales
Está sección tiene por objetivo que aprendamos sobre diferentes técnicas para mejorar la experiencia de nuestros usuarios y la velocidad de nuestras aplicaciones.
Puntualmente veremos:
1.	Memorización
2.	Hooks de memorización como:
a.	useMemo
b.	useCallback
3.	useOptimistic para hacer actualizaciones en pantalla rápidas
4.	useTransaction para evitar bloqueos de UI
5.	Simular fallos en posteos optimistas para hacer reversiones
6.	Nueva api Use
7.	Componente Suspense
8.	Y más
======= N U E V O     P R O Y E C T O =======
Esta sección tiene por objetivo reforzar el conocimiento de los hooks tradicionales y especializarlos en los "custom hooks"
Proyecto React hooksApp
1.- npm create vite
    o  Project name:
    |  04_hooks-app
    o  Select a framework:
    |  React
    o  Select a variant:
    |  TypeScript + SWC
    
    cd 04_hooks-app
    npm install
    npm run dev
2.- eliminar :
     - assets
     - App.css
     - App.tsx
    quitar contenido de
     - index.css
    quitar las llamadas que ya no existen
     - main.tsx
    crear en  src
     - HookApp.tsx
3.- Los estilos se haran con
      o  https://tailwindcss.com/
         click en [Get started] y asegurate que este seleccionado [Using Vite]
      o  instalar tailwindcss
         C:\Projects\Git\React\04_hooks-app>npm install tailwindcss @tailwindcss/vite
         click en [Get started] y asegurate que este seleccionado [Using Vite]
      o  en el archivo vite.config.ts agregar las lineas (esta)
            import { defineConfig } from 'vite'
            import tailwindcss from '@tailwindcss/vite'   (esta)

            export default defineConfig({
            plugins: [
                tailwindcss(),      (esta)
            ],
            })     
      o  en el index.css agregar
          @import "tailwindcss";
        y agregas esta linea que contiene muchos stilos de Tailwind que dio el instructor
        .bg-gradient {
        @apply bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 min-h-screen flex items-center justify-center p-4 text-white;
        }     

        E J E R C I C I O     T E R M I N A D O
El ejercicio termino en el paso anterior SEGUIMOS CON 
LA PARTE II [useReducer] que se grabara como [04_hooks-app_v2]
- inicia la version v.2
4.-  Instalar componentes [shadcn]
     a.- entrar  https://ui.shadcn.com/
     b.- ir a documentacion [docs] y seleccionas [Vite]
     c.- el proyecto ya esta creado, ya instalamos [tailwindcss]
     d.- en el [tsconfig.json] y agregamos la parte de [compilerOptions]
            {
            "files": [],
            "references": [
                {
                "path": "./tsconfig.app.json"
                },
                {
                "path": "./tsconfig.node.json"
                }
            ],
            "compilerOptions": {
                "baseUrl": ".",
                "paths": {
                "@/*": ["./src/*"]
                }
            }
            }     
     e.- en el [tsconfig.app.json] y agregamos en [compilerOptions]
            {
            "compilerOptions": {
                // ...
                "baseUrl": ".",
                "paths": {
                "@/*": [
                    "./src/*"
                ]
                },
                // ...
            }
            }      
     f.- instalar
         C:\Projects\Git\React\04_hooks-app_v2>npm install -D @types/node
     g.- en el [vite.config.ts] y agregamos 

            import path from "path"
            ---
            ---

            // https://vite.dev/config/
            export default defineConfig({
            plugins: [react(), tailwindcss()],
            resolve: {
                alias: {
                "@": path.resolve(__dirname, "./src"),
                },
            },
            })     
     h.- inicializamos los componentes [shadcn]
         C:\Projects\Git\React\04_hooks-app_v2>npx shadcn@latest init
         Need to install the following packages:
         shadcn@3.6.2
         Ok to proceed? (y) y
        √ Preflight checks.
        √ Verifying framework. Found Vite.
        √ Validating Tailwind CSS config. Found v4.
        √ Validating import alias.
        ? Which color would you like to use as the base color? » - Use arrow-keys. Return to submit.
        >   Neutral
            Gray
            Zinc
            Stone
            Slate     
        elijo [Neutral] y enter
     i.- ejecutamos
         C:\Projects\Git\React\04_hooks-app_v2>npx shadcn@latest add
            ? Which components would you like to add? » Space to select. A to toggle all. Enter to submit.
            ( ) ↑ breadcrumb
            (*)   button
            ( )   button-group
            ( )   calendar
            (*)   card
            ( )   carousel
            ( )   chart
            (*)   checkbox
            ( )   collapsible
            ( ) ↓ command      
            Seleccionamos los componente que vamos a instalar y utilizar con la barra estaciadora y al final <enter>   
            √ Created 4 files:
            - src\components\ui\button.tsx
            - src\components\ui\card.tsx
            - src\components\ui\checkbox.tsx
            - src\components\ui\input.tsx
            crea el directorio con los componentes 
     j.- HERRAMIENTAS DE INTELIGENCIA ARTIFICIAL que utilizo el instructor para generar el codigo 
         que nos compartio en su gits y lo agregamos al componente [TaskApp.tsx]
         https://gist.github.com/Klerith/cb9a47703aea48d3585bfa781b030c4a
         las dos son free y solo dejan hacer 5 diseños por mes
            https://v0.app/
            https://lovable.dev/
            crea el directorio con los componentes 
     k.- para evitar errores de manipulacion del localStorage del navgador instalaremos
         1.-  https://zod.dev/
         2.- C:\Projects\Git\React\04_hooks-app_v2>npm install zod
         3.- agregamos la importacion en el modulo donde se usara
             import * as z from "zod";
     l.- para usar una animacion de confeti 
         1.-  https://www.npmjs.com/package/canvas-confetti
         2.- agregas el [import] en el modulo donde se usara
                import confetti from 'canvas-confetti';   -- Nota sobre 'canvas-confetti' oprime CTRL + .
                                                             e click [install '@types/canvas-confetti']

        E J E R C I C I O     T E R M I N A D O
El ejercicio termino en el paso anterior SEGUIMOS CON diferentes técnicas para mejorar la experiencia de nuestros usuarios y la velocidad de nuestras aplicaciones.
LA PARTE III 
  o  Memorización
  o  Hooks de memorización como:
     o  useMemo
     o  useCallback
que se grabara como [04_hooks-app_v3]
- inicia la version v.3
5.-  para mandar notificaciones en pantalla
         1.-  https://sonner.emilkowal.ski/
         2.- instalar
             C:\Projects\Git\React\04_hooks-app_v3> npm install sonner
         3.- en el archivo de hooksApp poner la importacion
             import { Toaster, toast } from 'sonner'
             // ... nota para este ejercicio se importo en el main             
             <StrictMode>
             <Toaster/>
         4.- lo importo en el archivo donde lo voy a usar 
             import { toast } from 'sonner'
P R O Y E C T O     T E R M I N A D O

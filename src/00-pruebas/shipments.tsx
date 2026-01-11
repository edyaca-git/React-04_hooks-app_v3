// import { useState } from "react";
// import FutureShipments from "./futureShipments";
// import { couriers, packages } from "./data";
// import type { Package, Courier } from "./data";

// function Shipments() {
//   const [courierData, setCourierData] = useState<Courier[]>(
//     couriers.map((c) => ({ ...c, assigned: [] }))
//   );
//   const [unassigned, setUnassigned] = useState<Package[]>(packages);
//   const [future, setFuture] = useState<Package[]>([]);

//   const capacityLeft = (courier: Courier): number =>
//     courier.maxPackages - courier.assigned.length;

//   const assignPackages = () => {
//     const updatedCouriers = [...courierData];
//     const remaining = [...unassigned];

//     // Paso 1: asegurar mínimo 1 por courier
//     for (let i = 0; i < updatedCouriers.length; i++) {
//       const courier = updatedCouriers[i];
//       if (
//         courier.assigned.length === 0 &&
//         remaining.length > 0 &&
//         capacityLeft(courier) > 0
//       ) {
//         const pkg = remaining.shift()!;
//         courier.assigned.push({ ...pkg, status: "On the way" });
//       }
//     }

//     // Paso 2: asignar el resto priorizando mayor capacidad
//     while (remaining.length > 0) {
//       updatedCouriers.sort((a, b) => capacityLeft(b) - capacityLeft(a));
//       const nextPkg = remaining.shift()!;
//       let placed = false;

//       for (const c of updatedCouriers) {
//         if (capacityLeft(c) > 0) {
//           c.assigned.push({ ...nextPkg, status: "On the way" });
//           placed = true;
//           break;
//         }
//       }

//       if (!placed) {
//         setFuture((prev) => [...prev, { ...nextPkg, status: "Delayed" }]);
//       }
//     }

//     setCourierData(updatedCouriers);
//     setUnassigned([]);
//   };

//   const completePackage = (courierIndex: number, pkgIndex: number) => {
//     const updated = [...courierData];
//     updated[courierIndex].assigned[pkgIndex].status = "Completed";
//     setCourierData(updated);
//   };

//   const delayPackage = (courierIndex: number, pkgIndex: number) => {
//     const updated = [...courierData];
//     const delayed = updated[courierIndex].assigned.splice(pkgIndex, 1)[0];
//     delayed.status = "Delayed";
//     setFuture((prev) => [...prev, delayed]);
//     setCourierData(updated);
//   };

//   return (
//     <div>
//      <h2 className="text-2xl font-semibold mt-6 mb-2">Today</h2>
//       <button
//         className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer"
//         onClick={assignPackages}
//       >
//         Assign
//       </button>

//       <table className="w-full mt-4 border border-gray-300 rounded-md overflow-hidden shadow-sm">
//         <thead className="bg-gray-100 text-left">
//           <tr>
//             <th className="px-4 py-2">Delivery Man Name</th>
//             <th className="px-4 py-2">Package NAME</th>
//             <th className="px-4 py-2 text-yellow-600">STATUS</th>
//             <th className="px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {courierData.map((courier, i) =>
//             courier.assigned.length === 0 ? (
//               <tr key={`${courier.name}-empty`} className="border-t">
//                 <td className="px-4 py-2 font-medium">{courier.name}</td>
//                 <td colSpan={3} align="center">
//                   No packages
//                 </td>
//               </tr>
//             ) : (
//               courier.assigned.map((pkg, j) => (
//                 <tr key={`${courier.name}-${pkg.name}`} className="border-t">
//                   <td className="px-4 py-2 font-medium">{courier.name}</td>
//                   <td
//                     className={`px-4 py-2 ${
//                       pkg.status === "Completed"
//                         ? "text-green-600 underline"
//                         : ""
//                     }`}
//                   >
//                     {pkg.name}
//                   </td>
//                   <td className="px-4 py-2 text-yellow-600 text-center">
//                     {pkg.status}
//                   </td>
//                   <td className="px-4 py-2 space-x-2">
//                     <button
//                       className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
//                       onClick={() => completePackage(i, j)}
//                     >
//                       COMPLETE
//                     </button>
//                     <button
//                       className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
//                       onClick={() => delayPackage(i, j)}
//                     >
//                       DELAY
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )
//           )}
//         </tbody>
//       </table>

//       <FutureShipments future={future} />
//     </div>
//   );
// }

// export default Shipments;



import { useState } from "react";
import FutureShipments from "./futureShipments";
import { couriers, packages as initialPackages } from "./data";
import type { Package, Courier } from "./data";

function Shipments() {
  const [courierData, setCourierData] = useState<Courier[]>(
    couriers.map((c) => ({ ...c, assigned: [] }))    
  );
  // Esto se ejecutará en cada renderizado
  console.log("courierData en render 1:", courierData);

  const [unassigned, setUnassigned] = useState<Package[]>(initialPackages);
  console.log("unassigned en render:", unassigned);

  const [future, setFuture] = useState<Package[]>([]);
  console.log("future en render:", future);

  const capacityLeft = (courier: Courier): number =>
    courier.maxPackages - courier.assigned.length;

  const assignPackages = () => {
    // Trabajamos sobre copias para no mutar el estado directamente
    // uso JSON.stringify(courierData) los console.log para que convierta en string 
    // y vea tal y cual estaba el objeto como cadena ya que de no usarlo para cuando lo veo ya se actualizo
    // el objeto con los datos
    console.log("assignPackages courierData en render:", JSON.stringify(courierData));
    const updatedCouriers = courierData.map(c => ({ ...c, assigned: [...c.assigned] }));
    console.log("creado updatedCouriers en render:", JSON.stringify(updatedCouriers));

    const remaining = [...unassigned];
    const delayed: Package[] = [];

    // Paso 1: Asegurar mínimo 1 por cada repartidor que tenga espacio
    updatedCouriers.forEach(courier => {
    console.log("antes updatedCouriers en render:", JSON.stringify(updatedCouriers));
      if (courier.assigned.length === 0 && remaining.length > 0 && capacityLeft(courier) > 0) {
        console.log("remaining en render:", JSON.stringify(remaining));
        const pkg = remaining.shift()!;
        console.log("pkg en render:", JSON.stringify(pkg));
        courier.assigned.push({ ...pkg, status: "On the way" });
        console.log("despues updatedCouriers en render:", JSON.stringify(updatedCouriers));
      }
    });

    console.log("despues assignPackages courierData  :", courierData);
    console.log("despues assignPackages updatedCouriers  :", updatedCouriers);
    console.log("despues assignPackages remaining  :", remaining);

    // Paso 2: Asignar el resto por prioridad de capacidad
    while (remaining.length > 0) {
      // Ordenamos para dar paquetes al que tiene más espacio libre
      updatedCouriers.sort((a, b) => capacityLeft(b) - capacityLeft(a));
      
      const nextPkg = remaining.shift()!;
      const bestCourier = updatedCouriers.find(c => capacityLeft(c) > 0);

      if (bestCourier) {
        bestCourier.assigned.push({ ...nextPkg, status: "On the way" });
      } else {
        // Si no hay espacio en ningún repartidor, va a futuro
        delayed.push({ ...nextPkg, status: "Delayed" });
      }
    }

    setCourierData(updatedCouriers);
    setUnassigned([]); // Vaciamos la lista de hoy
    setFuture(prev => [...prev, ...delayed]);
  };

  const completePackage = (courierIndex: number, pkgIndex: number) => {
    const updated = [...courierData];
    // Clonamos el objeto del paquete para evitar mutación directa
    const pkg = { ...updated[courierIndex].assigned[pkgIndex], status: "Completed" as const };
    updated[courierIndex].assigned[pkgIndex] = pkg;
    setCourierData(updated);
  };

  const delayPackage = (courierIndex: number, pkgIndex: number) => {
    const updated = [...courierData];
    // Extraemos el paquete
    const [removedPkg] = updated[courierIndex].assigned.splice(pkgIndex, 1);
    setFuture((prev) => [...prev, { ...removedPkg, status: "Delayed" }]);
    setCourierData(updated);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Today's Deliveries</h2>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition-colors disabled:bg-gray-400"
        onClick={assignPackages}
        disabled={unassigned.length === 0}
      >
        Assign Packages ({unassigned.length} left)
      </button>

      <div className="overflow-x-auto mt-6">
        <table className="w-full border-collapse bg-white shadow-sm border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left border-b">Courier</th>
              <th className="px-4 py-3 text-left border-b">Package</th>
              <th className="px-4 py-3 text-center border-b text-yellow-700">Status</th>
              <th className="px-4 py-3 text-right border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courierData.map((courier, i) => (
              courier.assigned.length === 0 ? (
                <tr key={courier.name} className="border-b">
                  <td className="px-4 py-4 font-medium text-gray-700">{courier.name}</td>
                  <td colSpan={3} className="px-4 py-4 text-center text-gray-400 italic">
                    No assigned packages (Max: {courier.maxPackages})
                  </td>
                </tr>
              ) : (
                courier.assigned.map((pkg, j) => (
                  <tr key={`${courier.name}-${pkg.name}`} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2 font-medium">{j === 0 ? courier.name : ""}</td>
                    <td className={`px-4 py-2 ${pkg.status === "Completed" ? "text-green-600 font-bold" : ""}`}>
                      {pkg.name}
                    </td>
                    <td className="px-4 py-2 text-center text-yellow-600 font-medium">
                      {pkg.status}
                    </td>
                    <td className="px-4 py-2 text-right space-x-2">
                      {pkg.status !== "Completed" && (
                        <>
                          <button 
                            onClick={() => completePackage(i, j)}
                            className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200"
                          >
                            COMPLETED
                          </button>
                          <button 
                            onClick={() => delayPackage(i, j)}
                            className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded hover:bg-red-200"
                          >
                            DELAY
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))
              )
            ))}
          </tbody>
        </table>
      </div>

      <FutureShipments future={future} />
    </div>
  );
}

export default Shipments;
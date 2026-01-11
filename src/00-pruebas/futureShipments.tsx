// import type { Package } from "./data";

// interface Props {
//   future: Package[];
// }

// function FutureShipments({ future }: Props) {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mt-10 mb-2">Tomorrow</h2>
//       <table className="w-full mt-6 border border-gray-300 rounded-md overflow-hidden shadow-sm">
//         <thead className="bg-gray-100 text-left">
//           <tr>
//             <th className="px-4 py-2">Package Name</th>
//             <th className="px-4 py-2 text-yellow-600 text-center">STATUS</th>
//           </tr>
//         </thead>
//         <tbody>
//           {future.length === 0 ? (
//             <tr>
//               <td colSpan={2} className="px-4 py-2 text-center text-gray-500">
//                 No packages
//               </td>
//             </tr>
//           ) : (
//             future.map((pkg) => (
//               <tr key={pkg.name} className="border-t">
//                 <td className="px-4 py-2 text-green-600 underline">
//                   {pkg.name}
//                 </td>
//                 <td className="px-4 py-2 text-center text-yellow-600">
//                   {pkg.status}
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default FutureShipments;


import type { Package } from "./data";

interface Props {
  future: Package[];
}

function FutureShipments({ future }: Props) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tomorrow's Schedule</h2>
      <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm bg-white">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-bold">
            <tr>
              <th className="px-4 py-3 border-b">Package Name</th>
              <th className="px-4 py-3 border-b text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {future.length === 0 ? (
              <tr>
                <td colSpan={2} className="px-4 py-8 text-center text-gray-400 italic">
                  No packages scheduled for tomorrow.
                </td>
              </tr>
            ) : (
              future.map((pkg, index) => (
                // Usamos una key combinada para mayor seguridad
                <tr key={`${pkg.name}-${index}`} className="hover:bg-orange-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-gray-700">
                    {pkg.name}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold uppercase">
                      {pkg.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FutureShipments;
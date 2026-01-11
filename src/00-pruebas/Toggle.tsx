import { useState } from "react";
 




export const Toggle = () => {
  const [isOn, setIsOn] = useState(true);
  
  function handleClick() {
    setIsOn(!isOn);
  }
  
  return (
    <button 
      onClick={handleClick}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: isOn ? 'green' : 'red',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      {isOn ? 'ON' : 'OFF'} {/* Mostrar texto según estado */}
    </button>
  );
}


 
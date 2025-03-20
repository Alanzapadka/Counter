import React, {useState} from 'react';

function Count(){
    const [number, setNumber] = useState(0)

const Add =() =>{
       setNumber( number + 1)

}
const Sub =() =>{
        setNumber( number - 1)

}

 return(
     <div className="number-container">
         <div className="Number screen">

         </div>
       <button onClick={Add} className="add">+</button>

         <button onClick={Sub} className="sub">-</button>
     </div>

 )
}

export default  Count

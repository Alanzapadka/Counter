import React, {useState} from 'react';
import  './counter.css'
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
         <div className="Number-screen">
          <h2> {number}</h2>
         </div>
         <div className="btn-container">
       <button onClick={Add} className="add">+</button>

         <button onClick={Sub} className="sub">-</button>
         </div>
     </div>

 )
}

export default  Count

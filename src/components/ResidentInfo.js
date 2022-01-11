import axios from 'axios';
import React, { useState, useEffect } from "react";

const ResidentInfo = (resident) => {
   
    // Define our state for storing the object that our call to the API will resolve 
   const [charInfo, setCharInfo] = useState({});
   
    useEffect(() => {
       axios
       .get(resident.resident)
       .then(res =>
         {
           setCharInfo(res.data)
        })
   }, [resident.resident])

   
   
    return (
        <div className='char'>      
                <img src={charInfo.image} alt="Character image" />
                <div className='infoCharCard'>
                    <span>{charInfo.name}</span>
                    <div>
                        <span>{charInfo.species}</span>
                    </div>
                    <div>
                        <span>Episodes appeared  {" : "}{charInfo?.episode?.length}</span>
                    </div>
                    <div className='status'>
                        {charInfo.status === 'Alive' && <li className='bulletAlive'>{charInfo.status} </li> }
                        {charInfo.status === 'unknown' && <li className='bulletUnknown'>{charInfo.status}</li> }
                        {charInfo.status === 'Dead' && <li className='bulletDead'>{charInfo.status} </li> }   
                    </div>
                </div>  
        </div>
    );
};

export default ResidentInfo;
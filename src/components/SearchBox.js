import axios from 'axios';
import React, { useState, useEffect } from "react";
import LocationInfo from './LocationInfo';
import ResidentsList from './ResidentsList';


const SearchBox = () => {
    
    
    // Define states that our component will use, id is for setting the search box value, to make a custom call to the API-------------------------------------- 
    // and data stores the object that our call to the API will resolve in current ${id}-------------------------------------------------------------------------
    const [id, setId] = useState("1");
    const [data, setData] = useState({});
    
    
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(res => setData(res.data));  
    }, [])
    
    
    // Execute the funcion that makes the call to the API with our current id state
    
    const search = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
             .then(res => setData(res.data));
    }
    // JSX -----------------------------------------------------------------------------------------------------------------------------------------------------
    return (
        <>
            {/* {window.onload = search} */}
            <div className="search-box">
            <input type="text" onChange={e => setId(e.target.value)} />
                <button onClick={search} >
                    <i className="fas fa-search fa-2x"></i>
                </button>
            </div>
            < LocationInfo data={data} />
            < ResidentsList data={data} />
           
        </>
    );
};

export default SearchBox;
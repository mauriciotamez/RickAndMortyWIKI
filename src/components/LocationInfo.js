import React from 'react';

const LocationInfo = ({data}) => {
    
    return (
        <div className='locationInfo'>
           <div className='card'>{data.name}</div>
            <div className='card'> {data.dimension}</div>
            <div className='card'>{data.type}  </div>
            <div className='card'>Population {'>'} {data.residents?.length}</div>
        </div>
    );
};

export default LocationInfo;
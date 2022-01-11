import React, { useState } from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentsList = ({data}) => {
   
    return (
        <div className='charGrid'>
           {
               data.residents?.map(resident =>  (
                  < ResidentInfo resident={resident} key={resident} />
               ))
           };
        </div>
    );
};

export default ResidentsList;
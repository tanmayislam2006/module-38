import React from 'react';

const MyFirstComponent = ({name,status,work}) => {
  return (
    <div className='flex  text-white rounded-lg flex-col items-center border-2 bg-blue-500 p-4 m-4'>
      <h2 className='text-xl font-bold'>This is my first component</h2>
      <ul>
        <li>Component Name:{name}</li>
        <li>Status :{status}</li>
        <li>Work with:{work}</li>
      </ul>
    </div>
  );
};

export  {MyFirstComponent};



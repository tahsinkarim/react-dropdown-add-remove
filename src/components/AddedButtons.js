import React from 'react';

const AddedButtons = ({button, handleDelete}) => {
    const {name, color, bg} = button
    
    return (
        <div style={{backgroundColor: `${bg}`}} className='flex items-center px-2 rounded gap-1'>
            <button style={{color: `${color}`}} className='text-left mb-1'>{name}</button>
            <p onClick={()=>handleDelete(button)} className='text-gray-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </p>
        </div>
    );
};

export default AddedButtons;
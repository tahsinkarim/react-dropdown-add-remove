import React from 'react';

const DropdownOption = ({buttonsData, handleAdd}) => {
    return (
        <div className='border rounded shadow py-2 px-2'>
            {buttonsData?.map(button => <div><button onClick={()=> handleAdd(button)} style={{color: `${button.color}`}} className={`text-left mb-1 hover:bg-[${button.bg}] `}>{button.name}</button></div>
            )}
        </div>
    );
};

export default DropdownOption;
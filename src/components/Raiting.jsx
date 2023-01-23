import React from 'react';
import Rating from '@mui/material/Rating';
const Raiting = ({item}) => {
    return (
        <>
           <div className='w-full flex justify-between'>
                <p>{item.title}</p>
                <p>{item.Category}</p>
        </div>
        <div>
        <Rating name="half-rating-read" defaultValue={item.Raiting} precision={0.5} max={10} readOnly />
        </div>
        </>
    );
}

export default Raiting;

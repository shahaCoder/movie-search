import { Rating } from '@mui/material';
import React, { useContext, useState } from 'react';
import { movieContext } from '../Context/Context';

const SelectComp = ({data2, genre}) => {
    const { data, handleChange, handleRaiting } = useContext(movieContext)
    return (
            <div>
            {
                genre 
                ? 
                <div className='flex gap-3'>
                <input type="checkbox"  onChange={() => handleRaiting(data2.raiting)}/>
                <Rating name="half-rating-read" defaultValue={data2.raiting} precision={0.5} max={10} readOnly />
                </div>
                : data?.map(i => 
                    <div key={i.id} className='flex gap-3'>
                        <input type="checkbox" onChange={() => handleChange(i.Category)} />
                    <li>{i.Category}</li>
                </div>)
            }
            </div>
    );
}

export default SelectComp;
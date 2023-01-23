import React, { useContext } from 'react';
import SelectComp from '../components/SelectComp';
import { movieContext } from '../Context/Context';

const Movies = ({genre}) => {
    const {  handleChange } = useContext(movieContext)
    const arr = [
        {
            id: 1,
            raiting: 1
        },
        {
            id: 2,
            raiting: 2
        },
        {
            id: 3,
            raiting: 3
        },
        {
            id: 4,
            raiting: 4
        },
        {
            id: 5,
            raiting: 5
        },
        {
            id: 6,
            raiting: 6
        },
        {
            id: 7,
            raiting: 7
        },
        {
            id: 8,
            raiting: 8
        },
        {
            id: 9,
            raiting: 9
        },
        {
            id: 10,
            raiting: 10
        },
    ]
    return (
        <div className='w-full border-[#979797] border px-2 py-1'>
            <div className='flex gap-3'>
                <input type="checkbox" onChange={() => handleChange('Any')} />
                <p>Any rating</p>
            </div>
            {
                genre 
                ?
                arr.map(i => <SelectComp key={i.id} genre={genre} data2={i} />)
                : 
                <SelectComp  genre={genre} />
            }
        </div>
    );
}

export default Movies;

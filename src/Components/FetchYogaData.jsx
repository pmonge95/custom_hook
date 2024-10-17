import React from 'react'
import UseFetch from './UseFetch';
import './FetchData.css'

const FetchYogaData = () => {
    const [data]=UseFetch('https://api.npoint.io/9045c260b1565daa9e15');
    console.log(data);
    return (
    <>
        <ul className='list_data_main'>
            {data && data.map((e)=>(
                <>
                <li className='list_data'>
                    <h3>{e.name}</h3>
                    <p><strong>Importance: </strong>{e.importance}</p>
                    <p><strong>Benefits: </strong>{e.benefits}</p>
                    <p><strong>Duration: </strong>{e.time_duration}</p>
                </li>
                </>
            ))}
        </ul>
    </>
    )
}
export default FetchYogaData
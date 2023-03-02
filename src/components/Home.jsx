import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    let url="https://dog.ceo/api/breeds/list/all";

    const [data,setData] = useState([]);

    useEffect(()=>{
     fetch(url).then((res)=>res.json())
     .then((res)=>{
        console.log(res.message);
        let arr = Object.keys(res.message)
        setData(arr)
        
        
    })
    },[]);
   
  return (
   
    <div>
    {
        data.map((el)=>{
            return (
               <Link to={`/puppy/${el}`}><h1 key={el} >{el}</h1></Link> 
            )
        })
     }
    </div>
    
    
    
  )
}

export default Home;

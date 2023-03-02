import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Puppy = () => {
    const {id} = useParams();
    const [img,setImg] = useState("");

    useEffect(()=>{
     fetch(`https://dog.ceo/api/breed/${id}/images/random`)
     .then((res)=>res.json())
     .then((res)=>{
        console.log(res.message)
        setImg(res.message)
     })
    },[]);

  return (
    <div>
      {
       
                <div>
                    <img src={img} alt="" />
                </div>
            
        }
      
    </div>
  )
}

export default Puppy
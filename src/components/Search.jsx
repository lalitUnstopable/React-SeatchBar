import React, {useState } from 'react'

const Search = () => {
    const [search,setSearch] = useState();
    const [data,setData] = useState([])

    const handleClick = () => {
      fetch(`https://dog.ceo/api/breed/${search}/images`)
     .then((res)=>res.json())
     .then((res)=>{
        console.log(res.message);
        setData(res.message)
        
    })
    }

  return (
    <div>
      <input type="text" placeholder='Enter breed' onChange={(e)=>setSearch(e.target.value)}/>
      <button onClick={handleClick}>Search</button>    
       <div>
        {
            data.map((el)=>{
                return (
                    <div>
                    <img src={el} alt="" />
                    </div>
                )
            })
        }
       </div> 
    </div>
  )
}

export default Search
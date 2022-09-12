import React, { useState, useEffect } from 'react'

const FetchAPI = () => {
    const [data, setData] = useState([]);
    const API = "https://ghibliapi.herokuapp.com/species"

    const getData = () => {
        fetch(API)
          .then((res) => res.json())
          .then((res) => {
            console.log(res)
            setData(res)
          })
      }

      useEffect(() => {
        getData()
      }, [])
      
  return (
    <>
        <h1 className='heading'>Fetching species API</h1>
        <h3>Following are the data loaded from <span className="data-color">https://ghibliapi.herokuapp.com/species</span> site</h3>
            {data.map((item,index) => {
                return (
                <ul key={index} className="data-color">
                    <li>{item.name}</li>
                    <li>{item.classification}</li>
                    <li>{item.eye_colors}</li>
                    <li>{item.hair_colors}</li>
                </ul>
                )
            })}
    </>
  )
}

export default FetchAPI
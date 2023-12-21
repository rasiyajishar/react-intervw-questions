import React from 'react'
import {  useParams } from 'react-router-dom';
export  const User = () => {
    let { id } = useParams();

  return (
    <div>user
         <h2>User ID: {id}</h2>
    </div>
  )
}

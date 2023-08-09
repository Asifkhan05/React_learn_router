import React from 'react'
import { useParams } from 'react-router'

function Post() {
    let {id}=useParams()
  return (
    <div><br></br>Post {id} </div>
  )
}

export default Post
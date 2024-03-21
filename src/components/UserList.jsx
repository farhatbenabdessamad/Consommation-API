import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get } from '../redux/Actions'


function UserList() {
 const dispatch= useDispatch()
 useEffect(()=>{
    dispatch(get())
 }, [])
 const users = useSelector(state=>state.users)
 console.log(users)
    return (
        
    <div style={{display:"flex", flexWrap:"wrap", gap:"20px"}}>
        {users.map(e=>
        <div className="card">
    <img src={e.image} style={{width:"200px", height:"300px"}}/>
  <p className="heading">{e.name}</p>
  <p>{e.email}</p>
  <p>{e.gender}</p>
  <p>{e.gender}</p>
</div>
)}
    </div>
  )
}

export default UserList
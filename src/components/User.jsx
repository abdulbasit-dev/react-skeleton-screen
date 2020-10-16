import React,{useState,useEffect} from 'react'
import loader from '../three-dots.svg'
import './User.css'

function User() {
  const [profile, setProfile] = useState([])

  useEffect(()=>{
    setTimeout(async ()=>{
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
      const data = await res.json()
      setProfile(data)
    },2000)
  },[])



  return (
    <div className="user">
      <h2>UserProfile</h2>
      {profile && (
        <div className="user__profile">
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
      <a href={profile.website}>{profile.website}</a>
        </div>
      )}
      {profile.length===0 && <img className="user__loader" src={loader} alt="loader"/>}
    </div>
  )
}

export default User

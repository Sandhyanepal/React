import React, { useState } from 'react'

const Profile = (props) => {

    let [count, setCount] = useState(0);
    let [count2] = useState(0);

  return (
    <div>
      <h2>Profile component</h2>
      <h3>{props.name}</h3>
      <h3>{count}</h3>
      <button onClick={() => setCount(count+1)}>Count</button>
      <h3>{count2}</h3>
    </div>
  )
}

export default Profile

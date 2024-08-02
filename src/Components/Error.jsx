import React from 'react'
import { useRouteError } from 'react-router-dom'


const Error = () => {

    const error = useRouteError();
    console.log(error)

  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something went wrong</h2>
      {error.status + " : " + error.statusText}
    </div>
  )
}

export default Error

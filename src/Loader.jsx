import React from 'react'

export default function Loader({message}) {
  return (
    <div className='ui active dimmer'>
        <div className='ui big text loader'>
        {message}
        </div>
    </div>
  )
}

Loader.defaultProps = {
    message:"Loading...."
}

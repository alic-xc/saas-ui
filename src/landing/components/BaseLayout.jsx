import React from 'react'

const BaseLayout = ({children}) => {
  return (
    <div className='bg-white flex flex-col  w-full'>
        {children}
    </div>  

  )
}




export default BaseLayout
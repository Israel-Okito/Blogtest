import Image from 'next/image'
import React from 'react'

function CmsLogo() {
    // const { renderDefault, title } = props;
  return (

      <div className='flex items-center space-x-2'>
      <Image 
        src="/moi.jpg" 
        alt='israel okito'
        width={50}
        height={50}
        className='rounded-full object-cover'
        />
    </div>

  )
}

export default CmsLogo
import React from 'react'

function TimeAndLocation() {
  return (
    <div>
        <div className='flex items-center justify-center my-6'>
            <p className='text-white text-lg font-extralight'>
                mardi, 1 novembre 2022 | local time 16:30 PM
            </p>
        </div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>
                PARIS, FR
            </p>
        </div>
    </div>
  )
}

export default TimeAndLocation
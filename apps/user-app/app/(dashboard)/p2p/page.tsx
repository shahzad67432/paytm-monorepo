import React from 'react'
import P2P from '../../../components/P2P'
import { SendCard } from '../../../components/SendCard'
import prisma from '@repo/db/client'

const page = async() => {
  return (
    <div className='w-full flex'> 
      <div className='w-full'>
        <SendCard/>
      </div>
      <div className='pt-20'>
        {/* <Transactions/> */}
      </div>
    </div>

  )
}

export default page
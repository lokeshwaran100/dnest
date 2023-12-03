import React from 'react'
import MyBookingsSection from '../Components/MyBookingsSection'
import  Navbar from '../Components/navbar'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { useWeb3React } from '@web3-react/core'

export default function MyBookings() {
    const {active}=useWeb3React();
    if(active===false)
    {
        return (
            <>
               <Redirect to="/" />
            </>
          )
    }
    return (
        <div>
           <Navbar/>
           <MyBookingsSection/>
        </div>
    )
}

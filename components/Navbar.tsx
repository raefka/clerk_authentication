import Link from 'next/link'
import React from 'react'
import {auth} from '@clerk/nextjs/server'
import {UserButton} from '@clerk/nextjs'

const Navbar = () => {

    const {userId} = auth();
  return (
    <div className='bg-cyan-950 rounded-b-xl'>
        <ul className='flex justify-between py-4 px-6'>
            <div>
                <Link href="/">
                  <li>
                     Home
                  </li>
                </Link>
            </div>

            <div className='flex items-center'>
                <Link href="/client">
                    <li>
                        client Page
                    </li>
                </Link>
            </div>

            <div className='flex gap-6 items-center'>
                {!userId ?(
                     <>
                     <Link href="/sign-in">
                           <li>
                               sign in
                           </li>
                       </Link>
       
                       <Link href="/sign-up">
                           <li>
                               sign up
                           </li>
                       </Link>
                     </>
                ):(
                    <>
                    <Link href="/profile">
                        <li>
                            profile
                        </li>
                    </Link>
                    <UserButton/>
                    </>
                )}
              
            </div>

        </ul>
    </div>
  )
}

export default Navbar
"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { useState, useEffect } from 'react';

import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {

    const isUserLoggedIn = true;
    const [providers, setProviders] = useState(null);
    const [toggleDropDown, setToggleDropDown] = useState(false);

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
    }, [])


    return (
        <nav className="w-full flex-between">
            <Link href={"/"} className="flex gap-2" >
                <Image className='object-contain' alt='promptTeli' width={30} height={30} src="/assets/images/logo.svg" ></Image>
                <p className="logo_text">ProptTeli</p>
            </Link>
            {/* Desktop navigation */}
            <div className="sm:flex hidden">
                {isUserLoggedIn ? (<div className='flex gap-3 md:gap-5'>
                    <Link href="/create-promot" className="black_btn" >
                        Create Post
                    </Link>
                    <button type='button' onClick={signOut} className="outline_btn">Sign Out</button>
                    <div>
                        <Link href="/profile" className="black_btn" >
                            <Image className='object-contain' alt='profile' width={37} height={37} src="/assets/images/logo.svg" ></Image>

                        </Link>
                    </div>
                </div>) : <>
                    {providers && Object.values(providers).map((provider) => {
                        return (<button type='button' key={provider.name} className="black_btn" onClick={() => signIn(provider.id)}> {provider.name}</button>)
                    })}
                </>}
            </div>

            {/* mobile navigation */}
            <div className="sm:hidden flex relative">
                {isUserLoggedIn ? (<div className='flex gap-3 md:gap-5'>
                    <Image className='object-contain' alt='profile' width={37} height={37} src="/assets/images/logo.svg" onClick={()=> {setToggleDropDown((prev)=> !prev)}}></Image>

                    <div>
                    {toggleDropDown &&  (
                        <div className="dropdown">
                            <Link href="/profile" className='dropdown_link' onClick={()=> setToggleDropdown(false)}>
                                My Profile
                            </Link>
                            <Link href="/create-promot" className='dropdown_link' onClick={()=> setToggleDropdown(false)}>
                               Create Promot
                            </Link>
                           <button 
                            type='button'
                            className='mt-5 w-full black_btn'
                            onClick={()=> {
                                setToggleDropdow(false);
                                signOut()
                            }}>
                            Sign Out
                           </button>
                        </div>
                    )}
                    </div>
                </div>) : <>
                    {providers && Object.values(providers).map((provider) => {
                        return (<button type='button' key={provider.name} className="black_btn" onClick={() => signIn(provider.id)}> {provider.name}</button>)
                    })}
                </>}
            </div>
        </nav>
    )
}

export default Nav
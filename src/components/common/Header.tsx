'use client'

import Image from 'next/image'
import React from 'react'

import profilePic from '../../../public/images/TruongDX.png'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import ActiveLink from './ActiveLinks'

const Header = () => {
  const router = useRouter()
  return (
    <div className="w-full bg-white px-20 flex items-center justify-between">
      <div className="">
        <Image
          src={profilePic}
          alt="TruongDX Logo"
          style={{
            width: 120,
            height: 100,
          }}
          onClick={() => router.push('/')}
        />
      </div>
      <div className="flex flex-row items-center gap-x-8">
        <ActiveLink text={'home'} href="/" />
        <ActiveLink text={'work'} href="/work" />
        <ActiveLink text={'about'} href="/about" />
      </div>
    </div>
  )
}

export default Header

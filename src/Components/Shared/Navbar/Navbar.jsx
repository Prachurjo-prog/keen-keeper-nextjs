"use client"

import logo from "../../../img/logo.png"

import { FaHome } from 'react-icons/fa';
import { CiStopwatch } from 'react-icons/ci';
import { BsGraphUpArrow } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  
  return (
    <nav className=" bg-base-100 shadow-sm">
      <div className="container mx-auto navbar flex items-center justify-between">
        <Image className="md:block hidden" src={logo} alt="logo"/>
        <div className="">
         <Link href="/" className='btn btn-ghost '><FaHome /> Home</Link>
          <a href="/timeline" className='btn btn-ghost '><CiStopwatch /> Timeline</a>
          <a href="/stats" className='btn btn-ghost'><BsGraphUpArrow /> Stats</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
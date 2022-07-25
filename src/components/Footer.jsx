import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiHeroku } from 'react-icons/si';

const Footer = () => {
  return (
    <div className='fixed bottom-0 flex w-screen my-auto justify-center h-12 bg-gradient-to-b from-black to-gray-900 text-cyan-200 text-3xl'>
        <div className='flex m-2'>
            <FaLinkedin href='' className='mx-2'/>
            <FaGithub href='' className='mx-2'/>
            <SiHeroku href='' className='mx-2'/>
        </div>
        <p className='text-xl'> &copy; 2022</p>
    </div>
  )
}

export default Footer
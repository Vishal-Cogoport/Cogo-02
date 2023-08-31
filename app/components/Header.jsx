import React from 'react';
import Link from 'next/link';


const Haeder = () => {
  return (
<header className='header'>
<div className='container'>
    <div className='logo'>
    <Link href='/'>Next js Learning</Link>
</div>
<div className='links'>
    <Link href='/about'>About</Link>
    <Link href='/about/team'>Our Team</Link>
    <Link href='/code/repos'>Code</Link>
</div>
</div>
</header>
  )
}

export default Haeder
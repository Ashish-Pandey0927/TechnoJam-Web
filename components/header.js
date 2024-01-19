import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="header">
      <Image alt="logo" width={70} height={70} src="/TechnoJam.png" />
      <i className="bx bx-menu" id="menu-icon"></i>

      <nav className="navbar">
        <a href="/" className="active">
          Home
        </a>
        <a href="/">About</a>
        <a href="/">Projects</a>
        <a href="/">Contact</a>
        <a href="/">Join</a>
      </nav>
      <div className='nav-icon'>
      <Link href= "https://www.instagram.com/teamtechnojam/"><i class="bi bi-instagram"></i></Link>
      <Link href= "https://github.com/Ashish-Pandey0927"><i class="bi bi-github"></i></Link>
      </div>
    </header>
  );
};

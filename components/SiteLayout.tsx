"use client"
import Navbar from './navbar';
import Footer from './footer';
import React from 'react';

function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default SiteLayout;
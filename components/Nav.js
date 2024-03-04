"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProvider } from "next-auth/react"

const Nav = () => {
  return <nav className=" w-full mb-16 pt-3  flex-between ">
  <Link href="/" className="flex gap-2 flex-center">
   <Image src="/assets/images/logo.svg"
     alt="Promptopia Logo"
     width={30}
     height={30}
     className="object-contain"
   />
    <p className="logo_text">Promptopia</p>
   </Link>
  
  </nav>
};

export default Nav;

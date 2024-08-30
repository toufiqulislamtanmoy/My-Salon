"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface NavbarProps {}
const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleLogin = () => {
    setIsLogin(true);
  };
  const handleLogout = () => {
    setIsLogin(false);
  };

  return (
    <nav className="p-5 bg-secondary">
      {/* wrapper */}
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* logo */}
        <div>
          <Link href={"/"} className="text-3xl font-bold text-accent">
            Sal<span className="text-primary font-bold">O</span>n
          </Link>
        </div>
        {/* menu */}
        <div className="">
          <Image
            onClick={() => setIsOpen(!isOpen)}
            src="https://picsum.photos/200"
            width={200}
            height={200}
            className="w-8 h-8 rounded-full cursor-pointer"
            alt="profile pic"
          />
          {/* dropdown */}
          <div className={`absolute top-12 right-0 bg-secondary w-[170px] text-center p-3 rounded-mid`}>
            <ul>
                <li><Link href={'/'} className="text-textPrimary text-sm hover:underline">Item1</Link></li>
                <li><Link href={'/'} className="text-textPrimary text-sm hover:underline">Item1</Link></li>
                <li><Link href={'/'} className="text-textPrimary text-sm hover:underline">Item1</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

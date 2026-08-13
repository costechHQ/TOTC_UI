import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";
import Image from "next/image";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Career", path: "/career" },
  { name: "Blog", path: "/blog" },
  { name: "About Us", path: "/about-us" },
];

const Navbar = () => {
  const Router = useRouter();
  return (
    <div className="justify-between items-center sticky top-0 z-50">
      <div className="navbar relative  px-4 lg:px-32 bg-[#49BBBD]">
        <div className="navbar-start">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="TOTC Logo"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={
                    Router.pathname === link.path
                      ? "font-semibold text-primary"
                      : "font-normal text-base-content"
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <Link
            href="/login"
            className="btn h-10 w-27.5 hidden rounded-full border border-white bg-white text-[#5B5B5B] lg:flex items-center justify-center"
          >
            Login
          </Link>

          <a className="btn rounded-full border hidden lg:flex border-white/30 w-110px h-40px bg-white/30 text-[#ffffff] ">
            Sign Up
          </a>
        </div>

        <div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <IoMenuSharp className="size-5" />
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm mt-1 dropdown-content rounded-box z-1 p-2 shadow fixed left-0 right-0 w-screen bg-[#49BBBD] max-w-screen "
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className={
                      Router.pathname === link.path
                        ? "font-semibold text-primary"
                        : "font-normal text-base-content"
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <div className="flex gap-2  mt-3 ">
                <a className="btn rounded-full border border-white w-[110] h-[40] bg-white text-[#5B5B5B]">
                  Login
                </a>
                <a className="btn rounded-full border border-white/30 w-[110] h-[40] bg-white/30 text-[#fffff]">
                  Sign Up
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

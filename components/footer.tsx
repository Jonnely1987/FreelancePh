import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-black text-white flex flex-col">
      <div className="pl-10 pt-10">FreelancePH</div>

      <div className="flex flex-col md:flex-row items-center">
        <div className="flex grow  px-5 gap-5">
          <div className="flex flex-col grow indent-4 lg:indent-10 p-5 rounded-xl">
            <h1 className="text-gray-400">Company</h1>
            <Link className="" href="/Jonnely/Support/about">
              <h1 className="">About Us</h1>
            </Link>
            <Link className="" href="/Jonnely/Dashboard/user">
              <h1 className="">Careers</h1>
            </Link>
          </div>
          <div className="flex flex-col grow lg:indent-10 p-5 rounded-xl">
            <h1 className="text-gray-400">Support</h1>
            <Link className="" href="/Jonnely/Support/guide">
              <h1 className="">Guides</h1>
            </Link>
            <Link className="" href="/Jonnely/Support/blog">
              <h1 className="">Blog</h1>
            </Link>
            <Link className="" href="/Jonnely/Support/terms">
              <h1 className="">Terms & Conditions</h1>
            </Link>
          </div>
        </div>

        <div className="flex flex-col grow pb-10 rounded-xl">
          <text className="text-center font-bold p-2">
            Join our NEWSLETTER to get the latest news!
          </text>
          <div className="mx-auto">
            <input
              className="rounded-l-lg text-white p-2 indent-2 bg-zinc-600"
              placeholder="example@gmail.com"
              type={"email"}
            ></input>
            <button
              className="bg-white text-black rounded-r-lg p-2 outline-none font-bold h-full
            hover:scale-110 transition-all"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-full w-5/6 mx-auto py-0.5"></div>
      <div className="text-center w-5/6 mx-auto py-3 text-sm">
        &copy; Copyright. All Rights Reserved. 2023
      </div>
    </div>
  );
}

export default Footer;

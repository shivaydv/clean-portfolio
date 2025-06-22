import { socialLinks } from "@/data/socialLinks";
import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="border-t flex justify-between items-center py-4 px-2 ">
      <span className="text-sm font-medium">Made by Shiva</span>
      <div className="flex gap-4 ">
        <Link
          href={socialLinks.find((link) => link.name === "GitHub")?.url || ""}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">GitHub</span>
          <BsGithub size={18} />
        </Link>
        <Link
          href={socialLinks.find((link) => link.name === "LinkedIn")?.url || ""}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">LinkedIn</span>
          <BsLinkedin size={18} />
        </Link>
        <Link
          href={socialLinks.find((link) => link.name === "Twitter")?.url || ""}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">Twitter</span>
          <BsTwitterX size={18} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;



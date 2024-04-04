"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/topbar.module.scss";


function Topbar() {
  const [activeSection, setActiveSection] = useState("");
  const [showBackground, setShowBackground] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["contact", "Archiving", "project", "stack"];
      const currentSection = sections.find((section) => {
        const element: HTMLElement = document.getElementById(section)!;
        return element.getBoundingClientRect().top < window.innerHeight / 2;
      });
      setActiveSection(currentSection || "");
    };

    const handleScrollTop = () => {
      setShowBackground(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollTop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, []);

  return (
    <div className={`${styles.topbar} ${showBackground ? styles.background : ''}`}>
      <div>
        <Link href="/">LYA&rsquo;S Portfolio</Link>
      </div>
      <div>
        <Link href="#archiving">Archiving</Link>
        <Link href="#project">Project</Link>
        <Link href="#stack">Stack</Link>
      </div>
    </div>
  );
}

export default Topbar;

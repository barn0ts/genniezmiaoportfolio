"use client";
import Image from "next/image";
import HeroSection from "@/components/Hero";
import NavbarSection from "@/components/Navbar";
import dynamic from 'next/dynamic';

export default function Home() {
  return (
    <div style={{ position: 'relative' }}>
      <Image
        src="/gradientbg.png"
        alt="Background Gradient"
        layout="fill"
        objectFit="cover"
        className="bg-white"
        style={{ zIndex: -1 }}
      />
      <NavbarSection />
      <HeroSection />
    </div>
  );
}

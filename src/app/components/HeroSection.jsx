"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 bg-[#1A1A1A]">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-y-8">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 text-center sm:text-left px-6"
        >
          <h1 className="text-[#F5F5F5] mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A373] to-[#CB997E]">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Ansh", 1000, "Web Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#D4A373]"
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-8 leading-relaxed">
            I am a dynamic web developer and the technical co-founder of Happy Plum, a USA-based startup. With expertise in technologies like Next.js, Tailwind CSS, OpenAI API integration, and a robust MERN stack foundation, I excel in building innovative and scalable solutions. I have a proven track record of deploying 3D drone mapping platforms, developing high-performance e-commerce applications, and creating engaging user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            
            <Link
              href="https://drive.google.com/drive/folders/1002WsZecH1IvSqtCI_-fWoUGVVhdNn6B"
              className="px-8 py-4 rounded-full bg-[#333333] text-white hover:bg-[#6B4F4F] transition-all text-center"
            >
               CV
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 flex justify-center"
        >
          <div className="rounded-full bg-[#333333] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative overflow-hidden">
            <Image
              src="/images/hero-image.png"
              alt="Hero Image"
              className="absolute inset-0 object-cover rounded-full"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

"use client"

import { Toaster } from "react-hot-toast";
import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import AboutCardiCare from "./components/AboutCardiCare";
import ServicesOffered from "./components/ServicesOffered";
import VideoSection from "./components/VideoSection";
import CardicareVision from "./components/CompleteCardicare";
import ContactUsDetails from "./components/ContactUsSection";
import FooterSection from "./components/FooterSection";


export default function Home() {
  

  return (
    <main className="w-full overflow-hidden">
        <div className=" w-screen min-h-screen bg-zinc-100">
          <Toaster/>
          <HeaderSection/>
          <HeroSection/>
          <AboutCardiCare/>
          <ServicesOffered/>
          <VideoSection/>
          <CardicareVision/>
          <ContactUsDetails/>
          <FooterSection/>
        </div>
    </main>
  );
}
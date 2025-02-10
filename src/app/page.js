"use client"

import { Toaster } from "react-hot-toast";
import AboutCardiCare from "./Components/AboutCardiCare";
import CardicareVision from "./Components/CompleteCardicare";
import ContactUsDetails from "./Components/ContactUsSection";
import FooterSection from "./Components/FooterSection";
import HeaderSection from "./Components/HeaderSection";
import HeroSection from "./Components/HeroSection";
import ServicesOffered from "./Components/ServicesOffered";
import VideoSection from "./Components/VideoSection";

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
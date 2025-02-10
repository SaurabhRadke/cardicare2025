"use client"
import FooterSection from "../Components/FooterSection";
import HeaderSection from "../Components/HeaderSection";
import Image from "next/image";
import visonBlob from "@/app/assets/vision.svg"
import visonBlob2 from "@/app/assets/vision2.svg"
import visonBlob3 from "@/app/assets/vision3.svg"
export default function AboutCardicare(){
  
    return(
        <div className=" w-full min-h-screen ">
            <HeaderSection/>
            <div className=" w-full min-h-screen pb-[10vh]">
                 <div className="container mx-auto px-4 py-16">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold mb-3" > A Beacon of Excellence in Cardiovascular Care.</h1>
                                {/* Main content section */}
                                <div className="flex flex-col lg:flex-row items-center gap-8">
                                    {/* Left side - Images */}
                                    <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[700px] hidden md:block">
                                        <Image 
                                            src={visonBlob} 
                                            alt="aboutSvg" 
                                            className="absolute w-[60rem] object-contain"
                                        />
                                        <Image 
                                            src={visonBlob2} 
                                            alt="aboutOffice" 
                                            className="absolute w-[60rem] h-4/5 object-contain left-[10%] top-[10%] z-10"
                                        />
                                         <Image 
                                            src={visonBlob3} 
                                            alt="aboutOffice" 
                                            className="absolute w-[30rem] h-4/5 object-contain left-[10%] top-[10%] z-20"
                                        />
                                    </div>
                
                                    {/* Right side - Content */}
                                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left md:pt-0 pt-[5%] mt-[5%]">
                                        
                                        <p className="text-lg md:text-xl  max-w-2xl">
                                        At Cardicare Hospital, we seamlessly integrate state-of-the-art medical technology with compassionate, patient-centered care. Our mission is to provide unparalleled cardiovascular services that are tailored to meet the unique needs of each individual. With a focus on innovation, precision, and holistic wellness, we aim to set new standards in heart health and patient care.                        </p>
                                        <h2 className="text-2xl md:text-3xl text-rose-600 font-semibold mt-[2rem] ">
                                        About Cardicare
                                        </h2>
                                        <div className=" pt-[1rem] text-[1.1rem] tracking-wider">
                                        Founded in 2010, Cardicare Hospital has been at the forefront of advanced cardiovascular treatments and diagnostics. With a commitment to innovation and patient care, we provide cutting-edge services like Enhanced External Counterpulsation (EECP), Chelation Therapy, Electrocardiogram (ECG), Arterial Clearance Therapy, and Periscope Cardiovascular Testing. Our team of experts works tirelessly to ensure every patient receives personalized care in a supportive and healing environment.
                                        </div>
                                        <div className="">
                                        <h2 className="text-2xl md:text-3xl text-rose-600 font-semibold mt-[2rem] ">
                                        Our Vision
                                        </h2>
                                        <div className="pt-[1rem] text-[1.1rem]">
                                        To become a global leader in cardiovascular health by advancing treatments, inspiring healthier communities, and promoting lifelong heart wellness. At Cardicare Hospital, your heart health is our passion.                        </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
            </div>
            <FooterSection/>
        </div>
    )
}
"use client"
import FooterSection from "../components/FooterSection";
import HeaderSection from "../components/HeaderSection";
import { MdAttachEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { BiSolidMessageAltError } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
export default function ContactUs(){
    const [sendLoader, setSendLoader] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        comment: ''
    });

    const validateForm = () => {
        if (!formData.firstName.trim()) {
            toast.error('Please enter your first name');
            return false;
        }
        if (!formData.lastName.trim()) {
            toast.error('Please enter your last name');
            return false;
        }
        
       
        
        if (!formData.phoneNumber.trim()) {
            toast.error('Please enter your phone number');
            return false;
        }
        if (!/^\d{10}$/.test(formData.phoneNumber)) {
            toast.error('Please enter a valid 10-digit phone number');
            return false;
        }
        
        return true;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setSendLoader(true);
        const loadingToast = toast.loading('Sending your message...');

        try {
            const emailData = {
                Email: formData.email,
                Name: `${formData.firstName} ${formData.lastName}`,
                Number: formData.phoneNumber,
                Description: formData.comment
            };

            const response = await axios.post('/api/sendEmail', emailData);

            if (response.status === 200) {
                toast.success('Message sent successfully!', {
                    id: loadingToast,
                });
                // Reset form
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    comment: ''
                });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to send message. Please try again.', {
                id: loadingToast,
            });
            console.error('Error sending email:', error);
        } finally {
            setSendLoader(false);
        }
    };
    return(
        <div className=" w-full min-h-screen ">
            <HeaderSection/>
            <div className=" w-full ">
            <div id="contact" className="text-zinc-900 w-full min-h-screen px-3 py-10 flex items-center flex-col gap-6">
            <h1 className="text-[3rem] text-center text-rose-600 leading-[2.7rem] font-semibold tracking-wider mt-10">Your Heart Health is Our Priority</h1>
            <div className="w-full min-h-screen py-5 flex md:flex-row flex-col gap-4">
                <div className="w-[100%] md:w-[50%] h-full py-4 pl-[5%]">
                    <h1 className="text-[2rem] md:text-[3rem] font-[500] tracking-wide leading-7">We&apos;re Here for Your Heart</h1>
                    <p className="text-[1rem] md:text-[1.2rem] text-zinc-600 w-[95%] leading-6 mt-8 text-center md:w-[80%]">Connect with Cardicare Clinic for comprehensive cardiovascular care. From advanced treatments like EECP to preventive care and diagnostics, we&apos;re committed to supporting your heart health journey.</p>
                    <div className="w-[70%] mt-10 h-auto  flex flex-col items-start">
                        <div className="flex px-4 md:px-8 items-center gap-2 text-[1.4rem]">
                            <MdAttachEmail className="text-[1.6rem] text-sky-700 shrink-0"/>
                            <Link href={`mailto:care@cardicare.com`}><div className="hover:underline underline-offset-2">cardicareheartcare@gmail.com</div></Link>
                        </div>
                        <div className="flex px-4  md:px-8 items-center gap-2 text-[1.2rem]">
                            <PiPhoneCallFill className="text-[1.4rem] text-sky-700"/>
                            <Link href={`tel:0712-2554488`}><div className="">0712-2554488</div></Link>
                        </div>
                    </div>
                    <h2 className="text-[1.3rem] leading-6 md:text-[1.4rem] w-full md:w-[70%] font-semibold md:leading-8 mt-10">Whether you need cardiovascular care, have questions about our treatments, or want to schedule a consultation, our dedicated team is here to help!</h2>
                    <div className="md:block hidden">
                        <div className="flex items-center justify-center w-full h-auto pt-6 gap-3 md:gap-8">
                            <div className="w-[18rem] h-[16rem] rounded-lg p-4 flex flex-col gap-3 bg-black text-zinc-100">
                                <div className="text-[1.5rem] font-[500] flex items-center gap-2 text-orange-400">
                                    <div className="w-10 h-10 rounded-full bg-zinc-100 grid place-items-center">
                                        <BsFillPatchQuestionFill className="text-sky-600 text-[1.8rem]"/>
                                    </div>
                                    Patient Support
                                </div>
                                <p className="px-3">Need information about our cardiovascular treatments? Our medical team is here to assist with EECP, Chelation Therapy, or any other cardiac care services you&apos;re interested in.</p>
                            </div>
                            <div className="w-[22rem] h-[16rem] rounded-lg p-4 flex flex-col gap-3 bg-black text-zinc-100">
                                <div className="text-[1.5rem] font-[500] flex items-center gap-2 text-orange-400">
                                    <div className="w-10 h-10 rounded-full bg-zinc-100 grid place-items-center">
                                        <BiSolidMessageAltError className="text-sky-600 text-[1.8rem]"/>
                                    </div>
                                    Patient Experience
                                </div>
                                <p className="px-3">Your feedback helps us improve our cardiac care services. Share your experience with our treatments and care team to help us continue providing exceptional cardiovascular healthcare to our community.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] md:w-[50%] h-full py-4 md:pl-[5%] flex">
                    <div className="w-full md:w-[90%] h-[100%] rounded-xl shadow-md shadow-orange-400 py-8 px-5 bg-[rgb(22,38,39)] backdrop-blur-md flex flex-col items-center">
                        <h1 className="text-[2.5rem] md:text-[3rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-rose-500 to-zinc-300 text-center">Schedule a Consultation</h1>
                        <p className="w-[90%] text-zinc-300 text-[1rem] tracking-wide leading-5 text-center">Our cardiac care team is available to answer your questions and schedule appointments. Contact us for personalized cardiovascular care tailored to your needs.</p>
                        <form onSubmit={handleSubmit} className="pt-14 space-y-5">
                            <div className="flex items-center gap-4 md:flex-row flex-col">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="px-3 py-2 outline-none md:w-[16rem] w-[22rem] rounded-md bg-zinc-100"
                                    placeholder="First Name"
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="px-3 py-2 outline-none md:w-[16rem] w-[22rem] rounded-md bg-zinc-100"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div className="relative flex items-center">
                                <IoMail className="text-[1.3rem] text-zinc-900 absolute left-2"/>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="pl-9 w-full px-3 py-2 rounded-md bg-zinc-100"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="relative flex items-center">
                                <PiPhoneCallFill className="text-[1.3rem] text-zinc-900 absolute left-2"/>
                                <input
                                    type="number"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 rounded-md bg-zinc-100 pl-9"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <textarea
                                name="comment"
                                value={formData.comment}
                                onChange={handleChange}
                                className="w-full h-[20vh] rounded-md bg-zinc-100 px-4 py-2"
                                placeholder="Tell us about your cardiac care needs"
                            />
                            <div className="w-full py-5 flex items-center justify-center">
                                <button
                                    type="submit"
                                    className={`px-6 py-2 ${sendLoader && "animate-pulse"} rounded-md bg-rose-600 text-zinc-100`}
                                >
                                    {sendLoader ? "Sending..." : "Schedule Now"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            </div>
            <FooterSection/>
        </div>
    )
}
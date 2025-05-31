"use client";

import React from 'react';
import { X } from 'lucide-react';
import { FaEnvelope, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const emailAddress = "genevievemiao28@gmail.com";
    const linkedinURL = "https://www.linkedin.com/in/genevieve-miao-8095b433b";
    const discordUsername = "faiii0";

    const openEmail = () => {
        window.location.href = `mailto:${emailAddress}`;
    };

    const openLinkedIn = () => {
        window.open(linkedinURL, '_blank');
    };

    const copyDiscord = async () => {
        try {
            await navigator.clipboard.writeText(discordUsername);
            alert("Discord username copied to clipboard!");
        } catch (err) {
            console.error("Failed to copy discord username: ", err);
            alert("Failed to copy Discord username. Please copy manually.");
        }
    };

    return (
        <div className="fixed inset-0 top-0 left-0 w-full h-full bg-black/80 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-8 w-full max-w-md relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-gray-200 rounded-full p-1 hover:bg-gray-300"
                >
                    <X size={20} />
                </button>

                <h2 className="text-2xl font-semibold mb-4 text-center">Contact Me</h2>

                <div className="flex justify-around items-center">
                    {/* Gmail */}
                    <div
                        className="flex flex-col items-center cursor-pointer p-4 rounded-lg bg-[#ffeadc] transition-all duration-200 hover:scale-110 hover:bg-[#ffbfa2]"
                        onClick={openEmail}
                    >
                        <FaEnvelope size={40} className="text-[#EA4335]" />
                        <span className="text-sm mt-2">Gmail</span>
                    </div>

                    {/* LinkedIn */}
                    <div
                        className="flex flex-col items-center cursor-pointer p-4 rounded-lg bg-[#E2EAF9] transition-all duration-200 hover:scale-110 hover:bg-[#b9cdeb]"
                        onClick={openLinkedIn}
                    >
                        <FaLinkedin size={40} className="text-[#0077B5]" />
                        <span className="text-sm mt-2">LinkedIn</span>
                    </div>

                    {/* Discord */}
                    <div
                        className="flex flex-col items-center cursor-pointer p-4 rounded-lg bg-[#E3DDF7] transition-all duration-200 hover:scale-110 hover:bg-[#c1b3e9]"
                        onClick={copyDiscord}
                    >
                        <FaDiscord size={40} className="text-[#5865F2]" />
                        <span className="text-sm mt-2">Discord</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
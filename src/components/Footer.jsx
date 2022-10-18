import React from "react";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
    return(
            <footer className="h-12 bg-orange-600  flex space-x-4 items-center p-8">
                <div className="w-full h-full items-center flex flex-row justify-between font-bold">
                    <p>JG</p>
                <p className="text-center">React JS</p>
                <a href="https://wa.me/+5493518115446" target="_blank">
                        <FaWhatsapp className="cursor-pointer hover:scale-110 duration-500" size="1.5rem" color="white" /> </a>
                </div>
            </footer>
            


    )
}
export default Footer;
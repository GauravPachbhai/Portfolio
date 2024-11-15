import { Linkedin, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <footer className="flex flex-col text-gray-300 py-4 text-center h-56 lg:h-24 justify-center items-center mt-4 w-full">
            <div className=" flex flex-col lg:flex-row justify-center items-center gap-5 container mx-auto">
                <p className="flex gap-3"> <Phone /> Contact Number: <span className="font-semibold">+91 9096851171</span></p>
                <p className="flex gap-3"><Mail />Email: <a href="mailto:pachbhaigauravofficial@gmail.com" className="text-blue-400">Pachbhaigauravofficial@gmail.com</a></p>
                <p className="flex gap-3"><Linkedin />LinkedIn: <a href="https://www.linkedin.com/in/gaurav-pachbhai-526b39230/" target="_blank" rel="noopener noreferrer" className="text-blue-400">linkedin.com/in/gaurav-pachbhai/</a></p>
            </div>
            <div className="w-11/12 items-center text-blue-500 flex justify-center mt-8">
                <div className=" w-1/5 md:w-1/4 border-t border-gray-500" />
                <p className="text-center mx-4 text-sm sm:text-base">Copyright © 2022</p>
                <div className="flex gap-4 p-2">
                 
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
                <div className=" w-1/5 sm:w-1/4 border-t border-gray-500" />
            </div>
        </footer>
    );
}

export default Footer;

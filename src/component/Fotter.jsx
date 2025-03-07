import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="bg-[#1f1f1f]  text-white  flex min-h-[37vh] items-center p-4 md:p-8 mt-10 md:min-h-[20vh]">

            <div className="container  flex flex-col md:flex-row justify-between items-center px-6 ">
                
                <div className="text-start text-base md:text-left md:w-1/2 mb-4  md:ml-[8%] md:mb-0">
                    <p className="text-[1rem] mb-4 font-sans">
                        copyright © 2020-2025, 180Daraga. All Rights Reserved
                    </p>
                    <div className="flex justify-start md:justify-start space-x-2">
                       
                        <div className="w-8 h-8 bg-[#3b5999] flex items-center justify-center rounded-sm">
                            <FontAwesomeIcon icon={faFacebookF} size="sm"  />
                        </div>
                        
                        <div className=" w-8 h-8 bg-[#cd201f] flex items-center justify-center rounded-sm">
                            <FontAwesomeIcon icon={faYoutube} size="sm"  />
                        </div>
                        
                        <div className="w-8 h-8 bg-[#55acee] flex items-center justify-center rounded-sm ">
                            <FontAwesomeIcon icon={faTwitter} size="sm"  />
                        </div>
                        
                        <div className="w-8 h-8 bg-[#e4405f] flex items-center justify-center rounded-sm">
                            <FontAwesomeIcon icon={faInstagram} size="sm"  />
                        </div>
                    </div>
                </div>

                <div className="text-start mr-[16%]  md:text-right md:w-1/2 flex flex-col gap-2 md:mr-[5%]">
                    <p className="text-base ">
                        <spn className='font-bold'>Email:</spn> <a href="180daraga.org@gmail.com" className=" text-[#fff] hover:text-gray-300  underline">
                            180daraga.org@gmail.com
                        </a>
                    </p>
                    <p className="text-base">
                        <span className='font-bold'>Tel:</span> <a href="tel:+201040564660" className=" mr-[13%]  text-white hover:text-gray-300 underline">
                            +20 104 056 4660
                        </a>
                    </p>
                </div>
                
            </div>
        </footer>
    );
}

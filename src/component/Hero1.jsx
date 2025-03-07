import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function Hero1() {
    return (
        <div
            className="relative w-full h-[50vh] md:h-[70vh] bg-cover bg-center flex flex-col items-center justify-center text-center text-white"
            style={{
                backgroundImage: `linear-gradient(to right, rgb(112, 6, 8), rgba(255, 255, 255, 0)), url('src/assets/Dev-Hub-af7280d9.jpg')`
            }}
        >
            <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center gap-4 px-4 md:left-[30%] md:top-[50%]">
                <div className="relative inline-block px-[25%] py-[0.4rem] border-[3px] border-white rounded-xl text-4xl md:text-6xl  md:px-12 md:py-[0.6rem] md:border-[5px] md:rounded-2xl font-bold">
                    
                    <FontAwesomeIcon 
                        icon={faCaretRight} 
                        className="absolute top-[-27%] right-[40%] text-2xl md:text-4xl animate-arrow"
                    />

                    DevHub'25

                    <FontAwesomeIcon 
                        icon={faCaretLeft} 
                        className="absolute bottom-[-25%] left-[40%] text-2xl md:text-4xl animate-arrow-rev"
                    />
                </div>

                <p className="mt-2  text-sm md:text-lg font-sans tracking-wide font-semibold whitespace-nowrap">
                    THE DEVHUB'25 EVENT IS UNDER THE WAY!
                </p> 
            </div>
        </div>
    );
}

"use client";
import Image from "next/image";
import recruiterImg from "../../assets/recruiter.png";
import Input from "../Common/Input";
import Button from "../Common/Button";

const HeroSection = () => {
  return (
    <section className="w-full overflow-hidden -z-10">
      <div className="bg-[#064EA4] h-full px-4 md:px-5 lg:px-6 py-2.5 relative">
        {/* Top Elliptical */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#F99D76] rounded-tl-full transform rotate-180" />
        {/* Bottom Elliptical */}
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[#fde047] rounded-full -mb-10 -mr-10" />
        <div className="flex justify-between items-center mx-auto max-w-screen-xl lg:space-x-1 relative z-20 md:justify-center lg:justify-between">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-2/3 p-4 md:p-2">
              <h2 className="text-sm tracking-widest">
                Software Recruitment Specialists
              </h2>
              <h1 className="mt-4 text-6xl font-bold leading-tight">
                Elevate your career
              </h1>
              <div className="py-4">
                <div className="flex rounded-full bg-white overflow-hidden shadow-lg">
                  <Input
                    className="pl-4 pr-2 py-1 text-black w-full rounded-l-full focus:ring-0"
                    placeholder="E.g. networking"
                    type="text"
                  />
                  <Button className="bg-[#FCDF69] font-semibold text-[#25210E] px-6 rounded-r-full">
                    Search Jobs
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2 mt-1 lg:mt-0 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-none">
                <Image
                  alt="Career image"
                  className="relative rounded-lg"
                  height={500}
                  src={recruiterImg}
                  width={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

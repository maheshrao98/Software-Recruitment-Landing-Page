"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Button from "@/components/Common/Button";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { jobPostings } from "@/data/jobPostingsData";
const JobListing = dynamic(() => import("./JobListing"), { ssr: false });

const JobPostSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(getInitialPostsPerPage());
  const bgcolors = ["#FCDF69", "#064EA4", "#F99D76"];
  const textcolors = ["#064EA4", "#FFFFFF"];
  let bgcolorIndex = 0;
  let textcolorIndex = 0;

  const totalPages = Math.ceil(jobPostings.length / postsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  function getInitialPostsPerPage() {
    const windowWidth = typeof window !== "undefined" ? window?.innerWidth : 0;

    if (windowWidth >= 1024) {
      return 3;
    } else if (windowWidth >= 768) {
      return 2;
    } else {
      return 1;
    }
  }

  const handleResize = () => {
    setPostsPerPage(getInitialPostsPerPage());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="bg-[#D7E7FB] p-10">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-[#0E2152] mb-8">
          Latest Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobPostings
            .slice(currentPage * postsPerPage, (currentPage + 1) * postsPerPage)
            .map((job, index) => {
              const backgroundColor = bgcolors[bgcolorIndex % bgcolors.length];
              const textColor = textcolors[textcolorIndex % textcolors.length];

              bgcolorIndex++;
              textcolorIndex++;

              return (
                <JobListing
                  key={index}
                  job={job}
                  bgcolor={backgroundColor}
                  textcolor={textColor}
                />
              );
            })}
        </div>
        <div className="flex justify-between mt-8">
          <div>
            <Button onClick={handlePrevPage}>
              <TiArrowLeftThick
                size={30}
                className="text-white bg-[#1e40af] rounded-2xl p-1"
              />
            </Button>
            <Button onClick={handleNextPage}>
              <TiArrowRightThick
                size={30}
                className="text-white bg-[#1e40af] rounded-2xl p-1"
              />
            </Button>
          </div>
          <div className="text-center font-semibold text-[#0E2152]">
            <Button>View more jobs</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobPostSection;

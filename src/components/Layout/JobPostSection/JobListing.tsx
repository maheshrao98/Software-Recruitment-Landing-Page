import React from "react";
import Button from "@/components/Common/Button";
import { TiLocation } from "react-icons/ti";
import { PiCurrencyCircleDollarFill } from "react-icons/pi";
import { GiSkills } from "react-icons/gi";
import { JobPosting } from "@/types/interfaces";

interface JobListingProps {
  job: JobPosting;
  bgcolor: string;
  textcolor: string;
}

const JobListing: React.FC<JobListingProps> = ({ job, bgcolor, textcolor }) => (
  <div
    className={`relative bg-[${bgcolor}] text-[${textcolor}] p-6 rounded-lg md:col-span-1 lg:col-span-1 h-[400px] lg:h-[400px]`}
  >
    <div className="mb-4 flex space-x-2">
      {job.skill.split(",").map((skillInfo, index) => (
        <div key={index} className="bg-white p-2 rounded-lg">
          <div className="text-[#064EA4] text-sm font-semibold">
            {skillInfo}
          </div>
        </div>
      ))}
    </div>

    <div className="flex items-center space-x-2 mb-4">
      <h3 className="text-xl font-semibold">{job.title}</h3>
    </div>
    <div className="flex items-center space-x-2 mb-2">
      <TiLocation className={`text-[${textcolor}]`} />
      <span>{job.location}</span>
    </div>
    <div className="flex items-center space-x-2 mb-4">
      <PiCurrencyCircleDollarFill className={`text-[${textcolor}]`} />
      <span>{job.salary}</span>
    </div>
    <p className="text-sm mb-4">{job.description}</p>
    <div className="absolute bottom-0 py-2 w-full">
      <Button className="w-[88%] py-2 mb-4 bg-white text-[#064EA4] font-semibold rounded-xl">
        View this job
      </Button>
      <p className="text-xs text-left">Posted on {job.datePosted}</p>
    </div>
  </div>
);

export default JobListing;

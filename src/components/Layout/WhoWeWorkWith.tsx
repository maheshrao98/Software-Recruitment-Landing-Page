import React from "react";
import Image from "next/image";
import atlassianlogo from "../../assets/companylogo/atlassian.png";
import cloudfarelogo from "../../assets/companylogo/cloudfare.png";
import microsoftlogo from "../../assets/companylogo/microsoft.png";
import oraclelogo from "../../assets/companylogo/oracle.png";
import vmwarelogo from "../../assets/companylogo/vmware.png";

const companies = [
  {
    name: "Microsoft",
    logo: microsoftlogo,
    width: 600,
    height: 180
  },
  {
    name: "Oracle",
    logo: oraclelogo,
    width: 500,
    height: 180
  },
  {
    name: "Atlassian",
    logo: atlassianlogo,
    width: 600,
    height: 180
  },
  {
    name: "Cloudfare",
    logo: cloudfarelogo,
    width: 600,
    height: 180
  },
  {
    name: "VMWare",
    logo: vmwarelogo,
    width: 600,
    height: 180
  },
];

const WhoWeWorkWith = () => {
  return (
    <section className="w-full -z-10">
      <div className="container mx-auto max-w-screen-xl mx-auto h-full px-4 lg:px-6 py-10 relative">
        <p className="text-l font-bold mb-6 text-[#D2D2D2] text-center">Who We Work With</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {companies.map((company, index) => (
            <div key={index} className="bg-white pl-4 rounded-md flex justify-center">
              <Image
                src={company.logo}
                alt={company.name}
                width={company.width}
                height={company.height}
                className="mb-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;

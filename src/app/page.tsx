import dynamic from "next/dynamic";
import Header from "@/components/Layout/Header"
import HeroSection from "@/components/Layout/HeroSection";
import WhoWeWorkWith from "@/components/Layout/WhoWeWorkWith";
import Footer from "@/components/Layout/Footer";

const JobPostSection = dynamic(() => import("@/components/Layout/JobPostSection"), { ssr: false });

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header></Header>
      <HeroSection></HeroSection>
      <WhoWeWorkWith></WhoWeWorkWith>
      <JobPostSection></JobPostSection>
      <Footer></Footer>
    </main>
  );
}

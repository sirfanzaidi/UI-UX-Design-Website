import Image from "next/image";
import { Navbar } from "./Componnents/navbar";
import { Hero } from "./Componnents/Hero";
import { Features } from "./Componnents/Features";
import { Faq } from "./Componnents/Faq.";
import { Pricing } from "./Componnents/Pricing";
import { Cta } from "./Componnents/Cta";
import { Footer } from "./Componnents/Footer";

export default function Home() {
  return (
   <>
   <Navbar />
   <Hero />
   <div className="px-[20px] lg:container lg:px-20 mx-auto">
   <Features />
   <Faq />
   <Pricing />
   <Cta />
   <Footer />
   </div>
   
   </>

  );
}

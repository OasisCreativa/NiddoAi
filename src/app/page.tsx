import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Niddo Encuentra tu hogar ideal",
  description: "Utilizamos inteligencia artificial para personalizar tu búsqueda de propiedades, ofreciendo seguridad, lujo y una experiencia excepcional.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero/>
      <AboutSectionOne />

      <Brands/>
    </>
  );
}

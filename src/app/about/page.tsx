import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import NiddiaChatButton from "@/components/NiddiaChatButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conoce a Niddia| encontremos tu hogar ideal",
  description: "Tu asistente virtual impulsada por IA te ayudara a encontrar un hogar en minutos",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="¡Comienza tu búsqueda ahora!"
        description="Chatea con Niddia y encuentra tu hogar ideal."
      />
      <div className="flex flex-col items-center ml-5 mt-4">
        <NiddiaChatButton/>
      </div>

      <AboutSectionOne />
    </>
  );
};

export default AboutPage;

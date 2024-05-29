import Link from "next/link";
import NiddiaChatButton from "@/components/NiddiaChatButton";
import Image from "next/image";

const Hero = () => {
  return (
    <>
<section
  id="home"
  className="relative z-10 overflow-hidden bg-cover bg-center dark:bg-[url('/images/bgDark.png')] bg-[url('/images/bgLight.png')] min-h-screen flex flex-col justify-center pt-20 sm:pt-24 md:pt-32"
>
  <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center">
    <div className="flex flex-col justify-center text-left text-black dark:text-white flex-grow mb-16 lg:mb-0">
      <div className="mx-auto max-w-[800px] text-left">
        <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
          Bienvenido 
        </h1>
        <p className="mb-12 text-base !leading-relaxed text-white dark:text-body-color-dark sm:text-lg md:text-xl">
          Utilizamos inteligencia artificial para personalizar tu búsqueda de propiedades, ofreciendo seguridad, lujo y una experiencia excepcional. Explora opciones de alta calidad adaptadas a tus necesidades con nuestro servicio personalizado.
        </p>
        <div className="flex items-center space-x-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <NiddiaChatButton />
          {/* <Link
            href="https://github.com/NextJSTemplates/startup-nextjs"
            className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
          >
            Star on GitHub
          </Link> */}
        </div>
      </div>
    </div>
    <div className="flex items-end justify-center h-full lg:flex-grow-0">
      <Image
        src="/images/niddia/niddia.png"
        alt="Descripción de la imagen"
        width={500}
        height={500}
        className="object-contain max-h-full w-auto"
      />
    </div>
  </div>
        {/* <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
    <svg
      width="450"
      height="556"
      viewBox="0 0 450 556"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25:217)" />
      <circle cx="17.9997" cy="182" r="18" fill="url(#paint1_radial_25:217)" />
      <circle cx="76.9997" cy="288" r="34" fill="url(#paint2_radial_25:217)" />
      <circle
        cx="325.486"
        cy="302.87"
        r="180"
        transform="rotate(-37.6852 325.486 302.87)"
        fill="url(#paint3_linear_25:217)"
      />
      <circle
        opacity="0.8"
        cx="184.521"
        cy="315.521"
        r="132.862"
        transform="rotate(114.874 184.521 315.521)"
        stroke="url(#paint4_linear_25:217)"
      />
    
      <defs>
        <linearGradient
          id="paint0_linear_25:217"
          x1="-54.5003"
          y1="-178"
          x2="222"
          y2="288"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" />
          <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
        </linearGradient>
        <radialGradient
          id="paint1_radial_25:217"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
        >
          <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
          <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_25:217"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
        >
          <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
          <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
        </radialGradient>
        <linearGradient
          id="paint3_linear_25:217"
          x1="226.775"
          y1="-66.1548"
          x2="292.157"
          y2="351.421"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" />
          <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_25:217"
          x1="184.521"
          y1="182.159"
          x2="184.521"
          y2="448.882"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_25:217"
          x1="356"
          y1="110"
          x2="356"
          y2="470"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_25:217"
          x1="118.524"
          y1="29.2497"
          x2="166.965"
          y2="338.63"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A6CF7" />
          <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div> */}
      </section>
    </>
  );
};

export default Hero;

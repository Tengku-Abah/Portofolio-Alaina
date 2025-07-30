"use client";
import FadeContent from '@/components/Ui/FadeContent'
import SkillCarousel from "@/components/Ui/SkillCarousel";
import SkillCarousel2 from "@/components/Ui/SkillCarousel2";
import BlurText from "@/components/Ui/BlurText";
import SplitText from "@/components/Ui/SplitText";
import AnimatedContent from "@/components/Ui/AnimatedContent";
import Image from "next/image";



const handleAnimationComplete = () => {
  console.log('Animation completed!');
};


export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBEED7]">
      <section className="relative flex bg-gradient-to-b from-[#FBEED7] to-[#B7966B] ">
        <div className="h-[100vh] w-1/2 flex justify-left items-center bg- rounded-[12px] m-2">
        <div className="flex flex-col justify-center text-centr rounded-[12px] p-20 m-5 text-lg  ml-24">
          <SplitText
          text="Alaina Atwa Awalai Harahap"
          className="text-2xl text-center text-justify font-bold  mt-6 font-[Times_New_Roman] text-[#4b2e1e]"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <AnimatedContent
                  distance={100}
                  direction="vertical"
                  reverse={false}
                  duration={0.8}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={0.5}
                  threshold={0.1}
                  delay={1}
                >
                  <p className="text-[#946D43] italic text-lg mt-2 mb-4">
                    Mahasiswa politik & Conter kreator
                  </p>
        </AnimatedContent>
          
          <BlurText
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          delay={30}
          animateBy="letters"
          direction="bottom"
          onAnimationComplete={handleAnimationComplete}
          className="text-[#4b2e1e] text-justify text-lg mr-4  font-serif"
        />
              <div className="flex  gap-8 py-6">
                  <AnimatedContent
                  distance={100}
                  direction="vertical"
                  reverse={false}
                  duration={0.8}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={0.5}
                  threshold={0.1}
                  delay={0}
                >
                  <div>
                      <button className="bg-[#946D43] text-white px-6 py-2 rounded-full font-semibold shadow-md transition hover:bg-[#7a4f2c]">
                        Lihat Portfolio
                      </button>
                      <button className="border border-[#946D43] text-[#946D43] px-6 py-2 rounded-full font-semibold bg-transparent hover:bg-[#946D43] transition hover:text-white">
                          Hubungi Saya
                      </button>
                  </div>
                </AnimatedContent>
              </div>
            </div>

        </div>
        <div className="h-[100vh] w-1/2 flex relative justify-center items-center items-start  rounded-[12px] m-2">
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <div className="flex h-[50vh] flex-col space-x-2 px-20 m-20 rounded-[12px] items-center bg-[#D9C79D] shadow-2xl justify-center ">
              <div className=" group relative relative bg-[#502b0f] w-[200px] h-[250px] rounded-[12px] flex items-center justify-center mt-24 ">
                <Image
                  src="/FOTO_GW.PNG"
                  alt="Alaina Atwa Awali Harahap"
                  width={200}
                  height={250}
                  className="rounded-[12px] object-cover group-hover:scale-110 mb-8 "
                />
              </div>
              <p className="text-[#4b2e1e] text-left text-2xl font-bold font-serif text-center px-10 transition-transform duration-300 group-hover:scale-200 mt-4">
                political science student
              </p>
              <p className="text-[#946D43] font-serif text-lg mt-2 mb-20">
                Universitas Airlangga
              </p>
            </div>
        </FadeContent>
          
        </div>
      </section>



    <section className="relative flex flex-row ">
      <div className="w-1/2 h-[100vh]  justify-center shadow-md bg-[#B7966B] rounded-[12px] m-20">
        <h1 className="flex justify-center text-3xl font-bold text-white   ">
          Skill
        </h1>
          <SkillCarousel  />
      </div>
      <div className="w-1/2 h-[100vh] justify-center bg-[#B7966B] rounded-[12px] m-20">
       <h1 className="flex justify-center text-3xl font-bold text-white mb-20 ">
        Project
       </h1>
       <SkillCarousel2 />
      </div>
    </section>
    </main>
  );
}

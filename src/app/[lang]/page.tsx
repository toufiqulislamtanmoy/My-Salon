import Marquee from "react-fast-marquee";
import { getDictionary } from "../../../getDictionary";
import GamingSection from "@/components/Home/SideContent/GammingSection/GamingSectioin";

interface HomePageInterface {
  params: {
    lang: "en" | "bn";
  };
}

const Home = async ({ params: { lang } }: HomePageInterface) => {
  console.log(lang, "from page");
  const language = await getDictionary(lang);
  return (
    <main className="container mx-auto">
      {/* notice marquee */}
      <Marquee
        className="bg-red-500 text-secondary px-5 py-1 mt-2 rounded-s"
        speed={150}
      >
        {Array.isArray(language?.notice) ? (
          language.notice.map((item, index) => (
            <p key={index} className=" italic mr-10 text-sm">
              {item}
            </p>
          ))
        ) : (
          <p className="text-red-500 italic mr-10">{language?.notice}</p>
        )}
      </Marquee>
      {/* Content Section */}
      <section className="grid lg:grid-cols-[70%,30%] grid-cols-1 gap-3">
        {/* main section */}
        <div className="bg-white rounded-md shadow-2xl mt-5 container mx-auto p-5">
          List of the appointment should be display here with count down timer
        </div>
        {/* side section/right section */}
        <div className="bg-white rounded-md shadow-2xl mt-5 container mx-auto p-5">
          <h4>{language?.timepass}</h4>
          {/* Gaming section */}
          <GamingSection />
        </div>
      </section>

      {/* services section */}
      <section className="bg-white rounded-md shadow-2xl mt-5 container mx-auto p-5">
        services section with custom slider
      </section>

      {/* reviews section with custom slider */}
      <section className="bg-white rounded-md shadow-2xl mt-5 container mx-auto p-5">
        reviews section with custom slider
      </section>
    </main>
  );
};

export default Home;

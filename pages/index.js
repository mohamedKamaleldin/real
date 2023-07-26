import Head from "next/head";
import Header from "../components/header";
import HomeFinderContainer from "../components/home-finder-container";
import AreaPropertiesDiv from "../components/area-properties-div";
import Footer from "../components/footer";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentPropertiesForm from "../components/rent-properties-form";
import RentCard from "../components/rent-card";
import Footer2 from "../components/footer2";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Discover your perfect home" />
      </Head>
      <div className="relative bg-gray-white w-full h-[5095.99px] flex flex-col items-center justify-start">
        <Header hamburger={false} />
        <HomeFinderContainer />
        <AreaPropertiesDiv />
        <Footer />
        <RentPropertiesContainer />
        <RentPropertiesForm />
        <RentCard />
        <Footer2
          houseLine="/houseline1.svg"
          socialMediaLogo="/social-media-logo.svg"
          socialMediaLogo1="/social-media-logo1.svg"
          socialMediaLogo2="/social-media-logo2.svg"
          socialMediaLogo3="/social-media-logo3.svg"
          socialMediaLogo4="/social-media-logo4.svg"
        />
      </div>
    </>
  );
};

export default LandingPage;

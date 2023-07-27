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
        <Header />
        <HomeFinderContainer />
        <AreaPropertiesDiv />
        <Footer />
        <RentPropertiesContainer />
        <RentPropertiesForm />
        <RentCard />
        <Footer2
        />
      </div>
    </>
  );
};

export default LandingPage;

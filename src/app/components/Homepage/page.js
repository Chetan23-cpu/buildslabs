import BannerSection from "./banner_section/banner_section";
import WhatWeDo from "./what_we_do/what_we_do";
import Tech from "./tech.js/tech";
import Footer from "./footer/footer";
import QuoteSection from "./quote/quote_section";
import About from "./about/about";
import Industries from "./industries/industries";
const HomepageComponent = () => {
  return (
    <>
      <BannerSection />
      <About />
      <WhatWeDo />
      <Tech />
      <Industries />
      <QuoteSection />
      <Footer />
    </>
  );
};

export default HomepageComponent;

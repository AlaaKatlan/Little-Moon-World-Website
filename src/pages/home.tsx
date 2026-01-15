import AboutSection from "../components/home/about-section";
import Banner from "../components/home/banner";
import { Box } from "@mui/material";
import CategoriesSection from "../components/home/categories-section";
import { FC } from "react";
import OurHeros from "../components/home/our-heros";
import Application from "../components/application/application";

export const Home: FC = () => {
  return (
    <Box>
      <Banner />
      <CategoriesSection />
      <Application/>
      <AboutSection />
      <OurHeros />
 
    </Box>
  );
};

export default Home;

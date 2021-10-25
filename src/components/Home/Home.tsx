import React from "react";
import CustomizedAccordions from "../FAQ/FAQ";
import LivingOn from "../LivingOn/LivingOn";
import MintComponent from "../MintComponent/MintComponent";
import Box3 from "../NewComponent";
import Rarity from "../Rarity/Rarity";
import Roadmap from "../Roadmap/Roadmap";
import RoadmapMob from "../Roadmap/RoadmapMob";
import Welcome from "../Welcome/Welcome";

import "./home.css";

const Home = () => {
  return (
    <div>
      <Welcome />
      <LivingOn />
      <MintComponent />
      <Box3 />
      <Rarity />
      <Roadmap />
      <RoadmapMob />
      <CustomizedAccordions />
    </div>
  );
};

export default Home;

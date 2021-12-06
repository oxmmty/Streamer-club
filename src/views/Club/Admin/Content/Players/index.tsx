import React from "react";

import { WithContainer } from "components/Container";
//  import sections
import { default as DisplaySection } from "./Display";

const Players: React.FC = () => {
  return (
    <>
      <WithContainer SectionView={DisplaySection} />
    </>
  );
};

export default Players;
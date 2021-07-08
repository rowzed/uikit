import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 132 32" {...props}>
      <image width="132" height="32" href="/images/egg/LogoTextNewDark.png"/> {/* used to be 32x32 logo.png */}
    </Svg>
  );
};

export default Icon;

import React from "react";
import StyledProgress, { Bar } from "./StyledProgress";
import { ProgressProps } from "./types";
import ShrimpyProgressWrapper from "./ShrimpyProgressWrapper";
import { LogoIcon } from "../Svg";

const stepGuard = (step: number) => {
  if (step < 0) {
    return 0;
  }

  if (step > 100) {
    return 100;
  }

  return step;
};

const Progress: React.FC<ProgressProps> = ({ primaryStep = 0, secondaryStep = null, showShrimpyProgress = false }) => (
  <StyledProgress>
    {showShrimpyProgress && (
      <ShrimpyProgressWrapper style={{ left: `${stepGuard(primaryStep)}%` }}>
        <LogoIcon />
      </ShrimpyProgressWrapper>
    )}
    <Bar primary style={{ width: `${stepGuard(primaryStep)}%` }} />
    {secondaryStep ? <Bar style={{ width: `${stepGuard(secondaryStep)}%` }} /> : null}
  </StyledProgress>
);
export default Progress;

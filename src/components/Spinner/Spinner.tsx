import React from "react";
import styled, { keyframes } from "styled-components";
import { LogoIcon } from "../Svg";
import { SpinnerProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  position: relative;
`;

const ShrimpingIcon = styled(LogoIcon)`
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => (
  <Container>
    <ShrimpingIcon width={`${size * 0.5}px`} />
  </Container>
);

export default Spinner;

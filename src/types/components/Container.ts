// types
import { ComponentType } from "react";

// --------------------------------------------------

export interface WithContainerProps extends ColorContainerProps {
  SectionView: ComponentType;
  mode?: "colorContainer" | "container" | "wrapper" | "none";
  mWidth?: number;
  className?: string;
}

export interface ColorContainerProps {
  cColor?: string;
}
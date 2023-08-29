import * as React from "react";
import * as S from "./styles";
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

export default function Button(props: ButtonProps) {
  return <S.CustomButton {...props} />;
}

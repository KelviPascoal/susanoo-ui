import * as React from "react";
import "./Button.css";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

export function Button(props: ButtonProps) {
  return <button className="custom-button" {...props} />;
}

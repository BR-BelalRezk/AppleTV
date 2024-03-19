import { ReactNode } from "react";
export default function Button({
  children,
  size = "md",
  className,
}: {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeClassNames = {
    sm: "text-xs px-3 py-1",
    md: "text-sm px-5 py-2",
    lg: "text-lg px-7 py-3",
  };
  return (
    <button
      className={`text-textBlack rounded-full bg-white  ${sizeClassNames[size]} ${className}`}
    >
      {children}
    </button>
  );
}

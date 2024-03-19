import { ReactNode } from "react";
export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-[1000px] px-6 ${className}`}>{children}</div>
  );
}

import { type ReactNode } from "react";

interface PillButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "outline";
  target?: "_blank" | "_self";
}

export default function PillButton({
  children,
  href,
  variant = "outline",
  target,
}: PillButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-2.5 font-inter md:text-[1.5rem] font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white";

  const variants = {
    primary: "bg-white text-navy hover:bg-white",
    outline: "border border-white text-white hover:bg-white/10",
  };

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </a>
  );
}

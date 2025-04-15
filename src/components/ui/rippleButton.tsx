import { useRef } from "react";

interface RippleButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const RippleButton = ({ children, className = "", href }: RippleButtonProps) => {
  const btnRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  const handleMouseEnter = (e: React.MouseEvent) => {
    const button = btnRef.current;
    if (!button) return;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple");
    button.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  };

  const commonClass =
    "relative overflow-hidden transition-transform duration-200 ease-out hover:scale-105";

  const Component = href ? "a" : "button";

  return (
    <Component
      ref={btnRef as any}
      onMouseEnter={handleMouseEnter}
      className={`${commonClass} ${className}`}
      href={href}
    >
      {children}
    </Component>
  );
};

export default RippleButton;

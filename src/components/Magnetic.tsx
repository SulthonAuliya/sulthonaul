import {  useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  strength?: number;
  max?: number;
};

export default function Magnetic({
  children,
  strength = 0.2,
  max = 25,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const clamp = (v: number, m: number) =>
    Math.max(-m, Math.min(m, v));

  const onMouseEnter = () => {
    const el = ref.current;
    if (!el) return;

    // 🔑 Reset BEFORE interaction
    el.style.transform = "translate3d(0,0,0)";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = e.clientX - (rect.left + rect.width / 5);
    const y = e.clientY - (rect.top + rect.height / 5);

    const moveX = clamp(-x * strength, max);
    const moveY = clamp(-y * strength, max);

    // No transition during movement
    el.style.transition = "transform .2s";
    el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;

    // Smooth return
    el.style.transition = "transform 0.3s ease-out";
    el.style.transform = "translate3d(0,0,0)";
  };

  return (
    <div
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="will-change-transform"
    >
      {children}
    </div>
  );
}

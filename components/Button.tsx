"use client";

import { useRef, useCallback } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "whatsapp" | "telegram" | "imo" | "call";
  children: React.ReactNode;
  href?: string;
}

const variantStyles: Record<string, React.CSSProperties> = {
  primary: {
    background: "linear-gradient(135deg, #0F8A5F 0%, #0a6645 100%)",
    color: "#fff",
    boxShadow: "0 6px 20px rgba(15,138,95,0.35)",
  },
  whatsapp: {
    background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
    color: "#fff",
    boxShadow: "0 6px 20px rgba(37,211,102,0.30)",
  },
  telegram: {
    background: "linear-gradient(135deg, #2AABEE 0%, #229ED9 100%)",
    color: "#fff",
    boxShadow: "0 6px 20px rgba(42,171,238,0.30)",
  },
  imo: {
    background: "linear-gradient(135deg, #0068FF 0%, #0050CC 100%)",
    color: "#fff",
    boxShadow: "0 6px 20px rgba(0,104,255,0.28)",
  },
  call: {
    background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    color: "#fff",
    boxShadow: "0 6px 20px rgba(16,185,129,0.30)",
  },
};

export default function Button({
  variant = "primary",
  children,
  href,
  onClick,
  ...rest
}: ButtonProps) {
  const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);

  const createRipple = useCallback(
    (
      e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>
    ) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const ripple = document.createElement("span");
      ripple.className = "ripple-circle";
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      el.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    },
    []
  );

  const style: React.CSSProperties = {
    ...variantStyles[variant],
    width: "100%",
    padding: "0.9rem 1.25rem",
    borderRadius: "14px",
    border: "none",
    fontFamily: "var(--font-main)",
    fontWeight: 700,
    fontSize: "1rem",
    letterSpacing: "0.02em",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    transition: "transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease",
    textDecoration: "none",
  };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ripple contact-btn"
        style={style}
        onClick={(e) => createRipple(e as React.MouseEvent<HTMLAnchorElement>)}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={btnRef as React.Ref<HTMLButtonElement>}
      className="btn-ripple"
      style={style}
      onClick={(e) => {
        createRipple(e);
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

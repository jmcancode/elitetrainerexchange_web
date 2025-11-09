import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaInstagram, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        background: theme.background,
        color: theme.text,
        borderBottom: `1px solid ${theme.subtle}`,
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontWeight: 700,
          fontSize: "1.25rem",
          color: theme.text,
          cursor: "default",
        }}
      >
        Elite Trainer Exchange
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
        <a
          href="https://instagram.com/elitetrainerexchange"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          style={{ color: theme.text }}
        >
          <FaInstagram size={22} />
        </a>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          style={{
            background: "none",
            border: "none",
            color: theme.text,
            cursor: "pointer",
          }}
        >
          {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </nav>
  );
}

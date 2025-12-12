import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaInstagram, FaMoon, FaSun, FaDiscord } from "react-icons/fa";
import LightLogo from "../assets/light_logo.png";
import DarkLogo from "../assets/dark_logo.png";

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
      }}
    >
      {/* Logo */}
      <div>
        <img
          src={isDark ? DarkLogo : LightLogo}
          alt="Elite Trainer Exchange Logo"
          style={{ height: "40px" }}
        />
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
        {/* <a
          href="https://discord.gg/fDuFh3sQ"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          style={{ color: theme.text }}
        >
          <FaDiscord size={22} />
        </a> */}

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

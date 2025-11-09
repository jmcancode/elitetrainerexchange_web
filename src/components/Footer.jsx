import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Footer({ onPrivacyClick }) {
  const { theme } = useTheme();

  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1.5rem",
        background: theme.subtle,
        color: theme.text,
        fontSize: "0.9rem",
      }}
    >
      <p>
        © {new Date().getFullYear()} B-Boy Creative, LLC. All rights
        reserved.{" "}
        <span
          onClick={onPrivacyClick}
          style={{
            textDecoration: "underline",
            cursor: "pointer",
            color: theme.accent,
          }}
        >
          Privacy Policy
        </span>
      </p>
    </footer>
  );
}

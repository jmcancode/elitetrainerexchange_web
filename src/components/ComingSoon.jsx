import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function ComingSoon() {
  const { theme } = useTheme();

  return (
    <section
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: theme.text,
        background: theme.background,
        padding: "3rem 1rem",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
      >
        Elite Trainer Exchange
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{
          maxWidth: "600px",
          lineHeight: 1.6,
          fontSize: "1.05rem",
          marginBottom: "2rem",
        }}
      >
        A tech platform built for Pokémon collectors and vendors — bridging
        auctions, analytics, and digital trade with transparency and trust.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <p>Coming soon to iOS and Android.</p>
      </motion.div>
    </section>
  );
}

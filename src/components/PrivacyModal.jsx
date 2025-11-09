import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function PrivacyModal({ isOpen, onClose }) {
  const { theme } = useTheme();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            style={{
              background: theme.background,
              color: theme.text,
              padding: "2rem",
              borderRadius: "8px",
              maxWidth: "600px",
              width: "90%",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ marginBottom: "1rem" }}>Privacy Policy</h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
              We value your privacy. This site only collects limited information
              for inquiries and analytics. By using this website, you agree to
              our standard privacy and data handling practices.
            </p>

            <button
              onClick={onClose}
              style={{
                marginTop: "1.5rem",
                padding: "0.5rem 1.25rem",
                background: theme.accent,
                border: "none",
                borderRadius: "6px",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

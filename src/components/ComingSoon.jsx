// ComingSoon.jsx
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import {
  HiOutlineCheckCircle,
  HiOutlineChartBar,
  HiOutlineUsers,
} from "react-icons/hi";
import VendorBetaModal from "./VendorBetaModal";
// Import the simulator screenshots
import homeScreen from "../assets/Mockup(30).png";
import collectionScreen from "../assets/Mockup(25).png";
import findShowScreen from "../assets/Mockup(20).png";
import scanScreen from "../assets/Mockup(34).png";

export default function ComingSoon() {
  const { theme } = useTheme();
  const screenshotRef = useRef(null);
  const [showBetaModal, setShowBetaModal] = useState(false);
  const { scrollYProgress } = useScroll({
    target: screenshotRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const screenshots = [
    {
      src: homeScreen,
      alt: "Vendor dashboard with trusted vendors and collection tools",
      label: "Social Login",
    },
    {
      src: collectionScreen,
      alt: "Collection insights with value tracking and quick actions",
      label: "Vendor Dashboard",
    },
    {
      src: findShowScreen,
      alt: "Find Pokemon card shows by country",
      label: "Track Inventory",
    },
    {
      src: scanScreen,
      alt: "Scan cards with AI detection and vendor matching",
      label: "Buyers Experience",
    },
  ];

  const features = [
    { icon: HiOutlineCheckCircle, text: "Smart Buy/Sell lists Matching" },
    { icon: HiOutlineChartBar, text: "Inventory Tracking" },
    { icon: HiOutlineUsers, text: "Trade Show Tools" },
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: theme.text,
        background: theme.background,
        padding: "4rem 1rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Hero Content */}
      <div
        style={{ maxWidth: "900px", textAlign: "center", marginBottom: "4rem" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Built for Vendors.
            <br />
            <span style={{ color: theme.accent || "#8B5CF6" }}>
              Loved by Collectors.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            lineHeight: 1.6,
            marginBottom: "2rem",
            color: theme.textSecondary || "#94A3B8",
            maxWidth: "700px",
            margin: "0 auto 2rem",
          }}
        >
          The intelligent marketplace that connects what vendors want to buy
          with what collectors want to sell. Real-time matching, trade show
          optimization, and fair pricing—all in one platform.
        </motion.p>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "1rem",
                }}
              >
                <Icon
                  size={24}
                  style={{
                    color: theme.accent || "#8B5CF6",
                    flexShrink: 0,
                  }}
                />
                <span>{feature.text}</span>
              </div>
            );
          })}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              padding: "1rem 2rem",
              fontSize: "1.05rem",
              fontWeight: 600,
              background: theme.text || "#8B5CF6",
              color: theme.background,
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onClick={() => setShowBetaModal(true)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(139, 92, 246, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Join Vendor Beta
          </button>
          <button
            style={{
              padding: "1rem 2rem",
              fontSize: "1.05rem",
              fontWeight: 600,
              background: "transparent",
              color: theme.text,
              border: `2px solid ${theme.border || "#334155"}`,
              borderRadius: "12px",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = theme.cardBg || "#1E293B";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Screenshots Showcase */}
      <motion.div
        ref={screenshotRef}
        style={{ y, width: "100%", maxWidth: "1400px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <div
          style={{
            display: "flex",
            gap: "2rem",
            padding: "2rem 1rem",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "thin",
            scrollbarColor: `${theme.accent || "#8B5CF6"} transparent`,
          }}
        >
          {screenshots.map((screenshot, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.15, duration: 0.6 }}
              style={{
                minWidth: "300px",
                maxWidth: "320px",
                scrollSnapAlign: "center",
                position: "relative",
              }}
            >
              {/* Image container with shadow */}
              <div
                style={{
                  position: "relative",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-8px) scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                }}
              >
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                  onError={(e) => {
                    console.error("Failed to load image:", screenshot.src);
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Label */}
              <p
                style={{
                  textAlign: "center",
                  marginTop: "1rem",
                  color: theme.textSecondary || "#94A3B8",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                {screenshot.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Scroll hint */}
        <p
          style={{
            textAlign: "center",
            marginTop: "1.5rem",
            color: theme.textSecondary || "#94A3B8",
            fontSize: "0.85rem",
            opacity: 0.7,
          }}
        >
          ← Scroll to explore features →
        </p>
      </motion.div>

      {/* Platform Badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          marginTop: "4rem",
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <span style={{ color: theme.textSecondary, fontSize: "0.95rem" }}>
          Coming soon to
        </span>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <span
            style={{
              padding: "0.5rem 1rem",
              background: theme.cardBg || "#1E293B",
              borderRadius: "8px",
              fontSize: "0.9rem",
              fontWeight: 600,
              border: `1px solid ${theme.border || "#334155"}`,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <FaApple size={16} />
            iOS
          </span>
          <span
            style={{
              padding: "0.5rem 1rem",
              background: theme.cardBg || "#1E293B",
              borderRadius: "8px",
              fontSize: "0.9rem",
              fontWeight: 600,
              border: `1px solid ${theme.border || "#334155"}`,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <FaGooglePlay size={16} />
            Android
          </span>
        </div>
      </motion.div>
      <VendorBetaModal
        isOpen={showBetaModal}
        onClose={() => setShowBetaModal(false)}
      />
    </section>
  );
}

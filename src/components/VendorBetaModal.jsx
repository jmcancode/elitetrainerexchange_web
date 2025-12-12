// components/VendorBetaModal.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { HiX, HiCheckCircle, HiExclamationCircle } from "react-icons/hi";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function VendorBetaModal({ isOpen, onClose }) {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    businessName: "",
    phoneNumber: "",
    yearsExperience: "",
    averageMonthlyVolume: "",
    primaryFocus: "",
    howDidYouHear: "",
    additionalInfo: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) return "Full name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) return "Valid email is required";
    if (!formData.businessName.trim()) return "Business name is required";
    if (!formData.phoneNumber.trim()) return "Phone number is required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const applicationData = {
        ...formData,
        status: "pending",
        submittedAt: serverTimestamp(),
        createdAt: new Date().toISOString(),
      };

      await addDoc(collection(db, "vendor_beta_applications"), applicationData);

      setSubmitted(true);

      // Reset form after 3 seconds and close
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          businessName: "",
          phoneNumber: "",
          yearsExperience: "",
          averageMonthlyVolume: "",
          primaryFocus: "",
          howDidYouHear: "",
          additionalInfo: "",
        });
        setSubmitted(false);
        onClose();
      }, 3000);
    } catch (err) {
      console.error("Error submitting application:", err);
      setError("Failed to submit application. Please try again.");
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      setError("");
      setSubmitted(false);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(4px)",
              zIndex: 1000,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
              overflowY: "auto",
            }}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: theme.background || "#0F172A",
                borderRadius: "16px",
                maxWidth: "600px",
                width: "100%",
                maxHeight: "90vh",
                overflowY: "auto",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                border: `1px solid ${theme.border || "#334155"}`,
              }}
            >
              {/* Success State */}
              {submitted ? (
                <div
                  style={{
                    padding: "3rem 2rem",
                    textAlign: "center",
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.6 }}
                  >
                    <HiCheckCircle
                      size={64}
                      style={{
                        color: "#10B981",
                        margin: "0 auto 1.5rem",
                      }}
                    />
                  </motion.div>
                  <h2
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: 700,
                      marginBottom: "1rem",
                      color: theme.text,
                    }}
                  >
                    Application Submitted!
                  </h2>
                  <p
                    style={{
                      color: theme.textSecondary || "#94A3B8",
                      lineHeight: 1.6,
                      marginBottom: "1rem",
                    }}
                  >
                    Thank you for applying to our Vendor Beta program. We'll
                    review your application and send you a Discord invite within
                    48 hours.
                  </p>
                  <p
                    style={{
                      color: theme.textSecondary || "#94A3B8",
                      fontSize: "0.9rem",
                    }}
                  >
                    Check your email at <strong>{formData.email}</strong>
                  </p>
                </div>
              ) : (
                <>
                  {/* Header */}
                  <div
                    style={{
                      padding: "1.5rem 2rem",
                      borderBottom: `1px solid ${theme.border || "#334155"}`,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        color: theme.text,
                      }}
                    >
                      Join Vendor Beta
                    </h2>
                    <button
                      onClick={handleClose}
                      disabled={loading}
                      style={{
                        background: "transparent",
                        border: "none",
                        color: theme.textSecondary,
                        cursor: loading ? "not-allowed" : "pointer",
                        padding: "0.5rem",
                        borderRadius: "8px",
                        transition: "all 0.2s",
                        display: "flex",
                        alignItems: "center",
                      }}
                      onMouseEnter={(e) => {
                        if (!loading) {
                          e.currentTarget.style.background =
                            theme.cardBg || "#1E293B";
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      <HiX size={24} />
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit}>
                    <div style={{ padding: "2rem" }}>
                      <p
                        style={{
                          color: theme.textSecondary || "#94A3B8",
                          marginBottom: "2rem",
                          lineHeight: 1.6,
                        }}
                      >
                        Apply for early access to Elite Trainer Exchange. We're
                        looking for experienced vendors to help shape the future
                        of Pokemon TCG trading.
                      </p>

                      {/* Error Message */}
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          style={{
                            background: "rgba(239, 68, 68, 0.1)",
                            border: "1px solid #EF4444",
                            borderRadius: "8px",
                            padding: "1rem",
                            marginBottom: "1.5rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                          }}
                        >
                          <HiExclamationCircle
                            size={20}
                            style={{ color: "#EF4444", flexShrink: 0 }}
                          />
                          <span
                            style={{ color: "#EF4444", fontSize: "0.9rem" }}
                          >
                            {error}
                          </span>
                        </motion.div>
                      )}

                      {/* Form Fields */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1.5rem",
                        }}
                      >
                        {/* Full Name */}
                        <div>
                          <label
                            htmlFor="fullName"
                            style={{
                              display: "block",
                              marginBottom: "0.5rem",
                              color: theme.text,
                              fontSize: "0.9rem",
                              fontWeight: 500,
                            }}
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            disabled={loading}
                            style={{
                              width: "100%",
                              padding: "0.75rem 1rem",
                              background: theme.cardBg || "#1E293B",
                              border: `1px solid ${theme.border || "#334155"}`,
                              borderRadius: "8px",
                              color: theme.text,
                              fontSize: "1rem",
                              outline: "none",
                              transition: "border-color 0.2s",
                            }}
                            onFocus={(e) => {
                              e.target.style.borderColor =
                                theme.accent || "#8B5CF6";
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor =
                                theme.border || "#334155";
                            }}
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label
                            htmlFor="email"
                            style={{
                              display: "block",
                              marginBottom: "0.5rem",
                              color: theme.text,
                              fontSize: "0.9rem",
                              fontWeight: 500,
                            }}
                          >
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={loading}
                            style={{
                              width: "100%",
                              padding: "0.75rem 1rem",
                              background: theme.cardBg || "#1E293B",
                              border: `1px solid ${theme.border || "#334155"}`,
                              borderRadius: "8px",
                              color: theme.text,
                              fontSize: "1rem",
                              outline: "none",
                              transition: "border-color 0.2s",
                            }}
                            onFocus={(e) => {
                              e.target.style.borderColor =
                                theme.accent || "#8B5CF6";
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor =
                                theme.border || "#334155";
                            }}
                          />
                        </div>

                        {/* Business Name */}
                        <div>
                          <label
                            htmlFor="businessName"
                            style={{
                              display: "block",
                              marginBottom: "0.5rem",
                              color: theme.text,
                              fontSize: "0.9rem",
                              fontWeight: 500,
                            }}
                          >
                            Business Name *
                          </label>
                          <input
                            type="text"
                            id="businessName"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleChange}
                            required
                            disabled={loading}
                            style={{
                              width: "100%",
                              padding: "0.75rem 1rem",
                              background: theme.cardBg || "#1E293B",
                              border: `1px solid ${theme.border || "#334155"}`,
                              borderRadius: "8px",
                              color: theme.text,
                              fontSize: "1rem",
                              outline: "none",
                              transition: "border-color 0.2s",
                            }}
                            onFocus={(e) => {
                              e.target.style.borderColor =
                                theme.accent || "#8B5CF6";
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor =
                                theme.border || "#334155";
                            }}
                          />
                        </div>

                        {/* Phone Number */}
                        <div>
                          <label
                            htmlFor="phoneNumber"
                            style={{
                              display: "block",
                              marginBottom: "0.5rem",
                              color: theme.text,
                              fontSize: "0.9rem",
                              fontWeight: 500,
                            }}
                          >
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                            disabled={loading}
                            placeholder="(555) 555-5555"
                            style={{
                              width: "100%",
                              padding: "0.75rem 1rem",
                              background: theme.cardBg || "#1E293B",
                              border: `1px solid ${theme.border || "#334155"}`,
                              borderRadius: "8px",
                              color: theme.text,
                              fontSize: "1rem",
                              outline: "none",
                              transition: "border-color 0.2s",
                            }}
                            onFocus={(e) => {
                              e.target.style.borderColor =
                                theme.accent || "#8B5CF6";
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor =
                                theme.border || "#334155";
                            }}
                          />
                        </div>

                        {/* Years Experience */}
                        <div>
                          <label
                            htmlFor="yearsExperience"
                            style={{
                              display: "block",
                              marginBottom: "0.5rem",
                              color: theme.text,
                              fontSize: "0.9rem",
                              fontWeight: 500,
                            }}
                          >
                            Years of Vendor Experience
                          </label>
                          <select
                            id="yearsExperience"
                            name="yearsExperience"
                            value={formData.yearsExperience}
                            onChange={handleChange}
                            disabled={loading}
                            style={{
                              width: "100%",
                              padding: "0.75rem 1rem",
                              background: theme.cardBg || "#1E293B",
                              border: `1px solid ${theme.border || "#334155"}`,
                              borderRadius: "8px",
                              color: theme.text,
                              fontSize: "1rem",
                              outline: "none",
                              transition: "border-color 0.2s",
                            }}
                            onFocus={(e) => {
                              e.target.style.borderColor =
                                theme.accent || "#8B5CF6";
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor =
                                theme.border || "#334155";
                            }}
                          >
                            <option value="">Select...</option>
                            <option value="less-than-1">
                              Less than 1 year
                            </option>
                            <option value="1-3">1-3 years</option>
                            <option value="3-5">3-5 years</option>
                            <option value="5-10">5-10 years</option>
                            <option value="10+">10+ years</option>
                          </select>
                        </div>

                        {/* Average Monthly Volume */}
                        <div>
                          <label
                            htmlFor="averageMonthlyVolume"
                            style={{
                              display: "block",
                              marginBottom: "0.5rem",
                              color: theme.text,
                              fontSize: "0.9rem",
                              fontWeight: 500,
                            }}
                          >
                            Average Monthly Sales Volume
                          </label>
                          <select
                            id="averageMonthlyVolume"
                            name="averageMonthlyVolume"
                            value={formData.averageMonthlyVolume}
                            onChange={handleChange}
                            disabled={loading}
                            style={{
                              width: "100%",
                              padding: "0.75rem 1rem",
                              background: theme.cardBg || "#1E293B",
                              border: `1px solid ${theme.border || "#334155"}`,
                              borderRadius: "8px",
                              color: theme.text,
                              fontSize: "1rem",
                              outline: "none",
                              transition: "border-color 0.2s",
                            }}
                            onFocus={(e) => {
                              e.target.style.borderColor =
                                theme.accent || "#8B5CF6";
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor =
                                theme.border || "#334155";
                            }}
                          >
                            <option value="">Select...</option>
                            <option value="0-1k">$0 - $1,000</option>
                            <option value="1k-5k">$1,000 - $5,000</option>
                            <option value="5k-10k">$5,000 - $10,000</option>
                            <option value="10k-25k">$10,000 - $25,000</option>
                            <option value="25k-50k">$25,000 - $50,000</option>
                            <option value="50k+">$50,000+</option>
                          </select>
                        </div>

                        {/* Primary Focus */}
                        <div>
                          <label
                            htmlFor="primaryFocus"
                            style={{
                              display: "block",
                              marginBottom: "0.5rem",
                              color: theme.text,
                              fontSize: "0.9rem",
                              fontWeight: 500,
                            }}
                          >
                            Primary Business Focus
                          </label>
                          <select
                            id="primaryFocus"
                            name="primaryFocus"
                            value={formData.primaryFocus}
                            onChange={handleChange}
                            disabled={loading}
                            style={{
                              width: "100%",
                              padding: "0.75rem 1rem",
                              background: theme.cardBg || "#1E293B",
                              border: `1px solid ${theme.border || "#334155"}`,
                              borderRadius: "8px",
                              color: theme.text,
                              fontSize: "1rem",
                              outline: "none",
                              transition: "border-color 0.2s",
                            }}
                            onFocus={(e) => {
                              e.target.style.borderColor =
                                theme.accent || "#8B5CF6";
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor =
                                theme.border || "#334155";
                            }}
                          >
                            <option value="">Select...</option>
                            <option value="trade-shows">Trade Shows</option>
                            <option value="online-only">Online Only</option>
                            <option value="brick-mortar">Brick & Mortar</option>
                            <option value="hybrid">
                              Hybrid (Multiple Channels)
                            </option>
                          </select>
                        </div>

                        {/* How Did You Hear */}
                        <div>
                          <label
                            htmlFor="howDidYouHear"
                            style={{
                              display: "block",
                              marginBottom: "0.5rem",
                              color: theme.text,
                              fontSize: "0.9rem",
                              fontWeight: 500,
                            }}
                          >
                            How did you hear about us?
                          </label>
                          <input
                            type="text"
                            id="howDidYouHear"
                            name="howDidYouHear"
                            value={formData.howDidYouHear}
                            onChange={handleChange}
                            disabled={loading}
                            placeholder="Social media, friend, event, etc."
                            style={{
                              width: "100%",
                              padding: "0.75rem 1rem",
                              background: theme.cardBg || "#1E293B",
                              border: `1px solid ${theme.border || "#334155"}`,
                              borderRadius: "8px",
                              color: theme.text,
                              fontSize: "1rem",
                              outline: "none",
                              transition: "border-color 0.2s",
                            }}
                            onFocus={(e) => {
                              e.target.style.borderColor =
                                theme.accent || "#8B5CF6";
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor =
                                theme.border || "#334155";
                            }}
                          />
                        </div>

                        {/* Additional Info */}
                        <div>
                          <label
                            htmlFor="additionalInfo"
                            style={{
                              display: "block",
                              marginBottom: "0.5rem",
                              color: theme.text,
                              fontSize: "0.9rem",
                              fontWeight: 500,
                            }}
                          >
                            Additional Information
                          </label>
                          <textarea
                            id="additionalInfo"
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleChange}
                            disabled={loading}
                            rows="4"
                            placeholder="Tell us about your business, what features you're most excited about, or anything else you'd like us to know..."
                            style={{
                              width: "100%",
                              padding: "0.75rem 1rem",
                              background: theme.cardBg || "#1E293B",
                              border: `1px solid ${theme.border || "#334155"}`,
                              borderRadius: "8px",
                              color: theme.text,
                              fontSize: "1rem",
                              outline: "none",
                              transition: "border-color 0.2s",
                              resize: "vertical",
                              fontFamily: "inherit",
                            }}
                            onFocus={(e) => {
                              e.target.style.borderColor =
                                theme.accent || "#8B5CF6";
                            }}
                            onBlur={(e) => {
                              e.target.style.borderColor =
                                theme.border || "#334155";
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div
                      style={{
                        padding: "1.5rem 2rem",
                        borderTop: `1px solid ${theme.border || "#334155"}`,
                        display: "flex",
                        gap: "1rem",
                        justifyContent: "flex-end",
                      }}
                    >
                      <button
                        type="button"
                        onClick={handleClose}
                        disabled={loading}
                        style={{
                          padding: "0.75rem 1.5rem",
                          fontSize: "1rem",
                          fontWeight: 600,
                          background: "transparent",
                          color: theme.textSecondary,
                          border: `2px solid ${theme.border || "#334155"}`,
                          borderRadius: "8px",
                          cursor: loading ? "not-allowed" : "pointer",
                          transition: "all 0.2s",
                          opacity: loading ? 0.5 : 1,
                        }}
                        onMouseEnter={(e) => {
                          if (!loading) {
                            e.currentTarget.style.background =
                              theme.cardBg || "#1E293B";
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        style={{
                          padding: "0.75rem 1.5rem",
                          fontSize: "1rem",
                          fontWeight: 600,
                          background: loading
                            ? theme.cardBg || "#1E293B"
                            : theme.text || "#8B5CF6",
                          color: loading
                            ? theme.textSecondary
                            : theme.background,
                          border: "none",
                          borderRadius: "8px",
                          cursor: loading ? "not-allowed" : "pointer",
                          transition: "all 0.2s",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                        onMouseEnter={(e) => {
                          if (!loading) {
                            e.currentTarget.style.transform =
                              "translateY(-1px)";
                            e.currentTarget.style.boxShadow =
                              "0 4px 12px rgba(139, 92, 246, 0.3)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        {loading ? "Submitting..." : "Submit Application"}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

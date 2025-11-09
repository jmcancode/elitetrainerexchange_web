import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ComingSoon from "../components/ComingSoon";
import Footer from "../components/Footer";
import PrivacyModal from "../components/PrivacyModal";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <Helmet>
        <title>
          Elite Trainer Exchange — Pokémon Vendor & Collector Platform
        </title>
        <meta
          name="description"
          content="A modern Pokémon platform for vendors and collectors — connecting the community with auctions, analytics, and fair trade tools. Coming soon to iOS and Android."
        />
        <meta property="og:title" content="Elite Trainer Exchange" />
        <meta
          property="og:description"
          content="A modern Pokémon platform built for vendors and collectors."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://elitetrainerexchange.com" />
      </Helmet>

      <Navbar />
      <ComingSoon />
      <Footer onPrivacyClick={() => setShowPrivacy(true)} />
      <PrivacyModal
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
      />
    </>
  );
}

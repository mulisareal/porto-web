import React from "react";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import PrestasiPreview from "../components/PrestasiPreview.jsx";
import Pengalaman from "../components/Pengalaman.jsx";
import KaryaPreview from "../components/KaryaPreview.jsx";
import Organisasi from "../components/Organisasi.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PrestasiPreview />
      <KaryaPreview />
      <Pengalaman />
      <Organisasi />
    </>
  );
}

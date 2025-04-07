import React from "react";
import { BrowserRouter } from 'react-router-dom';
import "./index.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ToolsSection from "../components/ToolsSection";
import StatsSection from "../components/StatsSection";
import CallToAction from "../components/CallToAction";
import PricingTable from "../components/PricingTable";
import Footer from "../components/Footer";
import Features from "../components/Features";
import BackToTop from "../components/BackToTop";
import ProductEnquire from "../components/ProductEnquire";

export default function Main() {
  return (
    <div className="main-container w-full  bg-white relative overflow-hidden mx-auto my-0 ">
      <div className="w-[1536px] h-[768px]  bg-cover bg-no-repeat absolute top-[79px] left-[-37px] z-[2]" />
      <BrowserRouter>
      <Header />
      <main>
        <Hero />
        <ToolsSection />
        <Features/>
        <StatsSection />
        <CallToAction />
        <PricingTable/>
        <ProductEnquire/>
        <BackToTop/>
      </main>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

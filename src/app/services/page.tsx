"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterCard from '@/components/sections/footer/FooterCard';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import { Box, Building, Facebook, Globe, Linkedin, Truck, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeLargeTitles"
        background="floatingGradient"
        cardStyle="solid"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "Services",
          id: "/services",
        },
        {
          name: "About Us",
          id: "/aboutus",
        },
        {
          name: "Clients",
          id: "/clients",
        },
        {
          name: "Contact Us",
          id: "/contactus",
        },
      ]}
      brandName="AMS Shipping"
    />
  </div>

  <div id="services-details" data-section="services-details">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Air Freight",
          description: "Expedited air cargo services for urgent and valuable shipments worldwide.",
          bentoComponent: "reveal-icon",
          icon: Globe,
          button: {
            text: "Learn More",
            href: "/services#air-freight",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/aerial-view-container-cargo-ship-sea_335224-719.jpg",
          imageAlt: "container ship vast ocean",
        },
        {
          title: "Ocean Freight",
          description: "Flexible and economical ocean shipping options for full container loads (FCL) and less than container loads (LCL).",
          bentoComponent: "reveal-icon",
          icon: Box,
          button: {
            text: "Learn More",
            href: "/services#ocean-freight",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/cargo-ship-sailing-ocean_23-2152021788.jpg",
          imageAlt: "container ship vast ocean",
        },
        {
          title: "Road Transport",
          description: "Efficient domestic and cross-border road transport for seamless last-mile delivery.",
          bentoComponent: "reveal-icon",
          icon: Truck,
          button: {
            text: "Learn More",
            href: "/services#road-transport",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/airport-terminal_1417-1451.jpg",
          imageAlt: "container ship vast ocean",
        },
        {
          title: "Warehousing & Distribution",
          description: "Secure storage and strategic distribution solutions to optimize your inventory flow.",
          bentoComponent: "reveal-icon",
          icon: Building,
          button: {
            text: "Learn More",
            href: "/services#warehousing",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/runway-lights-with-landing-airbus-vienna_181624-58638.jpg",
          imageAlt: "container ship vast ocean",
        },
      ]}
      title="Comprehensive Logistics Solutions"
      description="Discover our full range of services designed to simplify your supply chain and enhance global reach."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "200+",
          title: "Countries Served",
          items: [
            "Extensive global network",
            "Local expertise everywhere",
          ],
        },
        {
          id: "m2",
          value: "1M+",
          title: "Shipments Delivered",
          items: [
            "Proven track record of success",
            "Reliable and on-time",
          ],
        },
        {
          id: "m3",
          value: "15+",
          title: "Years in Service",
          items: [
            "Deep industry experience",
            "Continuously evolving solutions",
          ],
        },
      ]}
      title="Our Impact in Numbers"
      description="See the scale and efficiency of AMS Shipping through our key performance indicators."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="AMS Shipping"
      copyrightText="© 2024 AMS Shipping. All rights reserved."
      socialLinks={[
        {
          icon: Twitter,
          href: "https://twitter.com/amsshipping",
          ariaLabel: "Twitter",
        },
        {
          icon: Linkedin,
          href: "https://linkedin.com/company/amsshipping",
          ariaLabel: "LinkedIn",
        },
        {
          icon: Facebook,
          href: "https://facebook.com/amsshipping",
          ariaLabel: "Facebook",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

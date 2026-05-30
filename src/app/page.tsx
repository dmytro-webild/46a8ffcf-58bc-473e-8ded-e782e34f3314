"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import { Box, CheckCircle, Clock, Facebook, FileText, Globe, LifeBuoy, Linkedin, Settings, ShieldCheck, Smile, Twitter, Users } from "lucide-react";

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
          name: "Home",          id: "/"},
        {
          name: "Services",          id: "/services"},
        {
          name: "About Us",          id: "/aboutus"},
        {
          name: "Clients",          id: "/clients"},
        {
          name: "Contact Us",          id: "/contactus"},
      ]}
      brandName="AMS Shipping"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "plain"}}
      imagePosition="right"
      title="Your Global Shipping Partner."
      description="Streamlined freight forwarding for a connected world. Experience efficiency and reliability with AMS Shipping."
      buttons={[
        {
          text: "Get a Quote",          href: "/contactus"},
        {
          text: "Learn More",          href: "/aboutus"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/cargo-ship-sailing-ocean_23-2152021788.jpg"
      imageAlt="Large cargo ship at port with containers"
      mediaAnimation="slide-up"
      fixedMediaHeight={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/smiling-happily-with-hand-hip-confident-positive-proud-friendly-attitude_1194-633391.jpg",          alt: "John Doe"},
        {
          src: "http://img.b2bpic.net/free-photo/image-corporate-woman-working-office-sitting-front-laptop-preparing-business_1258-194628.jpg",          alt: "Jane Smith"},
        {
          src: "http://img.b2bpic.net/free-photo/smart-asian-engineer-manager-with-safety-uniform-checking-site-construction-with-steel-concrete-structure-background_609648-1602.jpg",          alt: "David Lee"},
        {
          src: "http://img.b2bpic.net/free-photo/authentic-small-youthful-marketing-agency_23-2150167348.jpg",          alt: "Sarah Chen"},
        {
          src: "http://img.b2bpic.net/free-photo/middle-aged-delivery-woman-blue-uniform-cap-holding-cardboard-box-clipboard-looking-it-smiling-standing-pink-wall_141793-71945.jpg",          alt: "Michael Brown"},
      ]}
      avatarText="Trusted by 5000+ businesses"
      marqueeItems={[
        {
          type: "text",          text: "Global Reach"},
        {
          type: "text-icon",          text: "On-Time Delivery",          icon: Clock,
        },
        {
          type: "text",          text: "Secure Logistics"},
        {
          type: "text-icon",          text: "Customer Satisfaction",          icon: Smile,
        },
        {
          type: "text",          text: "Innovation in Freight"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      title="About AMS Shipping"
      description="AMS Shipping is dedicated to providing top-tier freight forwarding and logistics solutions. With years of expertise, we ensure your cargo reaches its destination safely and on time."
      bulletPoints={[
        {
          title: "Global Reach",          description: "Extensive network connecting continents and markets.",          icon: Globe,
        },
        {
          title: "Reliable Service",          description: "On-time delivery and secure handling for every shipment.",          icon: ShieldCheck,
        },
        {
          title: "Custom Solutions",          description: "Tailored logistics to meet unique business needs.",          icon: Settings,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/airport-terminal_1417-1451.jpg"
      imageAlt="Modern logistics office interior"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features-home" data-section="features-home">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Air Freight",          description: "Fast and reliable air cargo solutions for time-sensitive shipments.",          bentoComponent: "reveal-icon",          icon: Globe,
        },
        {
          title: "Ocean Freight",          description: "Cost-effective sea transport for large volume and heavy cargo.",          bentoComponent: "reveal-icon",          icon: Box,
        },
        {
          title: "Customs Clearance",          description: "Seamless customs processing to ensure smooth international trade.",          bentoComponent: "reveal-icon",          icon: FileText,
        },
      ]}
      title="Our Core Services"
      description="Delivering comprehensive logistics tailored to your needs. From air to sea, we've got you covered."
    />
  </div>

  <div id="social-proof-home" data-section="social-proof-home">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Global Corp",        "Innovate Logistics",        "Swift Supply",        "Apex Freight",        "Horizon Trade",        "Pioneer Shipping",        "Elite Cargo",        "Dynamic Deliveries"]}
      title="Trusted by Industry Leaders"
      description="Our commitment to excellence has earned the trust of clients worldwide."
      showCard={true}
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      title="Our Achievements Speak Volumes"
      description="With a steadfast commitment to excellence, AMS Shipping consistently delivers outstanding results for our clients."
      metrics={[
        {
          id: "em1",          value: "99.8%",          title: "On-Time Delivery Rate",          description: "Ensuring your cargo arrives precisely when expected, every single time.",          icon: CheckCircle,
        },
        {
          id: "em2",          value: "10K+",          title: "Satisfied Clients",          description: "Building lasting relationships through reliable service and exceptional support.",          icon: Users,
        },
        {
          id: "em3",          value: "24/7",          title: "Global Support",          description: "Always available to assist with your logistics needs, anytime, anywhere.",          icon: LifeBuoy,
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="AMS Shipping"
      copyrightText="© 2024 AMS Shipping. All rights reserved."
      socialLinks={[
        {
          icon: Twitter,
          href: "https://twitter.com/amsshipping",          ariaLabel: "Twitter"},
        {
          icon: Linkedin,
          href: "https://linkedin.com/company/amsshipping",          ariaLabel: "LinkedIn"},
        {
          icon: Facebook,
          href: "https://facebook.com/amsshipping",          ariaLabel: "Facebook"},
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

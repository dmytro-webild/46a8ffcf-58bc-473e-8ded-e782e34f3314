"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterCard from '@/components/sections/footer/FooterCard';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import { Award, Facebook, Lightbulb, Linkedin, TrendingUp, Twitter } from "lucide-react";

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

  <div id="about-journey" data-section="about-journey">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      title="Our Journey in Freight Forwarding"
      description="Since our inception, AMS Shipping has been driven by a vision to revolutionize global logistics. We pride ourselves on innovation, integrity, and unparalleled customer service."
      bulletPoints={[
        {
          title: "Founding Principles",          description: "Built on a foundation of reliability and customer-first approach.",          icon: Lightbulb,
        },
        {
          title: "Growth & Innovation",          description: "Continuously adopting new technologies for better efficiency.",          icon: TrendingUp,
        },
        {
          title: "Commitment to Clients",          description: "Partnerships based on trust, transparency, and mutual success.",          icon: Award,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/sad-african-girl-found-mistake-documents-thinking-about-something-while-her-colleagues-trying-help-asian-web-developer-holding-report-explains-it-european-young-woman_197531-3851.jpg"
      imageAlt="AMS Shipping team meeting"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      team={[
        {
          id: "t1",          name: "John Doe",          role: "CEO & Founder",          imageSrc: "http://img.b2bpic.net/free-photo/man-overalls-looking-camera-colleague_259150-56928.jpg",          imageAlt: "John Doe, CEO"},
        {
          id: "t2",          name: "Jane Smith",          role: "Head of Operations",          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-sitting-couch-smiling_23-2148095698.jpg",          imageAlt: "Jane Smith, Head of Operations"},
        {
          id: "t3",          name: "David Lee",          role: "Global Sales Director",          imageSrc: "http://img.b2bpic.net/free-photo/closeup-happy-middle-aged-business-leader_1262-4823.jpg",          imageAlt: "David Lee, Global Sales Director"},
        {
          id: "t4",          name: "Sarah Chen",          role: "Client Relations Manager",          imageSrc: "http://img.b2bpic.net/free-photo/woman-call-center_1398-4739.jpg",          imageAlt: "Sarah Chen, Client Relations Manager"},
        {
          id: "t5",          name: "Mark Wilson",          role: "Logistics Technology Lead",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-warehouse-worker-with-tablet-standing-storage-department_342744-1465.jpg",          imageAlt: "Portrait of smiling warehouse worker with tablet standing in storage department"},
      ]}
      title="Meet Our Expert Team"
      description="Behind every successful shipment is a dedicated team of logistics professionals committed to your success."
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

"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterCard from '@/components/sections/footer/FooterCard';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import { Facebook, Linkedin, Twitter } from "lucide-react";

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

  <div id="contact-prompt" data-section="contact-prompt">
      <ContactText
      buttons={[
        {
          text: "Call Us",          href: "tel:+1234567890"},
        {
          text: "Email Us",          href: "mailto:info@amsshipping.com"},
      ]}
      background={{"variant": "radial-gradient"}}
      useInvertedBackground={false}
      text="Ready to streamline your shipping? Get in touch with AMS Shipping today for a personalized quote or consultation."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",          title: "What types of freight do you handle?",          content: "AMS Shipping handles a wide range of freight, including general cargo, oversized cargo, hazardous materials (with proper documentation), and temperature-controlled goods. Contact us with your specific needs."},
        {
          id: "faq2",          title: "Do you offer customs brokerage services? ",          content: "Yes, we provide comprehensive customs brokerage services to ensure smooth and compliant clearance for your international shipments. Our experts navigate complex regulations on your behalf."},
        {
          id: "faq3",          title: "How can I get a shipping quote?",          content: "You can request a shipping quote by filling out the contact form on our website, calling us directly, or sending an email. Please provide details about your cargo, origin, and destination for an accurate quote."},
        {
          id: "faq4",          title: "What is your service coverage area?",          content: "We offer extensive global coverage, with a network that spans over 200 countries. Whether your shipment is domestic or international, we have a solution for you."},
        {
          id: "faq5",          title: "How can I track my shipment?",          content: "Once your shipment is confirmed, you will receive a tracking number. You can use this number on our website's tracking portal to monitor your cargo's real-time status and location."},
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Find quick answers to common inquiries about our freight forwarding services."
      faqsAnimation="slide-up"
      textPosition="left"
      showCard={true}
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

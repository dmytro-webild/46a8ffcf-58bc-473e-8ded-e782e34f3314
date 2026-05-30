"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterCard from '@/components/sections/footer/FooterCard';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
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

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "test1",
          title: "Unmatched Efficiency",
          quote: "AMS Shipping transformed our international logistics. Their efficiency and attention to detail are simply unmatched. We've seen significant improvements in delivery times and cost savings.",
          name: "Maria Rodriguez",
          role: "Logistics Manager, GlobalTech Inc.",
          imageSrc: "http://img.b2bpic.net/free-photo/successful-senior-businessman-standing-window_1262-3120.jpg",
          imageAlt: "Maria Rodriguez",
        },
        {
          id: "test2",
          title: "Reliable & Professional",
          quote: "The team at AMS Shipping is incredibly professional and reliable. They handle our complex freight requirements with ease, providing transparent communication every step of the way. Highly recommended!",
          name: "David Kim",
          role: "Operations Director, Swift Retail",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-smiling_93675-133804.jpg",
          imageAlt: "David Kim",
        },
        {
          id: "test3",
          title: "Exceptional Customer Service",
          quote: "We've been partnering with AMS Shipping for years, and their customer service is consistently exceptional. Any issue is resolved quickly and effectively, making them a true extension of our team.",
          name: "Emily Watson",
          role: "Supply Chain VP, Zenith Manufacturing",
          imageSrc: "http://img.b2bpic.net/free-photo/two-people-working-warehouse_329181-12843.jpg",
          imageAlt: "Emily Watson",
        },
        {
          id: "test4",
          title: "Seamless Global Reach",
          quote: "Thanks to AMS Shipping, our global expansion has been seamless. Their extensive network and expertise in customs clearance have opened up new markets for us with confidence.",
          name: "Michael Brown",
          role: "Founder, Innovate Imports",
          imageSrc: "http://img.b2bpic.net/free-photo/colleagues-working-office-relaxed-atmosphere_329181-12385.jpg",
          imageAlt: "Michael Brown",
        },
        {
          id: "test5",
          title: "Beyond Expectations",
          quote: "AMS Shipping consistently goes above and beyond our expectations. Their proactive approach to problem-solving and dedication to meeting deadlines is invaluable to our business.",
          name: "Sophia Lee",
          role: "Head of Procurement, Apex Exports",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-man-talking-female-mechanic-while-signing-paperwork-auto-repair-shop_637285-7762.jpg",
          imageAlt: "Sophia Lee",
        },
        {
          id: "test6",
          title: "Logistics Partner for Success",
          quote: "Choosing AMS Shipping was one of our best decisions. Their robust logistics solutions and transparent communication have directly contributed to our operational success and growth.",
          name: "Robert Davis",
          role: "CEO, Future Brands Group",
          imageSrc: "http://img.b2bpic.net/free-photo/business-people-working-office-with-digital-tablet_1301-6633.jpg",
          imageAlt: "Business people working in the office with digital tablet.",
        },
      ]}
      title="What Our Clients Say"
      description="Hear directly from businesses who trust AMS Shipping for their most critical logistics needs and global supply chain solutions."
    />
  </div>

  <div id="client-logos" data-section="client-logos">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Global Corp",
        "Innovate Logistics",
        "Swift Supply",
        "Apex Freight",
        "Horizon Trade",
        "Pioneer Shipping",
        "Elite Cargo",
        "Dynamic Deliveries",
      ]}
      title="Partners We Proudly Serve"
      description="Our extensive network includes diverse businesses across various industries, all relying on our efficient solutions."
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

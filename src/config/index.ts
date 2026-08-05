import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Muhammad Ibrahim — Flutter Developer",
  author: "Muhammad Ibrahim",
  description:
    "Flutter Developer with 3+ years of experience building high-performance cross-platform iOS and Android applications.",
  lang: "en",
  siteLogo: "/ibrahim.jpg",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Projects", href: "#projects" },
    { text: "Tech Stack", href: "#skills" },
    { text: "Experience", href: "#experience" },
    { text: "Leadership", href: "#leadership" },
    { text: "Open Source", href: "#contributions" },
    { text: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { text: "GitHub", icon: 'github.svg', href: "https://github.com/mibra-heem" },
    { text: "LinkedIn", icon: 'linkedin.svg', href: "https://linkedin.com/in/mibra-heem-6b9aa4250" },
    { text: "YouTube", icon: 'youtube.svg', href: "https://www.youtube.com/@m.ibraheem-dev" },
    { text: "Instagram", icon: 'instagram.svg', href: "https://www.instagram.com/ibra_heem.dev/" },
    { text: "Facebook", icon: 'facebook.svg', href: "https://www.facebook.com/profile.php?id=61579216200868" },
    { text: "X", icon: 'x.svg', href: "https://x.com/ibraheem_dev" },
  ],
  socialImage: "/portfolio-cover.png",
  canonicalURL: "https://mibraheem-dev.vercel.app/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Muhammad Ibrahim",
    specialty: "Flutter Developer",
    summary:
      "Flutter Developer with 3+ years of experience designing and shipping cross-platform iOS and Android applications. Skilled in clean architecture, scalable state management, and REST API integrations.",
    tagline: "Bringing ideas to life with clean code and high-performance cross-platform apps.",
    email: "ibraheem.dev.pk@gmail.com",
  },
  about: {
    description: `Hi, I’m Muhammad Ibrahim — a Flutter Developer with 3+ years of experience designing and shipping cross-platform iOS and Android applications. Skilled in clean architecture, scalable state management, and complex third-party REST API integrations. I handle the core app structure from scratch, manage developer workflows, and focus on delivering smooth user experiences. Experienced across the full lifecycle of a project, from initial setup to pushing updates live on the App Store and Google Play.`,
    image: "/ibrahim.png",
  },
  skills: [
    { name: "Flutter", icon: "flutter.svg" },
    { name: "BLoC", icon: "bloc.svg" },
    { name: "Laravel", icon: "laravel.svg" },
    { name: "Firebase", icon: "firebase.svg" },
    { name: "Supabase", icon: "supabase.svg" },
    { name: "MySQL", icon: "mysql.svg" },
    { name: "MS SQL Server", icon: "microsoftsqlserver.svg" },
    { name: "Android Studio", icon: "androidstudio.svg" },
    { name: "Xcode", icon: "xcode.svg" },
    { name: "GitHub", icon: "github.svg" },
    { name: "Antigravity", icon: "antigravity.svg" },
    { name: "Canva", icon: "canva.svg" },
  ],
  experience: [
    {
      company: "Solution Experts",
      position: "Lead Flutter Developer",
      startDate: "Sep 2025",
      endDate: "Present",
      location: "Lahore, Pakistan",
      summary: [
        "Managing a team of developers while handling app structure and working on multiple client projects simultaneously.",
        "Introduced Clean Architecture and consistent state management across all projects, improving code quality and accelerating feature delivery.",
        "Refactored legacy database logic by replacing bulk historical data loads with an optimized fetching model, reducing load times from 15s to under 2s.",
        "Managed full development lifecycle including App Store and Google Play submission, build configuration, and live production deployment."
      ],
    },
    {
      company: "Media Expert Design",
      position: "Flutter Developer",
      startDate: "Dec 2024",
      endDate: "Jan 2025",
      location: "Remote (UAE)",
      summary: [
        "Converted Figma designs into pixel-perfect Flutter UIs with full responsiveness across different screen sizes and platforms.",
        "Built and integrated custom RESTful APIs, managing the connection between mobile frontend and backend services with robust error handling.",
        "Collaborated remotely with cross-functional development teams to deliver UI updates, feature additions, and application improvements on schedule."
      ],
    },
    {
      company: "Solution Experts",
      position: "Flutter & Backend Developer Intern",
      startDate: "Mar 2024",
      endDate: "Dec 2024",
      location: "Lahore, Pakistan",
      summary: [
        "Contributed to core Flutter features for ERP mobile applications, gaining hands-on experience in production-grade development.",
        "Stepped into backend development using PHP and CodeIgniter, writing and optimizing database queries that improved ERP response times.",
        "Worked across both mobile and backend systems, building REST APIs and subsequently integrating them into the mobile frontend — strengthening full-stack development capability.",
        "Resolved client-reported bugs and issues, improving overall application stability and user experience."
      ],
    }
  ],
  volunteer: [
    {
      organization: "University of Gujrat",
      position: "Team Lead – Hayat App",
      startDate: "Aug 2025",
      endDate: "Present",
      summary: [
        "Leading a cross-functional team of developers to design and build Hayat App, a mobile solution for university operations and student services.",
        "Translating stakeholder requirements into structured technical tasks, sprint plans, and Agile development workflows.",
        "Coordinating team efforts across UI design, backend development, and API integration to ensure timely and high-quality feature delivery."
      ],
    },
  ],
  projects: [
    {
      name: "APC System",
      subtitle: "Pest Control Field Management",
      summary: "Developed a pest control management application using Flutter for the mobile app and PHP/CodeIgniter for backend APIs. Integrated Google Calendar API, Google Sign-In, Google Maps, role-based access control, and live background location tracking for field technicians.",
      tags: ["Flutter", "CodeIgniter", "Google Maps", "REST API", "Live Tracking"],
      linkPlayStore: "https://play.google.com/store/apps/details?id=com.solexp.apc_system&hl=en",
      linkAppStore: "https://apps.apple.com/us/app/apc-system/id6758428910",
      image: "/apc-cover.png",
    },
    {
      name: "Multynet",
      subtitle: "Product Scanner & Operations",
      summary: "Revamped a multi-role product scanning application for Admins and Salespersons with polished UI/UX and optimized data-fetching. Reduced dashboard load times by over 80% (15s to under 2s) through architectural refactoring and efficient API query design.",
      tags: ["Flutter", "Clean Architecture", "API Optimization", "QR/Barcode"],
      image: "/multynet-cover.png",
    },
    {
      name: "Ramza",
      subtitle: "EV Operations Platform",
      summary: "Developed a multi-role after-sales management platform for an electric scooter company supporting Admin, Dealer, Customer, and Technician workflows. Implemented warranty management, vehicle inventory tracking, appointment scheduling, and technician assignment.",
      tags: ["Flutter", "EV Platform", "State Management", "Role-Based Access"],
      image: "/ramza-cover.png",
    },
    {
      name: "Mustye",
      subtitle: "Real-time Chat & Audio Calling",
      summary: "A real-time chat app with Firebase Auth, Firestore messaging, message seen status, profile customization, contact management, and Agora-based audio calling. Laravel handles backend APIs.",
      tags: ["Flutter", "Firebase", "Agora SDK", "Laravel API"],
      linkPreview: "https://github.com/mibra-heem/chat_app_flutter/tree/main?tab=readme-ov-file#-video-demo-",
      linkSource: "https://github.com/mibra-heem/chat_app_flutter",
      image: "/mustye-cover.png",
    },
    {
      name: "Mohart",
      subtitle: "Full-Stack eCommerce Store",
      summary: "Offers a smooth eCommerce shopping experience with product browsing, detailed product pages, a modern checkout flow, and Stripe integrated for online payments connected to a Laravel backend.",
      tags: ["Flutter", "Stripe Payment", "Laravel", "Cart Management"],
      linkPreview: "https://github.com/mibra-heem/ecommerce-app?tab=readme-ov-file#-video-demo-",
      linkSource: "https://github.com/mibra-heem/ecommerce-app",
      image: "/mohart-cover.png",
    },
    {
      name: "Mohart Admin",
      subtitle: "eCommerce Admin Management Panel",
      summary: "Flutter-based eCommerce admin panel for managing products, categories, and promotional banners with real-time Laravel backend integration.",
      tags: ["Flutter", "Admin Panel", "Laravel API", "Product Management"],
      linkPreview: "https://github.com/mibra-heem/ecommerce_admin_app?tab=readme-ov-file#-video-demo-",
      linkSource: "https://github.com/mibra-heem/ecommerce_admin_app",
      image: "/mohart-admin-cover.png",
    },
    {
      name: "Reminiss",
      subtitle: "Personal Memory & Location Mapping",
      summary: "Reminiss is a personal memory app that lets users capture experiences and attach them to locations. Built with Supabase authentication and Mapbox maps for seamless saving and revisiting of places.",
      tags: ["Flutter", "Supabase", "Mapbox Maps", "Auth"],
      linkSource: "https://github.com/mibra-heem/reminiss",
      image: "/reminiss-cover.png",
    },
    {
      name: "Hugh & Bucks",
      subtitle: "Restaurant & QR Redemption App",
      summary: "A restaurant app with 3 sections: community (admin), vendor & customer. Vendors scan customer QR codes to redeem items on success.",
      tags: ["Flutter", "QR Scanner", "Multi-role", "Vendor App"],
      image: "/hugh-bucks-cover.png",
    },
  ],
  contributions: [
    {
      name: "Otpify Package",
      subtitle: "Open-Source Flutter OTP Input Widget",
      summary: "Developed and published Otpify on Pub.dev: a highly customizable OTP input widget for authentication workflows in Flutter. Achieved 120+ downloads within 3 days of release. Features adaptive UI, configurable field styles, built-in resend timer, and completion callbacks.",
      tags: ["Flutter Package", "Pub.dev", "Dart", "Open Source"],
      demoLink: "https://github.com/mibra-heem/otpify?tab=readme-ov-file#otpify-example",
      linkSource: "https://pub.dev/packages/otpify",
      image: "/otpify-cover.png",
    },
  ],
  education: [
    {
      college: "University Of Gujrat",
      subject: "B.Sc. in Computer Science",
      startDate: "Sep 2019",
      endDate: "Sep 2023",
      location: "Gujrat, Pakistan",
    },
    {
      college: "Punjab Group Of Colleges",
      subject: "F.Sc. Pre-Engineering",
      startDate: "Sep 2017",
      endDate: "May 2019",
      location: "Sahiwal, Pakistan",
    },
  ],
};

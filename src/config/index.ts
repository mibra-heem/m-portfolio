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
      summary: "A field operations management app featuring real-time technician location tracking, role-based access control, Google Maps integration, and automated scheduling via Google Calendar API.",
      tags: ["Flutter", "CodeIgniter", "Google Sign-In", "Google Maps", "Google Calendar", "Live Tracking"],
      linkPlayStore: "https://play.google.com/store/apps/details?id=com.solexp.apc_system&hl=en",
      linkAppStore: "https://apps.apple.com/us/app/apc-system/id6758428910",
      image: "/apc.webp",
    },
    // {
    //   name: "Bluestone",
    //   subtitle: "Facility & Maintenance Management System",
    //   summary: "An enterprise facility maintenance (CMMS) and field service management application featuring real-time WebSocket events, live geolocation tracking, and complete workflows for work orders and inventory spare parts.",
    //   tags: ["Flutter", "Laravel Sanctum", "Google Maps", "Live Tracking"],
    //   linkPlayStore: "https://play.google.com/store/apps/details?id=com.solexp.bluestone&hl=en",
    //   linkAppStore: "https://apps.apple.com/us/app/bluestone-cmms/id6758428911",
    //   image: "/bluestone.webp",
    // },
    {
      name: "Multynet",
      subtitle: "Product Scanner & Operations",
      summary: "A multi-role product scanning app featuring QR/barcode scanning for Salespersons, review and approval workflows for Admins, and payment processing dashboards for Accountants.",
      tags: ["Flutter", "Clean Architecture", "API Optimization", "QR/Barcode"],
      image: "/multynet.webp",
    },
    // {
    //   name: "Ramza",
    //   subtitle: "EV Operations & After Sales Management",
    //   summary: "A multi-role EV operations platform with dedicated dashboards for Admins (inventory/orders), Dealers (sales/parts), Customers (orders/warranties), and Technicians (servicing/repairs).",
    //   tags: ["Flutter", "Laravel", "API Integration", "Multi-Role"],
    //   image: "/ramza.webp",
    // },
    {
      name: "Mustye",
      subtitle: "Real-time Chat & Audio Calling",
      summary: "A real-time chat and audio calling application featuring Firebase Auth, Firestore messaging, Agora SDK integration, profile customization, and a robust Laravel backend.",
      tags: ["Flutter", "Laravel", "Firebase Auth", "Firestore", "FCM", "Agora SDK"],
      linkPreview: "https://github.com/mibra-heem/chat_app_flutter/tree/main?tab=readme-ov-file#-video-demo-",
      linkSource: "https://github.com/mibra-heem/chat_app_flutter",
      image: "/mustye.webp",
    },
    {
      name: "Mohart",
      subtitle: "Full-Stack eCommerce Store",
      summary: "A full-stack eCommerce store featuring seamless product browsing, a modern checkout flow, Stripe payment integration, and a Laravel backend for secure transactions.",
      tags: ["Flutter", "Laravel", "Stripe", "Railway"],
      linkPreview: "https://github.com/mibra-heem/ecommerce-app?tab=readme-ov-file#-video-demo-",
      linkSource: "https://github.com/mibra-heem/ecommerce-app",
      image: "/mohart.webp",
    },
    {
      name: "Mohart Admin",
      subtitle: "eCommerce Admin Management Panel",
      summary: "A dedicated administrative panel for managing products, categories, and promotional banners in real time, integrated with a Laravel backend.",
      tags: ["Flutter", "Admin Panel", "Laravel API", "Railway"],
      linkPreview: "https://github.com/mibra-heem/ecommerce_admin_app?tab=readme-ov-file#-video-demo-",
      linkSource: "https://github.com/mibra-heem/ecommerce_admin_app",
      image: "/mohart-admin.webp",
    },
    {
      name: "Reminiss",
      subtitle: "Personal Memory & Location Mapping",
      summary: "A personal memory and location-mapping app that lets users capture and save experiences at specific coordinates using Supabase Auth and Mapbox.",
      tags: ["Flutter", "Supabase", "Email Auth", "Mapbox Maps", "Deep Linking"],
      linkSource: "https://github.com/mibra-heem/reminiss",
      image: "/reminiss.webp",
    },
    {
      name: "Hugh & Bucks",
      subtitle: "Restaurant & QR Redemption App",
      summary: "A multi-role restaurant and QR redemption app allowing vendors to scan and validate customer orders for instant items redemption.",
      tags: ["Flutter", "PHP", "QR Scanner", "Multi-role"],
      image: "/hugh.webp",
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

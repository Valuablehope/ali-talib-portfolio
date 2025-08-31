// src/data/portfolio.js

export const portfolioData = {
  personal: {
    name: "Ali Talib",
    title: "Information Management Specialist",
    subtitle: "Full Stack Developer & Data Analytics Expert",
    tagline: "Transforming Data into Decisions, Ideas into Applications",
    email: "ali.a.talib@hotmail.com",
    phone: "+961 71282672",
    location: "Beirut, Lebanon",
    linkedin: "https://linkedin.com/in/ali-talib",
    github: "https://github.com/ali-talib",
    bio: "Information Management Specialist with 6+ years of experience in data analysis, system design, and full-stack development. Passionate about creating innovative solutions that drive organizational efficiency and decision-making."
  },
  
  skills: {
    "Database & Backend": {
      icon: "🗄️",
      items: ["SQL Server", "MySQL", "Access Database", "Django", "Node.js", "C#", "VB.NET", "ASP.NET"]
    },
    "Data Analytics & BI": {
      icon: "📊",
      items: ["Looker Studio", "Power BI", "Data Analysis", "Trend Analysis", "Power Query", "Data Visualization"]
    },
    "Frontend Development": {
      icon: "🎨",
      items: ["React", "Angular", "Flutter", "HTML", "CSS", "JavaScript", "Electron"]
    },
    "Tools & Platforms": {
      icon: "🛠️",
      items: ["KOBO Toolkit", "Google Scripts", "Microsoft Forms", "Google Forms", "Advanced MS Office", "Git"]
    }
  },
  
  projects: [
    {
      id: 1,
      title: "PHENICS System",
      category: "System Design",
      description: "National Health Information System designed in collaboration with Ministry of Public Health. Comprehensive health data management platform serving multiple PHCCs across Lebanon.",
      tech: ["System Analysis", "Database Design", "Health Informatics", "SQL Server"],
      features: ["Real-time data collection", "Multi-facility support", "Automated reporting", "Data validation"],
      image: "/projects/phenics.jpg",
      color: "#3B82F6"
    },
    {
      id: 2,
      title: "MERA Mobile App",
      category: "Mobile Development",
      description: "Mobile Emergency Response Application developed with MoPH for rapid health emergency reporting and coordination.",
      tech: ["Flutter", "Firebase", "Google Maps API", "Push Notifications"],
      features: ["Emergency reporting", "GPS tracking", "Real-time alerts", "Offline capability"],
      image: "/projects/mera.jpg",
      color: "#10B981"
    },
    {
      id: 3,
      title: "Sohatna App",
      category: "Mobile Development",
      description: "Community health application providing health services access and medical information to Lebanese citizens.",
      tech: ["Flutter", "Node.js", "MongoDB", "REST API"],
      features: ["Service locator", "Health tips", "Appointment booking", "Multi-language"],
      image: "/projects/sohatna.jpg",
      color: "#8B5CF6"
    },
    {
      id: 4,
      title: "Chapter One POS",
      category: "Desktop Application",
      description: "Full-featured Point of Sale system for bookstores with inventory management and sales analytics.",
      tech: ["Electron", "Node.js", "SQLite", "React"],
      features: ["Inventory tracking", "Sales reports", "Customer management", "Offline mode"],
      image: "/projects/chapter-one.jpg",
      color: "#F59E0B"
    },
    {
      id: 5,
      title: "Logix Inventory System",
      category: "Web Application",
      description: "Comprehensive inventory management system with real-time tracking and automated reordering.",
      tech: ["Angular", ".NET Core", "SQL Server", "SignalR"],
      features: ["Real-time updates", "Barcode scanning", "Automated ordering", "Multi-warehouse"],
      image: "/projects/logix.jpg",
      color: "#EF4444"
    },
    {
      id: 6,
      title: "Community Health Data App",
      category: "Mobile Development",
      description: "Data collection application for community health workers with offline capability and automatic sync.",
      tech: ["Flutter", "Google Scripts", "Google Sheets API", "SQLite"],
      features: ["Offline data entry", "Auto-sync", "Form validation", "GPS tagging"],
      image: "/projects/data-collection.jpg",
      color: "#06B6D4"
    },
    {
      id: 7,
      title: "Ticket Hub",
      category: "Web Application",
      description: "Modern ticketing system for IT support with automated routing and SLA management.",
      tech: ["React", "Vite", "Supabase", "GitHub Pages"],
      features: ["Auto-assignment", "SLA tracking", "Knowledge base", "Email integration"],
      image: "/projects/ticket-hub.jpg",
      color: "#EC4899"
    },
    {
      id: 8,
      title: "VibeIn Platform",
      category: "Web Application",
      description: "Organization social intranet platform with AI-powered features for enhanced collaboration.",
      tech: ["React", "Supabase", "AI Integration", "Axios"],
      features: ["Social feeds", "AI chatbot", "Document sharing", "Team collaboration"],
      image: "/projects/vibein.jpg",
      color: "#14B8A6"
    }
  ],
  
  experience: [
    {
      title: "Information Management Specialist",
      company: "Premiere Urgence Internationale (PUI)",
      period: "Nov 2021 - Present",
      location: "Beirut, Lebanon",
      highlights: [
        "Led development and implementation of Health Information System at mission level",
        "Designed data collection tools and dashboards using KOBO, Power BI, and SQL Server",
        "Partnered with Ministry of Public Health for PHENICS system integration",
        "Conducted capacity building trainings for health teams and field staff"
      ]
    },
    {
      title: "Health Information Systems - Team Leader",
      company: "Premiere Urgence Internationale (PUI)",
      period: "May 2021 - Dec 2021",
      location: "Saida, Lebanon",
      highlights: [
        "Supervised HIS implementation across multiple PHCCs",
        "Provided technical assistance to Community Health Workers and PHCC staff",
        "Analyzed epidemiological and financial trends for program improvement",
        "Ensured smooth integration of PHENICS national platform"
      ]
    },
    {
      title: "Senior Program Assistant",
      company: "International Medical Corps (IMC)",
      period: "Jun 2020 - May 2021",
      location: "Tyre, Lebanon",
      highlights: [
        "Managed service provider contracting and compliance processes",
        "Coordinated program activity payments and budget tracking",
        "Facilitated procurement and logistics operations",
        "Conducted field visits for data accuracy and compliance monitoring"
      ]
    },
    {
      title: "Information Management Officer",
      company: "Premiere Urgence Internationale (PUI)",
      period: "Nov 2018 - Feb 2020",
      location: "Saida, Lebanon",
      highlights: [
        "Designed and maintained information management systems",
        "Monitored PHENICS data quality and reporting",
        "Created dashboards and visualizations for decision-making",
        "Developed SOPs for data collection and management"
      ]
    },
    {
      title: "Accounting Auditor",
      company: "ROUMICO",
      period: "Jun 2012 - Oct 2018",
      location: "Tyre, Lebanon",
      highlights: [
        "Conducted comprehensive financial audits",
        "Ensured compliance with accounting standards",
        "Identified and reported financial discrepancies",
        "Provided recommendations for process improvements"
      ]
    }
  ],
  
  education: [
    {
      degree: "Master of Business Administration (MBA)",
      institution: "Beirut International University",
      period: "2018 - 2020",
      focus: "Information Systems, Strategic Management, Business Research Methods"
    },
    {
      degree: "Bachelor of Business Administration",
      field: "Management Information Systems",
      institution: "Lebanese International University",
      period: "2012 - 2018",
      focus: "Data Management, System Analysis, Business Intelligence"
    }
  ],
  
  certifications: [
    {
      name: "Team Management Certificate",
      issuer: "Professional Development",
      icon: "👥"
    },
    {
      name: "Mobile Application Development",
      issuer: "MIT",
      icon: "📱"
    },
    {
      name: "CCNA: Switching and Routing Protocols",
      issuer: "CISCO",
      icon: "🌐"
    },
    {
      name: "National Health Information System (PHENICS)",
      issuer: "Ministry of Public Health",
      icon: "🏥"
    },
    {
      name: "Long-Term Primary Healthcare Subsidization Protocol",
      issuer: "LPSP",
      icon: "⚕️"
    },
    {
      name: "Prevention of Sexual Exploitation and Abuse",
      issuer: "PSEA",
      icon: "🛡️"
    }
  ],
  
  languages: [
    { name: "Arabic", level: "Native", percentage: 100 },
    { name: "English", level: "Proficient", percentage: 95 },
    { name: "Krio", level: "Fluent", percentage: 85 }
  ]
};
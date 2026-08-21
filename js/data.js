const PORTFOLIO_DATA = {
  skills: [
    {
      name: "Android SDK",
      category: "Android",
      level: 95,
      icon: "📱",
      description:
        "Production Android applications, lifecycle management, background work, permissions, services, and platform APIs.",
      tags: ["Android", "Mobile", "SDK"]
    },
    {
      name: "Kotlin",
      category: "Language",
      level: 94,
      icon: "🟣",
      description:
        "Idiomatic Kotlin with Coroutines, Flow, sealed types, extension functions, and type-safe abstractions.",
      tags: ["Kotlin", "Coroutines", "Flow"]
    },
    {
      name: "Jetpack Compose",
      category: "Android",
      level: 93,
      icon: "🎨",
      description:
        "Declarative interfaces, Material 3, custom layouts, navigation, state, and Compose animation systems.",
      tags: ["Compose", "Material 3", "UI"]
    },
    {
      name: "Clean Architecture",
      category: "Architecture",
      level: 91,
      icon: "🏛️",
      description:
        "Layered systems with presentation, domain, and data boundaries designed for testing and long-term change.",
      tags: ["Architecture", "MVVM", "MVI"]
    },
    {
      name: "Firebase",
      category: "Backend",
      level: 88,
      icon: "🔥",
      description:
        "Authentication, Firestore, Cloud Messaging, Crashlytics, Analytics, and remote configuration.",
      tags: ["Firebase", "Auth", "Firestore"]
    },
    {
      name: "GraphQL",
      category: "Backend",
      level: 80,
      icon: "◈",
      description:
        "Type-safe API integration, Apollo Kotlin, normalized caching, schemas, pagination, and subscriptions.",
      tags: ["GraphQL", "Apollo", "API"]
    },
    {
      name: "CI/CD",
      category: "DevOps",
      level: 88,
      icon: "🔄",
      description:
        "GitHub Actions, Gradle automation, testing pipelines, signing, beta distribution, and release workflows.",
      tags: ["GitHub Actions", "Gradle", "Fastlane"]
    },
    {
      name: "DevOps",
      category: "DevOps",
      level: 78,
      icon: "☁️",
      description:
        "Docker, cloud deployment, monitoring, environment management, and operational reliability.",
      tags: ["Docker", "Cloud", "Monitoring"]
    },
    {
      name: "UI/UX Animation",
      category: "Design",
      level: 87,
      icon: "✨",
      description:
        "Motion systems, micro-interactions, shared transitions, Lottie, GSAP, and expressive product behavior.",
      tags: ["Motion", "GSAP", "Design Systems"]
    },
    {
      name: "Performance Tuning",
      category: "Performance",
      level: 86,
      icon: "🚀",
      description:
        "Startup optimization, memory profiling, battery behavior, Baseline Profiles, R8, and frame performance.",
      tags: ["Performance", "R8", "Startup"]
    }
  ],

  projects: [
    {
      id: "finora",
      title: "Finora Mobile Banking",
      year: "2026",
      category: "Android",
      stack: ["Kotlin", "Compose", "MVI", "Keystore"],
      description:
        "A calm and secure money-management experience focused on transaction clarity and fast interaction.",
      coverClass: "cover-finora",
      featured: true
    },
    {
      id: "pulse",
      title: "Pulse Health",
      year: "2025",
      category: "Android",
      stack: ["Compose", "Firebase", "Room"],
      description:
        "An offline-first health tracking application with friendly feedback and practical data visualization.",
      coverClass: "cover-pulse",
      featured: false
    },
    {
      id: "routeflow",
      title: "RouteFlow",
      year: "2024",
      category: "Cross-platform",
      stack: ["KMP", "GraphQL", "Kotlin"],
      description:
        "A logistics coordination platform designed around live status updates and predictable state transitions.",
      coverClass: "cover-routeflow",
      featured: false
    },
    {
      id: "studio",
      title: "Portfolio Studio",
      year: "2026",
      category: "Web",
      stack: ["HTML", "CSS", "JavaScript"],
      description:
        "A premium developer portfolio system with cinematic visuals, accessible interactions, and static deployment.",
      coverClass: "cover-studio",
      featured: false
    }
  ],

  articles: [
    {
      date: "2026-08-01",
      category: "Android",
      title: "Designing a Production-Ready Compose Architecture",
      description:
        "Practical boundaries for state, navigation, domain logic, and UI components."
    },
    {
      date: "2026-07-18",
      category: "Performance",
      title: "Baseline Profiles: A Practical Android Workflow",
      description:
        "How to measure startup and frame performance without guessing."
    },
    {
      date: "2026-06-29",
      category: "Security",
      title: "Building Secure Mobile Authentication",
      description:
        "A practical overview of secure storage, biometric access, and session handling."
    }
  ]
};

export type Category = "Embedded" | "Systems" | "Web" | "Electronics";

export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  category: Category;
  eyebrow: string;
  summary: string;
  overview: string;
  role: string;
  technologies: string[];
  architecture: string[];
  notes: { title: string; body: string }[];
  outcome: string;
  visual: "elevator" | "freertos" | "nas" | "elesystem" | "automation";
  featured: boolean;
  image?: string;
  imageAlt?: string;
  // Add verified URLs when available. Empty values are never rendered as links.
  github?: string;
  demo?: string;
};

export const profile = {
  name: "Mohammad Youssef",
  title: "Computer & Communications Engineer",
  email: "",
  github: "https://github.com/DarkHumor71",
  linkedin: "",
  resume: "",
};

export const projects: Project[] = [
  {
    slug: "esp32-elevator",
    number: "01",
    title: "ESP32 Elevator Control System",
    shortTitle: "ESP32 Elevator",
    category: "Embedded",
    eyebrow: "EMBEDDED SYSTEMS / CONTROL",
    summary:
      "A physical four-floor elevator prototype combining motor control, floor sensing, current monitoring, and server communication.",
    overview:
      "A physical elevator prototype built around an ESP32. The controller brings together floor detection, motor direction, current sensing, a seven-segment display, and communication with a server.",
    role: "Electronics, firmware, control logic, server communication, and mechanical integration.",
    technologies: [
      "ESP32",
      "Embedded C/C++",
      "IR sensors",
      "ACS712",
      "74HC595",
      "24V motor",
      "HTTP API",
    ],
    architecture: [
      "Web server",
      "ESP32 controller",
      "Sensors + motor driver + display",
      "Elevator cabin",
    ],
    notes: [
      {
        title: "Feedback before motion",
        body: "Floor sensors provide the position input required by the controller. The interface between sensed position and commanded movement is central to the prototype.",
      },
      {
        title: "One controller, several interfaces",
        body: "The ESP32 coordinates motor direction, current readings, display output, and HTTP communication across the system.",
      },
      {
        title: "Physical integration",
        body: "The project connects firmware decisions to a real moving mechanism, where wiring, sensing, and mechanical behavior all matter.",
      },
    ],
    outcome:
      "A working four-floor prototype that brings sensing, motor control, display output, and server communication into one physical system.",
    visual: "elevator",
    featured: true,
    github: "https://github.com/DarkHumor71/EleSystemv2/tree/master/board",
  },
  {
    slug: "freertos-manufacturer",
    number: "02",
    title: "FreeRTOS Manufacturing Process",
    shortTitle: "FreeRTOS Manufacturer",
    category: "Embedded",
    eyebrow: "RTOS / CONCURRENCY / SIMULATION",
    summary:
      "A FreeRTOS Windows-port simulation of a manufacturing line, modeled as a Petri net with concurrent stations and live status monitoring.",
    overview:
      "This project models a production line from raw material through processing, assembly, quality control, optional painting, packaging, and shipment. FreeRTOS tasks represent concurrent stations, while a Petri net tracks items and shared resources.",
    role: "Petri net modeling, FreeRTOS task coordination, and system monitoring.",
    technologies: [
      "FreeRTOS",
      "C",
      "Petri nets",
      "Mutexes",
      "HTTP JSON API",
      "Web viewer",
      "MSVC",
    ],
    architecture: [
      "Material input",
      "Petri net transitions",
      "FreeRTOS station tasks",
      "HTTP status + web viewer",
    ],
    notes: [
      {
        title: "Concurrency with shared resources",
        body: "The simulation assigns work to concurrent FreeRTOS tasks while mutexes guard the Petri net state and shared quality-control resources.",
      },
      {
        title: "Modeling real process branches",
        body: "Tokens move through processing, assembly, quality checks, optional painting, and packaging. Failed checks route material through a rework loop.",
      },
      {
        title: "Observable state",
        body: "An HTTP JSON endpoint and web status viewer expose token counts as the simulation runs.",
      },
    ],
    outcome:
      "A Windows-hosted RTOS demo that makes task scheduling, resource constraints, and production-line state visible in real time.",
    visual: "freertos",
    featured: true,
    github: "https://github.com/DarkHumor71/FreeRTOS_manufacturer",
  },
  {
    slug: "pynq-nas",
    number: "03",
    title: "PYNQ-Z2 Network Storage",
    shortTitle: "PYNQ-Z2 NAS",
    category: "Systems",
    eyebrow: "LINUX / NETWORKING / FPGA",
    summary:
      "A network-attached storage exploration using a PYNQ-Z2 board, Linux, network services, and external storage.",
    overview:
      "A Linux storage project built around the PYNQ-Z2 platform. It explores how a compact FPGA-enabled board can serve files across a home network.",
    role: "System setup, storage integration, Linux configuration, and network service exploration.",
    technologies: [
      "PYNQ-Z2",
      "Linux",
      "FPGA platform",
      "Ethernet",
      "External SSD",
      "Samba",
    ],
    architecture: [
      "Home network",
      "Ethernet",
      "PYNQ-Z2 running Linux",
      "External storage + file sharing",
    ],
    notes: [
      {
        title: "Hardware meets services",
        body: "A small development board becomes a useful network device when storage, operating system configuration, and file sharing work together.",
      },
      {
        title: "Clear system boundaries",
        body: "The network, Linux host, and attached storage each have a distinct responsibility. The architecture makes those boundaries visible.",
      },
    ],
    outcome:
      "An exploration of network file access using Linux on the PYNQ-Z2 platform with attached storage.",
    visual: "nas",
    featured: true,
  },
  {
    slug: "elesystem",
    number: "04",
    title: "EleSystemv2",
    shortTitle: "EleSystemv2",
    category: "Web",
    eyebrow: "IOT / FULL-STACK PLATFORM",
    summary:
      "An IoT building platform connecting an ESP32 elevator, QR-based access, electricity tracking, and a React management dashboard.",
    overview:
      "EleSystemv2 brings several building systems together: a four-floor elevator controller, an ESP32-CAM QR reader, electricity expense tracking, and a web dashboard for building and apartment management. The repository also includes KiCad designs for hardware modules.",
    role: "Co-authored with Ahmad Ayoub; the repository spans embedded hardware and full-stack software.",
    technologies: [
      "ESP32",
      "ESP32-CAM",
      "KiCad",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    architecture: [
      "ESP32 + ESP32-CAM",
      "Node / Express API",
      "MongoDB models",
      "React admin dashboard",
    ],
    notes: [
      {
        title: "Physical events reach the application",
        body: "Elevator sensing and control, QR scans, and power measurements feed workflows managed by the server and dashboard.",
      },
      {
        title: "Access for different users",
        body: "The API uses JWT authentication and role-based permissions for admins, moderators, and residents.",
      },
      {
        title: "Hardware is documented alongside software",
        body: "The repository contains elevator firmware, ESP32-CAM firmware, and KiCad designs as well as the backend and client.",
      },
    ],
    outcome:
      "A cross-discipline prototype with firmware, REST services, data models, and an administration interface in one repository.",
    visual: "elesystem",
    featured: true,
    github: "https://github.com/DarkHumor71/EleSystemv2",
  },
  {
    slug: "gmc-automation",
    number: "05",
    title: "GMC Catalog Automation",
    shortTitle: "GMC Automation",
    category: "Systems",
    eyebrow: "PYTHON / API AUTOMATION",
    summary:
      "A Python and GitHub Actions pipeline for enriching product data and syncing a catalog with Google Merchant Center.",
    overview:
      "This repository contains a product catalog pipeline built around the Google Merchant API. Its workflows fetch source data from Google Drive, enrich missing product links, and coordinate product synchronization with Google Merchant Center.",
    role: "Python integration scripts and GitHub Actions workflow design.",
    technologies: [
      "Python",
      "GitHub Actions",
      "Google Merchant API",
      "Google Drive API",
      "CSV",
      "Caching",
    ],
    architecture: [
      "Google Drive catalog",
      "Python link enrichment",
      "Merchant API sync",
      "Logs + cached state",
    ],
    notes: [
      {
        title: "A staged data pipeline",
        body: "Separate workflows retrieve catalog data, fill missing links, and submit products to the Merchant API.",
      },
      {
        title: "Controlled synchronization",
        body: "The sync workflow exposes dry-run and resync inputs and uses cached product data and delta hashes to manage updates.",
      },
      {
        title: "Reviewable operations",
        body: "Workflow logs and uploaded artifacts provide a record of enrichment and sync runs.",
      },
    ],
    outcome:
      "A repeatable catalog workflow that combines external data retrieval, enrichment, and Merchant API operations.",
    visual: "automation",
    featured: true,
    github: "https://github.com/DarkHumor71/GMC-automation",
  },
];

export const skills = [
  {
    name: "Embedded",
    items: [
      "ESP32",
      "FreeRTOS",
      "Embedded C/C++",
      "UART",
      "SPI",
      "I²C",
      "Sensors",
    ],
  },
  {
    name: "Hardware",
    items: ["KiCad", "PCB design", "Motor control", "Electronics"],
  },
  {
    name: "Software",
    items: ["React", "TypeScript", "Node.js", "Python", "PHP", "WordPress"],
  },
  {
    name: "Systems",
    items: [
      "Linux",
      "Docker",
      "Networking",
      "GitHub Actions",
      "REST APIs",
      "Git",
    ],
  },
  { name: "Data", items: ["MongoDB", "MySQL"] },
];

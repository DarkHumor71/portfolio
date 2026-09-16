export type Category = "Embedded" | "Systems" | "Software" | "Electronics";

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
  visual: "freertos" | "nas" | "elesystem" | "automation" | "mic";
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
    slug: "freertos-manufacturer",
    number: "01",
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
    number: "02",
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
    number: "03",
    title: "EleSystemv2",
    shortTitle: "EleSystemv2",
    category: "Software",
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
    number: "04",
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
  {
    slug: "mic-cleaner",
    number: "05",
    title: "MicCleaner",
    shortTitle: "MicCleaner",
    category: "Software",
    eyebrow: "REAL-TIME AUDIO / DESKTOP",
    summary:
      "A Windows audio app that routes microphone input through configurable harmonic notch filters with live signal diagnostics.",
    overview:
      "MicCleaner processes audio from one device and sends the filtered stream to another. It targets stationary hum and harmonics with adjustable narrow notch filters, and provides a desktop interface with live charts and notification-area controls.",
    role: "Real-time audio processing, device routing, desktop controls, and diagnostics.",
    technologies: [
      "Python",
      "NumPy",
      "SciPy",
      "sounddevice",
      "Tkinter",
      "Matplotlib",
      "PyInstaller",
    ],
    architecture: [
      "Audio input device",
      "IIR notch filter bank",
      "Gain + channel routing",
      "Output device + live monitor",
    ],
    notes: [
      {
        title: "Targeted harmonic filtering",
        body: "The default filter uses narrow notches at 50 Hz harmonics through 6 kHz. The base frequency, upper limit, notch width, and explicit frequencies can be adjusted.",
      },
      {
        title: "Practical device routing",
        body: "Input and output devices can be selected by name and host API, making the setup less dependent on Windows device-number changes. A virtual cable can route the processed stream into voice apps.",
      },
      {
        title: "Visible audio behavior",
        body: "The desktop app shows waveforms, spectra, spectrograms, levels, clipping, and stream-status events. A bypass control supports direct comparison.",
      },
    ],
    outcome:
      "A Windows desktop and command-line audio tool with configurable filtering, saved settings, and a packaged executable release.",
    visual: "mic",
    featured: true,
    github: "https://github.com/DarkHumor71/Mic-cleaner",
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
    items: [
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "NumPy / SciPy",
      "PHP",
      "WordPress",
    ],
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

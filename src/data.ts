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
  visual: "elevator" | "nas" | "elesystem" | "hachette";
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
  github: "",
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
    title: "EleSystem Management Platform",
    shortTitle: "EleSystem",
    category: "Web",
    eyebrow: "FULL-STACK SOFTWARE",
    summary:
      "A MERN management platform representing the software side of a connected engineering workflow.",
    overview:
      "A management platform built with the MERN stack. It shows the application layer alongside Mohammad’s embedded and electronics work.",
    role: "Full-stack web development.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    architecture: [
      "React interface",
      "Express API",
      "Node.js application",
      "MongoDB data",
    ],
    notes: [
      {
        title: "End-to-end application",
        body: "The project spans interface, server, and persistence rather than stopping at a single front-end feature.",
      },
      {
        title: "Connected layers",
        body: "React, the Node and Express API, and MongoDB each have a distinct role in the application architecture.",
      },
    ],
    outcome:
      "A full-stack management platform connecting an interface, API, and database.",
    visual: "elesystem",
    featured: true,
  },
  {
    slug: "hachette-antoine",
    number: "04",
    title: "Hachette Antoine Platform",
    shortTitle: "Hachette Antoine",
    category: "Web",
    eyebrow: "WEB PLATFORM / WORDPRESS",
    summary:
      "A WordPress platform project showing experience with a production content-management ecosystem.",
    overview:
      "A WordPress platform for Hachette Antoine, included as an example of practical web delivery and content-driven development.",
    role: "WordPress platform development.",
    technologies: ["WordPress", "PHP", "Web development"],
    architecture: [
      "Content editors",
      "WordPress",
      "Theme + application layer",
      "Published website",
    ],
    notes: [
      {
        title: "Content as a system",
        body: "A publishing platform needs to serve both the people managing content and the visitors using it.",
      },
      {
        title: "Production context",
        body: "This project adds client-facing web experience to a portfolio otherwise focused on hardware and systems.",
      },
    ],
    outcome: "A content-driven WordPress platform for Hachette Antoine.",
    visual: "hachette",
    featured: true,
  },
];

export const skills = [
  {
    name: "Embedded",
    items: ["ESP32", "Embedded C/C++", "UART", "SPI", "I²C", "Sensors"],
  },
  {
    name: "Hardware",
    items: ["KiCad", "PCB design", "Motor control", "Electronics"],
  },
  {
    name: "Software",
    items: ["React", "TypeScript", "Node.js", "PHP", "WordPress"],
  },
  { name: "Systems", items: ["Linux", "Docker", "Networking", "Git"] },
  { name: "Data", items: ["MongoDB", "MySQL"] },
];

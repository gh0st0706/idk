export type Project = {
  title: string;
  label: string;
  href: string;
  image: string;
  imageAlt: string;
  description: string;
  thought: string;
  outcome: string;
  technologies: string[];
};

export type Experiment = {
  title: string;
  description: string;
  signal: string;
};

export const projects: Project[] = [
  {
    title: "FalconEye v2",
    label: "Flight telemetry",
    href: "https://github.com/gh0st0706/FalconEye-v2",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Concrete architectural form with precise geometric shadows",
    description:
      "A diagnostics system that models aircraft engine state over time, scores anomalies, and explains each signal with confidence and reason codes.",
    thought:
      "The interface treats telemetry like a cockpit instrument: quiet by default, precise under pressure, and legible when the data starts to drift.",
    outcome:
      "Streaming ingestion, schema-safe normalization, Flask and Streamlit surfaces, Docker support, and tests for the core engine.",
    technologies: ["Python", "Flask", "Streamlit", "Pandas", "Docker"],
  },
  {
    title: "LEAD CRM",
    label: "B2B product system",
    href: "https://github.com/gh0st0706/CRM",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Warm modern workspace with long tables and soft daylight",
    description:
      "A modern CRM platform for discovering, organizing, qualifying, and exporting company and contact information.",
    thought:
      "The product direction is less dashboard noise, more working surface: dense enough for repeated use, calm enough for judgment.",
    outcome:
      "A monorepo foundation with a Next.js web app, NestJS API, shared UI primitives, shared types, config packages, and Docker assets.",
    technologies: ["Next.js", "NestJS", "TypeScript", "Docker"],
  },
  {
    title: "TechLynx 2026",
    label: "Event publication",
    href: "https://github.com/gh0st0706/symposium-ML",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Minimal architectural interior with warm material tones",
    description:
      "A premium symposium website for the AIML department with registration flows and a serverless Google Sheets backend.",
    thought:
      "The site works like a printed invitation translated into software: confident hierarchy, focused routing, and purposeful motion.",
    outcome:
      "React, Tailwind, Framer Motion, Vercel serverless API, and Google Sheets integration for live registrations.",
    technologies: ["React", "Tailwind", "Framer Motion", "Vercel"],
  },
];

export const experiments: Experiment[] = [
  {
    title: "Cognition surfaces",
    description:
      "Interface studies for memory, mental models, and assisted thinking. Designed to feel humane before it feels technical.",
    signal: "MindSpace",
  },
  {
    title: "Predictive maintenance",
    description:
      "Small ML systems that inspect engine data for early signs of trouble, with an emphasis on explanations over theatrics.",
    signal: "Aircraft ML",
  },
  {
    title: "Lead intelligence",
    description:
      "CRM workflows that compress research, qualification, and exports into a tighter operating rhythm.",
    signal: "LEAD",
  },
];

export const process = [
  {
    step: "01",
    title: "Listen to the object",
    description:
      "Before styling anything, identify what the system wants to be: an instrument, a publication, a cockpit, a tool bench.",
  },
  {
    step: "02",
    title: "Reduce the surface",
    description:
      "Remove decoration until the useful hierarchy is visible. Keep only what improves comprehension, trust, or rhythm.",
  },
  {
    step: "03",
    title: "Make the motion physical",
    description:
      "Use small changes in opacity, distance, and scale so the interface feels handled rather than animated.",
  },
  {
    step: "04",
    title: "Ship, inspect, refine",
    description:
      "Treat the result like a prototype in a workshop: test it, sand the edges, and leave the construction honest.",
  },
];

export const journal = [
  {
    title: "What aircraft diagnostics taught me about UI",
    meta: "Engineering note",
    excerpt:
      "A good dashboard should behave like a good gauge: it says less when things are normal and becomes precise when the situation changes.",
  },
  {
    title: "Why product pages can learn from architecture magazines",
    meta: "Design note",
    excerpt:
      "Whitespace is not emptiness. It is the structure that lets an idea breathe long enough to be understood.",
  },
  {
    title: "CRM as an operating surface",
    meta: "Product note",
    excerpt:
      "Lead tools become better when they feel less like databases and more like a disciplined table in a quiet studio.",
  },
];

export const visualStudies = {
  photography:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85",
  automotive:
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85",
  portrait:
    "https://avatars.githubusercontent.com/u/166275223?v=4",
};

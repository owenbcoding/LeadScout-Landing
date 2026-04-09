export const appUrl = "https://app.leadscout.ai";
export const loginUrl = "https://app.leadscout.ai/login";

export const painPoints = [
  {
    title: "Wasted time",
    description: "Calling random businesses with no buying signal.",
  },
  {
    title: "Messy research",
    description: "Jumping between maps, websites, and notes.",
  },
  {
    title: "No prioritization",
    description: "Not knowing who to contact first.",
  },
] as const;

export const featureCards = [
  "Map-based lead discovery",
  "Business details in one view",
  "Lead scoring and prioritization",
  "Export leads for outreach",
] as const;

export const steps = [
  "Search a location",
  "Review and score local businesses",
  "Export and start outreach",
] as const;

export const targetUsers = [
  "Agencies",
  "Freelancers",
  "Local service businesses",
  "Sales teams",
] as const;

export const pricingTiers = [
  {
    name: "Free trial",
    description: "Explore the workflow and validate your first local lead list.",
  },
  {
    name: "Pro plan",
    description: "Built for solo reps and operators running outbound every week.",
  },
  {
    name: "Team plan",
    description: "Shared workflows and lead coverage for growing sales teams.",
  },
] as const;

export const faqs = [
  {
    question: "Who is LeadScout for?",
    answer:
      "LeadScout is designed for outbound-focused teams that need better local prospecting, including agencies, freelancers, local service businesses, and sales teams.",
  },
  {
    question: "How is this different from Google Maps?",
    answer:
      "Instead of manually jumping between tabs, LeadScout brings discovery, business context, prioritization, and outreach readiness into one workflow.",
  },
  {
    question: "Can I export leads?",
    answer:
      "Yes. Exporting leads for outreach is part of the core workflow so you can move prospects into your calling or email process quickly.",
  },
  {
    question: "Does it track outreach status?",
    answer:
      "Yes. LeadScout is built to help you keep track of outreach so the same prospects do not disappear into scattered notes.",
  },
  {
    question: "When will it launch?",
    answer:
      "LeadScout is launching soon on web. Join early access to be one of the first teams to try it.",
  },
] as const;

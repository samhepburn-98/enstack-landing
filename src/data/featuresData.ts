export type FeatureItem = {
  /** lucide icon name, e.g. "smartphone" */
  icon: string;
  title: string;
  description: string;
};

export const featuresData: FeatureItem[] = [
  {
    icon: "smartphone",
    title: "Our own products",
    description:
      "We design and build apps in-house — ideas we believe in, taken from concept to launch.",
  },
  {
    icon: "code",
    title: "App & web development",
    description:
      "Full-stack development for clients who need reliable, well-built digital products.",
  },
  {
    icon: "palette",
    title: "Brand design",
    description:
      "Identity, visual systems, and creative direction that give brands a distinct edge.",
  },
  {
    icon: "lightbulb",
    title: "Consulting",
    description:
      "Product strategy and technical guidance for teams figuring out what to build and how.",
  },
];

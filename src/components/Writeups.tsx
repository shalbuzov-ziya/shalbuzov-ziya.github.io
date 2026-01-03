import { motion, type Variants } from "framer-motion";
import { ChevronRight, ExternalLink } from "lucide-react";

const writeups = [
  {
    title: "Vulnerability Research & Analysis",
    description: "Coming soon: Deep dives into security flaws and defensive strategies.",
    href: "https://medium.com/@shalbuzov_ziya",
    tag: "Medium",
  },
  {
    title: "OverTheWire: Bandit Mastery",
    description: "Technical walkthrough of Linux security fundamentals and CLI-based challenges.",
    href: "https://shalbuzov-ziya.github.io/OverTheWire-Wargames/",
    tag: "CTF",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export const Writeups = () => {
  return (
    <motion.section
      id="writeups"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-20"
    >
      <motion.p
        variants={itemVariants}
        className="text-xs uppercase tracking-widest text-accent font-semibold mb-2"
      >
        Publications
      </motion.p>
      <motion.h2
        variants={itemVariants}
        className="text-2xl md:text-3xl font-bold mb-10"
      >
        Featured Write-ups
      </motion.h2>

      <motion.div variants={containerVariants} className="space-y-4">
        {writeups.map((writeup) => (
          <motion.a
            key={writeup.title}
            href={writeup.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ x: 4 }}
            className="flex items-center justify-between p-6 border border-border rounded-xl bg-card shadow-soft hover:shadow-card hover:border-accent/30 transition-all duration-300 group"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold">{writeup.title}</h3>
                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-secondary text-muted-foreground rounded-full font-medium">
                  {writeup.tag}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{writeup.description}</p>
            </div>
            <div className="ml-4 flex items-center gap-1 text-muted-foreground group-hover:text-accent transition-colors">
              <ExternalLink className="w-4 h-4" />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};

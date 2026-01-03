import { motion, type Variants } from "framer-motion";
import { Shield, Network, Code, UserX, Search, Snowflake } from "lucide-react";

const certifications = [
  { icon: Shield, name: "CAPT", issuer: "Hackviser" },
  { icon: Network, name: "IT Essentials", issuer: "Network Training Center" },
  { icon: Code, name: "Problem Solving (Basic)", issuer: "HackerRank" },
  { icon: UserX, name: "CPPS", issuer: "Phishing Specialist" },
  { icon: Search, name: "Digital Forensics", issuer: "Introduction" },
  { icon: Snowflake, name: "Advent of Cyber", issuer: "TryHackMe" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export const Certifications = () => {
  return (
    <motion.section
      id="certs"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-20"
    >
      <motion.p
        variants={itemVariants}
        className="text-xs uppercase tracking-widest text-accent font-semibold mb-2"
      >
        Verified
      </motion.p>
      <motion.h2
        variants={itemVariants}
        className="text-2xl md:text-3xl font-bold mb-10"
      >
        Certifications & Training
      </motion.h2>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {certifications.map((cert) => (
          <motion.div
            key={cert.name}
            variants={itemVariants}
            whileHover={{ y: -2 }}
            className="flex items-center gap-4 p-5 border border-border rounded-xl bg-card shadow-soft hover:shadow-card hover:border-accent/30 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
              <cert.icon className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">{cert.name}</span>
              <span className="text-xs text-muted-foreground">{cert.issuer}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

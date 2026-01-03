import { motion, type Variants } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "Baku State University",
    period: "2024 — 2028",
    degree: "B.S. Computer Science",
  },
  {
    institution: "TETYM",
    period: "2025 — 2026",
    degree: "Cybersecurity Training Program",
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

export const Education = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-20"
    >
      <motion.div variants={itemVariants} className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
          <GraduationCap className="w-5 h-5 text-muted-foreground" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">Education</h2>
      </motion.div>

      <motion.div variants={containerVariants} className="space-y-4">
        {education.map((edu) => (
          <motion.div 
            key={edu.institution} 
            variants={itemVariants}
            whileHover={{ y: -2 }}
            className="p-5 border border-border rounded-xl bg-card shadow-soft hover:shadow-card transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <div>
                <h3 className="font-semibold">{edu.institution}</h3>
                <p className="text-muted-foreground text-sm">{edu.degree}</p>
              </div>
              <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                {edu.period}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

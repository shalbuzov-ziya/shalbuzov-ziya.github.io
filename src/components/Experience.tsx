import { motion, type Variants } from "framer-motion";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const Experience = () => {
  return (
    <motion.section
      id="work"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-20"
    >
      <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">
        Experience
      </p>
      <h2 className="text-2xl md:text-3xl font-bold mb-10">Professional Background</h2>

      <div className="space-y-8">
        <motion.div 
          className="p-6 border border-border rounded-xl bg-card shadow-soft hover:shadow-card transition-shadow duration-300"
          whileHover={{ y: -2 }}
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
            <div>
              <h3 className="font-bold text-lg">HackerOne</h3>
              <p className="text-accent text-sm font-medium">
                Security Researcher (Freelance)
              </p>
            </div>
            <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
              Dec 2025 — Present
            </span>
          </div>
          <ul className="list-disc list-inside text-muted-foreground text-sm leading-relaxed space-y-1">
            <li>
              Conducting independent vulnerability research and reporting through 
              coordinated disclosure.
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

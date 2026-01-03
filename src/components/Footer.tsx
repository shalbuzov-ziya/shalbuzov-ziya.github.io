import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 border-t border-border"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© 2025 Ziya Shalbuzov. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Built with <span className="text-accent">♥</span> for security
        </p>
      </div>
    </motion.footer>
  );
};

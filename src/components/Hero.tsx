import { motion, type Variants } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, Shield, Lock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const floatVariants: Variants = {
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const orbitVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export const Hero = () => {
  return (
    <section id="home" className="min-h-[85vh] flex items-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row justify-between items-start gap-12 w-full"
      >
        <div className="flex-1">
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-full text-xs text-muted-foreground font-medium mb-6 shadow-soft">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse-glow" />
              Available for work
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-[1.1]"
          >
            Hey, I'm{" "}
            <span className="text-gradient">Ziya</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg"
          >
            19 year old <strong className="text-foreground font-semibold">Security Researcher</strong> & 
            Cybersecurity Student at Baku State University, exploring vulnerability 
            research and defensive architecture.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg" className="gap-2 shadow-soft hover:shadow-card transition-shadow">
              <a href="mailto:ziyashuov@gmail.com">
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="gap-2 hover-lift">
              <a href="https://github.com/shalbuzov-ziya" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <div className="flex items-center gap-4 ml-2">
              <motion.a
                href="https://www.linkedin.com/in/z1ya/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/shalbuzov_ziya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex-shrink-0 order-first md:order-last"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            {/* Outer rotating ring */}
            <motion.div
              variants={orbitVariants}
              animate="animate"
              className="absolute inset-0 rounded-full border-2 border-dashed border-accent/30"
            />
            
            {/* Pulsing background glow */}
            <motion.div
              variants={pulseVariants}
              animate="animate"
              className="absolute inset-2 rounded-full bg-accent/10"
            />
            
            {/* Main floating container */}
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="absolute inset-4 rounded-full bg-card border-2 border-border shadow-card flex items-center justify-center"
            >
              <Shield className="w-12 h-12 md:w-14 md:h-14 text-accent" />
            </motion.div>
            
            {/* Orbiting icons */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-card border border-border shadow-soft flex items-center justify-center">
                <Lock className="w-3.5 h-3.5 text-muted-foreground" />
              </div>
            </motion.div>
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-card border border-border shadow-soft flex items-center justify-center">
                <Eye className="w-3.5 h-3.5 text-muted-foreground" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

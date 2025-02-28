"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

function GradualSpacing({
  text,
  duration = 0.9,
  delayMultiple = 0.05,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  return (
    <span className="inline-flex">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <span key={i} className={cn("drop-shadow-sm", className)}>
            <motion.span
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              variants={framerProps}
              transition={{ duration, delay: i * delayMultiple }}
              viewport={{ once: true }}
            >
              {char === " " ? <span>&nbsp;</span> : char}
            </motion.span>
          </span>
        ))}
      </AnimatePresence>
    </span>
  );
}


export { GradualSpacing };

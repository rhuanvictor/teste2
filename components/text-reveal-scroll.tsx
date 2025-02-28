"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

interface TextRevealProps {
  text: string;
}

const TextReveal: FC<TextRevealProps> = ({ text }) => {
  const targetRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef as React.RefObject<HTMLElement>,
  });

  const words = text.split(" ");

  return (
    <div ref={targetRef as React.RefObject<HTMLDivElement>} className="relative z-0 h-[200vh]">
      <div className="sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center px-4 py-16">
        <p className="flex flex-wrap text-3xl font-bold text-black/20 dark:text-white/20">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1">
      <span className="absolute opacity-30">{children}</span>
      <span className="text-black dark:text-white"> {/* Classes aplicadas aqui */}
        <motion.span style={{ opacity }}> {/* Apenas para animação */}
          {children}
        </motion.span>
      </span>
    </span>
  );
};

export default TextReveal;
import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function FadIn({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "100% 0px -200px 0px" }}
    >
      {children}
    </motion.div>
  );
}

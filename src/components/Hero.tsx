import { useRef } from "react";
import Button from "./Button";
import Container from "./Container";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Hero() {
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  return (
    <section className=" bg-background text-white h-dvh  relative">
      <motion.div
        style={{ opacity }}
        ref={imgContainerRef}
        className="absolute top-0 left-0 w-full h-[200vh]"
      >
        <img
          src="/images/laboratory.webp"
          alt="hero image"
          className="sticky top-0 h-screen object-cover w-full"
        />
      </motion.div>
      <Container className="relative z-10 h-[70svh]">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.98 }}
          className="flex flex-col h-full justify-end items-start gap-20"
        >
          <div className="flex items-start flex-col gap-10">
            <h2 className="text-5xl font-bold">
              All Apple Originals. <br /> Only on Apple TV+
            </h2>
            <Button size="lg">Stream Now</Button>
          </div>
          <p className="flex gap-1 items-center font-semibold">
            Watch on the
            <span className="font-normal bg-background py-0.1 px-1 text-white rounded-full flex items-center gap-1">
              <img src="/apple.svg" alt="apple logo" />
              tv
            </span>
            app.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

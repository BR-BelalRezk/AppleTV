import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import { movies, randomMoviesSet1, randomMoviesSet2 } from "../constants";
import { useMemo, useRef, useState } from "react";
import { useWindowSize } from "react-use";
import Button from "./Button";

export default function VideoCarousel() {
  const { width, height } = useWindowSize();
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end start"],
  });

  const maxScale = useMemo(() => {
    const windowYRatio = height / width;
    const xScale = 1.66667;
    const yScale = xScale * (16 / 9) * windowYRatio;
    return Math.max(xScale, yScale);
  }, [width, height]);

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maxScale * 1.5, maxScale, 1]
  );
  const opacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);
  const translateLeft = useTransform(scrollYProgress, [0.64, 0.66], [-25, 0]);
  const translateRight = useTransform(scrollYProgress, [0.64, 0.66], [25, 0]);
  const [carouselVariant, setCarouselVariant] = useState<"inActive" | "active">(
    "inActive"
  );

  useMotionValueEvent(scrollYProgress, "change", (progrss) => {
    progrss >= 0.67
      ? setCarouselVariant("active")
      : setCarouselVariant("inActive");
  });

  return (
    <motion.section
      animate={carouselVariant}
      className=" bg-background flex flex-col gap-5 pb-20"
    >
      <div
        ref={carouselWrapperRef}
        className="overflow-clip h-[300vh] mt-[-100vh]"
      >
        <div className="h-screen sticky top-0 flex items-center justify-center">
          <div className="flex gap-5 items-center justify-center">
            {movies.slice(0, 3).map((item, index) => (
              <motion.div
                style={
                  index === 1
                    ? { scale }
                    : index === 0
                    ? { opacity, x: translateLeft }
                    : { opacity, x: translateRight }
                }
                key={item.name}
                className="relative aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
              >
                <img
                  src={item.poster}
                  alt={item.name}
                  className="rounded-xl w-full h-full object-cover"
                />
                {index === 1 && (
                  <motion.div
                    variants={{
                      active: { opacity: 1, y: 0 },
                      inActive: { opacity: 0, y: 25 },
                    }}
                    className="h-full absolute items-center left-0 bottom-0 w-full flex justify-between p-5 text-white text-lg"
                  >
                    <div className="flex flex-col justify-between h-full w-full">
                      <h3 className="text-5xl font-semibold">Family-man</h3>
                      <div className="flex items-center justify-between w-full">
                        <p>Enjoy full HD movies</p>
                        <Button>Watch now</Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <motion.div
        variants={{
          active: { opacity: 1, y: 0 },
          inActive: { opacity: 0, y: 25 },
        }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-5"
      >
        <div className="-mt-[calc((100vh-(300px*(16/9)))/2)] space-y-3 pt-4 md:-mt-[calc((100vh-(60vw*(9/16)))/2)]">
          <SmallVideoCarousel
            movies={randomMoviesSet1}
            className="flex gap-5 animate-carousel-move1"
          />
        </div>
        <SmallVideoCarousel
          movies={randomMoviesSet2}
          className="flex gap-5 animate-carousel-move2"
        />
      </motion.div>
    </motion.section>
  );
}

function SmallVideoCarousel({
  movies,
  className,
}: {
  movies: { poster: string; name: string }[];
  className: string;
}) {
  return (
    <div className="overflow-clip">
      <div className={className}>
        {movies.map((item, index) => (
          <div
            key={index}
            className="w-[50vw] md:w-[23vw] shrink-0 aspect-[9/16] md:aspect-video"
          >
            <img
              src={item.poster}
              alt={item.name}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

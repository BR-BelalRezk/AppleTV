export const navbar = [
  "Store",
  "Mac",
  "iPad",
  "Iphone",
  "Watch",
  "Vision",
  "AirPods",
  "TV & Home",
  "Entertainment",
  "Accessories",
  "Support",
] as const;

type Movie = {
  poster: string;
  name: string;
}[];

export const movies = [
  { poster: "/images/airplane.webp", name: "Airplane" },
  {
    poster: "/images/family-man.webp",
    name: "Family man",
  },
  {
    poster: "/images/laboratory.webp",
    name: "Laboratory",
  },
  { poster: "/images/napoleon.webp", name: "Napoleon" },
  {
    poster: "/images/person-in-darkness.webp",
    name: "Person in Darkness",
  },
  {
    poster: "/images/scary-building.webp",
    name: "Scary Building",
  },
  { poster: "/images/stars.webp", name: "Stars" },
] as Movie;

export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);

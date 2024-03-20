import { navbar } from "../constants";
import Button from "./Button";
import Container from "./Container";

export default function Header() {
  return (
    <>
      <nav className=" bg-backgroundContrast text-white z-50">
        <Container className="flex items-center min-h-11 justify-between">
          <a href="#" className="h-11 flex items-center px-6 -ml-6">
            <img src="/apple.svg" alt="apple logo" width={15} height={15} />
            <span className="sr-only">Back to homepage</span>
          </a>
          <ul className="hidden lg:flex items-center justify-center gap-5 text-xs text-opacity-50 text-white">
            {navbar.map((item) => (
              <li
                key={item}
                className="text-opacity-50 text-white hover:text-opacity-100 duration-500"
              >
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
          <ul className="flex items-center justify-center gap-5">
            {Array.from({ length: 2 }, (_, index) => index).map((index) => (
              <li
                key={index}
                className="hover:scale-125 duration-500 cursor-pointer"
              >
                <img
                  src={index === 0 ? "/bag.svg" : "/search.svg"}
                  alt={index === 0 ? "bag" : "search"}
                  width={15}
                  height={15}
                />
              </li>
            ))}
          </ul>
        </Container>
      </nav>
      <header className="sticky top-0 bg-backgroundContrast z-20 text-white">
        <Container className="flex items-center justify-between py-3 min-h-11 ">
          <h1 className="text-xl font-semibold">Apple TV+</h1>
          <Button size="sm">Stream now</Button>
        </Container>
      </header>
    </>
  );
}

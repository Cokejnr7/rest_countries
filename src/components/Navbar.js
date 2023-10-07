import Container from "./Container";
import { BsMoon } from "react-icons/bs";
//BsMoonFill

const Navbar = () => {
  return (
    <nav className="py-8 shadow-md w-full">
      <Container className="flex justify-between">
        <h2 className="text-md font-bold md:text-2xl">Where in the world?</h2>
        <span className="flex gap-x-2 items-center cursor-pointer">
          <BsMoon />
          <p className="font-semibold text-sm">Dark Mode</p>
        </span>
      </Container>
    </nav>
  );
};

export default Navbar;

const Navbar = () => {
  return (
    <nav className="py-6 shadow-md w-full">
      <div className="container mx-auto flex justify-between px-2 md:px-10">
        <h2 className="text-md font-bold md:text-2xl">Where in the world?</h2>
        <span className="flex gap-x-2 items-center cursor-pointer">
          <i className="fa fa-moon">&#xf186;</i>
          <p className="font-semibold text-sm">Dark Mode</p>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

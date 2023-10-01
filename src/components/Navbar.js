const Navbar = () => {
  return (
    <nav className="py-6 shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between px-4 md:px-32">
          <h2 className="text-md font-bold md:text-2xl">Where in the world?</h2>
          <span className="flex gap-x-2 items-center">
            <i className="fa fa-moon">&#xf186;</i>
            <p className="font-semibold text-sm">Dark Mode</p>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import classNames from "classnames";

const Container = ({ className, children }) => {
  const classes = classNames(className, "container mx-auto px-6 lg:px-20");
  return <div className={classes}>{children}</div>;
};

export default Container;

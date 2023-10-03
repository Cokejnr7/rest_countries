import classNames from "classnames";

const Container = ({ className, children }) => {
  const classes = classNames(className, "container mx-auto");
  return <div className={classes}>{children}</div>;
};

export default Container;

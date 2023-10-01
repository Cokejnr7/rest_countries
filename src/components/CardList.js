import CardItem from "./CardItem";

const CardList = ({ countries }) => {
  const renderedCountries = countries.map((country) => {
    return <CardItem country={country} key={country.name} />;
  });
  return <>{renderedCountries}</>;
};

export default CardList;

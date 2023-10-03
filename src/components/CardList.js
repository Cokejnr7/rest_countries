import CardItem from "./CardItem";

const CardList = ({ countries }) => {
  const renderedCountries = countries.map((country) => {
    return <CardItem country={country} key={country.name} />;
  });
  return (
    <div className="px-10 flex items-center flex-wrap justify-between">
      {renderedCountries}
    </div>
  );
};

export default CardList;

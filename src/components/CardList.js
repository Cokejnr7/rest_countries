import CardItem from "./CardItem";

const CardList = ({ countries }) => {
  const renderedCountries = countries.map((country) => {
    return <CardItem country={country} key={country.name} />;
  });
  return (
    <div className="grid gap-x-12 gap-y-10 md:gap-y-20 country-list">
      {renderedCountries}
    </div>
  );
};

export default CardList;

import CardItem from "./CardItem";

const CardList = ({ countries }) => {
  const renderedCountries = countries.map((country) => {
    return <CardItem country={country} key={country.name} />;
  });
  return (
    <div className="px-10 grid grid-cols-4  gap-x-10 gap-y-10">
      {renderedCountries}
    </div>
  );
};

export default CardList;

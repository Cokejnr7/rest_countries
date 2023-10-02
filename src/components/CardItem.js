const CardItem = ({ country }) => {
  const config = [
    { name: "Population", display: country.population },
    { name: "Region", display: country.region },
    { name: "Capital", display: country.capital },
  ];

  const renderContents = config.map((content) => {
    return (
      <li className="font-semibold" key={content.name}>
        {content.name}: {content.display}
      </li>
    );
  });

  return (
    <div className="h-1/2 max-w-[18rem] rounded  overflow-hidden shadow-md mb-10 lg:mb-24">
      <img
        src={country.flags.png}
        alt=""
        className="w-full h-2/4 object-cover"
      />

      <div className="flex flex-col gap-y-3  px-6 pb-14 pt-6">
        <h3 className="font-bold text-lg">{country.name}</h3>
        <ul>{renderContents}</ul>
      </div>
    </div>
  );
};

export default CardItem;

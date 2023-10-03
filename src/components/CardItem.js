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
    <div className="rounded overflow-hidden shadow-md">
      <img
        src={country.flags.png}
        alt=""
        className="w-full h-1/2 object-cover"
      />

      <div className="flex flex-col gap-y-3  px-6 pb-14 pt-6">
        <h3 className="font-bold text-lg">{country.name}</h3>
        <ul>{renderContents}</ul>
      </div>
    </div>
  );
};

export default CardItem;

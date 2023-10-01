const CardItem = ({ country }) => {
  const config = [
    { name: "Population" },
    { name: "Region" },
    { name: "Capital" },
  ];

  const renderContents = config.map((content) => {
    return (
      <li className="font-semibold" key={content.name}>
        {content.name}:
      </li>
    );
  });

  return (
    <div className="max-w-[18rem] rounded  overflow-hidden shadow-md mb-10">
      <img src="https://flagcdn.com/w320/to.png" alt="" className="w-full" />
      <div className="flex flex-col gap-y-3  px-6 pb-14 pt-6">
        <h3 className="font-bold text-lg">Germany</h3>
        <ul>{renderContents}</ul>
      </div>
    </div>
  );
};

export default CardItem;

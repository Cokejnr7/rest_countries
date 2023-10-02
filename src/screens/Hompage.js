import { useEffect, useState } from "react";
import country from "../api/countries";
import CardList from "../components/CardList";

const HomePage = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    const response = await country.get("/countries");
    setCountries(response.data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <main className=" py-6">
      <div className="mx-auto flex flex-col container">
        <div className="px-8 md:px-32 flex flex-col items-center flex-wrap lg:flex-row lg:justify-between">
          <CardList countries={countries} />
        </div>
      </div>
    </main>
  );
};

export default HomePage;

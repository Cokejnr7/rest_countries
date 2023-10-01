import { useEffect, useState } from "react";
import country from "../api/countries";
import CardItem from "../components/CardItem";
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
      <div className="mx-auto container">
        <div className="px-4 md:px-32 flex  justify-between flex-wrap">
          <CardList countries={countries} />
        </div>
      </div>
    </main>
  );
};

export default HomePage;

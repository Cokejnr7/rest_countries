import { useEffect, useState } from "react";
import country from "../api/countries";
import CardList from "../components/CardList";
import Container from "../components/Container";
import Filter from "../components/Filter";

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
    <main className="pt-20 w-full">
      <Container className="flex gap-y-20 flex-col md:px-12">
        <Filter />
        <CardList countries={countries} />
      </Container>
    </main>
  );
};

export default HomePage;

import { useEffect, useState } from "react";
import country from "../api/countries";
import CardList from "../components/CardList";
import Container from "../components/Container";

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
    <main className="py-6">
      <Container className="flex flex-col">
        <CardList countries={countries} />
      </Container>
    </main>
  );
};

export default HomePage;

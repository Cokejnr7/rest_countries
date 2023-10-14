import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import countries from "../api/countries";
import Container from "../components/Container";
import { BsArrowLeft } from "react-icons/bs";

const CountryDetails = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  const retrieveCountry = async (name) => {
    try {
      const response = await countries.get(`/countries?name=${name}`);
      setCountry(response.data[0]);
      console.log(response.data[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    retrieveCountry(name);
  }, [name]);

  return (
    <Container className={"flex flex-col gap-10 pt-10"}>
      <span className="flex items-center justify-center gap-x-3 rounded py-1 shadow-md max-w-[7rem] cursor-pointer">
        <BsArrowLeft />
        Back
      </span>
      <div className="flex flex-wrap justify-between ">
        <img src={country?.flags.svg} alt="" className="xl:w-1/2 h-96" />
        <div className="flex flex-col justify-center py-6">
          <h2 className="mb-8 font-bold text-3xl">{country?.name}</h2>
          <div className="flex gap-x-20 gap-y-8 mb-10 flex-wrap">
            <ul>
              <li>
                <span className="font-semibold text-lg">Native Name: </span>
                {country?.nativeName}
              </li>
              <li>
                <span className="font-semibold text-lg">Population: </span>
                {country?.population}
              </li>
              <li>
                <span className="font-semibold text-lg">Region: </span>{" "}
                {country?.region}
              </li>
              <li>
                <span className="font-semibold text-lg">Sub Region: </span>
                {country?.subregion}
              </li>
              <li>
                <span className="font-semibold text-lg">Capital: </span>
                {country?.capital}
              </li>
            </ul>

            <ul>
              <li>
                <span className="font-semibold text-lg">
                  Top Level Domain:{" "}
                </span>
                {country?.topLevelDomain}
              </li>
              {country?.currencies && (
                <li>
                  <span className="font-semibold text-lg">Currencies: </span>
                  {country?.currencies.map((currency) => currency.name)}
                </li>
              )}
              <li>
                <span className="font-semibold text-lg"> Languages: </span>
                {country?.languages.map((lang) => lang.name)}
              </li>
            </ul>
          </div>

          {country?.borders && (
            <div className="flex gap-x-3 items-center flex-wrap">
              <span className="font-semibold text-lg">Border Countries:</span>
              <ul className="flex gap-x-3 items-center rounded flex-wrap">
                {country?.borders.map((border) => {
                  return (
                    <li className="px-5 rounded py-1 shadow-md" key={border}>
                      {border}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default CountryDetails;

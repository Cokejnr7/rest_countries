import Container from "../components/Container";

const CouuntryDetails = () => {
  return (
    <Container className={"flex flex-col"}>
      Country Details
      <div className="flex flex-wrap justify-between ">
        <img src="https://flagcdn.com/as.svg" alt="" className="lg:w-1/2" />
        <div className="flex flex-col justify-center">
          <h2 className="mb-8 font-bold text-3xl">Belgium</h2>
          <div className="flex space-x-20 mb-10">
            <ul>
              <li>
                <span className="font-semibold text-lg">Native Name: </span>
                Belgie
              </li>
              <li>
                <span className="font-semibold text-lg">Population: </span>
                11,319,511
              </li>
              <li>
                <span className="font-semibold text-lg">Region: </span> Europe
              </li>
              <li>
                <span className="font-semibold text-lg">Sub Region: </span>
                Western Europe
              </li>
              <li>
                <span className="font-semibold text-lg">Capital: </span>
                Brussels
              </li>
            </ul>
            <ul>
              <li>
                <span className="font-semibold text-lg">
                  Top Level Domain:{" "}
                </span>
                .be
              </li>
              <li>
                <span className="font-semibold text-lg">Currencies: </span>
                Euro
              </li>
              <li>
                <span className="font-semibold text-lg"> Languages: </span>
                Dutch, French, German
              </li>
            </ul>
          </div>

          <div>
            <span className="font-semibold text-lg">Border Countries:</span>
            <ul className="flex gap-x-3 items-center rounded">
              <li className="py-1 px-4 shadow-sm rounded">France</li>
              <li className="py-1 px-4 shadow-sm rounded">Germany</li>
              <li className="py-1 px-4 shadow-sm rounded">Netherlands</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CouuntryDetails;

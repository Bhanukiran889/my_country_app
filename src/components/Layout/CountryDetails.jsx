import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import { Loader } from "../UI/Loader";

export const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, [params.id]);

  if (isPending) return <Loader />;

  return (
    <div className="d-flex flex-column justify-content-center country-detail-height ">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 ">
            <div className="bg-green-box cards card-height ">
              <div className="description margin-card">
                {country && (
                  <div className="">
                    <div className="text-center">
                      <img
                        src={country.flags.svg}
                        alt={country.flags.alt}
                        className="country-dedtail-img w-100 mb-3"
                      />
                    </div>
                    <div className="country-content">
                      <p>
                        {" "}
                        <span className="country-name">
                          {country.name.official}
                        </span>{" "}
                      </p>

                      <div className="infoContainer">
                        <p>
                          <span className="card-description"> Native Names:</span>
                          {Object.keys(country.name.nativeName)
                            .map((key) => country.name.nativeName[key].common)
                            .join(", ")}
                        </p>
                        <p>
                          <span className="card-description"> Population: </span>
                          {country.population.toLocaleString()}
                        </p>
                        <p>
                          <span className="card-description"> Region:</span>
                          {country.region}
                        </p>
                        <p>
                          <span className="card-description"> Sub Region:</span>
                          {country.subregion}
                        </p>
                        <p>
                          <span className="card-description"> Capital:</span>
                          {country.capital}
                        </p>

                        <p>
                          <span className="card-description">
                            Top Level Domain:
                          </span>
                          {country.tld[0]}
                        </p>
                        <p>
                          <span className="card-description"> Currencies: </span>
                          {Object.keys(country.currencies)
                            .map((curElem) => country.currencies[curElem].name)
                            .join(", ")}
                        </p>
                        <p>
                          <span className="card-description">Languages: </span>
                          {Object.keys(country.languages)
                            .map((key) => country.languages[key])
                            .join(", ")}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                <div className="country-card-backBtn">
                  <NavLink to="/country">
                    <button className="Country-btn mt-5">Go Back</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  const capitalName = capital && Array.isArray(capital) ? capital[0] : capital;

  const populationValue = population
    ? population.toString().length > 6
      ? population.toString().slice(0, 5) + "..."
      : population.toLocaleString()
    : "N/A";

  return (
    <div className="cards bg-green-box">
      <div className="text-center">
        <img
          className="country-img"
          src={flags.svg}
          alt={flags.alt || `Flag of ${name.common}`}
        />
      </div>
      <div className="description mt-3">
        <p>
          <span className="country-name">
            {name.common.length > 10
              ? name.common.slice(0, 10) + "..."
              : name.common}
          </span>
        </p>
        <p>
          <span>Capital: </span>
          {capitalName
            ? capitalName.length > 10
              ? capitalName.slice(0, 7) + "..."
              : capitalName
            : "N/A"}
        </p>
        <p>
          <span>Population: </span>
          {populationValue}
        </p>
        <p>
          <span>Region: </span>
          {region}
        </p>
        <NavLink to={`/country-details/${name.common}`}>
          <button className="Country-btn mt-5">
            Read More <FaLongArrowAltRight />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

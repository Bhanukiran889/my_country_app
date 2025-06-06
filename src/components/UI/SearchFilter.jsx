export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };

  return (
      <div className="d-flex flex-row justify-content-between mr-3 ml-3 mb-2 mt-5">
        <input
          className="input"
          type="text"
          placeholder="search by country name"
          value={search}
          onChange={handleInputChange}
        />
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

        <button className="btn-white-box" onClick={() => sortCountries("asc")}>
          Asc
        </button>

        <button className="btn-white-box" onClick={() => sortCountries("des")}>
          Desc
        </button>
      </div>
  );
};

import  { useState } from 'react';
import countryFacts from "../api/countryData.json";

export const About = () => {
  const [visibleCount, setVisibleCount] = useState(4); // Start with 4 visible cards

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 20); // Increase count by 4
  };

  return (
    <section className='mb-5'>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-12 text-center mt-5">
            <h1 className='about-heading'>
              Here are the Interesting Facts
              <br />
              We&apos;re Proud Of
            </h1>
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            {countryFacts.slice(0, visibleCount).map((country) => {
              const {
                id,
                countryName,
                population,
                interestingFact,
                nativeLanguage,
                capital,
              } = country;
              return (
                <div className="col-12 col-sm-6 col-md-6 col-lg-3" key={id}>
                  <div className="cards bg-green-box">
                    <div className="description d-flex flex-column justify-content-center">
                      <p>
                        <span className='country-name'>{countryName}</span> 
                      </p>
                      <p>
                        <span>Capital:</span> {capital}
                      </p>
                      <p>
                        <span>Population:</span> {population}
                      </p>
                      <p>
                        <span>Interesting Fact:</span> {interestingFact}
                      </p>
                      <p>
                        <span>Native Language:</span> {nativeLanguage}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })} 
            {visibleCount < countryFacts.length && (
            <div className="text-center mt-1">
              <button onClick={loadMore} className="btn-white-box mb-5">
                Load More
              </button>
            </div>
          )}
          </div>
         
        </div>
      </div>
    </section>
  );
};

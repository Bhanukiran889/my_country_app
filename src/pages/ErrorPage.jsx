import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <div className="error  d-flex flex-column justify-content-center align-items-center">
        <div className="container ">
          <div className="row">
            <div className="col-12 d-flex flex-column justify-content-center align-items-center text-center">
              <h1>Oops! An error occurred</h1>
              {error && <p>{error.data}</p>}
              <NavLink to="/">
                <button type="button">Go Home</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

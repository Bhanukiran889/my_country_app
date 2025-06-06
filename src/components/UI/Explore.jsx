import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export const Explore = () => {
  return (
    <main>
      <div className="container mt-5">
        <div className="row d-flex flex-row align-items-center">
          <div className="col-12 col-sm-6 col-md-6 col-lg-5 col-xl-6 mt-5">
            <div className="main text">
              <div className="text-center  d-sm-none mt-auto">
                <img
                  className=" world-img w-100"
                  src="/images/world.png"
                  alt=""
                />
              </div>
              <h1 className="exprore-heading">
                Explore the World, one Country at a Time.
              </h1>
              <p className="paragraph">
                Discover the histtory, culture, and beauty of evey nation. Sort,
                Srearch, and filter thorugh contries to find the details you
                need.
              </p>

              <NavLink to="./country">
                <button className=" btn-white-box">
                  Start Exploring <FaLongArrowAltRight />{" "}
                </button>
              </NavLink>
            </div>
          </div>
          <div className=" d-none d-sm-block col-5 col-sm-6 col-md-6 col-lg-7 col-xl-6 hero-image">
            <div className="text-center mt-auto">
              <img className="w-100" src="/images/world.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

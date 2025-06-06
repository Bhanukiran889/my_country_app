import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMail } from "react-icons/tb";
import FooterContact from "../../api/Footer.json";

export const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMail: <TbMail />,
  };

  return (
    <footer className="header p-0 fixed-bottom" >
      <div className="container">
      <div className="row">
        <div className="col-12 d-flex flex-row justify-content-between align-items-center">
          {FooterContact.map((curData, index) => {
            const { icon, title, details } = curData;

            return (
              <div className="d-flex flex-row align-items-center" key={index}>
                <div className="icon">{footerIcon[icon]}</div>
                <div className=" footer-content d-flex flex-column justify-content-center align-itemhs-center">
                  <p className="footer-title">{title}</p>
                  <p className="footer-details">{details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </footer>
  );
};

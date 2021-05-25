import React from "react";
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaFileVideo,
  FaSearchDollar,
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "SERVICES",
    subHeading: "My Services",
    text:
      "To know how much service i am provied",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Web Development",
      text:
        "I provied a best web development service for you",
    },
    
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Web Desing",
      text:
        "Want modern website don't worry i am here for you with responsive gurrenty",
    },
    {
      id: 4,
      icon: <FaApple className="commonIcons" />,
      heading: "App Devlopment",
      text:
        "If you want a android app for your buisness or your personal work here i am to make it with best UI design",
    },
    
    {
      id: 6,
      icon: <FaSearchDollar className="commonIcons" />,
      heading: "SEO Expert",
      text:
        "We have best Dedicated Team for SEO we can grow your website rank in google and another search engine",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

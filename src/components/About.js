import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "Know simple information about me"});
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Sozib Alahi" },
    { id: 2, title: "Email:", text: "sozibislam99@gmail.com" },
    { id: 3, title: "Phone:", text: "+8801774226088" },
    { id: 4, title: "Linkedin", text: "Sozib Alahi" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/man-01.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                Hello Sozib Alahi Is here for you to making a modern website. Sozib Alahi have almost long experience about in this sector. and i like to make best website for you using reactJs
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

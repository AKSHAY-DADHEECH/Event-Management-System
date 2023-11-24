import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Us",
  });

  return (
    <section id="about">
      <div className="bg-black text-white py-5 border-danger border-top border-bottom">
        <div className="container my-5">
          <h1>{header.subHeader}</h1>
          <div className="container align-items-center w-25 bg-danger pt-1 rounded"></div>
          <div className="row text-white alignCenter py-3">
            <div
              className="col-12 py-4 px-3 my-3"
              style={{ background: "#181313" }}
            >
              <h1>We're ShubhKaryaa Events</h1>
              <div>
                <p></p>
                ShubhKaryaa is a story of friends, who made a good team in their school and locality, enthusiastic about conducting and organizing events around them. As time passed they carried on with their lives, with their higher studies. They missed each others’ companies a lot and found a way to get united again. To be together, they converted their passion of organizing events, a creative way, into a business.
              </div>
              <div>
              <p></p>
              ShubhKaryaa Event Managers have been creating captivating, quality environments for events – both personal and corporate – since they started out together. For them, managing an event is never a rocket science. Their expertise in skills to detail and organize things, a keen eye for art, countless hours of planning and the ability to come up with solutions and produce the best are what makes them one of the best event planners in India.
              </div>
              <div>
              <p></p>
              ShubhKaryaa aims to constantly innovate, imagine and inspire to exceed clients’ expectations and to be the most quality conscious event managers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import "./professionalstyle.css";
import Carousel from "./carousel/carousel";

const Professional = ({ style }) => {
  return (
    <div name="profmesp" className="professional" style={{ marginTop: style }}>
      <div className="containerprof">
        <div className="contentprof">
          <h1>
            Professional <span>Experience</span>
          </h1>
          <p>
            Owner of a former coffee-shop & healthy lifestyle brunch food in the
            center on Cluj-Napoca before the pandemic
          </p>
          <p>
            Went out of bussines because of the pandemic regulations and not
            being sure about the future
          </p>
          <h1>
            Real <span>Estate</span> Broker
          </h1>
          <ul>
            <li>
              Worked 2 years and 5 months in one of the best real estate
              agencies from Cluj-Napoca.
            </li>
            <li>
              Made around 40 apartment sales and 7 houses, beside some rents.
            </li>
            <li>
              Became one of the youngest Senior Brokers in the City, a title
              earned by total comissions and targets
            </li>
            <li>
              Succesfully transactioned the biggest penthouse in the city at
              that moment, the most expensive apartment reported by €/m² in 2021
              summer - 3378€/m².
            </li>
            <li>
              The 2nd most sales made by a broker in Wings Residence - known in
              the whole country.
            </li>
          </ul>
        </div>
      </div>
      <Carousel />
    </div>
  );
};

export default Professional;

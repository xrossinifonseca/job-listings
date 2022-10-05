import React from "react";

import { useStateContext } from "../context/StateContext";
import "./listings.css";

const Listings = ({ listings }) => {
  const {
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = listings;

  const { onAdd } = useStateContext();

  const skills = languages.concat(tools, level, role).reverse();

  return (
    <div className="listings-container">
      <div className="list-info">
        <img src={logo} alt="logo company" />

        <div className="info">
          <span>
            <p>{company}</p>

            {listings.new === true && <h5 className="new">NEW!</h5>}
            {featured === true && <h5 className="feature">FEATURED</h5>}
          </span>

          <h3>{position}</h3>

          <ul>
            <li>{postedAt}</li>
            <li>{contract}</li>
            <li>{location}</li>
          </ul>
        </div>
      </div>

      <div className="tools">
        <ul>
          {skills.map((skill) => (
            <li key={skill} onClick={() => onAdd(skill)}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Listings;

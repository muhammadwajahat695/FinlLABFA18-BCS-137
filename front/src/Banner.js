import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";

function Banner() {
  const [team, setTeam] = useState(false);

  //   useEffect(() => {
  //     async function fetchData() {
  //       const request = await axios.get(requests?.fetchNetflixOriginals);
  //       setMovie(
  //         request?.data?.results[
  //           Math.floor(Math.random() * request?.data?.results.length - 1)
  //         ]
  //       );
  //       return request;
  //     }

  //     fetchData();
  //   }, []);

  return (
    <header className="banner">
      {team ? (
        <div className="teams__container">
          <div>
            <h1 className="team__text">
              Karachi Kings <span>(Select)</span>
            </h1>
            <h1 className="team__text">
              Multan Sultans <span>(Select)</span>
            </h1>
            <h1 className="team__text">
              Peshawar Zalmi <span>(Select)</span>
            </h1>
            <h1 className="team__text">
              Lahore Qalandars <span>(Select)</span>
            </h1>
            <h1 className="team__text">
              Islamabad United <span>(Select)</span>
            </h1>
            <h1 className="team__text">
              Quetta Gladiators <span>(Select)</span>
            </h1>
          </div>
          <div>
            <h1 className="team__text">
              Karachi Kings <span>(Select)</span>
            </h1>
            <h1 className="team__text">
              Multan Sultans <span>(Select)</span>
            </h1>
            <h1 className="team__text">
              Peshawar Zalmi <span>(Select)</span>
            </h1>
            <h1 className="team__text">
              Lahore Qalandars <span>(Select)</span>
            </h1>
            <h1 className="team__text">
              Islamabad United <span>(Select)</span>
            </h1>
            <h1 className="team__text">
              Quetta Gladiators <span>(Select)</span>
            </h1>
          </div>
        </div>
      ) : (
        <div className="text__container">
          <h1>PSL 2022</h1>
          <button className="search__btn" onClick={() => setTeam(true)}>
            Select Team
          </button>
        </div>
      )}

      <div className="img__container">
        <img
          className="img__banner"
          src="https://dailytimes.com.pk/assets/uploads/2018/03/10/PSL.jpg"
          alt="Banner"
        />
      </div>
    </header>
  );
}

export default Banner;

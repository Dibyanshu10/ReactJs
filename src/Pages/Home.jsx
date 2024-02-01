import React, { useState } from "react";
import { data } from "../Static Data/Data.js";

const Home = () => {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    setUser(data);
  };
  const hideData = () => {
    setUser([]);
  };

  return (
    <div>
      <button id="data" onClick={() => fetchData()}>
        Get Data
      </button>
      <button id="data" onClick={() => hideData()}>
        Hide Data
      </button>
      <div className="userDetails">
        {user.map((value, index) => {
          return (
            <div className="card" key={index}>
              <div className="img">
                <p>
                  <img src={value.avatar}></img>
                </p>
              </div>
              <div className="details">
                <p>{value.username}</p>
                <p>{value.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Home;

import React from "react";

const getSeasons = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer " : "Winter";
  } else {
    return lat > 0 ? "Winter " : "Summer";
  }
};
export default function SeasonDisplay({ lat }) {
  const season = getSeasons(lat, new Date().getMonth());
  const icon = season === "Summer"? "snowflake" : "sun"
  return (
    <div>
        <i className={`${icon} icon massive`}/>
      <h1>
        {season === "Winter" ? "Bur ,its chilly" : "Lets go to the beach"}
      </h1>

   <i className={`${icon} icon massive`}/>

    </div>
  );
}

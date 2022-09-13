import React from "react"
import "./SeasonDisplay.css"

const getSeasons = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer " : "Winter";
  } else {
    return lat > 0 ? "Winter " : "Summer";
  }
};
export default function SeasonDisplay({ lat }) {
  const season = getSeasons(lat, new Date().getMonth());
  console.log(season)
  const icon = season === "summer"? "snowflake" : "sun"
  return (
    <div className={`season_display  ${season}`}>
        <i className={`${icon} icon massive icon_left`}/>
      <h1>
        {season === "Winter" ? "Bur ,its chilly" : "Lets go to the beach"}
      </h1>

   <i className={`${icon} icon massive icon_right`}/>

    </div>
  );
}

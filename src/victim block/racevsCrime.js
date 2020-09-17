import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";

function RacevsCrime() {
  const vraceCrimeData = useSelector((state) => state.vraceCrimeData);

  const [vraceData, setvraceData] = useState([]);

  const [crimeChoice, setcrimeChoice] = useState("NonFatalShooting");

  useEffect(() => {
    let tempvraceData = [];
    if (crimeChoice == "NonFatalShooting") {
      tempvraceData.push(vraceCrimeData[0]?.NonFatalShooting);
      tempvraceData.push(vraceCrimeData[1]?.NonFatalShooting);
      tempvraceData.push(vraceCrimeData[2]?.NonFatalShooting);
    }

    if (crimeChoice == "Homicide") {
      tempvraceData.push(vraceCrimeData[0]?.Homicide);
      tempvraceData.push(vraceCrimeData[1]?.Homicide);
      tempvraceData.push(vraceCrimeData[2]?.Homicide);
    }
    if (crimeChoice == "AggAssault") {
      tempvraceData.push(vraceCrimeData[0]?.AggAssault);
      tempvraceData.push(vraceCrimeData[1]?.AggAssault);
      tempvraceData.push(vraceCrimeData[2]?.AggAssault);
    }

    setvraceData(tempvraceData);
  }, [vraceCrimeData, crimeChoice]);

  const data = {
    labels: ["other/unknown", "black/hispanic", "white"],
    datasets: [{ backgroundColor: ["blue", "green", "red"], data: vraceData }],
  };
  return (
    <div>
      {vraceCrimeData.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="mainhead1">Race vs Crime</div>
          <Pie data={data} height={500} />
          <div className="crimeControl">
            <div className="crimeControlHeader">select Crime</div>
            <select
              value={crimeChoice}
              onChange={(e) => setcrimeChoice(e.target.value)}
              name="crime"
            >
              <option value="NonFatalShooting">NonFatalShooting</option>
              <option value="Homicide">Homicide</option>
              <option value="AggAssault">AggAssault</option>
            </select>
          </div>
        </div>
      ) : (
        <h1>loading.....</h1>
      )}
    </div>
  );
}

export default RacevsCrime;

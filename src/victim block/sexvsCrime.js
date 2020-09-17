import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";

function SexvsCrime() {
  const vsexCrimeData = useSelector((state) => state.vsexCrimeData);

  const [vsexData, setvsexData] = useState([]);

  const [crimeChoice, setcrimeChoice] = useState("NonFatalShooting");

  useEffect(() => {
    let tempvsexData = [];
    if (crimeChoice == "NonFatalShooting") {
      tempvsexData.push(vsexCrimeData[0]?.NonFatalShooting);
      tempvsexData.push(vsexCrimeData[1]?.NonFatalShooting);
      tempvsexData.push(vsexCrimeData[2]?.NonFatalShooting);
    }

    if (crimeChoice == "Homicide") {
      tempvsexData.push(vsexCrimeData[0]?.Homicide);
      tempvsexData.push(vsexCrimeData[1]?.Homicide);
      tempvsexData.push(vsexCrimeData[2]?.Homicide);
    }
    if (crimeChoice == "AggAssault") {
      tempvsexData.push(vsexCrimeData[0]?.AggAssault);
      tempvsexData.push(vsexCrimeData[1]?.AggAssault);
      tempvsexData.push(vsexCrimeData[2]?.AggAssault);
    }

    setvsexData(tempvsexData);
  }, [vsexCrimeData, crimeChoice]);

  const data = {
    labels: ["male", "female", "trans/unknown"],
    datasets: [{ backgroundColor: ["blue", "green", "red"], data: vsexData }],
  };
  return (
    <div>
      {vsexCrimeData.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="mainhead1">Sex vs Crime</div>
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

export default SexvsCrime;

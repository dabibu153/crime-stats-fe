import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import "../css/bargraph.css";

function AgevsCrime() {
  const vageCrimeData = useSelector((state) => state.vageCrimeData);
  const [age1, setage1] = useState(true);
  const [age2, setage2] = useState(true);
  const [age3, setage3] = useState(true);
  const [age4, setage4] = useState(true);
  const [age5, setage5] = useState(true);

  const [crime1, setcrime1] = useState(true);
  const [crime2, setcrime2] = useState(true);
  const [crime3, setcrime3] = useState(true);

  const [nfsData, setnfsData] = useState([]);
  const [hData, sethData] = useState([]);
  const [aaData, setaaData] = useState([]);

  const [labels, setlabels] = useState([
    "0-10",
    "11-30",
    "31-60",
    "61-100",
    "101-120",
  ]);

  useEffect(() => {
    let nfsData = [];
    let hData = [];
    let aaData = [];
    let templabel = [];
    if (age1 == true) {
      templabel.push("0-10");
      if (crime1 == true) {
        nfsData.push(vageCrimeData[0]?.NonFatalShooting);
      }
      if (crime2 == true) {
        hData.push(vageCrimeData[0]?.Homicide);
      }
      if (crime3 == true) {
        aaData.push(vageCrimeData[0]?.AggAssault);
      }
    }
    if (age2 == true) {
      templabel.push("11-30");
      if (crime1 == true) {
        nfsData.push(vageCrimeData[1]?.NonFatalShooting);
      }
      if (crime2 == true) {
        hData.push(vageCrimeData[1]?.Homicide);
      }
      if (crime3 == true) {
        aaData.push(vageCrimeData[1]?.AggAssault);
      }
    }
    if (age3 == true) {
      templabel.push("31-60");
      if (crime1 == true) {
        nfsData.push(vageCrimeData[2]?.NonFatalShooting);
      }
      if (crime2 == true) {
        hData.push(vageCrimeData[2]?.Homicide);
      }
      if (crime3 == true) {
        aaData.push(vageCrimeData[2]?.AggAssault);
      }
    }
    if (age4 == true) {
      templabel.push("61-100");
      if (crime1 == true) {
        nfsData.push(vageCrimeData[3]?.NonFatalShooting);
      }
      if (crime2 == true) {
        hData.push(vageCrimeData[3]?.Homicide);
      }
      if (crime3 == true) {
        aaData.push(vageCrimeData[3]?.AggAssault);
      }
    }
    if (age5 == true) {
      templabel.push("101-120");
      if (crime1 == true) {
        nfsData.push(vageCrimeData[4]?.NonFatalShooting);
      }
      if (crime2 == true) {
        hData.push(vageCrimeData[4]?.Homicide);
      }
      if (crime3 == true) {
        aaData.push(vageCrimeData[4]?.AggAssault);
      }
    }

    setlabels(templabel);
    setnfsData(nfsData);
    sethData(hData);
    setaaData(aaData);
  }, [vageCrimeData, age1, age2, age3, age4, age5, crime1, crime2, crime3]);

  // useEffect(() => {
  //   let nfsData = [];
  //   let hData = [];
  //   let aaData = [];

  //   dateCrimeData.map((oneDataSet, index) => {
  //     if (crime1 == true) {
  //       nfsData.push(oneDataSet.NonFatalShooting);
  //     }
  //     if (crime2 == true) {
  //       hData.push(oneDataSet.Homicide);
  //     }
  //     if (crime3 == true) {
  //       aaData.push(oneDataSet.AggAssault);
  //     }
  //   });

  //   setnfsData(nfsData);
  //   sethData(hData);
  //   setaaData(aaData);
  // }, [dateCrimeData]);

  // useEffect(() => {
  //   let nfsData = [];
  //   let hData = [];
  //   let aaData = [];

  //   dateCrimeData.map((oneDataSet, index) => {
  //     if (crime1 == true) {
  //       nfsData.push(oneDataSet.NonFatalShooting);
  //     }
  //     if (crime2 == true) {
  //       hData.push(oneDataSet.Homicide);
  //     }
  //     if (crime3 == true) {
  //       aaData.push(oneDataSet.AggAssault);
  //     }
  //   });
  //   setnfsData(nfsData);
  //   sethData(hData);
  //   setaaData(aaData);
  // }, [crime1, crime2, crime3]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "NON FATAL SHOOTING",
        backgroundColor: "blue",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: nfsData,
      },
      {
        label: "HOMICIDE",
        backgroundColor: "green",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: hData,
      },
      {
        label: "AGGRIVATED ASSAULT",
        backgroundColor: "red",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: aaData,
      },
    ],
  };

  return (
    <div className="mainBlock1">
      {vageCrimeData.length > 0 ? (
        <div>
          <div className="mainhead1">Age vs Crime</div>
          <Bar className="graph" data={data} height={100} />

          <div className="dataControl">
            <div className="dateControl">
              <div className="dateControlHeader">Select Age Group</div>
              <form>
                <input
                  type="checkbox"
                  id="0-10"
                  name="0-10"
                  value="0-10"
                  checked={age1}
                  onChange={() => setage1(!age1)}
                />
                <label for="0-10">0-10</label>
                <br />
                <input
                  type="checkbox"
                  id="11-30"
                  name="11-30"
                  value="11-30"
                  checked={age2}
                  onChange={() => setage2(!age2)}
                />
                <label for="11-30">11-30</label>
                <br />
                <input
                  type="checkbox"
                  id="31-60"
                  name="31-60"
                  value="31-60"
                  checked={age3}
                  onChange={() => setage3(!age3)}
                />
                <label for="31-60">31-60</label>
                <br />
                <input
                  type="checkbox"
                  id="61-100"
                  name="61-100"
                  value="61-100"
                  checked={age4}
                  onChange={() => setage4(!age4)}
                />
                <label for="61-100">61-100</label>
                <br />
                <input
                  type="checkbox"
                  id="101-120"
                  name="101-120"
                  value="101-120"
                  checked={age5}
                  onChange={() => setage5(!age5)}
                />
                <label for="101-120">101-120</label>
                <br />
              </form>
            </div>
            <div className="crimeControl">
              <div className="crimeControlHeader">select Crime</div>
              <form>
                <input
                  type="checkbox"
                  id="NonFatalShooting"
                  name="NonFatalShooting"
                  value="NonFatalShooting"
                  checked={crime1}
                  onChange={() => setcrime1(!crime1)}
                />
                <label for="NonFatalShooting">NON FATAL SHOOTING</label>
                <br />
                <input
                  type="checkbox"
                  id="Homicide"
                  name="Homicide"
                  value="Homicide"
                  checked={crime2}
                  onChange={() => setcrime2(!crime2)}
                />
                <label for="Homicide">HOMICIDE</label>
                <br />
                <input
                  type="checkbox"
                  id="AggAssault"
                  name="AggAssault"
                  value="AggAssault"
                  checked={crime3}
                  onChange={() => setcrime3(!crime3)}
                />
                <label for="AggAssault">AGGRIVATED ASSAULT</label>
                <br />
              </form>
            </div>
          </div>
          <hr className="divideLine" />
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default AgevsCrime;

import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import "../css/bargraph.css";

function TimeCrimeStats() {
  const hourCrimeData = useSelector((state) => state.hourCrimeData);
  const [hour1, sethour1] = useState(true);
  const [hour2, sethour2] = useState(true);
  const [hour3, sethour3] = useState(true);
  const [hour4, sethour4] = useState(true);

  const [crime1, setcrime1] = useState(true);
  const [crime2, setcrime2] = useState(true);
  const [crime3, setcrime3] = useState(true);

  const [nfsData, setnfsData] = useState([]);
  const [hData, sethData] = useState([]);
  const [aaData, setaaData] = useState([]);

  const [labels, setlabels] = useState([
    "00 - 06",
    "07 - 12",
    "13 - 18",
    "19 - 24",
  ]);

  useEffect(() => {
    let nfsData = [];
    let hData = [];
    let aaData = [];
    let templabel = [];
    if (hour1 == true) {
      templabel.push("00-06");
      if (crime1 == true) {
        nfsData.push(hourCrimeData[0]?.NonFatalShooting);
      }
      if (crime2 == true) {
        hData.push(hourCrimeData[0]?.Homicide);
      }
      if (crime3 == true) {
        aaData.push(hourCrimeData[0]?.AggAssault);
      }
    }
    if (hour2 == true) {
      templabel.push("07-12");
      if (crime1 == true) {
        nfsData.push(hourCrimeData[1]?.NonFatalShooting);
      }
      if (crime2 == true) {
        hData.push(hourCrimeData[1]?.Homicide);
      }
      if (crime3 == true) {
        aaData.push(hourCrimeData[1]?.AggAssault);
      }
    }
    if (hour3 == true) {
      templabel.push("13-18");
      if (crime1 == true) {
        nfsData.push(hourCrimeData[2]?.NonFatalShooting);
      }
      if (crime2 == true) {
        hData.push(hourCrimeData[2]?.Homicide);
      }
      if (crime3 == true) {
        aaData.push(hourCrimeData[2]?.AggAssault);
      }
    }
    if (hour4 == true) {
      templabel.push("19-24");
      if (crime1 == true) {
        nfsData.push(hourCrimeData[3]?.NonFatalShooting);
      }
      if (crime2 == true) {
        hData.push(hourCrimeData[3]?.Homicide);
      }
      if (crime3 == true) {
        aaData.push(hourCrimeData[3]?.AggAssault);
      }
    }

    setlabels(templabel);
    setnfsData(nfsData);
    sethData(hData);
    setaaData(aaData);
  }, [hourCrimeData, hour1, hour2, hour3, hour4, crime1, crime2, crime3]);

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
    <div>
      {hourCrimeData.length > 0 ? (
        <div>
          <div className="mainhead1">Hours vs Crime</div>
          <Bar data={data} height={70} />

          <div className="dataControl">
            <div className="dateControl">
              <div className="dateControlHeader">Select Hours</div>
              <form>
                <input
                  type="checkbox"
                  id="00-06"
                  name="00-06"
                  value="00-06"
                  checked={hour1}
                  onChange={() => sethour1(!hour1)}
                />
                <label for="00-06">00-06</label>
                <br />
                <input
                  type="checkbox"
                  id="07-12"
                  name="07-12"
                  value="07-12"
                  checked={hour2}
                  onChange={() => sethour2(!hour2)}
                />
                <label for="07-12">07-12</label>
                <br />
                <input
                  type="checkbox"
                  id="13-18"
                  name="13-18"
                  value="13-18"
                  checked={hour3}
                  onChange={() => sethour3(!hour3)}
                />
                <label for="13-18">13-18</label>
                <br />
                <input
                  type="checkbox"
                  id="19-24"
                  name="19-24"
                  value="19-24"
                  checked={hour4}
                  onChange={() => sethour4(!hour4)}
                />
                <label for="19-24">19-24</label>
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
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default TimeCrimeStats;

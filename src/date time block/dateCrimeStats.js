import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import "../css/bargraph.css";

function DateCrimeStats() {
  const dateCrimeData = useSelector((state) => state.dateCrimeData);
  const [date1, setdate1] = useState(true);
  const [date2, setdate2] = useState(true);
  const [date3, setdate3] = useState(true);
  const [date4, setdate4] = useState(true);
  const [date5, setdate5] = useState(true);

  const [crime1, setcrime1] = useState(true);
  const [crime2, setcrime2] = useState(true);
  const [crime3, setcrime3] = useState(true);

  const [nfsData, setnfsData] = useState([]);
  const [hData, sethData] = useState([]);
  const [aaData, setaaData] = useState([]);

  const [labels, setlabels] = useState([
    "1967-1976",
    "1977-1986",
    "1987-1996",
    "1997-2006",
    "2007-2018",
  ]);

  useEffect(() => {
    let nfsData = [];
    let hData = [];
    let aaData = [];
    let templabel = [];
    if (date1 == true) {
      templabel.push("1967-1976");
      if (crime1 == true) {
        nfsData.push(dateCrimeData[0]?.NonFatalShooting);
      }
      if (crime2 == true) {
        hData.push(dateCrimeData[0]?.Homicide);
      }
      if (crime3 == true) {
        aaData.push(dateCrimeData[0]?.AggAssault);
      }
    }
    if (date2 == true) {
      templabel.push("1977-1986");
      if (crime1 == true) {
        nfsData.push(dateCrimeData[1]?.NonFatalShooting);
      }
      if (crime2 == true) {
        hData.push(dateCrimeData[1]?.Homicide);
      }
      if (crime3 == true) {
        aaData.push(dateCrimeData[1]?.AggAssault);
      }
    }
    if (date3 == true) {
      templabel.push("1987-1996");
      if (crime1 == true) {
        nfsData.push(dateCrimeData[2]?.NonFatalShooting);
      }
      if (crime2 == true) {
        hData.push(dateCrimeData[2]?.Homicide);
      }
      if (crime3 == true) {
        aaData.push(dateCrimeData[2]?.AggAssault);
      }
    }
    if (date4 == true) {
      templabel.push("1997-2006");
      if (crime1 == true) {
        nfsData.push(dateCrimeData[3]?.NonFatalShooting);
      }
      if (crime2 == true) {
        hData.push(dateCrimeData[3]?.Homicide);
      }
      if (crime3 == true) {
        aaData.push(dateCrimeData[3]?.AggAssault);
      }
    }
    if (date5 == true) {
      templabel.push("2007-2018");
      if (crime1 == true) {
        nfsData.push(dateCrimeData[4]?.NonFatalShooting);
      }
      if (crime2 == true) {
        hData.push(dateCrimeData[4]?.Homicide);
      }
      if (crime3 == true) {
        aaData.push(dateCrimeData[4]?.AggAssault);
      }
    }

    setlabels(templabel);
    setnfsData(nfsData);
    sethData(hData);
    setaaData(aaData);
  }, [
    dateCrimeData,
    date1,
    date2,
    date3,
    date4,
    date5,
    crime1,
    crime2,
    crime3,
  ]);

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
      {dateCrimeData.length > 0 ? (
        <div>
          <div className="mainhead1">Years vs Crime</div>
          <Bar className="graph" data={data} height={100} />

          <div className="dataControl">
            <div className="dateControl">
              <div className="dateControlHeader">Select Years</div>
              <form>
                <input
                  type="checkbox"
                  id="1967-1976"
                  name="1967-1976"
                  value="1967-1976"
                  checked={date1}
                  onChange={() => setdate1(!date1)}
                />
                <label for="1967-1976">1967-1976</label>
                <br />
                <input
                  type="checkbox"
                  id="1977-1986"
                  name="1977-1986"
                  value="1977-1986"
                  checked={date2}
                  onChange={() => setdate2(!date2)}
                />
                <label for="1977-1986">1977-1986</label>
                <br />
                <input
                  type="checkbox"
                  id="1987-1996"
                  name="1987-1996"
                  value="1987-1996"
                  checked={date3}
                  onChange={() => setdate3(!date3)}
                />
                <label for="1987-1996">1987-1996</label>
                <br />
                <input
                  type="checkbox"
                  id="1997-2006"
                  name="1997-2006"
                  value="1997-2006"
                  checked={date4}
                  onChange={() => setdate4(!date4)}
                />
                <label for="1997-2006">1997-2006</label>
                <br />
                <input
                  type="checkbox"
                  id="2007-2018"
                  name="2007-2018"
                  value="2007-2018"
                  checked={date5}
                  onChange={() => setdate5(!date5)}
                />
                <label for="2007-2018">2007-2018</label>
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

export default DateCrimeStats;

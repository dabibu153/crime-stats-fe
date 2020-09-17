import React, { useEffect } from "react";
import "./css/app.css";
import DateTimeBlock from "./date time block/dateTimeBlock";
import VictimBlock from "./victim block/victimBlock.js";
import DetailSearch from "./detailSearch.js";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    Axios.get("http://localhost:5000/api/getDateData")
      .then((res) => {
        console.log("datedata", res.data);
        dispatch({ type: "SET_DATE_DATA", data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
    Axios.get("http://localhost:5000/api/getTimeData")
      .then((res) => {
        console.log("timedata", res.data);
        dispatch({ type: "SET_TIME_DATA", data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
    Axios.get("http://localhost:5000/api/getVageData")
      .then((res) => {
        console.log("vagedata", res.data);
        dispatch({ type: "SET_VAGE_DATA", data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
    Axios.get("http://localhost:5000/api/getVraceData")
      .then((res) => {
        console.log("vracedata", res.data);
        dispatch({ type: "SET_VRACEEE_DATA", data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
    Axios.get("http://localhost:5000/api/getVsexData")
      .then((res) => {
        console.log("vracedata", res.data);
        dispatch({ type: "SET_VSEX_DATA", data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Router>
      <div className="App">
        <div className="mainhead">U.S. CRIME STATS</div>
        <hr />
        <div className="mainNav">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="navblocks">DATE/TIME STATS</div>
          </Link>
          <Link to="/vgraph" style={{ textDecoration: "none" }}>
            <div className="navblocks">VICTIM STATS</div>
          </Link>
          <Link to="/detailSearch" style={{ textDecoration: "none" }}>
            <div className="navblocks">DETAILED SEARCH</div>
          </Link>
        </div>
        <div className="container">
          <Switch>
            <Route path="/" exact component={DateTimeBlock} />
            <Route path="/vgraph" exact component={VictimBlock} />
            <Route path="/detailSearch" exact component={DetailSearch} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import "./css/detailSearch.css";

function DetailSearch() {
  const [pd, setpd] = useState("select");
  const [startDate, setstartDate] = useState(null);
  const [endDate, setendDate] = useState(null);
  const [crime, setcrime] = useState("select");
  const [caseStatus, setcaseStatus] = useState("select");

  const detailCrimeData = useSelector((state) => state.detailCrimeData);
  const dispatch = useDispatch();

  const handleDataFetch = () => {
    const query1 = `SELECT * FROM crime_raw_data.data_table where agency_name='${pd}' and occurred_date between '${startDate}' and '${endDate}' and offense_group like '${
      crime + "%"
    }' and clearance_group='${caseStatus}';`;

    const data = { query: query1 };
    console.log(query1);
    Axios.post("http://localhost:5000/api/getDetailedData", data)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "SET_DETAIL_DATA", data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const tableData = detailCrimeData;
  const columns = [
    {
      Header: "row_hash",
      accessor: "row_hash",
    },
    {
      Header: "source",
      accessor: "source",
    },
    {
      Header: "agency_name",
      accessor: "agency_name",
    },
    {
      Header: "agency_ori",
      accessor: "agency_ori",
    },
    {
      Header: "agency_incident_id",
      accessor: "agency_incident_id",
    },
    {
      Header: "occurred_date",
      accessor: "occurred_date",
    },
    {
      Header: "occurred_time",
      accessor: "occurred_time",
    },
    {
      Header: "offense_category",
      accessor: "offense_category",
    },
    {
      Header: "top_ucr_classification",
      accessor: "top_ucr_classification",
    },
    {
      Header: "top_local_classification",
      accessor: "top_local_classification",
    },
    {
      Header: "nibrs_code",
      accessor: "nibrs_code",
    },
    {
      Header: "weapon",
      accessor: "weapon",
    },
    {
      Header: "firearm_ind",
      accessor: "firearm_ind",
    },
    {
      Header: "offense_group",
      accessor: "offense_group",
    },
    {
      Header: "domestic_violence_ind",
      accessor: "domestic_violence_ind",
    },
    {
      Header: "family_violence_ind",
      accessor: "family_violence_ind",
    },
    {
      Header: "gang_activity_ind",
      accessor: "gang_activity_ind",
    },
    {
      Header: "relationship_to_offender",
      accessor: "relationship_to_offender",
    },
    {
      Header: "circumstance",
      accessor: "circumstance",
    },
    {
      Header: "inside_outside",
      accessor: "inside_outside",
    },
    {
      Header: "victim_age",
      accessor: "victim_age",
    },
    {
      Header: "victim_race",
      accessor: "victim_race",
    },
    {
      Header: "victim_ethnicity",
      accessor: "victim_ethnicity",
    },
    {
      Header: "victim_race_condensed",
      accessor: "victim_race_condensed",
    },
    {
      Header: "victim_sex",
      accessor: "victim_sex",
    },
    {
      Header: "case_status",
      accessor: "case_status",
    },
    {
      Header: "arrest_ind",
      accessor: "arrest_ind",
    },
    {
      Header: "clearance_status",
      accessor: "clearance_status",
    },
    {
      Header: "clearance_group",
      accessor: "clearance_group",
    },
    {
      Header: "clearance_date",
      accessor: "clearance_date",
    },
    {
      Header: "arrest_date",
      accessor: "arrest_date",
    },
  ];

  return (
    <div className="detailmainblock">
      <div className="mainBlock5">
        <div className="pdSelect">
          <div className="blockheader2"></div>
          <label>SELECT LOCATION</label>
          <select value={pd} onChange={(e) => setpd(e.target.value)} name="pd">
            <option value="select">select</option>
            <option value="TUCSON-PD">TUCSON-PD</option>
            <option value="LOS-ANGELES-PD">LOS-ANGELES-PD</option>
            <option value="SAN-DIEGO-PD">SAN-DIEGO-PD</option>
            <option value="SAN-FRANCISCO-PD">SAN-FRANCISCO-PD</option>
            <option value="COLORADO-SPRINGS-PD">COLORADO-SPRINGS-PD</option>
            <option value="DENVER-PD">DENVER-PD</option>
            <option value="WILMINGTON-PD">WILMINGTON-PD</option>
            <option value="ORLANDO-PD">ORLANDO-PD</option>
            <option value="CHICAGO-PD">CHICAGO-PD</option>
            <option value="LOUISVILLE-MPD">LOUISVILLE-MPD</option>
            <option value="NEW-ORLEANS-PD">NEW-ORLEANS-PD</option>
            <option value="BOSTON-PD">BOSTON-PD</option>
            <option value="BALTIMORE-PD">BALTIMORE-PD</option>
            <option value="ST-LOUIS-MPD">ST-LOUIS-MPD</option>
            <option value="NEWARK-PD">NEWARK-PD</option>
            <option value="LAS-VEGAS-MPD">LAS-VEGAS-MPD</option>
            <option value="NEW-YORK-CITY-PD">NEW-YORK-CITY-PD</option>
            <option value="CINCINNATI-PD">CINCINNATI-PD</option>
            <option value="PHILADELPHIA-PD">PHILADELPHIA-PD</option>
            <option value="PITTSBURGH-PD">PITTSBURGH-PD</option>
            <option value="DALLAS-PD">DALLAS-PD</option>
            <option value="HOUSTON-PD">HOUSTON-PD</option>
          </select>
        </div>
        {pd == "select" ? (
          <div></div>
        ) : (
          <div>
            <label>SELECT DATE FILTER</label>
            <div className="dateBlock">
              <form>
                <label>Start Date</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setstartDate(e.target.value)}
                />
              </form>
              <br />
              <form>
                <label>End Date</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setendDate(e.target.value)}
                />
              </form>
            </div>
          </div>
        )}
        {startDate != null && endDate != null ? (
          <div>
            <div className="crimeSelect">
              <div>SELECT CRIME</div>
              <select
                value={crime}
                onChange={(e) => setcrime(e.target.value)}
                name="pd"
              >
                <option value="select">Select</option>
                <option value="Non-Fatal Shooting">NonFatalShooting</option>
                <option value="Homicide">Homicide</option>
                <option value="Agg Assault">AggAssault</option>
              </select>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {crime === "select" ? (
          <div></div>
        ) : (
          <div>
            <div className="caseStatusSelect">
              <div>SELECT CASE STATUS</div>
              <select
                value={caseStatus}
                onChange={(e) => setcaseStatus(e.target.value)}
                name="pd"
              >
                <option value="select">Select</option>
                <option value="Cleared/Closed-Unspecified">
                  Cleared/Closed-Unspecified
                </option>
                <option value="Open & No Arrest-Unspecified">
                  Open & No Arrest-Unspecified
                </option>
                <option value="Cleared-Ex">Cleared-Ex</option>
                <option value="Null, Missing, Unclear">
                  Null, Missing, Unclear
                </option>
              </select>
            </div>
          </div>
        )}
        {caseStatus === "select" ? (
          <div></div>
        ) : (
          <button onClick={handleDataFetch}>Get Data</button>
        )}
      </div>
      <div className="dataRepresent">
        <ReactTable data={tableData} columns={columns} />
      </div>
    </div>
  );
}

export default DetailSearch;

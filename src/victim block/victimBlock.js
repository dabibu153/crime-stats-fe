import React from "react";
import SexvsCrime from "./sexvsCrime";
import RacevsCrime from "./racevsCrime";
import AgevsCrime from "./agevsCrime";
import "../css/victimBlock.css";

function VictimBlock() {
  return (
    <div>
      <div className="topRow">
        <SexvsCrime />
        <RacevsCrime />
      </div>
      <hr style={{ marginTop: "20px" }} />

      <AgevsCrime />
    </div>
  );
}

export default VictimBlock;

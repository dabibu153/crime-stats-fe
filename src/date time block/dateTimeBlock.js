import React from "react";
import DateCrimeStats from "./dateCrimeStats.js";
import TimeCrimeStats from "./timeCrimeStats.js";

function DateTimeBlock() {
  return (
    <div>
      <DateCrimeStats />
      <TimeCrimeStats />
    </div>
  );
}

export default DateTimeBlock;

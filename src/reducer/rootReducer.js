const initialState = {
  dateCrimeData: [],
  hourCrimeData: [],
  vageCrimeData: [],
  vraceCrimeData: [],
  vsexCrimeData: [],
  detailCrimeData: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_DATE_DATA":
      return { ...state, dateCrimeData: action.data };
    case "SET_TIME_DATA":
      return { ...state, hourCrimeData: action.data };
    case "SET_VAGE_DATA":
      return { ...state, vageCrimeData: action.data };
    case "SET_VRACEEE_DATA":
      return { ...state, vraceCrimeData: action.data };
    case "SET_VSEX_DATA":
      return { ...state, vsexCrimeData: action.data };
    case "SET_DETAIL_DATA":
      return { ...state, detailCrimeData: action.data };
    default:
      return state;
  }
}

export default rootReducer;

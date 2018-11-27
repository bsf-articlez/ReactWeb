import axios from "axios";

const initialState = {
  loading: false,
  fullName: "",
  email: "",
  acceptTerms: false,
  countdownText: "",
  successMessage: "",
  errorMessage: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "HOME_SET_VALUE":
      if (
        ["fullName", "email", "acceptTerms", "countdownText"].indexOf(
          action.key
        ) < 0
      ) {
        return state;
      }
      return {
        ...state,
        [action.key]: action.value
      };
    case "HOME_SUBMIT_PENDING":
      return {
        ...state,
        loading: true,
        successMessage: "",
        errorMessage: ""
      };
    case "HOME_SUBMIT_FULFILLED":
      return {
        ...state,
        loading: false,
        successMessage: action.payload.statusText
      };
    case "HOME_SUBMIT_REJECTED":
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.response.statusText
      };
    default:
      return state;
  }
  /*
    case "SET_FULL_NAME":
      return {
        ...state,
        fullName: action.value
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: action.value
      };
    case "SET_AGREE_TERMS":
      return {
        ...state,
        acceptTerms: action.value
      };
    case "SET_COUNT_DOWN_TEXT":
      return {
        ...state,
        countdownText: action.value
      };
    default:
      return state;
      
  }
  */
};

export const setValue = (key, value) => ({
  type: "HOME_SET_VALUE",
  key,
  value
});

export const submit = (fullName, email) => ({
  type: "HOME_SUBMIT",
  payload: axios.post("http://www.mocky.io/v2/5bfbbb063100006b0039b9d7")
});

/*
export const setFullName = value => ({
  type: "SET_FULL_NAME",
  value
});

export const setEmail = value => ({
  type: "SET_EMAIL",
  value
});

export const setAgreeTerms = value => ({
  type: "SET_AGREE_TERMS",
  value
});

export const setCountDownText = value => ({
  type: "SET_COUNT_DOWN_TEXT",
  value
});
*/

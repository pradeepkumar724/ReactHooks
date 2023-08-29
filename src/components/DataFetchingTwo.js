import React from "react";
import { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  post: {},
  loading: true,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, error: "", post: action.payload };

    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "something went wrong",
      };
    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  });
  return (
    <div>
      {state.loading ? "Loading" : state.payload.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingTwo;

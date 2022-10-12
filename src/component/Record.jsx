import React from "react";
import useFetch from "../custom-hook/useFetch";

const Record = () => {
  const { data, loading } = useFetch(
    `http://pomodoro-env.eba-p7tpqkyg.ap-south-1.elasticbeanstalk.com/allUser`
  );
  return <div>{loading ? " loading" : data} </div>;
};

export default Record;

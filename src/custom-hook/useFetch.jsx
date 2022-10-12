import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    console.log("Loading");
    setState({ data: null, loading: true });
    fetch(url)
      .then((data) => data.json())
      .then((x) => {
        console.log(x);
        setState({ data: x, loading: false });
      });
  }, [url]);

  return state;
};

export default useFetch;

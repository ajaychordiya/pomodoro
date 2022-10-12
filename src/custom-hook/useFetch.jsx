import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    setState({ data: null, loading: true });
    fetch(url)
      .then((data) => data.text())
      .then((x) => {
        console.log(x);
        setState({ data: x, loading: false });
      });
  }, [url]);

  return state;
};

export default useFetch;

import { useState } from "react";

const useForm = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return [
    value,
    (e) => {
      console.log(e.target.value);
      setValue({ ...value, [e.target.name]: e.target.value });
    },
  ];
};

export default useForm;

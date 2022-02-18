import {useState} from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    console.log("setting useInput");
    setValue(event.target.value);
  };
  return {value, onChange: handleChange};
};

export default useInput;

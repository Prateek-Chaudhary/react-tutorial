import { useEffect, useState } from "react";

export default function useCurrency(curreny) {
  /* https://www.floatrates.com/daily/inr.json */
  let [data, setData] = useState({});
  useEffect(() => {
    console.log(curreny);
    fetch(`https://www.floatrates.com/daily/${curreny}.json`)
      .then((res) => res.json()).then((res) => setData(res));
    console.log(data);
  }, [curreny]);
  return data;
}
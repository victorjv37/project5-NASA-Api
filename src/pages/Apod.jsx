import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const Apod = () => {
  const NASA_API = "https://api.nasa.gov";
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const API_KEY = "api_key=fzyMxFyvMiUXJbeJfOOT0OUXgBZYHIb57CgMShwm";

  const [error, setError] = useState(null);
  const [date, setDate] = useState(today);
  const [data, setData] = useState(date);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${NASA_API}/planetary/apod?date=${date}&${API_KEY}`
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [date]);

  const handleDate = (event) => {
    setDate(event.target.value);
  };
  if (date > today) {
    return (
      <>
        <br />
        <br />
        <input id="inputDate" type="date" onChange={handleDate} />
        <br />
        <div>{date}</div>
        <br />
        <div>We cant predice the future,</div>
        <div>choose a serious date, please...</div>
      </>
    );
  }

  return (
    <span>
      <h4>Enter the date of the photo you want to visualizate</h4>
      <input id="inputDate" type="date" onChange={handleDate} />
      <div>
        <h2>{data.title}</h2>
        <h3>
          Copyright: {data.copyright}, Date: {date}
        </h3>
        <p>{data.explanation}</p>
        <img src={data.url} />
      </div>
    </span>
  );
};

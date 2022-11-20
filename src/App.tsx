import Axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import BarChartDisplay from "./BarChart";
import Card from "./components/Card";
import RadioButtons from "./components/RadioButtons";
import SearchSelect from "./components/SearchSelect";
function App() {
  const [location, setLocation] = useState<any>("Tunis");
  const [data, setData] = useState<any>({});
  const [unit, setUnit] = useState<string>("C");
  const day = new Date().getDate() - 1;
  console.log(day);
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=762385c71cb82e47ad4fdd68f06f6271`;
  console.log(location);
  const getLocation = (location) => {
    if (!location) return;
    Axios.get(url)
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  useEffect(() => {
    getLocation(location);
  }, [location]);

  return (
    <>
      <div className="container mx-auto bg-slate-200 flex flex-col gap-10 p-4">
        <RadioButtons unit={unit} setUnit={setUnit} />
        <div className="mx-auto w-[50%]">
          <SearchSelect location={location} setLocation={setLocation} />
        </div>
        <Card data={data.list} unit={unit} />
      </div>
      <div className="container mx-auto bg-slate-200 w-full flex flex-row justify-center barChart">
        <BarChartDisplay data={data.list} unit={unit} />
      </div>
    </>
  );
}

export default App;

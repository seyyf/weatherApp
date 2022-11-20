import BarChart from "react-bar-chart";

function BarChartDisplay({ data, unit }) {
  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  let groups =
    data &&
    data?.reduce((groups, weather) => {
      const date = new Date(weather.dt_txt).getDay();
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(weather);
      return groups;
    }, []);
  if (groups && groups.length != 0) {
    groups = [
      groups[groups.length - 1],
      ...groups.splice(0, groups.length - 1),
    ];
  }
  let chart: Array<any> = [];
  groups &&
    groups.length != 0 &&
    groups.map((day) => {
      const d = new Date(day[0]?.dt_txt);
      const dayName = daysOfWeek[d.getDay()];
      let CharTemp = { text: dayName, value: 0 };
      day.forEach((hour) => {
        if (CharTemp.value <= hour?.main?.temp) {
          CharTemp.value =
            unit === "F"
              ? hour?.main?.temp
              : ((hour?.main?.temp - 32) * (5 / 9)).toFixed(0);
        }
      });
      chart.push(CharTemp);
    });

  const margin = { top: 20, right: 20, bottom: 30, left: 40 };

  return <BarChart data={chart} margin={margin} height={500} width={500} />;
}

export default BarChartDisplay;

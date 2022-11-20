// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../App.css";

// import required modules
import { Navigation, Pagination } from "swiper";

function Card({ data, unit }) {
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
  return (
    <div className="h-[50vh]">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper w-[50%]"
        navigation={true}
        loop={true}
        initialSlide={2}
      >
        {groups &&
          groups.length !== 0 &&
          groups.slice(1, groups.length).map((weather, index) => {
            const d = new Date(weather[0]?.dt_txt);
            const dayName = daysOfWeek[d.getDay()];
            return (
              <SwiperSlide
                key={index}
                className="rounded-md !h-[80%] flex flex-col justify-around p-6"
              >
                <div>
                  <img
                    src={
                      "http://openweathermap.org/img/w/" +
                      weather[0]?.weather[0]?.icon +
                      ".png"
                    }
                    alt={weather[0]?.weather[0]?.description}
                    width="100rem"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p>{dayName}</p>
                  <p>
                    {unit === "F"
                      ? weather[0]?.main.temp.toFixed(0)
                      : ((weather[0]?.main.temp - 32) * (5 / 9)).toFixed(0)}
                    {unit}°
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default Card;

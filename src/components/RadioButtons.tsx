function RadioButtons({ unit, setUnit }) {
  return (
    <div className="flex gap-20 justify-center">
      <div className="flex gap-4">
        <button
          className="p-2 h-[3rem] flex items-center gap-4 bg-[#eee] rounded-md shadow-md"
          onClick={() => setUnit("C")}
        >
          <input type="radio" name="unit" id="unit" checked={unit === "C"} />
          <label className="cursor-pointer" htmlFor="flexRadioDefault2">
            Celcius
          </label>
        </button>
      </div>
      <div>
        <button
          className="p-2 h-[3rem] flex items-center gap-4 bg-[#eee] rounded-md shadow-md"
          onClick={() => setUnit("F")}
        >
          <input type="radio" name="unit" id="unit" checked={unit === "F"} />
          <label className="cursor-pointer" htmlFor="flexRadioDefault2">
            Fahrenheit
          </label>
        </button>
      </div>
    </div>
  );
}

export default RadioButtons;

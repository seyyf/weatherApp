import Select from "react-select";

interface Props {
  location?: string;
  setLocation?: (arg) => void;
  data?: any;
}

function SearchSelect({ location, setLocation }: Props) {
  const options = [
    { value: "tunis", label: "Tunis" },
    { value: "Bizerte", label: "Bizerte" },
    { value: "Ariana", label: "Ariana" },
    { value: "Manouba", label: "Manouba" },
    { value: "Ben Arous", label: "Ben Arous" },
    { value: "Zaghouan", label: "Zaghouan" },
    { value: "Nabeul", label: "Nabeul" },
    { value: "Jendouba", label: "Jendouba" },
    { value: "Kébili", label: "Kébili" },
    { value: "gafsa", label: "Gafsa" },
    { value: "Kairouan", label: "Kairouan" },
    { value: "béja", label: "Béja" },
    { value: "kasserine", label: "Kasserine" },
    { value: "monastir", label: "Monastir" },
    { value: "Sidi Bouzid", label: "Sidi Bouzid" },
    { value: "tataouine", label: "Tataouine" },
    { value: "Sfax", label: "Sfax" },
    { value: "Gabès", label: "Gabès" },
    { value: "Mahdia", label: "Mahdia" },
    { value: "El Kef", label: "El Kef" },
    { value: "Médenine", label: "Médenine" },
    { value: "Tozeur", label: "Tozeur" },
    { value: "Sousse", label: "Sousse" },
    { value: "Siliana", label: "Siliana" },
  ];

  return (
    <div className="z-10 relative flex flex-col gap-8">
      <Select
        options={options}
        defaultValue={options[0]}
        defaultInputValue={location}
        onChange={(e) => setLocation?.(e?.value)}
      />
      <div className="flex justify-center items-center font-semibold">
        <h1>{location}</h1>
      </div>
    </div>
  );
}

SearchSelect.defaultProps = {
  location: String,
  setLocation: () => {},
};

export default SearchSelect;

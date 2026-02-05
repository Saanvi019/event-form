type Props = {
  formData: any;
  setFormData: any;
};

export default function StepThree({ formData, setFormData }: Props) {

  const plannerOptions = [
    "Engagement",
    "Henna Night",
    "Wedding",
    "Corporate Event",
    "Prom",
    "Christmas Party",
  ];

  const performerOptions = [
    "Singer",
    "DJ",
    "Dancer",
    "Comedian",
    "Band",
    "Magician",
  ];

  const crewOptions = [
    "Security",
    "Lighting",
    "Catering",
    "Cleaners",
    "Helpers",
    "Photographers",
  ];

  const getOptions = () => {
    if (formData.hireType === "planner") return plannerOptions;
    if (formData.hireType === "performer") return performerOptions;
    if (formData.hireType === "crew") return crewOptions;
    return [];
  };

  const questionMap: any = {
    planner: "What kind of event are you planning?",
    performer: "What performer do you need?",
    crew: "What crew do you need?",
  };

  const selected = formData.details.category;

  const selectOption = (option: string) => {
    setFormData({
      ...formData,
      details: { ...formData.details, category: option },
    });
  };

  const cardBase =
    "border border-black/20 rounded-xl p-6 cursor-pointer text-center " +
    "bg-black/30 text-white transition hover:border-red-700 hover:shadow-md text-black";

  const cardSelected =
    "border-red-800 bg-red-800 shadow-md";

  return (
    <div className="space-y-6">

      {/* QUESTION */}
      <h2 className="text-xl font-thin text-center text-black">
        {questionMap[formData.hireType]}
      </h2>

      {/* OPTIONS */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {getOptions().map((option: string) => (
          <div
            key={option}
            onClick={() => selectOption(option)}
            className={`${cardBase} ${
              selected === option ? cardSelected : ""
            }`}
          >
            <p className="font-medium">{option}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
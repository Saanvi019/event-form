export default function StepTwo({ formData, setFormData }: any) {
  return (
    <div className="flex gap-4 justify-center">
      {["planner", "performer", "crew"].map((type) => (
        <button
          key={type}
          className={`px-6 py-3 rounded-lg border font-semibold capitalize
          ${formData.hireType === type
            ? "bg-red-800 text-white"
            : "bg-gray-400 hover:bg-red-800"}`}
          onClick={() =>
            setFormData({ ...formData, hireType: type })
          }
        >
          {type}
        </button>
      ))}
    </div>
  );
}
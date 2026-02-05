type Props = {
  formData: any;
  onSubmit: () => void;
  onEdit: () => void;
};

export default function Review({ formData, onSubmit, onEdit }: Props) {
  const Section = ({ title, children }: any) => (
    <div className="mb-8">
      <h3 className="font-thin text-lg mb-2 text-black">{title}</h3>
      <div className="border border-black/20 rounded-lg p-4 text-sm space-y-2 text-black">
        {children}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">

      <h2 className="text-xl font-thin text-center text-black">
        Review Your Requirement
      </h2>

      {/* EVENT INFO */}
      <Section title="Event Details">
        <p><b>Name:</b> {formData.eventName}</p>
        <p><b>Dates:</b> {formData.startDate} → {formData.endDate}</p>
        <p><b>Location:</b> {formData.location}</p>
        <p><b>Venue:</b> {formData.venue || "N/A"}</p>
      </Section>

      {/* HIRING INFO */}
      <Section title="Hiring Requirement">
        <p><b>Hire Type:</b> {formData.hireType}</p>
        <p><b>Category:</b> {formData.details?.category}</p>
      </Section>

      {/* CONTACT INFO */}
      <Section title="Contact Information">
        <p><b>Name:</b> {formData.contactName}</p>
        <p><b>Email:</b> {formData.email}</p>
        <p><b>Phone:</b> {formData.phone}</p>
        <p><b>Notes:</b> {formData.notes || "None"}</p>
      </Section>

      {/* CONFIRMATION */}
      <div className="text-center mt-8 space-y-4">
        <p className="font-thin text-black">
          Do you want to submit this requirement?
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onEdit}
            className="px-6 py-2 bg-black/40 text-white rounded-lg hover:bg-red-800 transition"
          >
            Edit
          </button>

          <button
            onClick={onSubmit}
            className="px-6 py-2 bg-black/40 text-white rounded-lg hover:bg-red-800 transition"
          >
            Confirm Submit
          </button>
        </div>
      </div>

    </div>
  );
}
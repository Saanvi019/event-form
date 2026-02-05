"use client";
import { useState, forwardRef, useImperativeHandle } from "react";

type Props = {
  formData: any;
  setFormData: any;
};

const StepOne = forwardRef(({ formData, setFormData }: Props, ref) => {
  const [errors, setErrors] = useState<any>({});

  const inputStyle =
    "w-full border border-black/20 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-800 hover:border-black transition text-black";

  const errorStyle =
    "w-full border border-red-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-800 transition text-black";

  const labelStyle = "block mb-1 font-thin text-black";

  const validate = () => {
    const newErrors: any = {};

    if (!formData.eventName.trim())
      newErrors.eventName = "This field is required";

    if (!formData.startDate)
      newErrors.startDate = "This field is required";

    if (!formData.endDate)
      newErrors.endDate = "This field is required";

    if (!formData.location.trim())
      newErrors.location = "This field is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; 
  };

  useImperativeHandle(ref, () => ({
    validate,
  }));

  return (
    <div className="space-y-5">

      <div>
        <label className={labelStyle}>Event Name</label>
        <input
          className={errors.eventName ? errorStyle : inputStyle}
          placeholder="Hotel / Hall / Home"
          value={formData.eventName}
          onChange={(e) =>
            setFormData({ ...formData, eventName: e.target.value })
          }
        />
        {errors.eventName && <p className="text-red-600 text-xs">{errors.eventName}</p>}
      </div>

      <div>
        <label className={labelStyle}>Event Dates</label>
        <div className="flex gap-4">
          <input
            type="date"
            className={errors.startDate ? errorStyle : inputStyle}
            value={formData.startDate}
            onChange={(e) =>
              setFormData({ ...formData, startDate: e.target.value })
            }
          />
          <input
            type="date"
            className={errors.endDate ? errorStyle : inputStyle}
            value={formData.endDate}
            onChange={(e) =>
              setFormData({ ...formData, endDate: e.target.value })
            }
          />
        </div>
      </div>

      <div>
        <label className={labelStyle}>Location</label>
        <input
          className={errors.location ? errorStyle : inputStyle}
          placeholder="Hotel / Hall / Home"
          value={formData.location}
          onChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
        />
        {errors.location && <p className="text-red-600 text-xs">{errors.location}</p>}
      </div>

      <div>
        <label className={labelStyle}>Venue (Optional)</label>
        <input
          className={inputStyle}
          placeholder="Hotel / Hall / Home"
          value={formData.venue}
          onChange={(e) =>
            setFormData({ ...formData, venue: e.target.value })
          }
        />
      </div>

    </div>
  );
});

export default StepOne;

    
      


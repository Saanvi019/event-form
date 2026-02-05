"use client";
import { useState, forwardRef, useImperativeHandle } from "react";

type Props = {
  formData: any;
  setFormData: any;
};

const StepFour = forwardRef(({ formData, setFormData }: Props, ref) => {
  const [errors, setErrors] = useState<any>({});

  const inputStyle =
    "w-full border border-black/20 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-800 hover:border-black transition text-black";

  const errorInputStyle =
    "w-full border border-red-600 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-800 transition text-black";

  const labelStyle = "block mb-1 font-thin text-black";

  
  const clearError = (field: string) => {
    setErrors((prev: any) => ({ ...prev, [field]: "" }));
  };

  const validateAll = () => {
    const newErrors: any = {};

    if (!formData.contactName?.trim())
      newErrors.contactName = "Name is required";

    if (!formData.email?.trim())
      newErrors.email = "Email is required";

    if (!formData.phone?.trim())
      newErrors.phone = "Phone is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  useImperativeHandle(ref, () => ({
    validate: validateAll,
  }));

  return (
    <div className="space-y-5">

      
      <div>
        <label className={labelStyle}>Your Name</label>
        <input
          placeholder="Enter your full name"
          className={errors.contactName ? errorInputStyle : inputStyle}
          value={formData.contactName}
          onChange={(e) => {
            setFormData({ ...formData, contactName: e.target.value });
            clearError("contactName");
          }}
        />
        {errors.contactName && (
          <p className="text-red-600 text-xs mt-1">{errors.contactName}</p>
        )}
      </div>

      
      <div>
        <label className={labelStyle}>Email Address</label>
        <input
          type="email"
          placeholder="example@email.com"
          className={errors.email ? errorInputStyle : inputStyle}
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            clearError("email");
          }}
        />
        {errors.email && (
          <p className="text-red-600 text-xs mt-1">{errors.email}</p>
        )}
      </div>

     
      <div>
        <label className={labelStyle}>Phone Number</label>
        <input
          type="tel"
          placeholder="+91 XXXXX XXXXX"
          className={errors.phone ? errorInputStyle : inputStyle}
          value={formData.phone}
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
            clearError("phone");
          }}
        />
        {errors.phone && (
          <p className="text-red-600 text-xs mt-1">{errors.phone}</p>
        )}
      </div>

     
      <div>
        <label className={labelStyle}>Additional Notes (Optional)</label>
        <textarea
          rows={4}
          placeholder="Any special requirements or details..."
          className={inputStyle}
          value={formData.notes}
          onChange={(e) =>
            setFormData({ ...formData, notes: e.target.value })
          }
        />
      </div>

    </div>
  );
});

export default StepFour;
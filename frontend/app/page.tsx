"use client";
import { useState, useRef } from "react";
import StepOne from "@/components/stepOne";
import StepTwo from "@/components/stepTwo";
import StepThree from "@/components/stepThree";
import StepFour from "@/components/stepFour";
import Review from "@/components/review";
import { FormDataType } from "@/types/formTypes";

export default function Home() {
  const [step, setStep] = useState<number>(1);

  
  const stepOneRef = useRef<any>(null);
  const stepFourRef = useRef<any>(null);

  const [formData, setFormData] = useState<FormDataType>({
    eventName: "",
    eventType: "",
    startDate: "",
    endDate: "",
    location: "",
    venue: "",
    hireType: "",
    details: {},

    contactName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async () => {
    await fetch("http://localhost:5000/api/requirements", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("Submitted Successfully!");
  };

  const handleEdit = () => setStep(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100">
      <div className="max-w-3xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-medium text-center text-red-900">
          Let’s Get Your Event Ready
        </h1>
        <p className="text-center text-gray-600 mt-3 mb-8">
          Tell us about your event and we’ll find the right people.
        </p>

        {/* PROGRESS */}
        <div className="relative mb-10">
          <div className="absolute top-4 left-0 w-full h-1 bg-gray-300"></div>
          <div className="flex justify-between relative">
            {[1,2,3,4,5].map((s) => (
              <div
                key={s}
                className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold
                ${step >= s ? "bg-red-800 text-white" : "bg-gray-300 text-gray-700"}`}
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* STEPS */}
        <div className="space-y-6">
          {step === 1 && (
            <StepOne
              ref={stepOneRef}   
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {step === 2 && <StepTwo formData={formData} setFormData={setFormData} />}
          {step === 3 && <StepThree formData={formData} setFormData={setFormData} />}
          {step === 4 && (
            <StepFour
              ref={stepFourRef}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {step === 5 && (
            <Review
              formData={formData}
              onSubmit={handleSubmit}
              onEdit={handleEdit}
            />
          )}
        </div>

        {/* NAVIGATION */}
        {step !== 5 && (
          <div className="flex justify-between mt-10">
            <button
              onClick={prevStep}
              className="px-6 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded-lg shadow transition"
            >
              Back
            </button>

            <button
              onClick={() => {
                
                if (step === 1) {
                  const valid = stepOneRef.current?.validate();
                  if (!valid) return;
                }
                if (step === 4) {
                   const valid = stepFourRef.current?.validate();
                   if (!valid) return;
                }

                nextStep();
              }}
              disabled={
                (step === 2 && !formData.hireType) ||
                (step === 3 && !formData.details?.category)
                
              }
              className="px-6 py-2 bg-red-800 text-white rounded-lg shadow transition disabled:bg-gray-400"
            >
              Next
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
import mongoose from "mongoose";

const requirementSchema = new mongoose.Schema(
  {
    eventName: String,
    eventType: String,
    startDate: String,
    endDate: String,
    location: String,
    venue: String,
    hireType: String,
    details: Object,

    contactName: String,
    email: String,
    phone: String,
    notes: String,
  },
  { timestamps: true }
);

export default mongoose.model("Requirement", requirementSchema);
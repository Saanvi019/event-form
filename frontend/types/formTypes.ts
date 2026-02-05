export type HireType = "planner" | "performer" | "crew" | "";

export type FormDataType = {
  eventName: string;
  eventType: string;
  startDate: string;
  endDate: string;
  location: string;
  venue: string;
  hireType: HireType;
  details: Record<string, any>;
  contactName: string;
  email: string;
  phone: string;
  notes: string;
};
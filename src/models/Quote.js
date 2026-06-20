import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema(
  {
    storageSize: String,
    duration: String,
    primaryUseCase: String,
    location: String,
    deliveryDate: String,
    projectDetails: String,

    firstName: String,
    lastName: String,
    title: String,
    phone: String,
    email: String,
    company: String,
    industry: String,

    referralSource: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Quote ||
  mongoose.model("Quote", QuoteSchema);
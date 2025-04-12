import mongoose from "mongoose";

const ProjectRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  projectName: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  deadline: { type: Date, required: true },
  budget: { type: String },
}, { timestamps: true });

export const ProjectRequest = mongoose.models.ProjectRequest || mongoose.model("ProjectRequest", ProjectRequestSchema);
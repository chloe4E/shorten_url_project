import mongoose from "mongoose";

// defining a URL schema with mongoose
const urlSchema = new mongoose.Schema({
  id: {
    required: true,
    type: String,
  },
  url: {
    required: true,
    type: String,
  },
});

const URL = mongoose.model("URL", urlSchema);

export default URL;

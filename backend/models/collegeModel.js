import mongoose from "mongoose";


const collegeSchema = mongoose.Schema(
  {
    
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    collegelink: {
      type: String,
      required: true,
    },
    dataset: {
      type: String,
      required: true,
    },

  },
  {
    timestamps: true,
  }
);

const College = mongoose.model("College", collegeSchema);

export default College;

import mongoose from "mongoose";


const collegeSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
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

  },
  {
    timestamps: true,
  }
);

const College = mongoose.model("College", collegeSchema);

export default College;

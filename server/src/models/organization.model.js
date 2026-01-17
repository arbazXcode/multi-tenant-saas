import mongoose from "mongoose";

const organizationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        ownerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        plan: {
            type: String,
            enum: ["FREE", "PRO"],
            default: "FREE"
        }
    },
    { timestamps: true }
);

export default mongoose.model("Organization", organizationSchema);

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true
        },
        passwordHash: {
            type: String,
            required: true
        },
        orgId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Organization",
            required: true,
            index: true
        },
        role: {
            type: String,
            enum: ["OWNER", "ADMIN", "MEMBER"],
            default: "MEMBER"
        },
        status: {
            type: String,
            enum: ["ACTIVE", "INVITED", "DISABLED"],
            default: "ACTIVE"
        }
    },
    { timestamps: true }
);

/**
 * Unique email per organization
 */
userSchema.index({ email: 1, orgId: 1 }, { unique: true });

export default mongoose.model("User", userSchema);

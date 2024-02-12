import mongoose from "mongoose";

const hospitaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String,
    },
    city: {
        type: String,
        required: true
    },
    pinCode: {
        type: String,
        required: true
    },
    specialisedIn: [
        {
            type: String
        }
    ]
}, {timestamps: true});

export default mongoose.model("Hospital", hospitaSchema);
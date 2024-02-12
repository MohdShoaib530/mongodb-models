import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({},{timestamps: true});

export default mongoose.model("Record", recordSchema)
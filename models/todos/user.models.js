import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
        username:{
        type: String,
        unique: true,
        lowercase:true,
        required:[true,"username is required"]
        },
        email: {
            type: String,
            required: [true,"email is required"]
        },
        password: {
            type: String, 
            required: [true, "password is required"],
        }
},    {timeStamps: true,}
);

export default mongoose.model("User",userSchema)
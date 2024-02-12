import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type:Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    orderItems: [orderItemSchema],
    address : {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["PENDING","CANCELLED","DELIVERED"],
        default: "PENDING"
    }
}, {timestamps});

export default mongoose.model("Order",orderSchema)
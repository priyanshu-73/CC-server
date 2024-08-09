import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    avatar:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    
}, {minimize: false})

const userModel = mongoose.models.User || mongoose.model("User", userSchema);

export default userModel;
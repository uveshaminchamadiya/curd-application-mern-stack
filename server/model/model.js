import mongoose from "mongoose";

const mdl = mongoose.Schema({
    name: String,
    username: String,
    password: String,
    phone: String 
})

const data = mongoose.model('data',mdl);

export default data;
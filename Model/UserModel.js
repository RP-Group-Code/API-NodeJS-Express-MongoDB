import mongoose from "mongoose";

const User = mongoose.Schema({
    name:{
        type: 'string',
        required: true
    },
    email:{
        type: 'string',
        required: true
    },
    gender:{
        type: 'string',
        required: true
    }
});

export default mongoose.model('users',User);
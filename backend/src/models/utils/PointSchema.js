const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
    type:{
        type: String,
        enum: ['Point'],
        required:true,
    },
    coordinates:{
        type: [Number],//Lon Lat
        required: true,
    }
});

module.exports = PointSchema;
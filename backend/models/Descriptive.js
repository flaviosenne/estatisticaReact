const mongoose = require('mongoose')

const DescriptiveSchema = mongoose.Schema({
    date:{
        type: Date,
        required: true,
        default: Date.now(),
    },
    variable:{
        type: String,
        required: true,
    },
    value: {
        type: [String],
        required: true,
    },
});

module.exports = mongoose.model('Descriptive', DescriptiveSchema, 'descriptive');
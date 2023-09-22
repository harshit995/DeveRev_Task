const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: String,
    description: String,
    publishDate: {
        type: String,
        required: true,
    },
    availability: {
        type: Boolean,
        default: true, // Set to true by default
    },
    numberOfCopies: {
        type: Number,
        default: 1, // Default number of copies
    },

});

module.exports = mongoose.model('Book', bookSchema);
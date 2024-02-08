const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    year: Number,
    description: String,
    rating: Number,
    imgUrl: String,
    genres: [
        {
            id: Number,
            name: String
        }
    ]
});

module.exports = mongoose.model("Movie", movieSchema);
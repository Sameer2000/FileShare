require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    // Database connection 🥳
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true});
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Database connected 🥳🥳🥳🥳');
    });
    connection.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));
}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;
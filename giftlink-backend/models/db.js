require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance) {
        return dbInstance; // Return the cached database instance if already connected
    }

    try {
        const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

        // Task 1: Connect to MongoDB
        await client.connect();
        console.log("Successfully connected to MongoDB");

        // Task 2: Connect to database giftDB and store in variable dbInstance
        dbInstance = client.db(dbName);

        // Task 3: Return database instance
        return dbInstance;
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
        throw err;
    }
}

module.exports = connectToDatabase;

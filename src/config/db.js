const { MongoClient } = require('mongodb');

let db;

const connectDB = async () => {
  try {
    console.log('Connecting to MongoDB...');
    // show the value of the MONGO_URI environment
    console.log('MONGO_URI:', process.env.MONGO_URI);
    // create a new MongoClient with the MONGO_URI environment
    const client = new MongoClient(process.env.MONGO_URI, {
      useNewUrlParser: true, // parse the URI
    });

    await client.connect(); // connect to the MongoDB server
    // get the database from the client
    db = client.db(); 
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // exit the process with an error
  }
};

const getDB = () => db;

module.exports = { connectDB, getDB };
// Importing modules
const { MongoClient } = require("mongodb");

// Exporting our function
const handler = (callback) => {
  // Configuration
  const url     = process.env.STORAGE_URL;
  const dbName  = "dormcloud";

  // Connecting to our datastore
  MongoClient.connect(url, (error, client) => {
    // Specifing our database
    const db = client.db(dbName);
    
    // And now calling our callback function
    callback(client, db);
  });
};

module.exports = handler;
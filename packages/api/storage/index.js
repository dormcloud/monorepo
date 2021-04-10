// Importing modules
const { MongoClient } = require("mongodb");

// Exporting our function
const handler = (callback) => {
  // Configuration
  // process.env.STORAGE_URL
  const url     = "mongodb://DoggyStyle:uvjfSAb%40iVbC2k@node.paw.unfull.ml:27017/?authSource=pawcapsu";
  const dbName  = "pawcapsu";

  // Connecting to our datastore
  MongoClient.connect(url, (error, client) => {
    // Specifing our database
    const db = client.db(dbName);
    
    // And now calling our callback function
    callback(client, db);
  });
};

module.exports = handler;
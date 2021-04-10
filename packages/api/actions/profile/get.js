// Importing all modules
const storage      = require('../../storage');
const { ObjectId } = require('mongodb');

// Exporting our function
module.exports = async () => {
  storage(async (client, db) => {
    // Let's firstly get some information
    const { id } = req.query;

    // Ending our request if id isn't
    // set
    if (id == null) throw new Error({ error: "WrongPayload", status: 400 });
    
    // Firstly let's check if this is
    // a token or no
    let type;
    let response;
    if (id.includes('$')) {
      // It's a user token
      type      = "token";
      let token = await db.collection("tokens").findOne({ _id: ObjectId(id.replace("$", "")) });

      // Checking token information
      if (token == null) throw new Error({ error: "InvalidToken", status: 404 });

      // Getting user account
      // and then returning its
      // information
      response  = await db.collection("profiles").findOne({ _id: ObjectId(token.uid) });
      
      // Adding some extra information
      response.isToken = true;
      response.token   = token;
    } else {
      // It's just a user id
      type     = "id";
      response = await db.collection("profiles").findOne({ _id: ObjectId(id) });
    };

    if (response == null) {
      throw new Error(({ error: "NotFound", status: 404 }));
    } else {
      return response;
    };
    client.close();
  });
};
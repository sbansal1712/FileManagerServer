const mongoose = require("mongoose");
const Mst_User = require("./users");


const ConversationSchema = new mongoose.Schema(
  {
    
    ConversationTitle: { type: String },
    username : {type : String},
    createdOn : {type : Date},
    Responses : [
      {
        username : {type : String, ref : Mst_User},
        comment : {type : String},
        createdOn : {type : Date},
        
        Replies : [{
          username : {type : String, ref : Mst_User},
          comment :  {type : String},
          createdOn : {type : Date},

        }]
      }
    ]
  },
  { collection: "Mst_Conversation" }
);


const Mst_Conversation = mongoose.model("Mst_Conversation", ConversationSchema);
module.exports = Mst_Conversation;

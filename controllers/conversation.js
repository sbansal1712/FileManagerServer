
const Mst_Conversation = require("../models/conversation");




exports.addNewConversation = async (req, res) => {
  try {
    var conversation = new Mst_Conversation(req.body);
    console.log(req.body)
    var result = await conversation.save();
   
    return res.send(result);
  } catch (err) {
  
    return res.send(err);
  }
};

exports.getAllConversations = async (req, res) => {
  try {
    var conversation = await Mst_Conversation.find().exec()
    //console.log(req.body)
    //var result = await conversation.save();
   
    return res.send(conversation);
  } catch (err) {
  
    return res.send(err);
  }
};

exports.getConversationByID = async (req, res) => {
  try {
    var conversation = await Mst_Conversation.find({_id : req.query.id}).exec()
    //console.log(req.body)
    //var result = await conversation.save();
   
    return res.send(conversation);
  } catch (err) {
  
    return res.send(err);
  }
};
exports.addNewCommentToConversation = async (req, res) => {
  try {
    var conversation = await Mst_Conversation.find({_id : req.query.id}).exec()
    //console.log(req.body)
    //var result = await conversation.save();
    var currentResponses = conversation.Responses;
    if(currentResponses == undefined){
      currentResponses = []
    }
    else{
      currentResponses.push(req.body);
    }
    conversation.set({Responses : currentResponses})
    var result = await conversation.save();
   
    return res.send(result);
  } catch (err) {
  
    return res.send(err);
  }
};
exports.replytoComment = async (req, res) => {
  try {
    console.log(req.body)
    var conversation = await Mst_Conversation.findOne({_id : req.query.id}).exec()

    conversation.set(req.body)
    var result = await conversation.save();
   
    return res.send(result);
  } catch (err) {
  
    return res.send(err);
  }
};
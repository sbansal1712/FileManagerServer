const express = require("express");

const router = new express.Router();

const authController = require("../controllers/auth");
const conversationController = require("../controllers/conversation");
// Middleware function to validate the access token and authorize the request

router.post("/createNewUser", authController.createNewUser);
router.post("/signIn", authController.signIn);
router.post("/addNewConversation", conversationController.addNewConversation)
router.get("/getAllConversations", conversationController.getAllConversations)
router.get("/getConversationByID", conversationController.getConversationByID)
router.post("/replytoComment", conversationController.replytoComment)
// router.get("/getAllChannels", channelController.getAllChannels)


module.exports = router;

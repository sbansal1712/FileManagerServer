const Mst_Users = require("../models/users");



exports.createNewUser = async (req, res) => {
  try {
    var user = new Mst_Users(req.body);
    var result = await user.save();
   
    return res.send(result);
  } catch (err) {
  
    return res.send(err);
  }
};

exports.signIn = async (req, res) => {
  try {
    
    var user = await Mst_Users.findOne({Username : req.body.Username}).exec()
    
    if (user != null && user.Password == req.body.Password){
      delete user.__v;
      delete user.password
      return res.send(user);
    }
    else{
      return res.send({err : "Invalid Credentials"});
    }
    
    
  } catch (err) {
    return res.send(err);
  }
};



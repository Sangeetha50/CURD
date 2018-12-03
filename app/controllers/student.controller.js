const Model = require('../models/student.model.js');


module.exports = {
 create: function(req, res, next) {
  
  Model.create({ name: req.body.name, email: req.body.email, roll: req.body.roll }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "Registered", data: result});
      
    });
},

findAll : function(req, res) {
    Model.find(function(err,result){
        if (err) 
        next(err);
       else
      // res.json();
        //console.log(result);
        res.json({ data: result});
       
     });
},

delete: function(req, res, next) {
  console.log("wrks");
  
    Model.findOneAndRemove({ roll:req.params.id }, function (err, result) {
        console.log("asf");
        
        console.log(req.params.id);
        
        if (err) 
         next(err);
        else
         res.json({message:"Successfully deleted",data:result});
      });
  },
  
  update: function(req, res, next) {
  console.log("works");

    Model.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name,email:req.body.email}}, function (err, result) {
      console.log(req.params.id,req.body.name);
      
     //res.json({data:name});
    console.log(result);
     res.json({message:"Successfully Updated",data:result});
    //     if (err) 
    //   next(err);
    //  else
     
    });

    // Model.findById({ roll:req.params.id }, function (err, result) {

    
    //    // var o_id = new ObjectId(roll=req.params.id)
    //     Model.update({roll:req.params.id},function(error,resu) {
    //     name=req.body.name;
    //     console.log(result);
        
    //     if (err) 
    //      next(err);
    //     else
    //      res.json({message:"Successfully updated",data:resu});
        
    //   });
    // });
  
  }
  

  }
 


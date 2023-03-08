const Poster = require("../models/PosterModel");


exports.createPoster = (async (req, res, next) => {
    try{

        const image = req.body;
      const poster =   await Poster.create({image})
       await res.status(201).send({success : true , poster})
       return;
    }catch(err) {
       await  res.send({success:false  , message : err.stack});
    }
    });


    

exports.getAllPosters = (async (req, res, next) => {
    try{

      const poster =   await Poster.find().limit(6)
       await res.status(201).send({success : true  ,poster})
       return;
    }catch(err) {
       await  res.send({success:false  , message : err.stack});
    }
    });



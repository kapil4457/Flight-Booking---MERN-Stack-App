const { set } = require("mongoose");
const Flight = require("../models/FlightModel");


exports.createFlight = (async (req, res, next) => {
    try{

        const {company , from , to ,  departure , landing , seatsLeft , ticketPrice , departureTime , landingTime} = req.body;
      const flight =   await Flight.create({company , from , to ,  departure , landing , seatsLeft ,departureTime, landingTime, ticketPrice})
       await res.status(201).send({success : true , flight})
       return;
    }catch(err) {
       await  res.send({success:false  , message : err.stack});
    }
    });



exports.updateFlight = (async (req, res, next) => {
    try{

        const {company , from , to ,  departure , landing , seatsLeft , ticketPrice  , departureTime , landingTime ,_id} = req.body;
      const flight =   await Flight.findByIdAndUpdate( _id ,{company , from , to ,  departure , landing , seatsLeft , ticketPrice, departureTime , landingTime})
      await flight.save();
       await res.status(200).send({success : true , flight})
       return;
    }catch(err) {
       await  res.send({success:false  , message : err.stack});
    }
    });


exports.deleteFlight = (async (req, res, next) => {
    try{

        const  id = req.params.id;
       await Flight.findByIdAndDelete( id )
       await res.status(200).send({success : true , message : "Deleted Successfully"})
       return;
    }catch(err) {
       await  res.send({success:false  , message : err.stack});
    }
    });




    
exports.searchFlights = (async (req, res, next) => {
   try{

       const { from , to , keyword} = req.query;


if(to && !from){
       
   const flights = await Flight.find({$or : [   {"to" : {'$regex' : '.*' + `${to}` + '.*' ,$options : 'i'}},
  ]});
  
  await res.status(200).send({success : true ,flights})
}

       if(from && to){

          
      //     const flights = await Flight.find({$or : [{"from" : {'$regex' : '.*' + `${from}` + '.*' ,$options : 'i'}},
      //  {"to" : {'$regex' : '.*' + `${to}` + '.*' ,$options : 'i'}},
      // ]});
      
          const flights = await Flight.find({from : from , to : to});
      
      await res.status(200).send({success : true ,flights})
   }else if(keyword){
       
      const flights = await Flight.find({$or : [
      {"company" : {'$regex' : '.*' + `${keyword}` + '.*' ,$options : 'i'}} ,
      {"from" : {'$regex' : '.*' + `${keyword}` + '.*' ,$options : 'i'}} ,
      {"to" : {'$regex' : '.*' + `${keyword}` + '.*' ,$options : 'i'}} ,
     ]});
     
     await res.status(200).send({success : true ,flights})
   }
      return;
   }catch(err) {
      await  res.send({success:false  , message : err.stack});
   }
   });



   exports.getAllFroms = (async (req, res, next) => {
      try{
        const flights =await  Flight.find();
        let arr = [];
         let lenght = flights.length;
        for(var i =0 ; i  < lenght ; i ++){
           arr.push(flights[i].from);
        }

        arr = [...new Set(arr)]
        
         await res.status(200).send({success : true ,arr})
         return;
      }catch(err) {
         await  res.send({success:false  , message : err.stack});
      }
      });


   exports.getAllFlights = (async (req, res, next) => {
      try{
        const flights =await  Flight.find()
         await res.status(200).send({success : true ,flights})
         return;
      }catch(err) {
         await  res.send({success:false  , message : err.stack});
      }
      });


      exports.getAllTos = (async (req, res, next) => {
         try{
            const destination = req.params.destination;
           const flights =await  Flight.find({"from": {$eq : destination}})
            
            var arr = [];
            
            let length = flights.length;
            
            for(var i =0 ; i < length ; i ++)
            {
               arr.push(flights[i].to);
            }  
            console.log("arr" , arr)

arr =[... new Set(arr)]
          await res.status(200).send({success : true ,arr})
            return;
         }catch(err) {
            await  res.send({success:false  , message : err.stack});
         }
         });
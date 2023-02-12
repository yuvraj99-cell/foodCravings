const mongoose=require('mongoose');
const mongoURI ='mongodb+srv://FoodCarvings:Yuvraj%40123@cluster0.il5fsmf.mongodb.net/FoodCarvings?retryWrites=true&w=majority';



const mongoDB = async () =>{
    
   await mongoose.connect(mongoURI,{ useNewUrlParser: true})
    .then(()=>{
        console.log("Connected to db ");
        const fetchedData = mongoose.connection.db.collection("Food_items")
        fetchedData.find({}).toArray(function(err, data){
            if (err) console.log(err);
            // else console.log(data);
        })
    })
    .catch(err => console.log("Error connecting to db ")
)}

module.exports= mongoDB; 

//Yuvraj@123
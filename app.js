const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'user';
MongoClient.connect(connectionURL,{useUnifiedTopology:true},(error,client)=>{
    if(error){
        return console.log("Unable to connect database");
    }
    const db = client.db(databaseName);
   
    // db.collection('user').insertOne({
    //     name:"sayli",
    //     lName:"Pisal"
    // },(error,result)=>{
    //     if(error){
    //         return console.log("Unable to insert")
    //     }

    //     console.log(result.ops);
    // }
    // )
//    db.collection('user').insertMany([{
//     name:"neha",
//     lName:"Pisal"
//    },
//    {
//     name:"reshma",
//     lName:"Pisal"
//    },
//    {
//     name:"pooja",
//     lName:"Pisal"
//    }],
//    (error,result)=>{
//     if(error){
//         return console.log("Unable to insert")
//     }

//     console.log(result.ops);
//     }
//    )

// db.collection('people').insertMany([{
//     name:"neha",
//     lName:"Pisal"
//    },
//    {
//     name:"reshma",
//     lName:"Pisal"
//    },
//    {
//     name:"pooja",
//     lName:"Pisal"
//    }],
//    (error,result)=>{
//     if(error){
//         return console.log("Unable to insert")
//     }

//     console.log(result.ops);
//     }
//    )
//    db.collection('student').insertMany([{
//     name:"neha",
//     lName:"Pisal"
//    },
//    {
//     name:"reshma",
//     lName:"Pisal"
//    },
//    {
//     name:"pooja",
//     lName:"Pisal"
//    }],
//    (error,result)=>{
//     if(error){
//         return console.log("Unable to insert")
//     }

//     console.log(result.ops);
//     }
//    )

   
    // db.collection('people').findOne({name:"neha"},(error,people)=>{
    //     console.log(people);
    // })
   
    db.collection('people').find({lName:"Pisal"}).toArray((error,people)=>{
        console.log(people);
    })

    //  db.people.updateOne(
    //     { lName: "Pisal" },
    //     {
    //       $set: { "lName": "dendge" },
    //     //   $currentDate: { lastModified: true }
    //     }
    //  )
}
)


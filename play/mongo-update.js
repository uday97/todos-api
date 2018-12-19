const {MongoClient, ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        return console.log('Couldnt connect to MongoDB');
    }
    console.log('success');
    
    db.collection('users').findOneAndUpdate({
        _id: new ObjectID("5bfbb610d7ea5c3134c126e6")
    },{
        $set:{
            name: 'Chaitany'
        },
        $inc:{
            age: -2
        }
    },{
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    })

    db.close();
});
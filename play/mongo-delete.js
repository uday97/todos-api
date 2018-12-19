const {MongoClient, ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        return console.log('Couldnt connect to MongoDB');
    }
    console.log('success');
    
    //deleteOne

    // db.collection('users').deleteMany({
    //     name: 'Chaitany'
    // }).then((result)=>{
    //     console.log(result);
    // });



    db.collection('users').findOneAndDelete({
        _id: new ObjectID("5c1a7c689f25ad6c02fabbc6")
    }).then((result)=>{
        console.log(result);
    });

    db.close();
});
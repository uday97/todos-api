const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        return console.log('Couldnt connect to MongoDB');
    }
    console.log('success');
    db.collection('users').insertOne({
        name: 'Chaitany',
        age: 21,
        location: 'Delhi'
    },(err,results)=>{
    if(err)
    {
        return console.log('Couldnt insert the record');
    }
    console.log('success');
    console.log(results.ops);
    });
    // db.collection('users').remove({
    //     name:'Chaitany'
    // });
    db.close();
});
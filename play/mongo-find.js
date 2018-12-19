const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        return console.log('Unable to connect');
    }
    // db.collection('todos').find({
    //     completed: true
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch items');
    // });

    // db.collection('todos').find({
    //     //completed: true
    // }).count().then((count)=>{
    //     console.log(`COunt is ${count}`);
    //     //console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch items');
    // });

    db.collection('users').find({
        name: 'Uday'
    }).count().then((count)=>{
        console.log(`COunt is ${count}`);
        //console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('Unable to fetch items');
    });

    db.close();
})
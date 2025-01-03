```javascript
//Incorrect usage of $inc operator in MongoDB update query
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{count:-1}});
```
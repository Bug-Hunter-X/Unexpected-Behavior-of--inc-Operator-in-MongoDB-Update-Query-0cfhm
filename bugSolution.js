```javascript
//Correct usage of $inc operator with handling for non-existent field
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{"$inc":{"count":-1},"$setOnInsert":{"count":0}});
```
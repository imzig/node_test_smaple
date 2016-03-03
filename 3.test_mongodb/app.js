var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test'); // 기본 설정에 따라 포트가 상이 할 수 있습니다.
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log("mongo db connection OK.");
});




/* Schema 선언 */
var testSchema = mongoose.Schema({
	name: String
});


/* add methods*/
testSchema.methods.speak = function () {
	var greeting = this.name
	? "Meow name is " + this.name
	: "I don't have a name"
	console.log(greeting);
}




/* Model 선언 */
var TestModel = mongoose.model("TestModel", testSchema);

/* Create Instance */
//var testIns = new TestModel({ name: "testIns" });
//console.log(testIns.name); // "testIns"

/* use methods */
var testIns = new TestModel({ name: "testIns" });
testIns.speak(); /* "Meow name is testIns" */

/* save document in mongodb */
testIns.save(function(err, testIns){
	if(err) return console.error(err);
	testIns.speak();
});
/* find document in mongodb */
TestModel.find(function(err, models){
	if(err) return console.error(err);
	console.log(models);
});
/* find document in mongodb */
TestModel.find({name:/^testIns/});
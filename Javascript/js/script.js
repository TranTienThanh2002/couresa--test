var company =new Object();
company.name ="Facebook";
company.ceo=new Object();
company.ceo.firstName ="Thanh";

console.log(company);
console.log(company["name"]);

var facebook= {
	name: "Facebook",
	ceo: {
		firstName:"Thanh",
		favColor: "Red",
	},
	"stock of company": 110
};
 
var company = {}

console.log(facebook.ceo.firstName);
//array
var names2=["thanh","Thanh","Tien"];

var myObj={
	name: "Thanh",
	course: "HTML/CSS/JS",
	platform: "Coursera"
};
for (var prop in myObj) {
	console.log(prop+ ":"+myObj[prop])	;
}
names2.greeting="Hi!";

for(var name in names2)
{
	console.log("Hello " + names2[name]);
}
//closure
function makeMultiplier(multipler) {
	// multipler=2

	function b() {
		// body...
		console.log("multipler is: " + multipler);
	}
	b();
	return {
		function(x) {
			return multipler*x;
		}
	};
}
var doubleAll =makeMultiplier(2);
console.log(doubleAll(20));
//Fake Namespaces

var name = "Thanh";
function sayHi(){
	console.log("Hello "+ name);
}
var thanhGreeter = {};
thanhGreeter.name="Thanh1";
thanhGreeter.sayHi = function(){
	console.log("Hello "+thanhGreeter.name);
}

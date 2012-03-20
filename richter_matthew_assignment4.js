// SDI 1203 - Project 4
// March 19, 2012
// Matthew Richter

// Matthew's module-pattern library
var matthewLib 	= function(){
	// private methods
	var phone = [];
	var checkPhone 		= function(number){
		phone.push(number);
	};
		
	var eamil,
		webAddress;
	// public methods	
	var email 			= function(){};
	var webAddress 		= function(){};
	var titleCase		= function(){};
	var stringSeperator	= function(){};
	var money			= function(){};
	var fuzzyMatch		= function(){};
	var differenceDays	= function(){};
	var stringNumber	= function(){};
	var smallBigArray	= function(){};
	var totalArray		= function(){};
	var arrayObjects	= function(){};
	return {
		checkPhone:			checkPhone,
		email:				email,
		webAddress:			webAddress,
		titleCase:			"",
		stringSeperator:	"",
		money:				0,
		fuzztMatch:			0,
		differenceDays:		0,
		stringNumber:		0,
		smallBigArray:		0,
		totalArray:			0,
		arrayObjects:		[]
	};
};
var lib = matthewLib();
matthewLib.checkPhone("number");
var email = matthewLib.email("matt@gorichter.com");
var webAddress = matthewLib.webAddress("http://bbtmobi.com");
output(lib);
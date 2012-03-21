// SDI 1203 - Project 4
// March 19, 2012
// Matthew Richter
var output = function(message){ console.log (message);};
// Matthew's module-pattern library
var matthewLib 	= function(){
	// private methods
	var phoneNumber = "";
	var checkPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
		if (checkPhone.test(input)) {
    var test =
        subjectString.replace(regexObj, "($1) $2-$3");
        phoneNumber.push(test);
			} else {
    		test = "Invalid phone number";
    		phoneNumber.push(test);

}

/*
var regexObj = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

if (regexObj.test(subjectString)) {
    var formattedPhoneNumber =
        subjectString.replace(regexObj, "($1) $2-$3");
} else {
    // Invalid phone number
}


*/
	
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
		phoneNumber:		phoneNumber,
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
//var lib = matthewLib();
var phone = matthewLib();
phone.checkPhone.test(345-342-5434);
//var email = matthewLib.email("matt@gorichter.com");
//var webAddress = matthewLib.webAddress("http://bbtmobi.com");
output(phone.phoneNumber);

// this is the JavaScript that I found at http://blog.stevenlevithan.com/archives/validate-phone-number to help me with my phone constructor
var checkNumber = function (number) {
	var testNumber = number,
		regexObj = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
		result = (regexObj.test(testNumber));


	return {
		result:		result
	
	};
};

var numberTest = checkNumber("8744635475");
output(numberTest);

// http://www.zparacha.com/validate-email-address-using-javascript-regular-expression/#.T2k3n47mb5I
var checkEmail = function (email) {  
   	var testEmail = email,
   		regexObj = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 
   		result = (regexObj.test(email));

	return {
		result:		result
	};
};

var emailTest = checkEmail("matt@gorichter.com");
output(emailTest);

// http://snippets.dzone.com/posts/show/452
var checkUrl = function (url) {
	var urlTest = url,
		regexObj = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
		result = (regexObj.test(url));

	return {
		result:		result
	};
};

var urlTest = checkUrl("http://www.w3schools.com/jsref/jsref_obj_regexp.asp");
output(urlTest);














































// SDI 1203 - Project 4
// March 19, 2012
// Matthew Richter
var output = function(message){ console.log (message);};
// Matthew's module-pattern library
/*
---online JavaScript help references---
checkNumber 
http://blog.stevenlevithan.com/archives/validate-phone-number

checkEmail
http://www.zparacha.com/validate-email-address-using-javascript-regular-expression/#.T2k3n47mb5I 

checkUrl
http://snippets.dzone.com/posts/show/452

*/
var validationLibrary = (function() {
	var validatePhoneNumber 	= function (testNumber) {
		var regexObj = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		return (regexObj.test(testNumber));
	};
	var validateEmail 			= function (testEmail) {
		var regexObj = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
   		return (regexObj.test(testEmail));
	};
	var validateUrl 			= function (testUrl) {
		var regexObj = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
		return (regexObj.test(testUrl));
	};
	return {
		checkPhoneNumber:	function (testNumber) {
								output("Is the phone number " + testNumber + " valid? " + validatePhoneNumber (testNumber));
		},
		checkEmail:			function (testEmail) {  
   								output("Is the email address " + testEmail + " valid? " + validateEmail (testEmail));
   		},
   		checkUrl:			function (testUrl) {
								output("Is the URL " + testUrl + " valid? " + validateUrl (testUrl));
		}
	};
})();

validationLibrary.checkPhoneNumber("8746435475");
validationLibrary.checkEmail("matt@gorichter.com");
validationLibrary.checkUrl("http://www.w3schools.com/jsref/jsref_obj_regexp.asp");// currently this regexObj needs tweaking - i t's not working 
/*
var mattLib 	= function(){
	var checkNumber = function (number) {
	var testNumber = number,
		regexObj = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
		numberResult = (regexObj.test(testNumber));
		//output(numberResult);
		return numberResult;
	};
	checkNumber();
	var checkEmail = function (email) {  
   	var testEmail = email,
   		regexObj = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 
   		emailResult = (regexObj.test(email));
		//output(emailResult);
		return emailResult;
	};
	checkEmail();
	var checkUrl = function (url) {
	var urlTest = url,
		regexObj = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
		urlResult = (regexObj.test(url));
		//output(urlResult);
		return urlResult;
	};
	checkUrl();
	var checkTitleCase			= function () {};
	var checkStringSeperator	= function () {};
	var checkMoney				= function () {};
	var checkFuzzyMatch			= function () {};
	var checkDifferenceDays		= function () {};
	var checkStringNumber		= function () {};
	var checkSmallBigArray		= function () {};
	var checkTotalArray			= function () {};
	var checkArrayObjects		= function () {};
	return {
		getNumber:					checkNumber,
		getEmail:					checkEmail,
		getUrl:						checkUrl,
		checkTitleCase:				"",
		checkStringSeperator:		"",
		checkMoney:					0,
		checkFuzzyMatch:			0,
		checkDifferenceDays:		0,
		checkStringNumber:			0,
		checkSmallBigArray:			0,
		checkTotalArray:			0,
		checkArrayObjects:			[]
	};
};


var resultMattLib = mattLib();
resultMattLib.getNumber(34534225434);
resultMattLib.getEmail("matt@gorichter.com");
resultMattLib.getUrl("http://www.w3schools.com/jsref/jsref_obj_regexp.asp");
output(resultMattLib);
output(resultMattLib.getNumber());
output(resultMattLib.getEmail());
output(resultMattLib.getUrl());

*/




/*
//var lib = matthewLib();
//var email = matthewLib.email("matt@gorichter.com");
//var webAddress = matthewLib.webAddress("http://bbtmobi.com");


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


var pirateShip = function (name){
	var cargoHold = [];
	var cargoLoad = function (item) {
		if (item !== "elephants") {
			cargoHold.push(item);
		} else {
			output("Not allowed!");
		}
	
	};
	var cargoList = function () {
		for ( var n = 0; n < cargoHold.length; n++) {
		output(name + "cargo " + n + ":" + cargoHold[n] + ".");
		}
	
	};
	var getName = function () {return name;};
	return {
		name:		getName,
		cargoLoad:	cargoLoad,
		cargoList:	cargoList
	
	
	};

};

var marauder = pirateShip("Matt the Merciless");
marauder.cargoLoad("food");
marauder.cargoLoad("drink");
output(marauder);
marauder.cargoList();


var feedPirate = function (pirateName, food) {
	output("Gave some " + food + " to the pirate " + pirateName);
	var feedMonkey = function (monkeyName, food) {
		output("Gave some " + food + " to " + monkeyName);
	};
	feedMonkey("Baron", "dried beef");
	feedMonkey("Bernie", "soy beans");
	
	output("Boy " + pirateName + " eats a lot of" + food);
};

feedPirate("Matt the Merciless!", " sushi");


//output("Boy " + pirateName + " eats a lot of" + food);


^        # Assert position at the beginning of the string.
\(       # Match a literal "("...
  ?      #   between zero and one time.
(        # Capture the enclosed match to backreference 1...
  [0-9]  #   Match a digit...
    {3}  #     exactly three times.
)        # End capturing group 1.
\)       # Match a literal ")"...
  ?      #   between zero and one time.
[-. ]    # Match one character from the set "-. "...
  ?      #   between zero and one time.
⋯        # [Match the remaining digits and separator.]
$        # Assert position at the end of the string.
*/

/* Comment:  

*/

// Define & set Global variables for this JS file

/*
var    temp
;

var validationLibrary = (function(){
        
        //Does the argument follow the 111-222-3333 pattern
       var validatePhoneNumber = function (phoneNum) {
            
        }; //end validatePhoneNumber function

        return {
            checkPhoneNumber: function(phoneNum){
                console.log("Phone Number: " + phoneNum);
                console.log("Is the phone number valid? " + validatePhoneNumber (phoneNum));
        },       
})(); 
 
// MAIN BODY    
validationLibrary.checkPhoneNumber("123-456-7890");


//One Global object exposed. 
var SearchEngine = (function ( ) { 
    //Private Method.
    var luckyAlgo = function ( ){
        //create one random number.
        return Math.floor(Math.random()*11);
    }
    //Returning the object
    return {
        //privileged method.
        getYourLuckyNumber : function ( ){
            //Has access to its private method because of closure.
            console.log(luckyAlgo());        
        }
    } 
} ) ( );//Self executing method.

SearchEngine.getYourLuckyNumber();
*/































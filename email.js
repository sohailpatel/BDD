var email,passowrd,security,upperemail;
beforeAll(function() {
	security=["food","cricket","football","reading","poetry","dance","singing"];	
	
  });

afterAll(function() {
    	email="";
	password="";
	security=[];
	upperemail="";
  });




describe("Check Email ID validation",function(){
email=prompt("Enter Email id");
	it("Contains @ symbol",function(){
		var emailregexp=/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/;
		upperemail=email.toUpperCase();	
		var checkemail=emailregexp.test(upperemail);
		expect(checkemail).toBeTruthy();
	});
});
describe("Check Password",function(){

password=prompt("Enter Password");
	it("Checking not null",function(){
		expect(password).not.toBeNull();
	});
	it("Checking length is greater than 8",function(){
		var length=password.length;
		expect(length).toBeGreaterThan(8);
	});
	it("Contains 1 Uppercase 1 Lowercase 1 Numeric 1 Special character",function(){
		var passwordregexp=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[*&^%$#@!])[A-Za-z0-9*&%$#@]*$/;
		var checkpassword=passwordregexp.test(password);
		expect(checkpassword).toBeTruthy();
	});
});

describe("Select security option when password is lost",function(){
	
	
	it("Clicked which is displayed",function(){
		expect(security).toContain("cricket");
		expect(security).toContain("singing");
	});
});

describe("My Custom Matcher", function() {
  
  beforeAll(function() {

    jasmine.addMatchers({
          toBeLarge: function() {
		return {
			compare: function(actual){
				return{
					pass: (actual>100)
					};
				}
			};   	
          	}
      	});
  });

  afterAll(function() {
    
  });

  it("Checks if number is greater than 100", function() {
number=prompt("Enter one number");
	expect(number).toBeLarge();
    
  });

  
});

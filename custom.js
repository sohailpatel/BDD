


describe("A Custom Matcher", function() {
  
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
	expect(1500).toBeLarge();
    
  });

  
});






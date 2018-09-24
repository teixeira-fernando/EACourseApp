describe("Going to write first test", function(){
    it("should pass without any issue", function(){
        let a = 12
        expect(a).toBe(12)
    });
    it("should not pass as the values are undefined", function(){
        let u=1;
        expect(u).toBeDefined("Not defined")
    });
    it("without any expectation", function(){

    });
})
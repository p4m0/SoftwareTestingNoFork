// node 12 and up
import chai from "chai"
import eq from "../src/eq.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("")
const expect = chai.expect


describe("#equals", () => {

    it("int and int", () =>{
        expect(eq(Number(1),Number(1))).to.be.true
    });

     it("float and int", () =>{
        expect(eq(Number(2.1),Number(2))).to.be.false
    });

    it("neagtive int and int", () =>{
        expect(eq(Number(-3),Number(3))).to.be.false
    });

    //string = 16-bit unsigned integer
    it("int and string of same int", () =>{
        expect(eq(Number(4),String(4))).to.be.true
    });

    it("+Infinity and -Infinity", () =>{
        expect(eq(Number(+Infinity),Number(-Infinity))).to.be.false
    });
    //additional tests
    //TODO

})

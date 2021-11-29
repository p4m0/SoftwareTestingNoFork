// node 12 and up
import chai from "chai"
import divide from "../src/divide.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("")
const expect = chai.expect

//divisions dont work correctly, investigate how or why. DO NOT TOUCH ANYTHING
// THAT IS INSIDE /SRC
describe("#divide", () => {

    it("int and int", () =>{
        expect(divide(6,4)).to.equal(1.5)
    });

    it("int and int", () =>{
        expect(divide(Number(6),Number(12))).to.equal(0.5)
    });

    //Everything below 1 gets rounded to 1, add to document
    it("int and int 2", () =>{
        expect(divide(Number(10),Number(2))).to.equal(5)
    });

    it("int and int zero", () =>{
        expect(divide(Number(1),Number(0))).to.be.NaN
    });

    //additonal tests
    it("null and nan", () =>{
        expect(divide(null,NaN)).to.be.NaN
    });

    it("undefined and int", () =>{
        expect(divide(undefined,Number(1))).to.equal(Number(1))
    });

    it("int and null", () =>{
        expect(divide(Number(1),null)).to.be.NaN
    });

    it("NaN and undefined", () =>{
        expect(divide(NaN, undefined)).to.be.NaN
    });

    it("array and NaN", () =>{
        expect(divide(new Array(),NaN)).to.be.NaN
    });

    it("+Infinity and undefined", () =>{
        expect(divide(+Infinity,undefined)).to.equal(+Infinity)
    });

    //By normal logic inf/1 = infinity, however if one number is "valid" and other
    //isn't, the function will return the valid number
    it("-Infinity and int", () =>{
        expect(divide(-Infinity,Number(1))).to.equal(1)
    });


})

// node 12 and up
import chai from "chai"
import toNumber from "../src/toNumber.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("")
const expect = chai.expect


describe("#toNumber", () => {
    it("int like number", () =>{
        expect(toNumber(Number(1))).to.equal(Number(1))
    });

    it("number like string", () =>{
        expect(toNumber(Number(2.2))).to.equal(Number(2.2))
    });

    it("float like number", () =>{
        expect(toNumber(String(3.3))).to.equal(Number(3.3))
    });

    it("-Infinity", () =>{
        expect(toNumber(-Infinity)).to.equal(Number(-Infinity))
    });

    it("+Infinity", () =>{
        expect(toNumber(+Infinity)).to.equal(Number(+Infinity))
    });

    it("NaN", () =>{
        expect(toNumber(NaN)).to.be.NaN
    });
    //true = 1, false = 0
    it("bool", () =>{
        expect(toNumber(Boolean(true))).to.equal(Number(1))
    });

    it("null", () =>{
        expect(toNumber(null)).to.equal(0)
    });

    it("undefined", () =>{
        expect(toNumber(undefined)).to.be.NaN
    });

    it("empty object", () =>{
        expect(toNumber(Object())).to.be.NaN
    });

    it("object of type number", () =>{
        expect(toNumber(Object(1))).to.equal(Number(1))
    });

    it("empty symbol", () =>{
        expect(toNumber(Symbol())).to.be.NaN
    });

    it("symbol of type number", () =>{
        expect(toNumber(Symbol(1))).to.be.NaN
    });

    it("array", () =>{
        expect(toNumber(Array())).to.equal(0)
    });

    it("array of size 3 with undefined inside", () =>{
        expect(toNumber(Array(3))).to.be.NaN
    });

    it("function as parameter", () =>{
        expect(toNumber(function (x) { return x; })).to.be.NaN
    });

    it("number 0 as parameter", () =>{
        expect(toNumber(Number(0))).to.be.equal(0)
    });
    
})

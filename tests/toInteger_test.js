// node 12 and up
import chai from "chai"
import toInteger from "../src/toInteger.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("")
const expect = chai.expect


describe("#toInteger", () => {

    // it("testing string equals string", () =>{
    //     expect(toInteger(1)).to.equal(1)
    // });
    it("Int like number", () =>{
        expect(toInteger(1)).to.equal(1)
    });
    it("Float like number", () =>{
        expect(toInteger(2.2)).to.equal(2)
    });
    it("String", () =>{
        expect(toInteger("3.3")).to.equal(3)
    });
    it("+Infinity", () =>{
        expect(toInteger(+Infinity)).to.equal(Number.MAX_VALUE)
    });
    it("-Infinity", () =>{
        expect(toInteger(-Infinity)).to.equal(-Number.MAX_VALUE)
    });
    it("NaN", () =>{
        expect(toInteger(NaN)).to.equal(0)
    });

    it("bool", () =>{
        expect(toInteger(Boolean(true))).to.equal(Number(1))
    });
    it("null", () =>{
        expect(toInteger(null)).to.equal(0)
    });

    it("undefined", () =>{
        expect(toInteger(undefined)).to.equal(0)
    });
    it("empty object", () =>{
        expect(toInteger(Object())).to.equal(0)
    });

    it("object of type number", () =>{
        expect(toInteger(Object(1))).to.equal(Number(1))
    });

    it("empty symbol", () =>{
        expect(toInteger(Symbol())).to.equal(0)
    });

    it("symbol of type number", () =>{
        expect(toInteger(Symbol(1))).to.equal(0)
    });

    it("array", () =>{
        expect(toInteger(Array())).to.equal(0)
    });

    it("array of size 3 with undefined inside", () =>{
        expect(toInteger(Array(3))).to.equal(0)
    });
})

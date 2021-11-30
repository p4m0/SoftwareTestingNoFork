// node 12 and up
import chai from "chai"
import toFinite from "../src/toFinite.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("")
const expect = chai.expect


describe("#toFinite", () => {

    it("Int like number", () =>{
        expect(toFinite(Number(1))).to.equal(Number(1))
    });
    it("Number like string", () =>{
        expect(toFinite(Number(2.2))).to.equal(Number(2.2))
    });

    it("Float like number", () =>{
        expect(toFinite(String(3.3))).to.equal(Number(3.3))
    });
    it("-Infinity", () =>{
        expect(toFinite(-Infinity)).to.equal(-Number.MAX_VALUE)
    });

    it("+Infinity", () =>{
        expect(toFinite(+Infinity)).to.equal(Number.MAX_VALUE)
    });

    it("NaN", () =>{
        expect(toFinite(NaN)).not.to.be.NaN
    });
    //true = 1, false = 0
    it("bool", () =>{
        expect(toFinite(Boolean(true))).to.equal(Number(1))
    });

    it("null", () =>{
        expect(toFinite(null)).to.equal(0)
    });

    it("undefined", () =>{
        expect(toFinite(undefined)).not.to.be.NaN
    });

    it("empty object", () =>{
        expect(toFinite(Object())).not.to.be.NaN
    });

    it("object of type number", () =>{
        expect(toFinite(Object(1))).to.equal(Number(1))
    });

    it("empty symbol", () =>{
        expect(toFinite(Symbol())).not.to.be.NaN
    });

    it("symbol of type number", () =>{
        expect(toFinite(Symbol(1))).not.to.be.NaN
    });
    it("symbol of type number", () =>{
        expect(toFinite(Symbol("123"))).not.to.be.NaN
    });
    it("array", () =>{
        expect(toFinite(Array())).to.equal(0)
    });

    it("array of size 3 with undefined inside", () =>{
        expect(toFinite(Array(3))).not.to.be.NaN
    });
})

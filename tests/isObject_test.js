// node 12 and up
import chai from "chai"
import isObject from "../src/isObject.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("")
const expect = chai.expect


describe("#isObject", () => {

    it("int like number", () =>{
        expect(isObject(1)).to.be.false
    });
    it("float like number", () =>{
        expect(isObject(2.2)).to.be.false
    });
    it("string", () =>{
        expect(isObject("3.3")).to.be.false
    });
    it("+Infinity", () =>{
        expect(isObject(+Infinity)).to.be.false
    });
    it("-Infinity", () =>{
        expect(isObject(-Infinity)).to.be.false
    });
    it("NaN", () =>{
        expect(isObject(NaN)).to.be.false
    });
    it("bool true", () =>{
        expect(isObject(true)).to.be.false
    });
    it("null", () =>{
        expect(isObject(null)).to.be.false
    });
    it("undefined", () =>{
        expect(isObject(undefined)).to.be.false
    });
    it("Object()", () =>{
        expect(isObject(Object())).to.be.true
    });
    it("Object(1)", () =>{
        expect(isObject(Object(1))).to.be.true
    });
    it("Object(null)", () =>{
        expect(isObject(Object(null))).to.be.true
    });
    it("Object(undefined)", () =>{
        expect(isObject(Object(undefined))).to.be.true
    });
    it("Symbol()", () =>{
        expect(isObject(Symbol())).to.be.false
    });
    it("Symbol(1)", () =>{
        expect(isObject(Symbol(1))).to.be.false
    });
    it("Array()", () =>{
        expect(isObject(Array())).to.be.true
    });
    it("Array(3)", () =>{
        expect(isObject(Array(3))).to.be.true
    });

})

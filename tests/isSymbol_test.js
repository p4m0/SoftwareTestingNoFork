// node 12 and up
import chai from "chai"
import isSymbol from "../src/isSymbol.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("")
const expect = chai.expect


describe("#isSymbol", () => {

    it("Int like number", () =>{
        expect(isSymbol(1)).to.be.false
    });
    it("Float like number", () =>{
        expect(isSymbol(2.2)).to.be.false
    });
    it("String", () =>{
        expect(isSymbol("3.3")).to.be.false
    });
    it("+Infinity", () =>{
        expect(isSymbol(+Infinity)).to.be.false
    });
    it("-Infinity", () =>{
        expect(isSymbol(-Infinity)).to.be.false
    });
    it("NaN", () =>{
        expect(isSymbol(NaN)).to.be.false
    });
    it("bool true", () =>{
        expect(isSymbol(true)).to.be.false
    });
    it("Null", () =>{
        expect(isSymbol(null)).to.be.false
    });
    it("undefined", () =>{
        expect(isSymbol(undefined)).to.be.false
    });
    it("Object()", () =>{
        expect(isSymbol(Object())).to.be.false
    });
    it("Object(1)", () =>{
        expect(isSymbol(Object(1))).to.be.false
    });
    it("Object(null)", () =>{
        expect(isSymbol(Object(null))).to.be.false
    });
    it("Object(undefined)", () =>{
        expect(isSymbol(Object(undefined))).to.be.false
    });
    it("Symbol()", () =>{
        expect(isSymbol(Symbol())).to.be.true
    });
    it("Symbol(1)", () =>{
        expect(isSymbol(Symbol(1))).to.be.true
    });
    it("Symbol(null)", () =>{
        expect(isSymbol(Symbol(null))).to.be.true
    });
    it("Symbol(undefined)", () =>{
        expect(isSymbol(Symbol(undefined))).to.be.true
    });
    it("Array()", () =>{
        expect(isSymbol(Array())).to.be.false
    });
    it("Array(3)", () =>{
        expect(isSymbol(Array(3))).to.be.false
    });
})

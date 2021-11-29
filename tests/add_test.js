// node 12 and up
import chai from "chai"
import add from "../src/add.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("")
const expect = chai.expect


describe("#add", () => {

    it("int and int", () =>{
        expect(add(Number(1),Number(1))).to.equal(Number(2))
    });

    it("float and float", () =>{
        expect(add(Number(1.1),Number(1.1))).to.equal(Number(2.2))
    });

    it("negative float and positive float", () =>{
        expect(add(Number(-1.1),Number(1.1))).to.equal(Number(0))
    });

    it("negative float and negative float", () =>{
        expect(add(Number(-1.1),Number(-1.1))).to.equal(Number(-2.2))
    });

    //additional tests
    it("null and nan", () =>{
        expect(add(null,NaN)).to.be.NaN
    });

    it("undefined and int", () =>{
        expect(add(undefined,Number(1))).to.equal(Number(1))
    });

    it("int and null", () =>{
        expect(add(Number(1),null)).to.equal(Number(1))
    });

    it("NaN and undefined", () =>{
        expect(add(NaN, undefined)).to.be.NaN
    });

    it("array and NaN", () =>{
        expect(add(new Array(),NaN)).to.be.NaN
    });

    it("+Infinity and undefined", () =>{
        expect(add(+Infinity,undefined)).to.equal(+Infinity)
    });

    it("-Infinity and int", () =>{
        expect(add(-Infinity,Number(1))).to.equal(-Infinity)
    });

})

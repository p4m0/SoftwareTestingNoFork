// node 12 and up
import chai from "chai"
import toString from "../src/toString.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("")
const expect = chai.expect


describe("#toString", () => {

    // it("testing string equals string", () =>{
    //     expect(toString("a")).to.equal("a")
    // });
    it("int like number", () =>{
        expect(toString(Number(1))).to.equal("1")
    });

    it("number like string", () =>{
        expect(toString(Number(2.2))).to.equal("2.2")
    });

    it("float like number", () =>{
        expect(toString("3.3")).to.equal("3.3")
    });

    it("-Infinity", () =>{
        expect(toString("-Infinity")).to.equal("-Infinity")
    });

    it("+Infinity", () =>{
        expect(toString('+Infinity')).to.equal("+Infinity")
    });

    it("NaN", () =>{
        expect(toString('NaN')).to.equal('NaN')
    });
    // //true = 1, false = 0
    it("bool", () =>{
        expect(toString(Boolean(true))).to.equal('true')
    });

    it("null", () =>{
        expect(toString(null)).to.equal('null')
    });

    it("undefined", () =>{
        expect(toString(undefined)).to.equal('undefined')
    });

    it("empty object", () =>{
        expect(toString(Object())).to.equal('[object Object]')
    });

    it("object of type number", () =>{
        expect(toString(Object(1))).to.equal('1')
    });

    it("empty symbol", () =>{
        expect(toString(Symbol())).to.equal('Symbol()')
    });

    it("symbol of type number", () =>{
        expect(toString(Symbol(1))).to.equal('Symbol(1)')
    });
    
    it("array", () =>{
        expect(toString(Array())).to.equal('')
    });

    it("array of size 3 with undefined inside", () =>{
        expect(toString(Array(3))).to.equal(',,')
    });

    it("number 0 as parameter", () =>{
        expect(toString(0)).to.equal("0")
    });
})

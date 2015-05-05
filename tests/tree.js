'use strict';
var assert = require('assert');
var fs = require('fs');
var path = require('path');
var instrument = require('../');

describe('the module', function () {
	it('should have a constructor', function () {
		assert(instrument.Instrumentor);
		var i = new instrument.Instrumentor();
		assert (typeof i === 'object');
		assert(i.names);
		assert(i.names.statement);
		assert(i.names.expression);
		assert(i.names.block);
		assert(i.names.intro);
		assert(i.names.extro);
	});
	it('should be a function', function () {
		assert.equal(typeof instrument, 'function');
	});
	it('should have a promise', function () {
		assert.equal(typeof instrument.traceurPromise.then, 'function');
	});
});
describe('the es6 parser', function () {
	it('should return a promise', function () {
		var i = new instrument.Instrumentor('var a;');
		assert(typeof i.instrumentedSource.resolved !== undefined);
		assert(typeof i.instrumentedSource.then === 'function');
	});
	it('should create a parse tree', function (done) {
		var i = new instrument.Instrumentor('var a;');
		i.instrumentedSource.then(function () {
			assert(i.tree);
			done();
		});
	});
	it('should generate code', function (done) {
		var i = new instrument.Instrumentor('var a;');
		assert.equal('object', typeof i.instrumentedSource);
		i.instrumentedSource.then(function () {
			assert.equal('string', typeof i.instrumentedSource);
			done();
		});
	});
	it('should be able to use the original promise', function (done) {
		var i = new instrument.Instrumentor('var a;');
		assert.equal('object', typeof i.instrumentedSource);
		instrument.traceurPromise.then(function () {
			assert.equal('string', typeof i.instrumentedSource);
			done();
		});
	});
});
describe('the tree instrumentor', function () {
	it('should put a statement call in front of each line', function (done) {
		var src = ['var a;', 'a = 1;'];
		var i = new instrument.Instrumentor(src.join('\n'));
		instrument.traceurPromise.then(function () {
			var statNum = 0;
			var iSrc = '' +
				i.names.statement + '(0);\n' +
				'var ' + i.names.expression + '(0), a;\n' +
				i.names.statement + '(1);\n' +
				i.names.expression + '(1), ' + i.names.expression + '(2), a = ' + i.names.expression + '(3), 1;\n';
			assert.equal(iSrc, i.instrumentedSource);
			done();
		});
	});
	it('should put a statement call in front of each line for ES6 code', function (done) {
		var src = ['import {a} from \'thingy\';', 'export var a = 1 || 2;', 'export class Minky {\n  constructor() {}\n}'];
		var i = new instrument.Instrumentor(src.join('\n'));
		instrument.traceurPromise.then(function () {
			var statNum = 0;
			var iSrc = i.names.statement + '(0);\n' +
					'import {a} from \'thingy\';\n' +
					i.names.statement + '(1);\n' +
					'export var' + i.names.expression + '(0), a = ' + i.names.expression + '(1),' + i.names.expression + '(2), 1 ||' + i.names.expression + '(3), 2;\n' +
					i.names.statement + '(2);\n' +
					'export class Minky {\n' +
					'  ' + i.names.statement + '(3);\n' +
					'  constructor() {\n' +
					'    ' + i.names.block + '(0);\n' +
					'  }\n' +
					'}\n';
			i.instrumentedSource = i.instrumentedSource.replace(/ /gi, '');
			iSrc = iSrc.replace(/ /gi, '');
			// console.log(iSrc);
			// console.log(i.instrumentedSource);
			assert.equal(iSrc, i.instrumentedSource);
			done();
		});
	});
	it('should add statement calls, block calls and expression calls. Should also collect the nodes for each', function (done) {
		var src = ['if (true) {', 'while (true) {', 'a = 1;\n}\n}'];
		var i = new instrument.Instrumentor(src.join('\n'));
		instrument.traceurPromise.then(function () {
			var statNum = 0;
			var blockNum = 0;
			var iSrc = ('' +
				i.names.statement + '(0);\n' +
				'if (' + i.names.expression + '(0), true) {\n' +
				i.names.block + '(0);\n' +
				i.names.statement + '(1);\n' +
				'while(' + i.names.expression + '(1), true) {\n' +
				i.names.block + '(1);\n' +
				i.names.statement + '(2);\n' +
				i.names.expression + '(2),' + i.names.expression + '(3),a = ' + i.names.expression + '(4),1;\n' +
				'}\n}\n').replace(/ /gi, '');
			i.instrumentedSource = i.instrumentedSource.replace(/ /gi, '');
			// console.log(iSrc);
			// console.log(i.instrumentedSource);
			assert.equal(iSrc, i.instrumentedSource);
			assert.equal(i.blockList.length, 2);
			assert.equal(i.expressionList.length, 5);
			assert.equal(i.statementList.length, 3);
			done();
		});
	});
});

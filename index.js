/*
 * Copyright (C) 2015 Dylan Barrell
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */
var Promise = require('rsvp').Promise;
var EventEmitter = require('events').EventEmitter;

var System = require('systemjs');
System.config({
    paths: {
        'traceur/*': 'traceur/*'
    }
});


var javascript = {};
javascript.Syntax = {
  ANNOTATION:'ANNOTATION',
  ANON_BLOCK:'ANON_BLOCK',
  ARGUMENT_LIST:'ARGUMENT_LIST',
  ARRAY_COMPREHENSION:'ARRAY_COMPREHENSION',
  ARRAY_LITERAL_EXPRESSION:'ARRAY_LITERAL_EXPRESSION',
  ARRAY_PATTERN:'ARRAY_PATTERN',
  ARRAY_TYPE:'ARRAY_TYPE',
  ARROW_FUNCTION_EXPRESSION:'ARROW_FUNCTION_EXPRESSION',
  ASSIGNMENT_ELEMENT:'ASSIGNMENT_ELEMENT',
  AWAIT_EXPRESSION:'AWAIT_EXPRESSION',
  BINARY_EXPRESSION:'BINARY_EXPRESSION',
  BINDING_ELEMENT:'BINDING_ELEMENT',
  BINDING_IDENTIFIER:'BINDING_IDENTIFIER',
  BLOCK:'BLOCK',
  BREAK_STATEMENT:'BREAK_STATEMENT',
  CALL_EXPRESSION:'CALL_EXPRESSION',
  CALL_SIGNATURE:'CALL_SIGNATURE',
  CASE_CLAUSE:'CASE_CLAUSE',
  CATCH:'CATCH',
  CLASS_DECLARATION:'CLASS_DECLARATION',
  CLASS_EXPRESSION:'CLASS_EXPRESSION',
  COMMA_EXPRESSION:'COMMA_EXPRESSION',
  COMPREHENSION_FOR:'COMPREHENSION_FOR',
  COMPREHENSION_IF:'COMPREHENSION_IF',
  COMPUTED_PROPERTY_NAME:'COMPUTED_PROPERTY_NAME',
  CONDITIONAL_EXPRESSION:'CONDITIONAL_EXPRESSION',
  CONSTRUCT_SIGNATURE:'CONSTRUCT_SIGNATURE',
  CONSTRUCTOR_TYPE:'CONSTRUCTOR_TYPE',
  CONTINUE_STATEMENT:'CONTINUE_STATEMENT',
  COVER_FORMALS:'COVER_FORMALS',
  COVER_INITIALIZED_NAME:'COVER_INITIALIZED_NAME',
  DEBUGGER_STATEMENT:'DEBUGGER_STATEMENT',
  DEFAULT_CLAUSE:'DEFAULT_CLAUSE',
  DO_WHILE_STATEMENT:'DO_WHILE_STATEMENT',
  EMPTY_STATEMENT:'EMPTY_STATEMENT',
  EXPORT_DECLARATION:'EXPORT_DECLARATION',
  EXPORT_DEFAULT:'EXPORT_DEFAULT',
  EXPORT_SPECIFIER:'EXPORT_SPECIFIER',
  EXPORT_SPECIFIER_SET:'EXPORT_SPECIFIER_SET',
  EXPORT_STAR:'EXPORT_STAR',
  EXPRESSION_STATEMENT:'EXPRESSION_STATEMENT',
  FINALLY:'FINALLY',
  FOR_IN_STATEMENT:'FOR_IN_STATEMENT',
  FOR_OF_STATEMENT:'FOR_OF_STATEMENT',
  FOR_ON_STATEMENT:'FOR_ON_STATEMENT',
  FOR_STATEMENT:'FOR_STATEMENT',
  FORMAL_PARAMETER:'FORMAL_PARAMETER',
  FORMAL_PARAMETER_LIST:'FORMAL_PARAMETER_LIST',
  FORWARD_DEFAULT_EXPORT:'FORWARD_DEFAULT_EXPORT',
  FUNCTION_BODY:'FUNCTION_BODY',
  FUNCTION_DECLARATION:'FUNCTION_DECLARATION',
  FUNCTION_EXPRESSION:'FUNCTION_EXPRESSION',
  FUNCTION_TYPE:'FUNCTION_TYPE',
  GENERATOR_COMPREHENSION:'GENERATOR_COMPREHENSION',
  GET_ACCESSOR:'GET_ACCESSOR',
  IDENTIFIER_EXPRESSION:'IDENTIFIER_EXPRESSION',
  IF_STATEMENT:'IF_STATEMENT',
  IMPORT_CLAUSE_PAIR:'IMPORT_CLAUSE_PAIR',
  IMPORT_DECLARATION:'IMPORT_DECLARATION',
  IMPORT_SPECIFIER:'IMPORT_SPECIFIER',
  IMPORT_SPECIFIER_SET:'IMPORT_SPECIFIER_SET',
  IMPORTED_BINDING:'IMPORTED_BINDING',
  INDEX_SIGNATURE:'INDEX_SIGNATURE',
  INTERFACE_DECLARATION:'INTERFACE_DECLARATION',
  LABELLED_STATEMENT:'LABELLED_STATEMENT',
  LITERAL_EXPRESSION:'LITERAL_EXPRESSION',
  LITERAL_PROPERTY_NAME:'LITERAL_PROPERTY_NAME',
  MEMBER_EXPRESSION:'MEMBER_EXPRESSION',
  MEMBER_LOOKUP_EXPRESSION:'MEMBER_LOOKUP_EXPRESSION',
  METHOD_SIGNATURE:'METHOD_SIGNATURE',
  MODULE:'MODULE',
  MODULE_SPECIFIER:'MODULE_SPECIFIER',
  NAME_SPACE_EXPORT:'NAME_SPACE_EXPORT',
  NAME_SPACE_IMPORT:'NAME_SPACE_IMPORT',
  NAMED_EXPORT:'NAMED_EXPORT',
  NEW_EXPRESSION:'NEW_EXPRESSION',
  OBJECT_LITERAL_EXPRESSION:'OBJECT_LITERAL_EXPRESSION',
  OBJECT_PATTERN:'OBJECT_PATTERN',
  OBJECT_PATTERN_FIELD:'OBJECT_PATTERN_FIELD',
  OBJECT_TYPE:'OBJECT_TYPE',
  PAREN_EXPRESSION:'PAREN_EXPRESSION',
  POSTFIX_EXPRESSION:'POSTFIX_EXPRESSION',
  PREDEFINED_TYPE:'PREDEFINED_TYPE',
  PROPERTY_METHOD_ASSIGNMENT:'PROPERTY_METHOD_ASSIGNMENT',
  PROPERTY_NAME_ASSIGNMENT:'PROPERTY_NAME_ASSIGNMENT',
  PROPERTY_NAME_SHORTHAND:'PROPERTY_NAME_SHORTHAND',
  PROPERTY_SIGNATURE:'PROPERTY_SIGNATURE',
  PROPERTY_VARIABLE_DECLARATION:'PROPERTY_VARIABLE_DECLARATION',
  REST_PARAMETER:'REST_PARAMETER',
  RETURN_STATEMENT:'RETURN_STATEMENT',
  SCRIPT:'SCRIPT',
  SET_ACCESSOR:'SET_ACCESSOR',
  SPREAD_EXPRESSION:'SPREAD_EXPRESSION',
  SPREAD_PATTERN_ELEMENT:'SPREAD_PATTERN_ELEMENT',
  STATE_MACHINE:'STATE_MACHINE',
  SUPER_EXPRESSION:'SUPER_EXPRESSION',
  SWITCH_STATEMENT:'SWITCH_STATEMENT',
  SYNTAX_ERROR_TREE:'SYNTAX_ERROR_TREE',
  TEMPLATE_LITERAL_EXPRESSION:'TEMPLATE_LITERAL_EXPRESSION',
  TEMPLATE_LITERAL_PORTION:'TEMPLATE_LITERAL_PORTION',
  TEMPLATE_SUBSTITUTION:'TEMPLATE_SUBSTITUTION',
  THIS_EXPRESSION:'THIS_EXPRESSION',
  THROW_STATEMENT:'THROW_STATEMENT',
  TRY_STATEMENT:'TRY_STATEMENT',
  TYPE_ARGUMENTS:'TYPE_ARGUMENTS',
  TYPE_NAME:'TYPE_NAME',
  TYPE_PARAMETER:'TYPE_PARAMETER',
  TYPE_PARAMETERS:'TYPE_PARAMETERS',
  TYPE_REFERENCE:'TYPE_REFERENCE',
  UNARY_EXPRESSION:'UNARY_EXPRESSION',
  UNION_TYPE:'UNION_TYPE',
  VARIABLE_DECLARATION:'VARIABLE_DECLARATION',
  VARIABLE_DECLARATION_LIST:'VARIABLE_DECLARATION_LIST',
  VARIABLE_STATEMENT:'VARIABLE_STATEMENT',
  WHILE_STATEMENT:'WHILE_STATEMENT',
  WITH_STATEMENT:'WITH_STATEMENT',
  YIELD_EXPRESSION:'YIELD_EXPRESSION',
};

module.exports = function(src) {
    var instrumentor = new Instrumentor(src);
    return instrumentor;
};

function Instrumentor(src) {
    // Setup our names
    this.names = {
        statement: this.generateName(6, "__statement_"),
        expression: this.generateName(6, "__expression_"),
        block: this.generateName(6, "__block_"),
        intro: this.generateName(6, "__intro_"),
        extro: this.generateName(6, "__extro_")
    };
    if (src) {
        var that = this;
        this.instrumentedSource = traceurPromise.then(function () {
            that.instrumentedSource = that.instrument(src);
            return that.instrumentedSource;
        });
    }
};

Instrumentor.prototype = new EventEmitter;

Instrumentor.prototype.generateName = function (len, prefix) {
    var name = '';
    var lower = '$'.charCodeAt(0);
    var upper = 'z'.charCodeAt(0);

    while (name.length < len) {
        var c = String.fromCharCode(Math.floor(
            Math.random() * (upper - lower + 1) + lower
        ));
        if ((name + c).match(/^[A-Za-z_$][A-Za-z0-9_$]*$/)) name += c;
    }

    return prefix + name;
};

Instrumentor.prototype.errorReporter = function (position, message) {
    console.log(message + ', ' + position);
};

Instrumentor.prototype.instrument = function (code) {
    this.source = code;
    this.sourceFile = new traceur.syntax.SourceFile('Unknown', this.source);
    this.options = new traceur.util.Options();
    this.parser = new traceur.syntax.Parser(this.sourceFile, this.errorReporter, this.options);
    this.parseTreeFactory = traceur.ModuleStore.get('traceur@0.0.90/src/codegeneration/ParseTreeFactory.js');

    this.statementNo = 0;
    this.blockNo = 0;
    this.expressionNo = 0;
    this.statementList = [];
    this.blockList = [];
    this.expressionList = [];
    // Parse the code
    this.tree = this.parser.parseModule();

    // console.log(JSON.stringify(this.tree, null, " "));
    this.instrumentTreeList(this.tree.scriptItemList);
    return this.generate();
};

Instrumentor.prototype.createFunctionCallExpression = function (num, funcName) {
    var callExp = this.createCallExpression(num, funcName);
    var exp = this.parseTreeFactory.createExpressionStatement(callExp);
    exp.noCover = true;
    return exp;
};

Instrumentor.prototype.createCallExpression = function (num, funcName) {
    var number = this.parseTreeFactory.createNumberLiteral(num);
    var args = this.parseTreeFactory.createArgumentList([number]);
    var funcName = this.parseTreeFactory.createIdentifierExpression(funcName);
    var callExp = this.parseTreeFactory.createCallExpression(funcName, args);
    return callExp;
};

Instrumentor.prototype.createStatementExpression = function (node) {
    var exp = this.createFunctionCallExpression(this.statementNo++, this.names.statement);
    this.statementList.push(node);
    return exp;
}

Instrumentor.prototype.addBlockExpression = function (node, list) {
    var exp = this.createFunctionCallExpression(this.blockNo++, this.names.block);
    this.blockList.push(node);
    list.splice(0, 0, exp); // insert at the beginning
};

Instrumentor.prototype.instrumentTreeList = function (list) {
    var node, i, inspect;
    for (i = 0; i < list.length; i++) {
        node = list[i];
        if (node.noCover) continue;
        list.splice(i, 0, this.createStatementExpression(node));
        i++;
        inspect = node;
        if (node.isExpression() || node.isDeclaration()) {
            list[i] = this.createCommaExpression(node)
        }
        this.traverseNode(inspect);
    }
    // console.log(JSON.stringify(this.tree, null, " "));
};

Instrumentor.prototype.expressionTreeList = function (list) {
    var node, i, inspect;
    for (i = 0; i < list.length; i++) {
        node = list[i];
        if (node.noCover) continue;
        inspect = node;
        if (node.isExpression() || node.isDeclaration()) {
            list[i] = this.createCommaExpression(node)
        }
        this.traverseNode(inspect);
    }
};

Instrumentor.prototype.createCommaExpression = function (node) {
    this.expressionList.push(node);
    var fCall = this.createCallExpression(this.expressionNo++, this.names.expression);
    var comma = this.parseTreeFactory.createCommaExpression([fCall, node]);
    return comma;
};

Instrumentor.prototype.traverseNode = function (node) {
    var att, inspect;
    for (att in node) {
        // console.log(att);
        if (node[att] && typeof node[att].isExpression === 'function') {
            // console.log(node.type);
            inspect = node[att];
            if (node[att].isExpression() || node.type === javascript.Syntax.VARIABLE_DECLARATION) {
                node[att] = this.createCommaExpression(node[att])
            }
            this.traverseNode(inspect);
        } else if (Array.isArray(node[att])) {
            if (node.type === javascript.Syntax.BLOCK ||
                node.type === javascript.Syntax.FUNCTION_BODY) {
                this.addBlockExpression(node, node[att]);
                this.instrumentTreeList(node[att]);
            } else if (node.type === javascript.Syntax.CLASS_DECLARATION) {
                this.instrumentTreeList(node[att]);
            } else if (node.type === javascript.Syntax.VARIABLE_DECLARATION_LIST) {
                this.expressionTreeList(node[att]);
            }
        }
    }
};

Instrumentor.prototype.generate = function () {
    this.parseTreeWriter = new traceur.outputgeneration.ParseTreeWriter(this.options);
    this.parseTreeWriter.visitAny(this.tree);

    return this.parseTreeWriter.toString();
};

function loaded(mod) {
    Instrumentor.prototype.traceur = mod;    
}

module.exports.Instrumentor = Instrumentor;
var traceurPromise = module.exports.traceurPromise = System.import('./traceur').then(loaded);


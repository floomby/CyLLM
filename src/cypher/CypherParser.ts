// Generated from Cypher.g4 by ANTLR 4.13.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import CypherListener from "./CypherListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class CypherParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly UNION = 46;
	public static readonly ALL = 47;
	public static readonly OPTIONAL = 48;
	public static readonly MATCH = 49;
	public static readonly UNWIND = 50;
	public static readonly AS = 51;
	public static readonly MERGE = 52;
	public static readonly ON = 53;
	public static readonly CREATE = 54;
	public static readonly SET = 55;
	public static readonly DETACH = 56;
	public static readonly DELETE = 57;
	public static readonly REMOVE = 58;
	public static readonly CALL = 59;
	public static readonly YIELD = 60;
	public static readonly WITH = 61;
	public static readonly RETURN = 62;
	public static readonly DISTINCT = 63;
	public static readonly ORDER = 64;
	public static readonly BY = 65;
	public static readonly L_SKIP = 66;
	public static readonly LIMIT = 67;
	public static readonly ASCENDING = 68;
	public static readonly ASC = 69;
	public static readonly DESCENDING = 70;
	public static readonly DESC = 71;
	public static readonly WHERE = 72;
	public static readonly OR = 73;
	public static readonly XOR = 74;
	public static readonly AND = 75;
	public static readonly NOT = 76;
	public static readonly STARTS = 77;
	public static readonly ENDS = 78;
	public static readonly CONTAINS = 79;
	public static readonly IN = 80;
	public static readonly IS = 81;
	public static readonly NULL = 82;
	public static readonly COUNT = 83;
	public static readonly CASE = 84;
	public static readonly ELSE = 85;
	public static readonly END = 86;
	public static readonly WHEN = 87;
	public static readonly THEN = 88;
	public static readonly ANY = 89;
	public static readonly NONE = 90;
	public static readonly SINGLE = 91;
	public static readonly EXISTS = 92;
	public static readonly TRUE = 93;
	public static readonly FALSE = 94;
	public static readonly HexInteger = 95;
	public static readonly DecimalInteger = 96;
	public static readonly OctalInteger = 97;
	public static readonly HexLetter = 98;
	public static readonly HexDigit = 99;
	public static readonly Digit = 100;
	public static readonly NonZeroDigit = 101;
	public static readonly NonZeroOctDigit = 102;
	public static readonly OctDigit = 103;
	public static readonly ZeroDigit = 104;
	public static readonly ExponentDecimalReal = 105;
	public static readonly RegularDecimalReal = 106;
	public static readonly StringLiteral = 107;
	public static readonly EscapedChar = 108;
	public static readonly CONSTRAINT = 109;
	public static readonly DO = 110;
	public static readonly FOR = 111;
	public static readonly REQUIRE = 112;
	public static readonly UNIQUE = 113;
	public static readonly MANDATORY = 114;
	public static readonly SCALAR = 115;
	public static readonly OF = 116;
	public static readonly ADD = 117;
	public static readonly DROP = 118;
	public static readonly FILTER = 119;
	public static readonly EXTRACT = 120;
	public static readonly UnescapedSymbolicName = 121;
	public static readonly IdentifierStart = 122;
	public static readonly IdentifierPart = 123;
	public static readonly EscapedSymbolicName = 124;
	public static readonly SP = 125;
	public static readonly WHITESPACE = 126;
	public static readonly Comment = 127;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_oC_Cypher = 0;
	public static readonly RULE_oC_Statement = 1;
	public static readonly RULE_oC_Query = 2;
	public static readonly RULE_oC_RegularQuery = 3;
	public static readonly RULE_oC_Union = 4;
	public static readonly RULE_oC_SingleQuery = 5;
	public static readonly RULE_oC_SinglePartQuery = 6;
	public static readonly RULE_oC_MultiPartQuery = 7;
	public static readonly RULE_oC_UpdatingClause = 8;
	public static readonly RULE_oC_ReadingClause = 9;
	public static readonly RULE_oC_Match = 10;
	public static readonly RULE_oC_Unwind = 11;
	public static readonly RULE_oC_Merge = 12;
	public static readonly RULE_oC_MergeAction = 13;
	public static readonly RULE_oC_Create = 14;
	public static readonly RULE_oC_Set = 15;
	public static readonly RULE_oC_SetItem = 16;
	public static readonly RULE_oC_Delete = 17;
	public static readonly RULE_oC_Remove = 18;
	public static readonly RULE_oC_RemoveItem = 19;
	public static readonly RULE_oC_InQueryCall = 20;
	public static readonly RULE_oC_StandaloneCall = 21;
	public static readonly RULE_oC_YieldItems = 22;
	public static readonly RULE_oC_YieldItem = 23;
	public static readonly RULE_oC_With = 24;
	public static readonly RULE_oC_Return = 25;
	public static readonly RULE_oC_ProjectionBody = 26;
	public static readonly RULE_oC_ProjectionItems = 27;
	public static readonly RULE_oC_ProjectionItem = 28;
	public static readonly RULE_oC_Order = 29;
	public static readonly RULE_oC_Skip = 30;
	public static readonly RULE_oC_Limit = 31;
	public static readonly RULE_oC_SortItem = 32;
	public static readonly RULE_oC_Where = 33;
	public static readonly RULE_oC_Pattern = 34;
	public static readonly RULE_oC_PatternPart = 35;
	public static readonly RULE_oC_AnonymousPatternPart = 36;
	public static readonly RULE_oC_PatternElement = 37;
	public static readonly RULE_oC_RelationshipsPattern = 38;
	public static readonly RULE_oC_NodePattern = 39;
	public static readonly RULE_oC_PatternElementChain = 40;
	public static readonly RULE_oC_RelationshipPattern = 41;
	public static readonly RULE_oC_RelationshipDetail = 42;
	public static readonly RULE_oC_Properties = 43;
	public static readonly RULE_oC_RelationshipTypes = 44;
	public static readonly RULE_oC_NodeLabels = 45;
	public static readonly RULE_oC_NodeLabel = 46;
	public static readonly RULE_oC_RangeLiteral = 47;
	public static readonly RULE_oC_LabelName = 48;
	public static readonly RULE_oC_RelTypeName = 49;
	public static readonly RULE_oC_PropertyExpression = 50;
	public static readonly RULE_oC_Expression = 51;
	public static readonly RULE_oC_OrExpression = 52;
	public static readonly RULE_oC_XorExpression = 53;
	public static readonly RULE_oC_AndExpression = 54;
	public static readonly RULE_oC_NotExpression = 55;
	public static readonly RULE_oC_ComparisonExpression = 56;
	public static readonly RULE_oC_PartialComparisonExpression = 57;
	public static readonly RULE_oC_StringListNullPredicateExpression = 58;
	public static readonly RULE_oC_StringPredicateExpression = 59;
	public static readonly RULE_oC_ListPredicateExpression = 60;
	public static readonly RULE_oC_NullPredicateExpression = 61;
	public static readonly RULE_oC_AddOrSubtractExpression = 62;
	public static readonly RULE_oC_MultiplyDivideModuloExpression = 63;
	public static readonly RULE_oC_PowerOfExpression = 64;
	public static readonly RULE_oC_UnaryAddOrSubtractExpression = 65;
	public static readonly RULE_oC_NonArithmeticOperatorExpression = 66;
	public static readonly RULE_oC_ListOperatorExpression = 67;
	public static readonly RULE_oC_PropertyLookup = 68;
	public static readonly RULE_oC_Atom = 69;
	public static readonly RULE_oC_CaseExpression = 70;
	public static readonly RULE_oC_CaseAlternative = 71;
	public static readonly RULE_oC_ListComprehension = 72;
	public static readonly RULE_oC_PatternComprehension = 73;
	public static readonly RULE_oC_Quantifier = 74;
	public static readonly RULE_oC_FilterExpression = 75;
	public static readonly RULE_oC_PatternPredicate = 76;
	public static readonly RULE_oC_ParenthesizedExpression = 77;
	public static readonly RULE_oC_IdInColl = 78;
	public static readonly RULE_oC_FunctionInvocation = 79;
	public static readonly RULE_oC_FunctionName = 80;
	public static readonly RULE_oC_ExistentialSubquery = 81;
	public static readonly RULE_oC_ExplicitProcedureInvocation = 82;
	public static readonly RULE_oC_ImplicitProcedureInvocation = 83;
	public static readonly RULE_oC_ProcedureResultField = 84;
	public static readonly RULE_oC_ProcedureName = 85;
	public static readonly RULE_oC_Namespace = 86;
	public static readonly RULE_oC_Variable = 87;
	public static readonly RULE_oC_Literal = 88;
	public static readonly RULE_oC_BooleanLiteral = 89;
	public static readonly RULE_oC_NumberLiteral = 90;
	public static readonly RULE_oC_IntegerLiteral = 91;
	public static readonly RULE_oC_DoubleLiteral = 92;
	public static readonly RULE_oC_ListLiteral = 93;
	public static readonly RULE_oC_MapLiteral = 94;
	public static readonly RULE_oC_PropertyKeyName = 95;
	public static readonly RULE_oC_Parameter = 96;
	public static readonly RULE_oC_SchemaName = 97;
	public static readonly RULE_oC_ReservedWord = 98;
	public static readonly RULE_oC_SymbolicName = 99;
	public static readonly RULE_oC_LeftArrowHead = 100;
	public static readonly RULE_oC_RightArrowHead = 101;
	public static readonly RULE_oC_Dash = 102;
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "','", "'='", 
                                                            "'+='", "'*'", 
                                                            "'('", "')'", 
                                                            "'['", "']'", 
                                                            "':'", "'|'", 
                                                            "'..'", "'<>'", 
                                                            "'<'", "'>'", 
                                                            "'<='", "'>='", 
                                                            "'+'", "'-'", 
                                                            "'/'", "'%'", 
                                                            "'^'", "'.'", 
                                                            "'{'", "'}'", 
                                                            "'$'", "'\\u27E8'", 
                                                            "'\\u3008'", 
                                                            "'\\uFE64'", 
                                                            "'\\uFF1C'", 
                                                            "'\\u27E9'", 
                                                            "'\\u3009'", 
                                                            "'\\uFE65'", 
                                                            "'\\uFF1E'", 
                                                            "'\\u00AD'", 
                                                            "'\\u2010'", 
                                                            "'\\u2011'", 
                                                            "'\\u2012'", 
                                                            "'\\u2013'", 
                                                            "'\\u2014'", 
                                                            "'\\u2015'", 
                                                            "'\\u2212'", 
                                                            "'\\uFE58'", 
                                                            "'\\uFE63'", 
                                                            "'\\uFF0D'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'0'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "UNION", "ALL", 
                                                             "OPTIONAL", 
                                                             "MATCH", "UNWIND", 
                                                             "AS", "MERGE", 
                                                             "ON", "CREATE", 
                                                             "SET", "DETACH", 
                                                             "DELETE", "REMOVE", 
                                                             "CALL", "YIELD", 
                                                             "WITH", "RETURN", 
                                                             "DISTINCT", 
                                                             "ORDER", "BY", 
                                                             "L_SKIP", "LIMIT", 
                                                             "ASCENDING", 
                                                             "ASC", "DESCENDING", 
                                                             "DESC", "WHERE", 
                                                             "OR", "XOR", 
                                                             "AND", "NOT", 
                                                             "STARTS", "ENDS", 
                                                             "CONTAINS", 
                                                             "IN", "IS", 
                                                             "NULL", "COUNT", 
                                                             "CASE", "ELSE", 
                                                             "END", "WHEN", 
                                                             "THEN", "ANY", 
                                                             "NONE", "SINGLE", 
                                                             "EXISTS", "TRUE", 
                                                             "FALSE", "HexInteger", 
                                                             "DecimalInteger", 
                                                             "OctalInteger", 
                                                             "HexLetter", 
                                                             "HexDigit", 
                                                             "Digit", "NonZeroDigit", 
                                                             "NonZeroOctDigit", 
                                                             "OctDigit", 
                                                             "ZeroDigit", 
                                                             "ExponentDecimalReal", 
                                                             "RegularDecimalReal", 
                                                             "StringLiteral", 
                                                             "EscapedChar", 
                                                             "CONSTRAINT", 
                                                             "DO", "FOR", 
                                                             "REQUIRE", 
                                                             "UNIQUE", "MANDATORY", 
                                                             "SCALAR", "OF", 
                                                             "ADD", "DROP", 
                                                             "FILTER", "EXTRACT", 
                                                             "UnescapedSymbolicName", 
                                                             "IdentifierStart", 
                                                             "IdentifierPart", 
                                                             "EscapedSymbolicName", 
                                                             "SP", "WHITESPACE", 
                                                             "Comment" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"oC_Cypher", "oC_Statement", "oC_Query", "oC_RegularQuery", "oC_Union", 
		"oC_SingleQuery", "oC_SinglePartQuery", "oC_MultiPartQuery", "oC_UpdatingClause", 
		"oC_ReadingClause", "oC_Match", "oC_Unwind", "oC_Merge", "oC_MergeAction", 
		"oC_Create", "oC_Set", "oC_SetItem", "oC_Delete", "oC_Remove", "oC_RemoveItem", 
		"oC_InQueryCall", "oC_StandaloneCall", "oC_YieldItems", "oC_YieldItem", 
		"oC_With", "oC_Return", "oC_ProjectionBody", "oC_ProjectionItems", "oC_ProjectionItem", 
		"oC_Order", "oC_Skip", "oC_Limit", "oC_SortItem", "oC_Where", "oC_Pattern", 
		"oC_PatternPart", "oC_AnonymousPatternPart", "oC_PatternElement", "oC_RelationshipsPattern", 
		"oC_NodePattern", "oC_PatternElementChain", "oC_RelationshipPattern", 
		"oC_RelationshipDetail", "oC_Properties", "oC_RelationshipTypes", "oC_NodeLabels", 
		"oC_NodeLabel", "oC_RangeLiteral", "oC_LabelName", "oC_RelTypeName", "oC_PropertyExpression", 
		"oC_Expression", "oC_OrExpression", "oC_XorExpression", "oC_AndExpression", 
		"oC_NotExpression", "oC_ComparisonExpression", "oC_PartialComparisonExpression", 
		"oC_StringListNullPredicateExpression", "oC_StringPredicateExpression", 
		"oC_ListPredicateExpression", "oC_NullPredicateExpression", "oC_AddOrSubtractExpression", 
		"oC_MultiplyDivideModuloExpression", "oC_PowerOfExpression", "oC_UnaryAddOrSubtractExpression", 
		"oC_NonArithmeticOperatorExpression", "oC_ListOperatorExpression", "oC_PropertyLookup", 
		"oC_Atom", "oC_CaseExpression", "oC_CaseAlternative", "oC_ListComprehension", 
		"oC_PatternComprehension", "oC_Quantifier", "oC_FilterExpression", "oC_PatternPredicate", 
		"oC_ParenthesizedExpression", "oC_IdInColl", "oC_FunctionInvocation", 
		"oC_FunctionName", "oC_ExistentialSubquery", "oC_ExplicitProcedureInvocation", 
		"oC_ImplicitProcedureInvocation", "oC_ProcedureResultField", "oC_ProcedureName", 
		"oC_Namespace", "oC_Variable", "oC_Literal", "oC_BooleanLiteral", "oC_NumberLiteral", 
		"oC_IntegerLiteral", "oC_DoubleLiteral", "oC_ListLiteral", "oC_MapLiteral", 
		"oC_PropertyKeyName", "oC_Parameter", "oC_SchemaName", "oC_ReservedWord", 
		"oC_SymbolicName", "oC_LeftArrowHead", "oC_RightArrowHead", "oC_Dash",
	];
	public get grammarFileName(): string { return "Cypher.g4"; }
	public get literalNames(): (string | null)[] { return CypherParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return CypherParser.symbolicNames; }
	public get ruleNames(): string[] { return CypherParser.ruleNames; }
	public get serializedATN(): number[] { return CypherParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, CypherParser._ATN, CypherParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public oC_Cypher(): OC_CypherContext {
		let localctx: OC_CypherContext = new OC_CypherContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, CypherParser.RULE_oC_Cypher);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 206;
				this.match(CypherParser.SP);
				}
			}

			this.state = 209;
			this.oC_Statement();
			this.state = 214;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 210;
					this.match(CypherParser.SP);
					}
				}

				this.state = 213;
				this.match(CypherParser.T__0);
				}
				break;
			}
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 216;
				this.match(CypherParser.SP);
				}
			}

			this.state = 219;
			this.match(CypherParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_Statement(): OC_StatementContext {
		let localctx: OC_StatementContext = new OC_StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, CypherParser.RULE_oC_Statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 221;
			this.oC_Query();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_Query(): OC_QueryContext {
		let localctx: OC_QueryContext = new OC_QueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, CypherParser.RULE_oC_Query);
		try {
			this.state = 225;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 223;
				this.oC_RegularQuery();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 224;
				this.oC_StandaloneCall();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_RegularQuery(): OC_RegularQueryContext {
		let localctx: OC_RegularQueryContext = new OC_RegularQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, CypherParser.RULE_oC_RegularQuery);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 227;
			this.oC_SingleQuery();
			this.state = 234;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 229;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 228;
						this.match(CypherParser.SP);
						}
					}

					this.state = 231;
					this.oC_Union();
					}
					}
				}
				this.state = 236;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_Union(): OC_UnionContext {
		let localctx: OC_UnionContext = new OC_UnionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, CypherParser.RULE_oC_Union);
		let _la: number;
		try {
			this.state = 249;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 237;
				this.match(CypherParser.UNION);
				this.state = 238;
				this.match(CypherParser.SP);
				this.state = 239;
				this.match(CypherParser.ALL);
				this.state = 241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 240;
					this.match(CypherParser.SP);
					}
				}

				this.state = 243;
				this.oC_SingleQuery();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 244;
				this.match(CypherParser.UNION);
				this.state = 246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 245;
					this.match(CypherParser.SP);
					}
				}

				this.state = 248;
				this.oC_SingleQuery();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_SingleQuery(): OC_SingleQueryContext {
		let localctx: OC_SingleQueryContext = new OC_SingleQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, CypherParser.RULE_oC_SingleQuery);
		try {
			this.state = 253;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 251;
				this.oC_SinglePartQuery();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 252;
				this.oC_MultiPartQuery();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_SinglePartQuery(): OC_SinglePartQueryContext {
		let localctx: OC_SinglePartQueryContext = new OC_SinglePartQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, CypherParser.RULE_oC_SinglePartQuery);
		let _la: number;
		try {
			let _alt: number;
			this.state = 290;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 261;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2055) !== 0)) {
					{
					{
					this.state = 255;
					this.oC_ReadingClause();
					this.state = 257;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 256;
						this.match(CypherParser.SP);
						}
					}

					}
					}
					this.state = 263;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 264;
				this.oC_Return();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 271;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2055) !== 0)) {
					{
					{
					this.state = 265;
					this.oC_ReadingClause();
					this.state = 267;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 266;
						this.match(CypherParser.SP);
						}
					}

					}
					}
					this.state = 273;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 274;
				this.oC_UpdatingClause();
				this.state = 281;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 276;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 275;
							this.match(CypherParser.SP);
							}
						}

						this.state = 278;
						this.oC_UpdatingClause();
						}
						}
					}
					this.state = 283;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
				}
				this.state = 288;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 285;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 284;
						this.match(CypherParser.SP);
						}
					}

					this.state = 287;
					this.oC_Return();
					}
					break;
				}
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_MultiPartQuery(): OC_MultiPartQueryContext {
		let localctx: OC_MultiPartQueryContext = new OC_MultiPartQueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, CypherParser.RULE_oC_MultiPartQuery);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 314;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 298;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 2055) !== 0)) {
						{
						{
						this.state = 292;
						this.oC_ReadingClause();
						this.state = 294;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 293;
							this.match(CypherParser.SP);
							}
						}

						}
						}
						this.state = 300;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 307;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 125) !== 0)) {
						{
						{
						this.state = 301;
						this.oC_UpdatingClause();
						this.state = 303;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 302;
							this.match(CypherParser.SP);
							}
						}

						}
						}
						this.state = 309;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 310;
					this.oC_With();
					this.state = 312;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 311;
						this.match(CypherParser.SP);
						}
					}

					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 316;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 318;
			this.oC_SinglePartQuery();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_UpdatingClause(): OC_UpdatingClauseContext {
		let localctx: OC_UpdatingClauseContext = new OC_UpdatingClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, CypherParser.RULE_oC_UpdatingClause);
		try {
			this.state = 325;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 54:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 320;
				this.oC_Create();
				}
				break;
			case 52:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 321;
				this.oC_Merge();
				}
				break;
			case 56:
			case 57:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 322;
				this.oC_Delete();
				}
				break;
			case 55:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 323;
				this.oC_Set();
				}
				break;
			case 58:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 324;
				this.oC_Remove();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_ReadingClause(): OC_ReadingClauseContext {
		let localctx: OC_ReadingClauseContext = new OC_ReadingClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, CypherParser.RULE_oC_ReadingClause);
		try {
			this.state = 330;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 48:
			case 49:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 327;
				this.oC_Match();
				}
				break;
			case 50:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 328;
				this.oC_Unwind();
				}
				break;
			case 59:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 329;
				this.oC_InQueryCall();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_Match(): OC_MatchContext {
		let localctx: OC_MatchContext = new OC_MatchContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, CypherParser.RULE_oC_Match);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 334;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===48) {
				{
				this.state = 332;
				this.match(CypherParser.OPTIONAL);
				this.state = 333;
				this.match(CypherParser.SP);
				}
			}

			this.state = 336;
			this.match(CypherParser.MATCH);
			this.state = 338;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 337;
				this.match(CypherParser.SP);
				}
			}

			this.state = 340;
			this.oC_Pattern();
			this.state = 345;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 342;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 341;
					this.match(CypherParser.SP);
					}
				}

				this.state = 344;
				this.oC_Where();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_Unwind(): OC_UnwindContext {
		let localctx: OC_UnwindContext = new OC_UnwindContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, CypherParser.RULE_oC_Unwind);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 347;
			this.match(CypherParser.UNWIND);
			this.state = 349;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 348;
				this.match(CypherParser.SP);
				}
			}

			this.state = 351;
			this.oC_Expression();
			this.state = 352;
			this.match(CypherParser.SP);
			this.state = 353;
			this.match(CypherParser.AS);
			this.state = 354;
			this.match(CypherParser.SP);
			this.state = 355;
			this.oC_Variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_Merge(): OC_MergeContext {
		let localctx: OC_MergeContext = new OC_MergeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, CypherParser.RULE_oC_Merge);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 357;
			this.match(CypherParser.MERGE);
			this.state = 359;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 358;
				this.match(CypherParser.SP);
				}
			}

			this.state = 361;
			this.oC_PatternPart();
			this.state = 366;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 362;
					this.match(CypherParser.SP);
					this.state = 363;
					this.oC_MergeAction();
					}
					}
				}
				this.state = 368;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 34, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_MergeAction(): OC_MergeActionContext {
		let localctx: OC_MergeActionContext = new OC_MergeActionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, CypherParser.RULE_oC_MergeAction);
		try {
			this.state = 379;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 369;
				this.match(CypherParser.ON);
				this.state = 370;
				this.match(CypherParser.SP);
				this.state = 371;
				this.match(CypherParser.MATCH);
				this.state = 372;
				this.match(CypherParser.SP);
				this.state = 373;
				this.oC_Set();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 374;
				this.match(CypherParser.ON);
				this.state = 375;
				this.match(CypherParser.SP);
				this.state = 376;
				this.match(CypherParser.CREATE);
				this.state = 377;
				this.match(CypherParser.SP);
				this.state = 378;
				this.oC_Set();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_Create(): OC_CreateContext {
		let localctx: OC_CreateContext = new OC_CreateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, CypherParser.RULE_oC_Create);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 381;
			this.match(CypherParser.CREATE);
			this.state = 383;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 382;
				this.match(CypherParser.SP);
				}
			}

			this.state = 385;
			this.oC_Pattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_Set(): OC_SetContext {
		let localctx: OC_SetContext = new OC_SetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, CypherParser.RULE_oC_Set);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 387;
			this.match(CypherParser.SET);
			this.state = 389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 388;
				this.match(CypherParser.SP);
				}
			}

			this.state = 391;
			this.oC_SetItem();
			this.state = 402;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 393;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 392;
						this.match(CypherParser.SP);
						}
					}

					this.state = 395;
					this.match(CypherParser.T__1);
					this.state = 397;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 396;
						this.match(CypherParser.SP);
						}
					}

					this.state = 399;
					this.oC_SetItem();
					}
					}
				}
				this.state = 404;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_SetItem(): OC_SetItemContext {
		let localctx: OC_SetItemContext = new OC_SetItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, CypherParser.RULE_oC_SetItem);
		let _la: number;
		try {
			this.state = 441;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 405;
				this.oC_PropertyExpression();
				this.state = 407;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 406;
					this.match(CypherParser.SP);
					}
				}

				this.state = 409;
				this.match(CypherParser.T__2);
				this.state = 411;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 410;
					this.match(CypherParser.SP);
					}
				}

				this.state = 413;
				this.oC_Expression();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 415;
				this.oC_Variable();
				this.state = 417;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 416;
					this.match(CypherParser.SP);
					}
				}

				this.state = 419;
				this.match(CypherParser.T__2);
				this.state = 421;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 420;
					this.match(CypherParser.SP);
					}
				}

				this.state = 423;
				this.oC_Expression();
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				{
				this.state = 425;
				this.oC_Variable();
				this.state = 427;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 426;
					this.match(CypherParser.SP);
					}
				}

				this.state = 429;
				this.match(CypherParser.T__3);
				this.state = 431;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 430;
					this.match(CypherParser.SP);
					}
				}

				this.state = 433;
				this.oC_Expression();
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				{
				this.state = 435;
				this.oC_Variable();
				this.state = 437;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 436;
					this.match(CypherParser.SP);
					}
				}

				this.state = 439;
				this.oC_NodeLabels();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_Delete(): OC_DeleteContext {
		let localctx: OC_DeleteContext = new OC_DeleteContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, CypherParser.RULE_oC_Delete);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 445;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===56) {
				{
				this.state = 443;
				this.match(CypherParser.DETACH);
				this.state = 444;
				this.match(CypherParser.SP);
				}
			}

			this.state = 447;
			this.match(CypherParser.DELETE);
			this.state = 449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 448;
				this.match(CypherParser.SP);
				}
			}

			this.state = 451;
			this.oC_Expression();
			this.state = 462;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 453;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 452;
						this.match(CypherParser.SP);
						}
					}

					this.state = 455;
					this.match(CypherParser.T__1);
					this.state = 457;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 456;
						this.match(CypherParser.SP);
						}
					}

					this.state = 459;
					this.oC_Expression();
					}
					}
				}
				this.state = 464;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_Remove(): OC_RemoveContext {
		let localctx: OC_RemoveContext = new OC_RemoveContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, CypherParser.RULE_oC_Remove);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 465;
			this.match(CypherParser.REMOVE);
			this.state = 466;
			this.match(CypherParser.SP);
			this.state = 467;
			this.oC_RemoveItem();
			this.state = 478;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 56, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 469;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 468;
						this.match(CypherParser.SP);
						}
					}

					this.state = 471;
					this.match(CypherParser.T__1);
					this.state = 473;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 472;
						this.match(CypherParser.SP);
						}
					}

					this.state = 475;
					this.oC_RemoveItem();
					}
					}
				}
				this.state = 480;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 56, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_RemoveItem(): OC_RemoveItemContext {
		let localctx: OC_RemoveItemContext = new OC_RemoveItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, CypherParser.RULE_oC_RemoveItem);
		try {
			this.state = 485;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 481;
				this.oC_Variable();
				this.state = 482;
				this.oC_NodeLabels();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 484;
				this.oC_PropertyExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_InQueryCall(): OC_InQueryCallContext {
		let localctx: OC_InQueryCallContext = new OC_InQueryCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, CypherParser.RULE_oC_InQueryCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 487;
			this.match(CypherParser.CALL);
			this.state = 488;
			this.match(CypherParser.SP);
			this.state = 489;
			this.oC_ExplicitProcedureInvocation();
			this.state = 496;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				{
				this.state = 491;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 490;
					this.match(CypherParser.SP);
					}
				}

				this.state = 493;
				this.match(CypherParser.YIELD);
				this.state = 494;
				this.match(CypherParser.SP);
				this.state = 495;
				this.oC_YieldItems();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_StandaloneCall(): OC_StandaloneCallContext {
		let localctx: OC_StandaloneCallContext = new OC_StandaloneCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, CypherParser.RULE_oC_StandaloneCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 498;
			this.match(CypherParser.CALL);
			this.state = 499;
			this.match(CypherParser.SP);
			this.state = 502;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				{
				this.state = 500;
				this.oC_ExplicitProcedureInvocation();
				}
				break;
			case 2:
				{
				this.state = 501;
				this.oC_ImplicitProcedureInvocation();
				}
				break;
			}
			this.state = 513;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				{
				this.state = 505;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 504;
					this.match(CypherParser.SP);
					}
				}

				this.state = 507;
				this.match(CypherParser.YIELD);
				this.state = 508;
				this.match(CypherParser.SP);
				this.state = 511;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 5:
					{
					this.state = 509;
					this.match(CypherParser.T__4);
					}
					break;
				case 83:
				case 89:
				case 90:
				case 91:
				case 98:
				case 119:
				case 120:
				case 121:
				case 124:
					{
					this.state = 510;
					this.oC_YieldItems();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_YieldItems(): OC_YieldItemsContext {
		let localctx: OC_YieldItemsContext = new OC_YieldItemsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, CypherParser.RULE_oC_YieldItems);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 515;
			this.oC_YieldItem();
			this.state = 526;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 66, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 517;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 516;
						this.match(CypherParser.SP);
						}
					}

					this.state = 519;
					this.match(CypherParser.T__1);
					this.state = 521;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 520;
						this.match(CypherParser.SP);
						}
					}

					this.state = 523;
					this.oC_YieldItem();
					}
					}
				}
				this.state = 528;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 66, this._ctx);
			}
			this.state = 533;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				{
				this.state = 530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 529;
					this.match(CypherParser.SP);
					}
				}

				this.state = 532;
				this.oC_Where();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_YieldItem(): OC_YieldItemContext {
		let localctx: OC_YieldItemContext = new OC_YieldItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, CypherParser.RULE_oC_YieldItem);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 540;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				{
				this.state = 535;
				this.oC_ProcedureResultField();
				this.state = 536;
				this.match(CypherParser.SP);
				this.state = 537;
				this.match(CypherParser.AS);
				this.state = 538;
				this.match(CypherParser.SP);
				}
				break;
			}
			this.state = 542;
			this.oC_Variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_With(): OC_WithContext {
		let localctx: OC_WithContext = new OC_WithContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, CypherParser.RULE_oC_With);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 544;
			this.match(CypherParser.WITH);
			this.state = 545;
			this.oC_ProjectionBody();
			this.state = 550;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				{
				this.state = 547;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 546;
					this.match(CypherParser.SP);
					}
				}

				this.state = 549;
				this.oC_Where();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_Return(): OC_ReturnContext {
		let localctx: OC_ReturnContext = new OC_ReturnContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, CypherParser.RULE_oC_Return);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 552;
			this.match(CypherParser.RETURN);
			this.state = 553;
			this.oC_ProjectionBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_ProjectionBody(): OC_ProjectionBodyContext {
		let localctx: OC_ProjectionBodyContext = new OC_ProjectionBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, CypherParser.RULE_oC_ProjectionBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 559;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				{
				this.state = 556;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 555;
					this.match(CypherParser.SP);
					}
				}

				this.state = 558;
				this.match(CypherParser.DISTINCT);
				}
				break;
			}
			this.state = 561;
			this.match(CypherParser.SP);
			this.state = 562;
			this.oC_ProjectionItems();
			this.state = 565;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				{
				this.state = 563;
				this.match(CypherParser.SP);
				this.state = 564;
				this.oC_Order();
				}
				break;
			}
			this.state = 569;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				{
				this.state = 567;
				this.match(CypherParser.SP);
				this.state = 568;
				this.oC_Skip();
				}
				break;
			}
			this.state = 573;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				{
				this.state = 571;
				this.match(CypherParser.SP);
				this.state = 572;
				this.oC_Limit();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_ProjectionItems(): OC_ProjectionItemsContext {
		let localctx: OC_ProjectionItemsContext = new OC_ProjectionItemsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, CypherParser.RULE_oC_ProjectionItems);
		let _la: number;
		try {
			let _alt: number;
			this.state = 603;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 575;
				this.match(CypherParser.T__4);
				this.state = 586;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 79, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 577;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 576;
							this.match(CypherParser.SP);
							}
						}

						this.state = 579;
						this.match(CypherParser.T__1);
						this.state = 581;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 580;
							this.match(CypherParser.SP);
							}
						}

						this.state = 583;
						this.oC_ProjectionItem();
						}
						}
					}
					this.state = 588;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 79, this._ctx);
				}
				}
				}
				break;
			case 6:
			case 8:
			case 18:
			case 19:
			case 24:
			case 26:
			case 47:
			case 76:
			case 82:
			case 83:
			case 84:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 105:
			case 106:
			case 107:
			case 119:
			case 120:
			case 121:
			case 124:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 589;
				this.oC_ProjectionItem();
				this.state = 600;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 82, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 591;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 590;
							this.match(CypherParser.SP);
							}
						}

						this.state = 593;
						this.match(CypherParser.T__1);
						this.state = 595;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 594;
							this.match(CypherParser.SP);
							}
						}

						this.state = 597;
						this.oC_ProjectionItem();
						}
						}
					}
					this.state = 602;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 82, this._ctx);
				}
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_ProjectionItem(): OC_ProjectionItemContext {
		let localctx: OC_ProjectionItemContext = new OC_ProjectionItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, CypherParser.RULE_oC_ProjectionItem);
		try {
			this.state = 612;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 605;
				this.oC_Expression();
				this.state = 606;
				this.match(CypherParser.SP);
				this.state = 607;
				this.match(CypherParser.AS);
				this.state = 608;
				this.match(CypherParser.SP);
				this.state = 609;
				this.oC_Variable();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 611;
				this.oC_Expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_Order(): OC_OrderContext {
		let localctx: OC_OrderContext = new OC_OrderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, CypherParser.RULE_oC_Order);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 614;
			this.match(CypherParser.ORDER);
			this.state = 615;
			this.match(CypherParser.SP);
			this.state = 616;
			this.match(CypherParser.BY);
			this.state = 617;
			this.match(CypherParser.SP);
			this.state = 618;
			this.oC_SortItem();
			this.state = 626;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===2) {
				{
				{
				this.state = 619;
				this.match(CypherParser.T__1);
				this.state = 621;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 620;
					this.match(CypherParser.SP);
					}
				}

				this.state = 623;
				this.oC_SortItem();
				}
				}
				this.state = 628;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_Skip(): OC_SkipContext {
		let localctx: OC_SkipContext = new OC_SkipContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, CypherParser.RULE_oC_Skip);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 629;
			this.match(CypherParser.L_SKIP);
			this.state = 630;
			this.match(CypherParser.SP);
			this.state = 631;
			this.oC_Expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_Limit(): OC_LimitContext {
		let localctx: OC_LimitContext = new OC_LimitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, CypherParser.RULE_oC_Limit);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 633;
			this.match(CypherParser.LIMIT);
			this.state = 634;
			this.match(CypherParser.SP);
			this.state = 635;
			this.oC_Expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_SortItem(): OC_SortItemContext {
		let localctx: OC_SortItemContext = new OC_SortItemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, CypherParser.RULE_oC_SortItem);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 637;
			this.oC_Expression();
			this.state = 642;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				{
				this.state = 639;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 638;
					this.match(CypherParser.SP);
					}
				}

				this.state = 641;
				_la = this._input.LA(1);
				if(!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 15) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_Where(): OC_WhereContext {
		let localctx: OC_WhereContext = new OC_WhereContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, CypherParser.RULE_oC_Where);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 644;
			this.match(CypherParser.WHERE);
			this.state = 645;
			this.match(CypherParser.SP);
			this.state = 646;
			this.oC_Expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_Pattern(): OC_PatternContext {
		let localctx: OC_PatternContext = new OC_PatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, CypherParser.RULE_oC_Pattern);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 648;
			this.oC_PatternPart();
			this.state = 659;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 91, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 650;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 649;
						this.match(CypherParser.SP);
						}
					}

					this.state = 652;
					this.match(CypherParser.T__1);
					this.state = 654;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 653;
						this.match(CypherParser.SP);
						}
					}

					this.state = 656;
					this.oC_PatternPart();
					}
					}
				}
				this.state = 661;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 91, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_PatternPart(): OC_PatternPartContext {
		let localctx: OC_PatternPartContext = new OC_PatternPartContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, CypherParser.RULE_oC_PatternPart);
		let _la: number;
		try {
			this.state = 673;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 83:
			case 89:
			case 90:
			case 91:
			case 98:
			case 119:
			case 120:
			case 121:
			case 124:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 662;
				this.oC_Variable();
				this.state = 664;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 663;
					this.match(CypherParser.SP);
					}
				}

				this.state = 666;
				this.match(CypherParser.T__2);
				this.state = 668;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 667;
					this.match(CypherParser.SP);
					}
				}

				this.state = 670;
				this.oC_AnonymousPatternPart();
				}
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 672;
				this.oC_AnonymousPatternPart();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_AnonymousPatternPart(): OC_AnonymousPatternPartContext {
		let localctx: OC_AnonymousPatternPartContext = new OC_AnonymousPatternPartContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, CypherParser.RULE_oC_AnonymousPatternPart);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 675;
			this.oC_PatternElement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_PatternElement(): OC_PatternElementContext {
		let localctx: OC_PatternElementContext = new OC_PatternElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, CypherParser.RULE_oC_PatternElement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 691;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 677;
				this.oC_NodePattern();
				this.state = 684;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 96, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 679;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 678;
							this.match(CypherParser.SP);
							}
						}

						this.state = 681;
						this.oC_PatternElementChain();
						}
						}
					}
					this.state = 686;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 96, this._ctx);
				}
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 687;
				this.match(CypherParser.T__5);
				this.state = 688;
				this.oC_PatternElement();
				this.state = 689;
				this.match(CypherParser.T__6);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_RelationshipsPattern(): OC_RelationshipsPatternContext {
		let localctx: OC_RelationshipsPatternContext = new OC_RelationshipsPatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, CypherParser.RULE_oC_RelationshipsPattern);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 693;
			this.oC_NodePattern();
			this.state = 698;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 695;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 694;
						this.match(CypherParser.SP);
						}
					}

					this.state = 697;
					this.oC_PatternElementChain();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 700;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 99, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_NodePattern(): OC_NodePatternContext {
		let localctx: OC_NodePatternContext = new OC_NodePatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, CypherParser.RULE_oC_NodePattern);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 702;
			this.match(CypherParser.T__5);
			this.state = 704;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 703;
				this.match(CypherParser.SP);
				}
			}

			this.state = 710;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 33217) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 39) !== 0)) {
				{
				this.state = 706;
				this.oC_Variable();
				this.state = 708;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 707;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 716;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===10) {
				{
				this.state = 712;
				this.oC_NodeLabels();
				this.state = 714;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 713;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 722;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24 || _la===26) {
				{
				this.state = 718;
				this.oC_Properties();
				this.state = 720;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 719;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 724;
			this.match(CypherParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_PatternElementChain(): OC_PatternElementChainContext {
		let localctx: OC_PatternElementChainContext = new OC_PatternElementChainContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, CypherParser.RULE_oC_PatternElementChain);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 726;
			this.oC_RelationshipPattern();
			this.state = 728;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 727;
				this.match(CypherParser.SP);
				}
			}

			this.state = 730;
			this.oC_NodePattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_RelationshipPattern(): OC_RelationshipPatternContext {
		let localctx: OC_RelationshipPatternContext = new OC_RelationshipPatternContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, CypherParser.RULE_oC_RelationshipPattern);
		let _la: number;
		try {
			this.state = 796;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 732;
				this.oC_LeftArrowHead();
				this.state = 734;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 733;
					this.match(CypherParser.SP);
					}
				}

				this.state = 736;
				this.oC_Dash();
				this.state = 738;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 109, this._ctx) ) {
				case 1:
					{
					this.state = 737;
					this.match(CypherParser.SP);
					}
					break;
				}
				this.state = 741;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===8) {
					{
					this.state = 740;
					this.oC_RelationshipDetail();
					}
				}

				this.state = 744;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 743;
					this.match(CypherParser.SP);
					}
				}

				this.state = 746;
				this.oC_Dash();
				this.state = 748;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 747;
					this.match(CypherParser.SP);
					}
				}

				this.state = 750;
				this.oC_RightArrowHead();
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 752;
				this.oC_LeftArrowHead();
				this.state = 754;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 753;
					this.match(CypherParser.SP);
					}
				}

				this.state = 756;
				this.oC_Dash();
				this.state = 758;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 114, this._ctx) ) {
				case 1:
					{
					this.state = 757;
					this.match(CypherParser.SP);
					}
					break;
				}
				this.state = 761;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===8) {
					{
					this.state = 760;
					this.oC_RelationshipDetail();
					}
				}

				this.state = 764;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 763;
					this.match(CypherParser.SP);
					}
				}

				this.state = 766;
				this.oC_Dash();
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				{
				this.state = 768;
				this.oC_Dash();
				this.state = 770;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 117, this._ctx) ) {
				case 1:
					{
					this.state = 769;
					this.match(CypherParser.SP);
					}
					break;
				}
				this.state = 773;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===8) {
					{
					this.state = 772;
					this.oC_RelationshipDetail();
					}
				}

				this.state = 776;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 775;
					this.match(CypherParser.SP);
					}
				}

				this.state = 778;
				this.oC_Dash();
				this.state = 780;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 779;
					this.match(CypherParser.SP);
					}
				}

				this.state = 782;
				this.oC_RightArrowHead();
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				{
				this.state = 784;
				this.oC_Dash();
				this.state = 786;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 121, this._ctx) ) {
				case 1:
					{
					this.state = 785;
					this.match(CypherParser.SP);
					}
					break;
				}
				this.state = 789;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===8) {
					{
					this.state = 788;
					this.oC_RelationshipDetail();
					}
				}

				this.state = 792;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 791;
					this.match(CypherParser.SP);
					}
				}

				this.state = 794;
				this.oC_Dash();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_RelationshipDetail(): OC_RelationshipDetailContext {
		let localctx: OC_RelationshipDetailContext = new OC_RelationshipDetailContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, CypherParser.RULE_oC_RelationshipDetail);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 798;
			this.match(CypherParser.T__7);
			this.state = 800;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 799;
				this.match(CypherParser.SP);
				}
			}

			this.state = 806;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 33217) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 39) !== 0)) {
				{
				this.state = 802;
				this.oC_Variable();
				this.state = 804;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 803;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 812;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===10) {
				{
				this.state = 808;
				this.oC_RelationshipTypes();
				this.state = 810;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 809;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 815;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5) {
				{
				this.state = 814;
				this.oC_RangeLiteral();
				}
			}

			this.state = 821;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24 || _la===26) {
				{
				this.state = 817;
				this.oC_Properties();
				this.state = 819;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 818;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 823;
			this.match(CypherParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_Properties(): OC_PropertiesContext {
		let localctx: OC_PropertiesContext = new OC_PropertiesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, CypherParser.RULE_oC_Properties);
		try {
			this.state = 827;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 24:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 825;
				this.oC_MapLiteral();
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 826;
				this.oC_Parameter();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_RelationshipTypes(): OC_RelationshipTypesContext {
		let localctx: OC_RelationshipTypesContext = new OC_RelationshipTypesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, CypherParser.RULE_oC_RelationshipTypes);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 829;
			this.match(CypherParser.T__9);
			this.state = 831;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 830;
				this.match(CypherParser.SP);
				}
			}

			this.state = 833;
			this.oC_RelTypeName();
			this.state = 847;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 138, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 835;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 834;
						this.match(CypherParser.SP);
						}
					}

					this.state = 837;
					this.match(CypherParser.T__10);
					this.state = 839;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===10) {
						{
						this.state = 838;
						this.match(CypherParser.T__9);
						}
					}

					this.state = 842;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 841;
						this.match(CypherParser.SP);
						}
					}

					this.state = 844;
					this.oC_RelTypeName();
					}
					}
				}
				this.state = 849;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 138, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_NodeLabels(): OC_NodeLabelsContext {
		let localctx: OC_NodeLabelsContext = new OC_NodeLabelsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, CypherParser.RULE_oC_NodeLabels);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 850;
			this.oC_NodeLabel();
			this.state = 857;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 140, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 852;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 851;
						this.match(CypherParser.SP);
						}
					}

					this.state = 854;
					this.oC_NodeLabel();
					}
					}
				}
				this.state = 859;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 140, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_NodeLabel(): OC_NodeLabelContext {
		let localctx: OC_NodeLabelContext = new OC_NodeLabelContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, CypherParser.RULE_oC_NodeLabel);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 860;
			this.match(CypherParser.T__9);
			this.state = 862;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 861;
				this.match(CypherParser.SP);
				}
			}

			this.state = 864;
			this.oC_LabelName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_RangeLiteral(): OC_RangeLiteralContext {
		let localctx: OC_RangeLiteralContext = new OC_RangeLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, CypherParser.RULE_oC_RangeLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 866;
			this.match(CypherParser.T__4);
			this.state = 868;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 867;
				this.match(CypherParser.SP);
				}
			}

			this.state = 874;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 7) !== 0)) {
				{
				this.state = 870;
				this.oC_IntegerLiteral();
				this.state = 872;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 871;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 886;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 876;
				this.match(CypherParser.T__11);
				this.state = 878;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 877;
					this.match(CypherParser.SP);
					}
				}

				this.state = 884;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 7) !== 0)) {
					{
					this.state = 880;
					this.oC_IntegerLiteral();
					this.state = 882;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 881;
						this.match(CypherParser.SP);
						}
					}

					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_LabelName(): OC_LabelNameContext {
		let localctx: OC_LabelNameContext = new OC_LabelNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, CypherParser.RULE_oC_LabelName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 888;
			this.oC_SchemaName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_RelTypeName(): OC_RelTypeNameContext {
		let localctx: OC_RelTypeNameContext = new OC_RelTypeNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, CypherParser.RULE_oC_RelTypeName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 890;
			this.oC_SchemaName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_PropertyExpression(): OC_PropertyExpressionContext {
		let localctx: OC_PropertyExpressionContext = new OC_PropertyExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, CypherParser.RULE_oC_PropertyExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 892;
			this.oC_Atom();
			this.state = 897;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 894;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 893;
						this.match(CypherParser.SP);
						}
					}

					this.state = 896;
					this.oC_PropertyLookup();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 899;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 150, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_Expression(): OC_ExpressionContext {
		let localctx: OC_ExpressionContext = new OC_ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, CypherParser.RULE_oC_Expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 901;
			this.oC_OrExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_OrExpression(): OC_OrExpressionContext {
		let localctx: OC_OrExpressionContext = new OC_OrExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, CypherParser.RULE_oC_OrExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 903;
			this.oC_XorExpression();
			this.state = 910;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 151, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 904;
					this.match(CypherParser.SP);
					this.state = 905;
					this.match(CypherParser.OR);
					this.state = 906;
					this.match(CypherParser.SP);
					this.state = 907;
					this.oC_XorExpression();
					}
					}
				}
				this.state = 912;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 151, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_XorExpression(): OC_XorExpressionContext {
		let localctx: OC_XorExpressionContext = new OC_XorExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, CypherParser.RULE_oC_XorExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 913;
			this.oC_AndExpression();
			this.state = 920;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 152, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 914;
					this.match(CypherParser.SP);
					this.state = 915;
					this.match(CypherParser.XOR);
					this.state = 916;
					this.match(CypherParser.SP);
					this.state = 917;
					this.oC_AndExpression();
					}
					}
				}
				this.state = 922;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 152, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_AndExpression(): OC_AndExpressionContext {
		let localctx: OC_AndExpressionContext = new OC_AndExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, CypherParser.RULE_oC_AndExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 923;
			this.oC_NotExpression();
			this.state = 930;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 153, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 924;
					this.match(CypherParser.SP);
					this.state = 925;
					this.match(CypherParser.AND);
					this.state = 926;
					this.match(CypherParser.SP);
					this.state = 927;
					this.oC_NotExpression();
					}
					}
				}
				this.state = 932;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 153, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_NotExpression(): OC_NotExpressionContext {
		let localctx: OC_NotExpressionContext = new OC_NotExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, CypherParser.RULE_oC_NotExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 939;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===76) {
				{
				{
				this.state = 933;
				this.match(CypherParser.NOT);
				this.state = 935;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 934;
					this.match(CypherParser.SP);
					}
				}

				}
				}
				this.state = 941;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 942;
			this.oC_ComparisonExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_ComparisonExpression(): OC_ComparisonExpressionContext {
		let localctx: OC_ComparisonExpressionContext = new OC_ComparisonExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, CypherParser.RULE_oC_ComparisonExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 944;
			this.oC_StringListNullPredicateExpression();
			this.state = 951;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 157, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 946;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 945;
						this.match(CypherParser.SP);
						}
					}

					this.state = 948;
					this.oC_PartialComparisonExpression();
					}
					}
				}
				this.state = 953;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 157, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_PartialComparisonExpression(): OC_PartialComparisonExpressionContext {
		let localctx: OC_PartialComparisonExpressionContext = new OC_PartialComparisonExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, CypherParser.RULE_oC_PartialComparisonExpression);
		let _la: number;
		try {
			this.state = 984;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 954;
				this.match(CypherParser.T__2);
				this.state = 956;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 955;
					this.match(CypherParser.SP);
					}
				}

				this.state = 958;
				this.oC_StringListNullPredicateExpression();
				}
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 959;
				this.match(CypherParser.T__12);
				this.state = 961;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 960;
					this.match(CypherParser.SP);
					}
				}

				this.state = 963;
				this.oC_StringListNullPredicateExpression();
				}
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 3);
				{
				{
				this.state = 964;
				this.match(CypherParser.T__13);
				this.state = 966;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 965;
					this.match(CypherParser.SP);
					}
				}

				this.state = 968;
				this.oC_StringListNullPredicateExpression();
				}
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 4);
				{
				{
				this.state = 969;
				this.match(CypherParser.T__14);
				this.state = 971;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 970;
					this.match(CypherParser.SP);
					}
				}

				this.state = 973;
				this.oC_StringListNullPredicateExpression();
				}
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 5);
				{
				{
				this.state = 974;
				this.match(CypherParser.T__15);
				this.state = 976;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 975;
					this.match(CypherParser.SP);
					}
				}

				this.state = 978;
				this.oC_StringListNullPredicateExpression();
				}
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 6);
				{
				{
				this.state = 979;
				this.match(CypherParser.T__16);
				this.state = 981;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 980;
					this.match(CypherParser.SP);
					}
				}

				this.state = 983;
				this.oC_StringListNullPredicateExpression();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_StringListNullPredicateExpression(): OC_StringListNullPredicateExpressionContext {
		let localctx: OC_StringListNullPredicateExpressionContext = new OC_StringListNullPredicateExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, CypherParser.RULE_oC_StringListNullPredicateExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 986;
			this.oC_AddOrSubtractExpression();
			this.state = 992;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 166, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 990;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 165, this._ctx) ) {
					case 1:
						{
						this.state = 987;
						this.oC_StringPredicateExpression();
						}
						break;
					case 2:
						{
						this.state = 988;
						this.oC_ListPredicateExpression();
						}
						break;
					case 3:
						{
						this.state = 989;
						this.oC_NullPredicateExpression();
						}
						break;
					}
					}
				}
				this.state = 994;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 166, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_StringPredicateExpression(): OC_StringPredicateExpressionContext {
		let localctx: OC_StringPredicateExpressionContext = new OC_StringPredicateExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, CypherParser.RULE_oC_StringPredicateExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1005;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 167, this._ctx) ) {
			case 1:
				{
				{
				this.state = 995;
				this.match(CypherParser.SP);
				this.state = 996;
				this.match(CypherParser.STARTS);
				this.state = 997;
				this.match(CypherParser.SP);
				this.state = 998;
				this.match(CypherParser.WITH);
				}
				}
				break;
			case 2:
				{
				{
				this.state = 999;
				this.match(CypherParser.SP);
				this.state = 1000;
				this.match(CypherParser.ENDS);
				this.state = 1001;
				this.match(CypherParser.SP);
				this.state = 1002;
				this.match(CypherParser.WITH);
				}
				}
				break;
			case 3:
				{
				{
				this.state = 1003;
				this.match(CypherParser.SP);
				this.state = 1004;
				this.match(CypherParser.CONTAINS);
				}
				}
				break;
			}
			this.state = 1008;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 1007;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1010;
			this.oC_AddOrSubtractExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_ListPredicateExpression(): OC_ListPredicateExpressionContext {
		let localctx: OC_ListPredicateExpressionContext = new OC_ListPredicateExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, CypherParser.RULE_oC_ListPredicateExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1012;
			this.match(CypherParser.SP);
			this.state = 1013;
			this.match(CypherParser.IN);
			this.state = 1015;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 1014;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1017;
			this.oC_AddOrSubtractExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_NullPredicateExpression(): OC_NullPredicateExpressionContext {
		let localctx: OC_NullPredicateExpressionContext = new OC_NullPredicateExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, CypherParser.RULE_oC_NullPredicateExpression);
		try {
			this.state = 1029;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 170, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 1019;
				this.match(CypherParser.SP);
				this.state = 1020;
				this.match(CypherParser.IS);
				this.state = 1021;
				this.match(CypherParser.SP);
				this.state = 1022;
				this.match(CypherParser.NULL);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 1023;
				this.match(CypherParser.SP);
				this.state = 1024;
				this.match(CypherParser.IS);
				this.state = 1025;
				this.match(CypherParser.SP);
				this.state = 1026;
				this.match(CypherParser.NOT);
				this.state = 1027;
				this.match(CypherParser.SP);
				this.state = 1028;
				this.match(CypherParser.NULL);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_AddOrSubtractExpression(): OC_AddOrSubtractExpressionContext {
		let localctx: OC_AddOrSubtractExpressionContext = new OC_AddOrSubtractExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, CypherParser.RULE_oC_AddOrSubtractExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1031;
			this.oC_MultiplyDivideModuloExpression();
			this.state = 1050;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 176, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 1048;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 175, this._ctx) ) {
					case 1:
						{
						{
						this.state = 1033;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 1032;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1035;
						this.match(CypherParser.T__17);
						this.state = 1037;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 1036;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1039;
						this.oC_MultiplyDivideModuloExpression();
						}
						}
						break;
					case 2:
						{
						{
						this.state = 1041;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 1040;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1043;
						this.match(CypherParser.T__18);
						this.state = 1045;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 1044;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1047;
						this.oC_MultiplyDivideModuloExpression();
						}
						}
						break;
					}
					}
				}
				this.state = 1052;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 176, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_MultiplyDivideModuloExpression(): OC_MultiplyDivideModuloExpressionContext {
		let localctx: OC_MultiplyDivideModuloExpressionContext = new OC_MultiplyDivideModuloExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, CypherParser.RULE_oC_MultiplyDivideModuloExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1053;
			this.oC_PowerOfExpression();
			this.state = 1080;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 184, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 1078;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 183, this._ctx) ) {
					case 1:
						{
						{
						this.state = 1055;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 1054;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1057;
						this.match(CypherParser.T__4);
						this.state = 1059;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 1058;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1061;
						this.oC_PowerOfExpression();
						}
						}
						break;
					case 2:
						{
						{
						this.state = 1063;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 1062;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1065;
						this.match(CypherParser.T__19);
						this.state = 1067;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 1066;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1069;
						this.oC_PowerOfExpression();
						}
						}
						break;
					case 3:
						{
						{
						this.state = 1071;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 1070;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1073;
						this.match(CypherParser.T__20);
						this.state = 1075;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 1074;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1077;
						this.oC_PowerOfExpression();
						}
						}
						break;
					}
					}
				}
				this.state = 1082;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 184, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_PowerOfExpression(): OC_PowerOfExpressionContext {
		let localctx: OC_PowerOfExpressionContext = new OC_PowerOfExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, CypherParser.RULE_oC_PowerOfExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1083;
			this.oC_UnaryAddOrSubtractExpression();
			this.state = 1094;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 187, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1085;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 1084;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1087;
					this.match(CypherParser.T__21);
					this.state = 1089;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 1088;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1091;
					this.oC_UnaryAddOrSubtractExpression();
					}
					}
				}
				this.state = 1096;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 187, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_UnaryAddOrSubtractExpression(): OC_UnaryAddOrSubtractExpressionContext {
		let localctx: OC_UnaryAddOrSubtractExpressionContext = new OC_UnaryAddOrSubtractExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, CypherParser.RULE_oC_UnaryAddOrSubtractExpression);
		let _la: number;
		try {
			this.state = 1103;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
			case 8:
			case 24:
			case 26:
			case 47:
			case 82:
			case 83:
			case 84:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 105:
			case 106:
			case 107:
			case 119:
			case 120:
			case 121:
			case 124:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1097;
				this.oC_NonArithmeticOperatorExpression();
				}
				break;
			case 18:
			case 19:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 1098;
				_la = this._input.LA(1);
				if(!(_la===18 || _la===19)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 1100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1099;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1102;
				this.oC_NonArithmeticOperatorExpression();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_NonArithmeticOperatorExpression(): OC_NonArithmeticOperatorExpressionContext {
		let localctx: OC_NonArithmeticOperatorExpressionContext = new OC_NonArithmeticOperatorExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, CypherParser.RULE_oC_NonArithmeticOperatorExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1105;
			this.oC_Atom();
			this.state = 1116;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 193, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 1114;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 192, this._ctx) ) {
					case 1:
						{
						{
						this.state = 1107;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 1106;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1109;
						this.oC_ListOperatorExpression();
						}
						}
						break;
					case 2:
						{
						{
						this.state = 1111;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 1110;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1113;
						this.oC_PropertyLookup();
						}
						}
						break;
					}
					}
				}
				this.state = 1118;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 193, this._ctx);
			}
			this.state = 1123;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 195, this._ctx) ) {
			case 1:
				{
				this.state = 1120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1119;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1122;
				this.oC_NodeLabels();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_ListOperatorExpression(): OC_ListOperatorExpressionContext {
		let localctx: OC_ListOperatorExpressionContext = new OC_ListOperatorExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, CypherParser.RULE_oC_ListOperatorExpression);
		let _la: number;
		try {
			this.state = 1138;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 198, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 1125;
				this.match(CypherParser.T__7);
				this.state = 1126;
				this.oC_Expression();
				this.state = 1127;
				this.match(CypherParser.T__8);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 1129;
				this.match(CypherParser.T__7);
				this.state = 1131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 84672832) !== 0) || _la===47 || _la===76 || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & 58851207) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 39) !== 0)) {
					{
					this.state = 1130;
					this.oC_Expression();
					}
				}

				this.state = 1133;
				this.match(CypherParser.T__11);
				this.state = 1135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 84672832) !== 0) || _la===47 || _la===76 || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & 58851207) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 39) !== 0)) {
					{
					this.state = 1134;
					this.oC_Expression();
					}
				}

				this.state = 1137;
				this.match(CypherParser.T__8);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_PropertyLookup(): OC_PropertyLookupContext {
		let localctx: OC_PropertyLookupContext = new OC_PropertyLookupContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, CypherParser.RULE_oC_PropertyLookup);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1140;
			this.match(CypherParser.T__22);
			this.state = 1142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 1141;
				this.match(CypherParser.SP);
				}
			}

			{
			this.state = 1144;
			this.oC_PropertyKeyName();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_Atom(): OC_AtomContext {
		let localctx: OC_AtomContext = new OC_AtomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, CypherParser.RULE_oC_Atom);
		let _la: number;
		try {
			this.state = 1170;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 203, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1146;
				this.oC_Literal();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1147;
				this.oC_Parameter();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1148;
				this.oC_CaseExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				{
				this.state = 1149;
				this.match(CypherParser.COUNT);
				this.state = 1151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1150;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1153;
				this.match(CypherParser.T__5);
				this.state = 1155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1154;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1157;
				this.match(CypherParser.T__4);
				this.state = 1159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1158;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1161;
				this.match(CypherParser.T__6);
				}
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1162;
				this.oC_ListComprehension();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1163;
				this.oC_PatternComprehension();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1164;
				this.oC_Quantifier();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1165;
				this.oC_PatternPredicate();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1166;
				this.oC_ParenthesizedExpression();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1167;
				this.oC_FunctionInvocation();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 1168;
				this.oC_ExistentialSubquery();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 1169;
				this.oC_Variable();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_CaseExpression(): OC_CaseExpressionContext {
		let localctx: OC_CaseExpressionContext = new OC_CaseExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, CypherParser.RULE_oC_CaseExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1194;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 209, this._ctx) ) {
			case 1:
				{
				{
				this.state = 1172;
				this.match(CypherParser.CASE);
				this.state = 1177;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1174;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 1173;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1176;
						this.oC_CaseAlternative();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1179;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 205, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				}
				break;
			case 2:
				{
				{
				this.state = 1181;
				this.match(CypherParser.CASE);
				this.state = 1183;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1182;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1185;
				this.oC_Expression();
				this.state = 1190;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1187;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===125) {
							{
							this.state = 1186;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1189;
						this.oC_CaseAlternative();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1192;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 208, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				}
				break;
			}
			this.state = 1204;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 212, this._ctx) ) {
			case 1:
				{
				this.state = 1197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1196;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1199;
				this.match(CypherParser.ELSE);
				this.state = 1201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1200;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1203;
				this.oC_Expression();
				}
				break;
			}
			this.state = 1207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 1206;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1209;
			this.match(CypherParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_CaseAlternative(): OC_CaseAlternativeContext {
		let localctx: OC_CaseAlternativeContext = new OC_CaseAlternativeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, CypherParser.RULE_oC_CaseAlternative);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1211;
			this.match(CypherParser.WHEN);
			this.state = 1213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 1212;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1215;
			this.oC_Expression();
			this.state = 1217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 1216;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1219;
			this.match(CypherParser.THEN);
			this.state = 1221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 1220;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1223;
			this.oC_Expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_ListComprehension(): OC_ListComprehensionContext {
		let localctx: OC_ListComprehensionContext = new OC_ListComprehensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, CypherParser.RULE_oC_ListComprehension);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1225;
			this.match(CypherParser.T__7);
			this.state = 1227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 1226;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1229;
			this.oC_FilterExpression();
			this.state = 1238;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 220, this._ctx) ) {
			case 1:
				{
				this.state = 1231;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1230;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1233;
				this.match(CypherParser.T__10);
				this.state = 1235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1234;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1237;
				this.oC_Expression();
				}
				break;
			}
			this.state = 1241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 1240;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1243;
			this.match(CypherParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_PatternComprehension(): OC_PatternComprehensionContext {
		let localctx: OC_PatternComprehensionContext = new OC_PatternComprehensionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, CypherParser.RULE_oC_PatternComprehension);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1245;
			this.match(CypherParser.T__7);
			this.state = 1247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 1246;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 33217) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 39) !== 0)) {
				{
				this.state = 1249;
				this.oC_Variable();
				this.state = 1251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1250;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1253;
				this.match(CypherParser.T__2);
				this.state = 1255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1254;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 1259;
			this.oC_RelationshipsPattern();
			this.state = 1261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 1260;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===72) {
				{
				this.state = 1263;
				this.oC_Where();
				this.state = 1265;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1264;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 1269;
			this.match(CypherParser.T__10);
			this.state = 1271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 1270;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1273;
			this.oC_Expression();
			this.state = 1275;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 1274;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1277;
			this.match(CypherParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_Quantifier(): OC_QuantifierContext {
		let localctx: OC_QuantifierContext = new OC_QuantifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, CypherParser.RULE_oC_Quantifier);
		let _la: number;
		try {
			this.state = 1335;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 47:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 1279;
				this.match(CypherParser.ALL);
				this.state = 1281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1280;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1283;
				this.match(CypherParser.T__5);
				this.state = 1285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1284;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1287;
				this.oC_FilterExpression();
				this.state = 1289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1288;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1291;
				this.match(CypherParser.T__6);
				}
				}
				break;
			case 89:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 1293;
				this.match(CypherParser.ANY);
				this.state = 1295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1294;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1297;
				this.match(CypherParser.T__5);
				this.state = 1299;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1298;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1301;
				this.oC_FilterExpression();
				this.state = 1303;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1302;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1305;
				this.match(CypherParser.T__6);
				}
				}
				break;
			case 90:
				this.enterOuterAlt(localctx, 3);
				{
				{
				this.state = 1307;
				this.match(CypherParser.NONE);
				this.state = 1309;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1308;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1311;
				this.match(CypherParser.T__5);
				this.state = 1313;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1312;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1315;
				this.oC_FilterExpression();
				this.state = 1317;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1316;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1319;
				this.match(CypherParser.T__6);
				}
				}
				break;
			case 91:
				this.enterOuterAlt(localctx, 4);
				{
				{
				this.state = 1321;
				this.match(CypherParser.SINGLE);
				this.state = 1323;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1322;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1325;
				this.match(CypherParser.T__5);
				this.state = 1327;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1326;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1329;
				this.oC_FilterExpression();
				this.state = 1331;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1330;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1333;
				this.match(CypherParser.T__6);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_FilterExpression(): OC_FilterExpressionContext {
		let localctx: OC_FilterExpressionContext = new OC_FilterExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, CypherParser.RULE_oC_FilterExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1337;
			this.oC_IdInColl();
			this.state = 1342;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 245, this._ctx) ) {
			case 1:
				{
				this.state = 1339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1338;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1341;
				this.oC_Where();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_PatternPredicate(): OC_PatternPredicateContext {
		let localctx: OC_PatternPredicateContext = new OC_PatternPredicateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, CypherParser.RULE_oC_PatternPredicate);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1344;
			this.oC_RelationshipsPattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_ParenthesizedExpression(): OC_ParenthesizedExpressionContext {
		let localctx: OC_ParenthesizedExpressionContext = new OC_ParenthesizedExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, CypherParser.RULE_oC_ParenthesizedExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1346;
			this.match(CypherParser.T__5);
			this.state = 1348;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 1347;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1350;
			this.oC_Expression();
			this.state = 1352;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 1351;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1354;
			this.match(CypherParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_IdInColl(): OC_IdInCollContext {
		let localctx: OC_IdInCollContext = new OC_IdInCollContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, CypherParser.RULE_oC_IdInColl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1356;
			this.oC_Variable();
			this.state = 1357;
			this.match(CypherParser.SP);
			this.state = 1358;
			this.match(CypherParser.IN);
			this.state = 1359;
			this.match(CypherParser.SP);
			this.state = 1360;
			this.oC_Expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_FunctionInvocation(): OC_FunctionInvocationContext {
		let localctx: OC_FunctionInvocationContext = new OC_FunctionInvocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, CypherParser.RULE_oC_FunctionInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1362;
			this.oC_FunctionName();
			this.state = 1364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 1363;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1366;
			this.match(CypherParser.T__5);
			this.state = 1368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 1367;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===63) {
				{
				this.state = 1370;
				this.match(CypherParser.DISTINCT);
				this.state = 1372;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1371;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 1393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 84672832) !== 0) || _la===47 || _la===76 || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & 58851207) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 39) !== 0)) {
				{
				this.state = 1376;
				this.oC_Expression();
				this.state = 1378;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1377;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1390;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===2) {
					{
					{
					this.state = 1380;
					this.match(CypherParser.T__1);
					this.state = 1382;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 1381;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1384;
					this.oC_Expression();
					this.state = 1386;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 1385;
						this.match(CypherParser.SP);
						}
					}

					}
					}
					this.state = 1392;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1395;
			this.match(CypherParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_FunctionName(): OC_FunctionNameContext {
		let localctx: OC_FunctionNameContext = new OC_FunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, CypherParser.RULE_oC_FunctionName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1397;
			this.oC_Namespace();
			this.state = 1398;
			this.oC_SymbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_ExistentialSubquery(): OC_ExistentialSubqueryContext {
		let localctx: OC_ExistentialSubqueryContext = new OC_ExistentialSubqueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, CypherParser.RULE_oC_ExistentialSubquery);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1400;
			this.match(CypherParser.EXISTS);
			this.state = 1402;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 1401;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1404;
			this.match(CypherParser.T__23);
			this.state = 1406;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 1405;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1416;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 48:
			case 49:
			case 50:
			case 52:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 59:
			case 61:
			case 62:
				{
				this.state = 1408;
				this.oC_RegularQuery();
				}
				break;
			case 6:
			case 83:
			case 89:
			case 90:
			case 91:
			case 98:
			case 119:
			case 120:
			case 121:
			case 124:
				{
				{
				this.state = 1409;
				this.oC_Pattern();
				this.state = 1414;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 260, this._ctx) ) {
				case 1:
					{
					this.state = 1411;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 1410;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1413;
					this.oC_Where();
					}
					break;
				}
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1419;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 1418;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1421;
			this.match(CypherParser.T__24);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_ExplicitProcedureInvocation(): OC_ExplicitProcedureInvocationContext {
		let localctx: OC_ExplicitProcedureInvocationContext = new OC_ExplicitProcedureInvocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, CypherParser.RULE_oC_ExplicitProcedureInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1423;
			this.oC_ProcedureName();
			this.state = 1425;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 1424;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1427;
			this.match(CypherParser.T__5);
			this.state = 1429;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 1428;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1448;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 84672832) !== 0) || _la===47 || _la===76 || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & 58851207) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 39) !== 0)) {
				{
				this.state = 1431;
				this.oC_Expression();
				this.state = 1433;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1432;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1445;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===2) {
					{
					{
					this.state = 1435;
					this.match(CypherParser.T__1);
					this.state = 1437;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 1436;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1439;
					this.oC_Expression();
					this.state = 1441;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 1440;
						this.match(CypherParser.SP);
						}
					}

					}
					}
					this.state = 1447;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1450;
			this.match(CypherParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_ImplicitProcedureInvocation(): OC_ImplicitProcedureInvocationContext {
		let localctx: OC_ImplicitProcedureInvocationContext = new OC_ImplicitProcedureInvocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, CypherParser.RULE_oC_ImplicitProcedureInvocation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1452;
			this.oC_ProcedureName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_ProcedureResultField(): OC_ProcedureResultFieldContext {
		let localctx: OC_ProcedureResultFieldContext = new OC_ProcedureResultFieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, CypherParser.RULE_oC_ProcedureResultField);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1454;
			this.oC_SymbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_ProcedureName(): OC_ProcedureNameContext {
		let localctx: OC_ProcedureNameContext = new OC_ProcedureNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, CypherParser.RULE_oC_ProcedureName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1456;
			this.oC_Namespace();
			this.state = 1457;
			this.oC_SymbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_Namespace(): OC_NamespaceContext {
		let localctx: OC_NamespaceContext = new OC_NamespaceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, CypherParser.RULE_oC_Namespace);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1464;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 270, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1459;
					this.oC_SymbolicName();
					this.state = 1460;
					this.match(CypherParser.T__22);
					}
					}
				}
				this.state = 1466;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 270, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_Variable(): OC_VariableContext {
		let localctx: OC_VariableContext = new OC_VariableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, CypherParser.RULE_oC_Variable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1467;
			this.oC_SymbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_Literal(): OC_LiteralContext {
		let localctx: OC_LiteralContext = new OC_LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 176, CypherParser.RULE_oC_Literal);
		try {
			this.state = 1475;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 93:
			case 94:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1469;
				this.oC_BooleanLiteral();
				}
				break;
			case 82:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1470;
				this.match(CypherParser.NULL);
				}
				break;
			case 95:
			case 96:
			case 97:
			case 105:
			case 106:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1471;
				this.oC_NumberLiteral();
				}
				break;
			case 107:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1472;
				this.match(CypherParser.StringLiteral);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1473;
				this.oC_ListLiteral();
				}
				break;
			case 24:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1474;
				this.oC_MapLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_BooleanLiteral(): OC_BooleanLiteralContext {
		let localctx: OC_BooleanLiteralContext = new OC_BooleanLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, CypherParser.RULE_oC_BooleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1477;
			_la = this._input.LA(1);
			if(!(_la===93 || _la===94)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_NumberLiteral(): OC_NumberLiteralContext {
		let localctx: OC_NumberLiteralContext = new OC_NumberLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 180, CypherParser.RULE_oC_NumberLiteral);
		try {
			this.state = 1481;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 105:
			case 106:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1479;
				this.oC_DoubleLiteral();
				}
				break;
			case 95:
			case 96:
			case 97:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1480;
				this.oC_IntegerLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_IntegerLiteral(): OC_IntegerLiteralContext {
		let localctx: OC_IntegerLiteralContext = new OC_IntegerLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 182, CypherParser.RULE_oC_IntegerLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1483;
			_la = this._input.LA(1);
			if(!(((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 7) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_DoubleLiteral(): OC_DoubleLiteralContext {
		let localctx: OC_DoubleLiteralContext = new OC_DoubleLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, CypherParser.RULE_oC_DoubleLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1485;
			_la = this._input.LA(1);
			if(!(_la===105 || _la===106)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_ListLiteral(): OC_ListLiteralContext {
		let localctx: OC_ListLiteralContext = new OC_ListLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, CypherParser.RULE_oC_ListLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1487;
			this.match(CypherParser.T__7);
			this.state = 1489;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 1488;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1508;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 84672832) !== 0) || _la===47 || _la===76 || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & 58851207) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 39) !== 0)) {
				{
				this.state = 1491;
				this.oC_Expression();
				this.state = 1493;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1492;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1505;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===2) {
					{
					{
					this.state = 1495;
					this.match(CypherParser.T__1);
					this.state = 1497;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 1496;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1499;
					this.oC_Expression();
					this.state = 1501;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 1500;
						this.match(CypherParser.SP);
						}
					}

					}
					}
					this.state = 1507;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1510;
			this.match(CypherParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_MapLiteral(): OC_MapLiteralContext {
		let localctx: OC_MapLiteralContext = new OC_MapLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, CypherParser.RULE_oC_MapLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1512;
			this.match(CypherParser.T__23);
			this.state = 1514;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===125) {
				{
				this.state = 1513;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1549;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 4294942719) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 2148663295) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 20479) !== 0)) {
				{
				this.state = 1516;
				this.oC_PropertyKeyName();
				this.state = 1518;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1517;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1520;
				this.match(CypherParser.T__9);
				this.state = 1522;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1521;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1524;
				this.oC_Expression();
				this.state = 1526;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===125) {
					{
					this.state = 1525;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1546;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===2) {
					{
					{
					this.state = 1528;
					this.match(CypherParser.T__1);
					this.state = 1530;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 1529;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1532;
					this.oC_PropertyKeyName();
					this.state = 1534;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 1533;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1536;
					this.match(CypherParser.T__9);
					this.state = 1538;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 1537;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1540;
					this.oC_Expression();
					this.state = 1542;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===125) {
						{
						this.state = 1541;
						this.match(CypherParser.SP);
						}
					}

					}
					}
					this.state = 1548;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1551;
			this.match(CypherParser.T__24);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_PropertyKeyName(): OC_PropertyKeyNameContext {
		let localctx: OC_PropertyKeyNameContext = new OC_PropertyKeyNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 190, CypherParser.RULE_oC_PropertyKeyName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1553;
			this.oC_SchemaName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_Parameter(): OC_ParameterContext {
		let localctx: OC_ParameterContext = new OC_ParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, CypherParser.RULE_oC_Parameter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1555;
			this.match(CypherParser.T__25);
			this.state = 1558;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 83:
			case 89:
			case 90:
			case 91:
			case 98:
			case 119:
			case 120:
			case 121:
			case 124:
				{
				this.state = 1556;
				this.oC_SymbolicName();
				}
				break;
			case 96:
				{
				this.state = 1557;
				this.match(CypherParser.DecimalInteger);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_SchemaName(): OC_SchemaNameContext {
		let localctx: OC_SchemaNameContext = new OC_SchemaNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, CypherParser.RULE_oC_SchemaName);
		try {
			this.state = 1562;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 83:
			case 89:
			case 90:
			case 91:
			case 98:
			case 119:
			case 120:
			case 121:
			case 124:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1560;
				this.oC_SymbolicName();
				}
				break;
			case 46:
			case 47:
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57:
			case 58:
			case 61:
			case 62:
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 92:
			case 93:
			case 94:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1561;
				this.oC_ReservedWord();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_ReservedWord(): OC_ReservedWordContext {
		let localctx: OC_ReservedWordContext = new OC_ReservedWordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 196, CypherParser.RULE_oC_ReservedWord);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1564;
			_la = this._input.LA(1);
			if(!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 4294942719) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 2147600351) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 511) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_SymbolicName(): OC_SymbolicNameContext {
		let localctx: OC_SymbolicNameContext = new OC_SymbolicNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 198, CypherParser.RULE_oC_SymbolicName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1566;
			_la = this._input.LA(1);
			if(!(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 33217) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 39) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_LeftArrowHead(): OC_LeftArrowHeadContext {
		let localctx: OC_LeftArrowHeadContext = new OC_LeftArrowHeadContext(this, this._ctx, this.state);
		this.enterRule(localctx, 200, CypherParser.RULE_oC_LeftArrowHead);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1568;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 2013282304) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_RightArrowHead(): OC_RightArrowHeadContext {
		let localctx: OC_RightArrowHeadContext = new OC_RightArrowHeadContext(this, this._ctx, this.state);
		this.enterRule(localctx, 202, CypherParser.RULE_oC_RightArrowHead);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1570;
			_la = this._input.LA(1);
			if(!(((((_la - 15)) & ~0x1F) === 0 && ((1 << (_la - 15)) & 983041) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public oC_Dash(): OC_DashContext {
		let localctx: OC_DashContext = new OC_DashContext(this, this._ctx, this.state);
		this.enterRule(localctx, 204, CypherParser.RULE_oC_Dash);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1572;
			_la = this._input.LA(1);
			if(!(((((_la - 19)) & ~0x1F) === 0 && ((1 << (_la - 19)) & 134152193) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,127,1575,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,
	89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,
	2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,1,0,3,
	0,208,8,0,1,0,1,0,3,0,212,8,0,1,0,3,0,215,8,0,1,0,3,0,218,8,0,1,0,1,0,1,
	1,1,1,1,2,1,2,3,2,226,8,2,1,3,1,3,3,3,230,8,3,1,3,5,3,233,8,3,10,3,12,3,
	236,9,3,1,4,1,4,1,4,1,4,3,4,242,8,4,1,4,1,4,1,4,3,4,247,8,4,1,4,3,4,250,
	8,4,1,5,1,5,3,5,254,8,5,1,6,1,6,3,6,258,8,6,5,6,260,8,6,10,6,12,6,263,9,
	6,1,6,1,6,1,6,3,6,268,8,6,5,6,270,8,6,10,6,12,6,273,9,6,1,6,1,6,3,6,277,
	8,6,1,6,5,6,280,8,6,10,6,12,6,283,9,6,1,6,3,6,286,8,6,1,6,3,6,289,8,6,3,
	6,291,8,6,1,7,1,7,3,7,295,8,7,5,7,297,8,7,10,7,12,7,300,9,7,1,7,1,7,3,7,
	304,8,7,5,7,306,8,7,10,7,12,7,309,9,7,1,7,1,7,3,7,313,8,7,4,7,315,8,7,11,
	7,12,7,316,1,7,1,7,1,8,1,8,1,8,1,8,1,8,3,8,326,8,8,1,9,1,9,1,9,3,9,331,
	8,9,1,10,1,10,3,10,335,8,10,1,10,1,10,3,10,339,8,10,1,10,1,10,3,10,343,
	8,10,1,10,3,10,346,8,10,1,11,1,11,3,11,350,8,11,1,11,1,11,1,11,1,11,1,11,
	1,11,1,12,1,12,3,12,360,8,12,1,12,1,12,1,12,5,12,365,8,12,10,12,12,12,368,
	9,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,380,8,13,1,
	14,1,14,3,14,384,8,14,1,14,1,14,1,15,1,15,3,15,390,8,15,1,15,1,15,3,15,
	394,8,15,1,15,1,15,3,15,398,8,15,1,15,5,15,401,8,15,10,15,12,15,404,9,15,
	1,16,1,16,3,16,408,8,16,1,16,1,16,3,16,412,8,16,1,16,1,16,1,16,1,16,3,16,
	418,8,16,1,16,1,16,3,16,422,8,16,1,16,1,16,1,16,1,16,3,16,428,8,16,1,16,
	1,16,3,16,432,8,16,1,16,1,16,1,16,1,16,3,16,438,8,16,1,16,1,16,3,16,442,
	8,16,1,17,1,17,3,17,446,8,17,1,17,1,17,3,17,450,8,17,1,17,1,17,3,17,454,
	8,17,1,17,1,17,3,17,458,8,17,1,17,5,17,461,8,17,10,17,12,17,464,9,17,1,
	18,1,18,1,18,1,18,3,18,470,8,18,1,18,1,18,3,18,474,8,18,1,18,5,18,477,8,
	18,10,18,12,18,480,9,18,1,19,1,19,1,19,1,19,3,19,486,8,19,1,20,1,20,1,20,
	1,20,3,20,492,8,20,1,20,1,20,1,20,3,20,497,8,20,1,21,1,21,1,21,1,21,3,21,
	503,8,21,1,21,3,21,506,8,21,1,21,1,21,1,21,1,21,3,21,512,8,21,3,21,514,
	8,21,1,22,1,22,3,22,518,8,22,1,22,1,22,3,22,522,8,22,1,22,5,22,525,8,22,
	10,22,12,22,528,9,22,1,22,3,22,531,8,22,1,22,3,22,534,8,22,1,23,1,23,1,
	23,1,23,1,23,3,23,541,8,23,1,23,1,23,1,24,1,24,1,24,3,24,548,8,24,1,24,
	3,24,551,8,24,1,25,1,25,1,25,1,26,3,26,557,8,26,1,26,3,26,560,8,26,1,26,
	1,26,1,26,1,26,3,26,566,8,26,1,26,1,26,3,26,570,8,26,1,26,1,26,3,26,574,
	8,26,1,27,1,27,3,27,578,8,27,1,27,1,27,3,27,582,8,27,1,27,5,27,585,8,27,
	10,27,12,27,588,9,27,1,27,1,27,3,27,592,8,27,1,27,1,27,3,27,596,8,27,1,
	27,5,27,599,8,27,10,27,12,27,602,9,27,3,27,604,8,27,1,28,1,28,1,28,1,28,
	1,28,1,28,1,28,3,28,613,8,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,3,29,622,
	8,29,1,29,5,29,625,8,29,10,29,12,29,628,9,29,1,30,1,30,1,30,1,30,1,31,1,
	31,1,31,1,31,1,32,1,32,3,32,640,8,32,1,32,3,32,643,8,32,1,33,1,33,1,33,
	1,33,1,34,1,34,3,34,651,8,34,1,34,1,34,3,34,655,8,34,1,34,5,34,658,8,34,
	10,34,12,34,661,9,34,1,35,1,35,3,35,665,8,35,1,35,1,35,3,35,669,8,35,1,
	35,1,35,1,35,3,35,674,8,35,1,36,1,36,1,37,1,37,3,37,680,8,37,1,37,5,37,
	683,8,37,10,37,12,37,686,9,37,1,37,1,37,1,37,1,37,3,37,692,8,37,1,38,1,
	38,3,38,696,8,38,1,38,4,38,699,8,38,11,38,12,38,700,1,39,1,39,3,39,705,
	8,39,1,39,1,39,3,39,709,8,39,3,39,711,8,39,1,39,1,39,3,39,715,8,39,3,39,
	717,8,39,1,39,1,39,3,39,721,8,39,3,39,723,8,39,1,39,1,39,1,40,1,40,3,40,
	729,8,40,1,40,1,40,1,41,1,41,3,41,735,8,41,1,41,1,41,3,41,739,8,41,1,41,
	3,41,742,8,41,1,41,3,41,745,8,41,1,41,1,41,3,41,749,8,41,1,41,1,41,1,41,
	1,41,3,41,755,8,41,1,41,1,41,3,41,759,8,41,1,41,3,41,762,8,41,1,41,3,41,
	765,8,41,1,41,1,41,1,41,1,41,3,41,771,8,41,1,41,3,41,774,8,41,1,41,3,41,
	777,8,41,1,41,1,41,3,41,781,8,41,1,41,1,41,1,41,1,41,3,41,787,8,41,1,41,
	3,41,790,8,41,1,41,3,41,793,8,41,1,41,1,41,3,41,797,8,41,1,42,1,42,3,42,
	801,8,42,1,42,1,42,3,42,805,8,42,3,42,807,8,42,1,42,1,42,3,42,811,8,42,
	3,42,813,8,42,1,42,3,42,816,8,42,1,42,1,42,3,42,820,8,42,3,42,822,8,42,
	1,42,1,42,1,43,1,43,3,43,828,8,43,1,44,1,44,3,44,832,8,44,1,44,1,44,3,44,
	836,8,44,1,44,1,44,3,44,840,8,44,1,44,3,44,843,8,44,1,44,5,44,846,8,44,
	10,44,12,44,849,9,44,1,45,1,45,3,45,853,8,45,1,45,5,45,856,8,45,10,45,12,
	45,859,9,45,1,46,1,46,3,46,863,8,46,1,46,1,46,1,47,1,47,3,47,869,8,47,1,
	47,1,47,3,47,873,8,47,3,47,875,8,47,1,47,1,47,3,47,879,8,47,1,47,1,47,3,
	47,883,8,47,3,47,885,8,47,3,47,887,8,47,1,48,1,48,1,49,1,49,1,50,1,50,3,
	50,895,8,50,1,50,4,50,898,8,50,11,50,12,50,899,1,51,1,51,1,52,1,52,1,52,
	1,52,1,52,5,52,909,8,52,10,52,12,52,912,9,52,1,53,1,53,1,53,1,53,1,53,5,
	53,919,8,53,10,53,12,53,922,9,53,1,54,1,54,1,54,1,54,1,54,5,54,929,8,54,
	10,54,12,54,932,9,54,1,55,1,55,3,55,936,8,55,5,55,938,8,55,10,55,12,55,
	941,9,55,1,55,1,55,1,56,1,56,3,56,947,8,56,1,56,5,56,950,8,56,10,56,12,
	56,953,9,56,1,57,1,57,3,57,957,8,57,1,57,1,57,1,57,3,57,962,8,57,1,57,1,
	57,1,57,3,57,967,8,57,1,57,1,57,1,57,3,57,972,8,57,1,57,1,57,1,57,3,57,
	977,8,57,1,57,1,57,1,57,3,57,982,8,57,1,57,3,57,985,8,57,1,58,1,58,1,58,
	1,58,5,58,991,8,58,10,58,12,58,994,9,58,1,59,1,59,1,59,1,59,1,59,1,59,1,
	59,1,59,1,59,1,59,3,59,1006,8,59,1,59,3,59,1009,8,59,1,59,1,59,1,60,1,60,
	1,60,3,60,1016,8,60,1,60,1,60,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,1,
	61,1,61,3,61,1030,8,61,1,62,1,62,3,62,1034,8,62,1,62,1,62,3,62,1038,8,62,
	1,62,1,62,3,62,1042,8,62,1,62,1,62,3,62,1046,8,62,1,62,5,62,1049,8,62,10,
	62,12,62,1052,9,62,1,63,1,63,3,63,1056,8,63,1,63,1,63,3,63,1060,8,63,1,
	63,1,63,3,63,1064,8,63,1,63,1,63,3,63,1068,8,63,1,63,1,63,3,63,1072,8,63,
	1,63,1,63,3,63,1076,8,63,1,63,5,63,1079,8,63,10,63,12,63,1082,9,63,1,64,
	1,64,3,64,1086,8,64,1,64,1,64,3,64,1090,8,64,1,64,5,64,1093,8,64,10,64,
	12,64,1096,9,64,1,65,1,65,1,65,3,65,1101,8,65,1,65,3,65,1104,8,65,1,66,
	1,66,3,66,1108,8,66,1,66,1,66,3,66,1112,8,66,1,66,5,66,1115,8,66,10,66,
	12,66,1118,9,66,1,66,3,66,1121,8,66,1,66,3,66,1124,8,66,1,67,1,67,1,67,
	1,67,1,67,1,67,3,67,1132,8,67,1,67,1,67,3,67,1136,8,67,1,67,3,67,1139,8,
	67,1,68,1,68,3,68,1143,8,68,1,68,1,68,1,69,1,69,1,69,1,69,1,69,3,69,1152,
	8,69,1,69,1,69,3,69,1156,8,69,1,69,1,69,3,69,1160,8,69,1,69,1,69,1,69,1,
	69,1,69,1,69,1,69,1,69,1,69,3,69,1171,8,69,1,70,1,70,3,70,1175,8,70,1,70,
	4,70,1178,8,70,11,70,12,70,1179,1,70,1,70,3,70,1184,8,70,1,70,1,70,3,70,
	1188,8,70,1,70,4,70,1191,8,70,11,70,12,70,1192,3,70,1195,8,70,1,70,3,70,
	1198,8,70,1,70,1,70,3,70,1202,8,70,1,70,3,70,1205,8,70,1,70,3,70,1208,8,
	70,1,70,1,70,1,71,1,71,3,71,1214,8,71,1,71,1,71,3,71,1218,8,71,1,71,1,71,
	3,71,1222,8,71,1,71,1,71,1,72,1,72,3,72,1228,8,72,1,72,1,72,3,72,1232,8,
	72,1,72,1,72,3,72,1236,8,72,1,72,3,72,1239,8,72,1,72,3,72,1242,8,72,1,72,
	1,72,1,73,1,73,3,73,1248,8,73,1,73,1,73,3,73,1252,8,73,1,73,1,73,3,73,1256,
	8,73,3,73,1258,8,73,1,73,1,73,3,73,1262,8,73,1,73,1,73,3,73,1266,8,73,3,
	73,1268,8,73,1,73,1,73,3,73,1272,8,73,1,73,1,73,3,73,1276,8,73,1,73,1,73,
	1,74,1,74,3,74,1282,8,74,1,74,1,74,3,74,1286,8,74,1,74,1,74,3,74,1290,8,
	74,1,74,1,74,1,74,1,74,3,74,1296,8,74,1,74,1,74,3,74,1300,8,74,1,74,1,74,
	3,74,1304,8,74,1,74,1,74,1,74,1,74,3,74,1310,8,74,1,74,1,74,3,74,1314,8,
	74,1,74,1,74,3,74,1318,8,74,1,74,1,74,1,74,1,74,3,74,1324,8,74,1,74,1,74,
	3,74,1328,8,74,1,74,1,74,3,74,1332,8,74,1,74,1,74,3,74,1336,8,74,1,75,1,
	75,3,75,1340,8,75,1,75,3,75,1343,8,75,1,76,1,76,1,77,1,77,3,77,1349,8,77,
	1,77,1,77,3,77,1353,8,77,1,77,1,77,1,78,1,78,1,78,1,78,1,78,1,78,1,79,1,
	79,3,79,1365,8,79,1,79,1,79,3,79,1369,8,79,1,79,1,79,3,79,1373,8,79,3,79,
	1375,8,79,1,79,1,79,3,79,1379,8,79,1,79,1,79,3,79,1383,8,79,1,79,1,79,3,
	79,1387,8,79,5,79,1389,8,79,10,79,12,79,1392,9,79,3,79,1394,8,79,1,79,1,
	79,1,80,1,80,1,80,1,81,1,81,3,81,1403,8,81,1,81,1,81,3,81,1407,8,81,1,81,
	1,81,1,81,3,81,1412,8,81,1,81,3,81,1415,8,81,3,81,1417,8,81,1,81,3,81,1420,
	8,81,1,81,1,81,1,82,1,82,3,82,1426,8,82,1,82,1,82,3,82,1430,8,82,1,82,1,
	82,3,82,1434,8,82,1,82,1,82,3,82,1438,8,82,1,82,1,82,3,82,1442,8,82,5,82,
	1444,8,82,10,82,12,82,1447,9,82,3,82,1449,8,82,1,82,1,82,1,83,1,83,1,84,
	1,84,1,85,1,85,1,85,1,86,1,86,1,86,5,86,1463,8,86,10,86,12,86,1466,9,86,
	1,87,1,87,1,88,1,88,1,88,1,88,1,88,1,88,3,88,1476,8,88,1,89,1,89,1,90,1,
	90,3,90,1482,8,90,1,91,1,91,1,92,1,92,1,93,1,93,3,93,1490,8,93,1,93,1,93,
	3,93,1494,8,93,1,93,1,93,3,93,1498,8,93,1,93,1,93,3,93,1502,8,93,5,93,1504,
	8,93,10,93,12,93,1507,9,93,3,93,1509,8,93,1,93,1,93,1,94,1,94,3,94,1515,
	8,94,1,94,1,94,3,94,1519,8,94,1,94,1,94,3,94,1523,8,94,1,94,1,94,3,94,1527,
	8,94,1,94,1,94,3,94,1531,8,94,1,94,1,94,3,94,1535,8,94,1,94,1,94,3,94,1539,
	8,94,1,94,1,94,3,94,1543,8,94,5,94,1545,8,94,10,94,12,94,1548,9,94,3,94,
	1550,8,94,1,94,1,94,1,95,1,95,1,96,1,96,1,96,3,96,1559,8,96,1,97,1,97,3,
	97,1563,8,97,1,98,1,98,1,99,1,99,1,100,1,100,1,101,1,101,1,102,1,102,1,
	102,0,0,103,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,
	44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,
	92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,
	130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,
	166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,
	202,204,0,10,1,0,68,71,1,0,18,19,1,0,93,94,1,0,95,97,1,0,105,106,5,0,46,
	58,61,82,84,88,92,94,109,118,5,0,83,83,89,91,98,98,119,121,124,124,2,0,
	14,14,27,30,2,0,15,15,31,34,2,0,19,19,35,45,1793,0,207,1,0,0,0,2,221,1,
	0,0,0,4,225,1,0,0,0,6,227,1,0,0,0,8,249,1,0,0,0,10,253,1,0,0,0,12,290,1,
	0,0,0,14,314,1,0,0,0,16,325,1,0,0,0,18,330,1,0,0,0,20,334,1,0,0,0,22,347,
	1,0,0,0,24,357,1,0,0,0,26,379,1,0,0,0,28,381,1,0,0,0,30,387,1,0,0,0,32,
	441,1,0,0,0,34,445,1,0,0,0,36,465,1,0,0,0,38,485,1,0,0,0,40,487,1,0,0,0,
	42,498,1,0,0,0,44,515,1,0,0,0,46,540,1,0,0,0,48,544,1,0,0,0,50,552,1,0,
	0,0,52,559,1,0,0,0,54,603,1,0,0,0,56,612,1,0,0,0,58,614,1,0,0,0,60,629,
	1,0,0,0,62,633,1,0,0,0,64,637,1,0,0,0,66,644,1,0,0,0,68,648,1,0,0,0,70,
	673,1,0,0,0,72,675,1,0,0,0,74,691,1,0,0,0,76,693,1,0,0,0,78,702,1,0,0,0,
	80,726,1,0,0,0,82,796,1,0,0,0,84,798,1,0,0,0,86,827,1,0,0,0,88,829,1,0,
	0,0,90,850,1,0,0,0,92,860,1,0,0,0,94,866,1,0,0,0,96,888,1,0,0,0,98,890,
	1,0,0,0,100,892,1,0,0,0,102,901,1,0,0,0,104,903,1,0,0,0,106,913,1,0,0,0,
	108,923,1,0,0,0,110,939,1,0,0,0,112,944,1,0,0,0,114,984,1,0,0,0,116,986,
	1,0,0,0,118,1005,1,0,0,0,120,1012,1,0,0,0,122,1029,1,0,0,0,124,1031,1,0,
	0,0,126,1053,1,0,0,0,128,1083,1,0,0,0,130,1103,1,0,0,0,132,1105,1,0,0,0,
	134,1138,1,0,0,0,136,1140,1,0,0,0,138,1170,1,0,0,0,140,1194,1,0,0,0,142,
	1211,1,0,0,0,144,1225,1,0,0,0,146,1245,1,0,0,0,148,1335,1,0,0,0,150,1337,
	1,0,0,0,152,1344,1,0,0,0,154,1346,1,0,0,0,156,1356,1,0,0,0,158,1362,1,0,
	0,0,160,1397,1,0,0,0,162,1400,1,0,0,0,164,1423,1,0,0,0,166,1452,1,0,0,0,
	168,1454,1,0,0,0,170,1456,1,0,0,0,172,1464,1,0,0,0,174,1467,1,0,0,0,176,
	1475,1,0,0,0,178,1477,1,0,0,0,180,1481,1,0,0,0,182,1483,1,0,0,0,184,1485,
	1,0,0,0,186,1487,1,0,0,0,188,1512,1,0,0,0,190,1553,1,0,0,0,192,1555,1,0,
	0,0,194,1562,1,0,0,0,196,1564,1,0,0,0,198,1566,1,0,0,0,200,1568,1,0,0,0,
	202,1570,1,0,0,0,204,1572,1,0,0,0,206,208,5,125,0,0,207,206,1,0,0,0,207,
	208,1,0,0,0,208,209,1,0,0,0,209,214,3,2,1,0,210,212,5,125,0,0,211,210,1,
	0,0,0,211,212,1,0,0,0,212,213,1,0,0,0,213,215,5,1,0,0,214,211,1,0,0,0,214,
	215,1,0,0,0,215,217,1,0,0,0,216,218,5,125,0,0,217,216,1,0,0,0,217,218,1,
	0,0,0,218,219,1,0,0,0,219,220,5,0,0,1,220,1,1,0,0,0,221,222,3,4,2,0,222,
	3,1,0,0,0,223,226,3,6,3,0,224,226,3,42,21,0,225,223,1,0,0,0,225,224,1,0,
	0,0,226,5,1,0,0,0,227,234,3,10,5,0,228,230,5,125,0,0,229,228,1,0,0,0,229,
	230,1,0,0,0,230,231,1,0,0,0,231,233,3,8,4,0,232,229,1,0,0,0,233,236,1,0,
	0,0,234,232,1,0,0,0,234,235,1,0,0,0,235,7,1,0,0,0,236,234,1,0,0,0,237,238,
	5,46,0,0,238,239,5,125,0,0,239,241,5,47,0,0,240,242,5,125,0,0,241,240,1,
	0,0,0,241,242,1,0,0,0,242,243,1,0,0,0,243,250,3,10,5,0,244,246,5,46,0,0,
	245,247,5,125,0,0,246,245,1,0,0,0,246,247,1,0,0,0,247,248,1,0,0,0,248,250,
	3,10,5,0,249,237,1,0,0,0,249,244,1,0,0,0,250,9,1,0,0,0,251,254,3,12,6,0,
	252,254,3,14,7,0,253,251,1,0,0,0,253,252,1,0,0,0,254,11,1,0,0,0,255,257,
	3,18,9,0,256,258,5,125,0,0,257,256,1,0,0,0,257,258,1,0,0,0,258,260,1,0,
	0,0,259,255,1,0,0,0,260,263,1,0,0,0,261,259,1,0,0,0,261,262,1,0,0,0,262,
	264,1,0,0,0,263,261,1,0,0,0,264,291,3,50,25,0,265,267,3,18,9,0,266,268,
	5,125,0,0,267,266,1,0,0,0,267,268,1,0,0,0,268,270,1,0,0,0,269,265,1,0,0,
	0,270,273,1,0,0,0,271,269,1,0,0,0,271,272,1,0,0,0,272,274,1,0,0,0,273,271,
	1,0,0,0,274,281,3,16,8,0,275,277,5,125,0,0,276,275,1,0,0,0,276,277,1,0,
	0,0,277,278,1,0,0,0,278,280,3,16,8,0,279,276,1,0,0,0,280,283,1,0,0,0,281,
	279,1,0,0,0,281,282,1,0,0,0,282,288,1,0,0,0,283,281,1,0,0,0,284,286,5,125,
	0,0,285,284,1,0,0,0,285,286,1,0,0,0,286,287,1,0,0,0,287,289,3,50,25,0,288,
	285,1,0,0,0,288,289,1,0,0,0,289,291,1,0,0,0,290,261,1,0,0,0,290,271,1,0,
	0,0,291,13,1,0,0,0,292,294,3,18,9,0,293,295,5,125,0,0,294,293,1,0,0,0,294,
	295,1,0,0,0,295,297,1,0,0,0,296,292,1,0,0,0,297,300,1,0,0,0,298,296,1,0,
	0,0,298,299,1,0,0,0,299,307,1,0,0,0,300,298,1,0,0,0,301,303,3,16,8,0,302,
	304,5,125,0,0,303,302,1,0,0,0,303,304,1,0,0,0,304,306,1,0,0,0,305,301,1,
	0,0,0,306,309,1,0,0,0,307,305,1,0,0,0,307,308,1,0,0,0,308,310,1,0,0,0,309,
	307,1,0,0,0,310,312,3,48,24,0,311,313,5,125,0,0,312,311,1,0,0,0,312,313,
	1,0,0,0,313,315,1,0,0,0,314,298,1,0,0,0,315,316,1,0,0,0,316,314,1,0,0,0,
	316,317,1,0,0,0,317,318,1,0,0,0,318,319,3,12,6,0,319,15,1,0,0,0,320,326,
	3,28,14,0,321,326,3,24,12,0,322,326,3,34,17,0,323,326,3,30,15,0,324,326,
	3,36,18,0,325,320,1,0,0,0,325,321,1,0,0,0,325,322,1,0,0,0,325,323,1,0,0,
	0,325,324,1,0,0,0,326,17,1,0,0,0,327,331,3,20,10,0,328,331,3,22,11,0,329,
	331,3,40,20,0,330,327,1,0,0,0,330,328,1,0,0,0,330,329,1,0,0,0,331,19,1,
	0,0,0,332,333,5,48,0,0,333,335,5,125,0,0,334,332,1,0,0,0,334,335,1,0,0,
	0,335,336,1,0,0,0,336,338,5,49,0,0,337,339,5,125,0,0,338,337,1,0,0,0,338,
	339,1,0,0,0,339,340,1,0,0,0,340,345,3,68,34,0,341,343,5,125,0,0,342,341,
	1,0,0,0,342,343,1,0,0,0,343,344,1,0,0,0,344,346,3,66,33,0,345,342,1,0,0,
	0,345,346,1,0,0,0,346,21,1,0,0,0,347,349,5,50,0,0,348,350,5,125,0,0,349,
	348,1,0,0,0,349,350,1,0,0,0,350,351,1,0,0,0,351,352,3,102,51,0,352,353,
	5,125,0,0,353,354,5,51,0,0,354,355,5,125,0,0,355,356,3,174,87,0,356,23,
	1,0,0,0,357,359,5,52,0,0,358,360,5,125,0,0,359,358,1,0,0,0,359,360,1,0,
	0,0,360,361,1,0,0,0,361,366,3,70,35,0,362,363,5,125,0,0,363,365,3,26,13,
	0,364,362,1,0,0,0,365,368,1,0,0,0,366,364,1,0,0,0,366,367,1,0,0,0,367,25,
	1,0,0,0,368,366,1,0,0,0,369,370,5,53,0,0,370,371,5,125,0,0,371,372,5,49,
	0,0,372,373,5,125,0,0,373,380,3,30,15,0,374,375,5,53,0,0,375,376,5,125,
	0,0,376,377,5,54,0,0,377,378,5,125,0,0,378,380,3,30,15,0,379,369,1,0,0,
	0,379,374,1,0,0,0,380,27,1,0,0,0,381,383,5,54,0,0,382,384,5,125,0,0,383,
	382,1,0,0,0,383,384,1,0,0,0,384,385,1,0,0,0,385,386,3,68,34,0,386,29,1,
	0,0,0,387,389,5,55,0,0,388,390,5,125,0,0,389,388,1,0,0,0,389,390,1,0,0,
	0,390,391,1,0,0,0,391,402,3,32,16,0,392,394,5,125,0,0,393,392,1,0,0,0,393,
	394,1,0,0,0,394,395,1,0,0,0,395,397,5,2,0,0,396,398,5,125,0,0,397,396,1,
	0,0,0,397,398,1,0,0,0,398,399,1,0,0,0,399,401,3,32,16,0,400,393,1,0,0,0,
	401,404,1,0,0,0,402,400,1,0,0,0,402,403,1,0,0,0,403,31,1,0,0,0,404,402,
	1,0,0,0,405,407,3,100,50,0,406,408,5,125,0,0,407,406,1,0,0,0,407,408,1,
	0,0,0,408,409,1,0,0,0,409,411,5,3,0,0,410,412,5,125,0,0,411,410,1,0,0,0,
	411,412,1,0,0,0,412,413,1,0,0,0,413,414,3,102,51,0,414,442,1,0,0,0,415,
	417,3,174,87,0,416,418,5,125,0,0,417,416,1,0,0,0,417,418,1,0,0,0,418,419,
	1,0,0,0,419,421,5,3,0,0,420,422,5,125,0,0,421,420,1,0,0,0,421,422,1,0,0,
	0,422,423,1,0,0,0,423,424,3,102,51,0,424,442,1,0,0,0,425,427,3,174,87,0,
	426,428,5,125,0,0,427,426,1,0,0,0,427,428,1,0,0,0,428,429,1,0,0,0,429,431,
	5,4,0,0,430,432,5,125,0,0,431,430,1,0,0,0,431,432,1,0,0,0,432,433,1,0,0,
	0,433,434,3,102,51,0,434,442,1,0,0,0,435,437,3,174,87,0,436,438,5,125,0,
	0,437,436,1,0,0,0,437,438,1,0,0,0,438,439,1,0,0,0,439,440,3,90,45,0,440,
	442,1,0,0,0,441,405,1,0,0,0,441,415,1,0,0,0,441,425,1,0,0,0,441,435,1,0,
	0,0,442,33,1,0,0,0,443,444,5,56,0,0,444,446,5,125,0,0,445,443,1,0,0,0,445,
	446,1,0,0,0,446,447,1,0,0,0,447,449,5,57,0,0,448,450,5,125,0,0,449,448,
	1,0,0,0,449,450,1,0,0,0,450,451,1,0,0,0,451,462,3,102,51,0,452,454,5,125,
	0,0,453,452,1,0,0,0,453,454,1,0,0,0,454,455,1,0,0,0,455,457,5,2,0,0,456,
	458,5,125,0,0,457,456,1,0,0,0,457,458,1,0,0,0,458,459,1,0,0,0,459,461,3,
	102,51,0,460,453,1,0,0,0,461,464,1,0,0,0,462,460,1,0,0,0,462,463,1,0,0,
	0,463,35,1,0,0,0,464,462,1,0,0,0,465,466,5,58,0,0,466,467,5,125,0,0,467,
	478,3,38,19,0,468,470,5,125,0,0,469,468,1,0,0,0,469,470,1,0,0,0,470,471,
	1,0,0,0,471,473,5,2,0,0,472,474,5,125,0,0,473,472,1,0,0,0,473,474,1,0,0,
	0,474,475,1,0,0,0,475,477,3,38,19,0,476,469,1,0,0,0,477,480,1,0,0,0,478,
	476,1,0,0,0,478,479,1,0,0,0,479,37,1,0,0,0,480,478,1,0,0,0,481,482,3,174,
	87,0,482,483,3,90,45,0,483,486,1,0,0,0,484,486,3,100,50,0,485,481,1,0,0,
	0,485,484,1,0,0,0,486,39,1,0,0,0,487,488,5,59,0,0,488,489,5,125,0,0,489,
	496,3,164,82,0,490,492,5,125,0,0,491,490,1,0,0,0,491,492,1,0,0,0,492,493,
	1,0,0,0,493,494,5,60,0,0,494,495,5,125,0,0,495,497,3,44,22,0,496,491,1,
	0,0,0,496,497,1,0,0,0,497,41,1,0,0,0,498,499,5,59,0,0,499,502,5,125,0,0,
	500,503,3,164,82,0,501,503,3,166,83,0,502,500,1,0,0,0,502,501,1,0,0,0,503,
	513,1,0,0,0,504,506,5,125,0,0,505,504,1,0,0,0,505,506,1,0,0,0,506,507,1,
	0,0,0,507,508,5,60,0,0,508,511,5,125,0,0,509,512,5,5,0,0,510,512,3,44,22,
	0,511,509,1,0,0,0,511,510,1,0,0,0,512,514,1,0,0,0,513,505,1,0,0,0,513,514,
	1,0,0,0,514,43,1,0,0,0,515,526,3,46,23,0,516,518,5,125,0,0,517,516,1,0,
	0,0,517,518,1,0,0,0,518,519,1,0,0,0,519,521,5,2,0,0,520,522,5,125,0,0,521,
	520,1,0,0,0,521,522,1,0,0,0,522,523,1,0,0,0,523,525,3,46,23,0,524,517,1,
	0,0,0,525,528,1,0,0,0,526,524,1,0,0,0,526,527,1,0,0,0,527,533,1,0,0,0,528,
	526,1,0,0,0,529,531,5,125,0,0,530,529,1,0,0,0,530,531,1,0,0,0,531,532,1,
	0,0,0,532,534,3,66,33,0,533,530,1,0,0,0,533,534,1,0,0,0,534,45,1,0,0,0,
	535,536,3,168,84,0,536,537,5,125,0,0,537,538,5,51,0,0,538,539,5,125,0,0,
	539,541,1,0,0,0,540,535,1,0,0,0,540,541,1,0,0,0,541,542,1,0,0,0,542,543,
	3,174,87,0,543,47,1,0,0,0,544,545,5,61,0,0,545,550,3,52,26,0,546,548,5,
	125,0,0,547,546,1,0,0,0,547,548,1,0,0,0,548,549,1,0,0,0,549,551,3,66,33,
	0,550,547,1,0,0,0,550,551,1,0,0,0,551,49,1,0,0,0,552,553,5,62,0,0,553,554,
	3,52,26,0,554,51,1,0,0,0,555,557,5,125,0,0,556,555,1,0,0,0,556,557,1,0,
	0,0,557,558,1,0,0,0,558,560,5,63,0,0,559,556,1,0,0,0,559,560,1,0,0,0,560,
	561,1,0,0,0,561,562,5,125,0,0,562,565,3,54,27,0,563,564,5,125,0,0,564,566,
	3,58,29,0,565,563,1,0,0,0,565,566,1,0,0,0,566,569,1,0,0,0,567,568,5,125,
	0,0,568,570,3,60,30,0,569,567,1,0,0,0,569,570,1,0,0,0,570,573,1,0,0,0,571,
	572,5,125,0,0,572,574,3,62,31,0,573,571,1,0,0,0,573,574,1,0,0,0,574,53,
	1,0,0,0,575,586,5,5,0,0,576,578,5,125,0,0,577,576,1,0,0,0,577,578,1,0,0,
	0,578,579,1,0,0,0,579,581,5,2,0,0,580,582,5,125,0,0,581,580,1,0,0,0,581,
	582,1,0,0,0,582,583,1,0,0,0,583,585,3,56,28,0,584,577,1,0,0,0,585,588,1,
	0,0,0,586,584,1,0,0,0,586,587,1,0,0,0,587,604,1,0,0,0,588,586,1,0,0,0,589,
	600,3,56,28,0,590,592,5,125,0,0,591,590,1,0,0,0,591,592,1,0,0,0,592,593,
	1,0,0,0,593,595,5,2,0,0,594,596,5,125,0,0,595,594,1,0,0,0,595,596,1,0,0,
	0,596,597,1,0,0,0,597,599,3,56,28,0,598,591,1,0,0,0,599,602,1,0,0,0,600,
	598,1,0,0,0,600,601,1,0,0,0,601,604,1,0,0,0,602,600,1,0,0,0,603,575,1,0,
	0,0,603,589,1,0,0,0,604,55,1,0,0,0,605,606,3,102,51,0,606,607,5,125,0,0,
	607,608,5,51,0,0,608,609,5,125,0,0,609,610,3,174,87,0,610,613,1,0,0,0,611,
	613,3,102,51,0,612,605,1,0,0,0,612,611,1,0,0,0,613,57,1,0,0,0,614,615,5,
	64,0,0,615,616,5,125,0,0,616,617,5,65,0,0,617,618,5,125,0,0,618,626,3,64,
	32,0,619,621,5,2,0,0,620,622,5,125,0,0,621,620,1,0,0,0,621,622,1,0,0,0,
	622,623,1,0,0,0,623,625,3,64,32,0,624,619,1,0,0,0,625,628,1,0,0,0,626,624,
	1,0,0,0,626,627,1,0,0,0,627,59,1,0,0,0,628,626,1,0,0,0,629,630,5,66,0,0,
	630,631,5,125,0,0,631,632,3,102,51,0,632,61,1,0,0,0,633,634,5,67,0,0,634,
	635,5,125,0,0,635,636,3,102,51,0,636,63,1,0,0,0,637,642,3,102,51,0,638,
	640,5,125,0,0,639,638,1,0,0,0,639,640,1,0,0,0,640,641,1,0,0,0,641,643,7,
	0,0,0,642,639,1,0,0,0,642,643,1,0,0,0,643,65,1,0,0,0,644,645,5,72,0,0,645,
	646,5,125,0,0,646,647,3,102,51,0,647,67,1,0,0,0,648,659,3,70,35,0,649,651,
	5,125,0,0,650,649,1,0,0,0,650,651,1,0,0,0,651,652,1,0,0,0,652,654,5,2,0,
	0,653,655,5,125,0,0,654,653,1,0,0,0,654,655,1,0,0,0,655,656,1,0,0,0,656,
	658,3,70,35,0,657,650,1,0,0,0,658,661,1,0,0,0,659,657,1,0,0,0,659,660,1,
	0,0,0,660,69,1,0,0,0,661,659,1,0,0,0,662,664,3,174,87,0,663,665,5,125,0,
	0,664,663,1,0,0,0,664,665,1,0,0,0,665,666,1,0,0,0,666,668,5,3,0,0,667,669,
	5,125,0,0,668,667,1,0,0,0,668,669,1,0,0,0,669,670,1,0,0,0,670,671,3,72,
	36,0,671,674,1,0,0,0,672,674,3,72,36,0,673,662,1,0,0,0,673,672,1,0,0,0,
	674,71,1,0,0,0,675,676,3,74,37,0,676,73,1,0,0,0,677,684,3,78,39,0,678,680,
	5,125,0,0,679,678,1,0,0,0,679,680,1,0,0,0,680,681,1,0,0,0,681,683,3,80,
	40,0,682,679,1,0,0,0,683,686,1,0,0,0,684,682,1,0,0,0,684,685,1,0,0,0,685,
	692,1,0,0,0,686,684,1,0,0,0,687,688,5,6,0,0,688,689,3,74,37,0,689,690,5,
	7,0,0,690,692,1,0,0,0,691,677,1,0,0,0,691,687,1,0,0,0,692,75,1,0,0,0,693,
	698,3,78,39,0,694,696,5,125,0,0,695,694,1,0,0,0,695,696,1,0,0,0,696,697,
	1,0,0,0,697,699,3,80,40,0,698,695,1,0,0,0,699,700,1,0,0,0,700,698,1,0,0,
	0,700,701,1,0,0,0,701,77,1,0,0,0,702,704,5,6,0,0,703,705,5,125,0,0,704,
	703,1,0,0,0,704,705,1,0,0,0,705,710,1,0,0,0,706,708,3,174,87,0,707,709,
	5,125,0,0,708,707,1,0,0,0,708,709,1,0,0,0,709,711,1,0,0,0,710,706,1,0,0,
	0,710,711,1,0,0,0,711,716,1,0,0,0,712,714,3,90,45,0,713,715,5,125,0,0,714,
	713,1,0,0,0,714,715,1,0,0,0,715,717,1,0,0,0,716,712,1,0,0,0,716,717,1,0,
	0,0,717,722,1,0,0,0,718,720,3,86,43,0,719,721,5,125,0,0,720,719,1,0,0,0,
	720,721,1,0,0,0,721,723,1,0,0,0,722,718,1,0,0,0,722,723,1,0,0,0,723,724,
	1,0,0,0,724,725,5,7,0,0,725,79,1,0,0,0,726,728,3,82,41,0,727,729,5,125,
	0,0,728,727,1,0,0,0,728,729,1,0,0,0,729,730,1,0,0,0,730,731,3,78,39,0,731,
	81,1,0,0,0,732,734,3,200,100,0,733,735,5,125,0,0,734,733,1,0,0,0,734,735,
	1,0,0,0,735,736,1,0,0,0,736,738,3,204,102,0,737,739,5,125,0,0,738,737,1,
	0,0,0,738,739,1,0,0,0,739,741,1,0,0,0,740,742,3,84,42,0,741,740,1,0,0,0,
	741,742,1,0,0,0,742,744,1,0,0,0,743,745,5,125,0,0,744,743,1,0,0,0,744,745,
	1,0,0,0,745,746,1,0,0,0,746,748,3,204,102,0,747,749,5,125,0,0,748,747,1,
	0,0,0,748,749,1,0,0,0,749,750,1,0,0,0,750,751,3,202,101,0,751,797,1,0,0,
	0,752,754,3,200,100,0,753,755,5,125,0,0,754,753,1,0,0,0,754,755,1,0,0,0,
	755,756,1,0,0,0,756,758,3,204,102,0,757,759,5,125,0,0,758,757,1,0,0,0,758,
	759,1,0,0,0,759,761,1,0,0,0,760,762,3,84,42,0,761,760,1,0,0,0,761,762,1,
	0,0,0,762,764,1,0,0,0,763,765,5,125,0,0,764,763,1,0,0,0,764,765,1,0,0,0,
	765,766,1,0,0,0,766,767,3,204,102,0,767,797,1,0,0,0,768,770,3,204,102,0,
	769,771,5,125,0,0,770,769,1,0,0,0,770,771,1,0,0,0,771,773,1,0,0,0,772,774,
	3,84,42,0,773,772,1,0,0,0,773,774,1,0,0,0,774,776,1,0,0,0,775,777,5,125,
	0,0,776,775,1,0,0,0,776,777,1,0,0,0,777,778,1,0,0,0,778,780,3,204,102,0,
	779,781,5,125,0,0,780,779,1,0,0,0,780,781,1,0,0,0,781,782,1,0,0,0,782,783,
	3,202,101,0,783,797,1,0,0,0,784,786,3,204,102,0,785,787,5,125,0,0,786,785,
	1,0,0,0,786,787,1,0,0,0,787,789,1,0,0,0,788,790,3,84,42,0,789,788,1,0,0,
	0,789,790,1,0,0,0,790,792,1,0,0,0,791,793,5,125,0,0,792,791,1,0,0,0,792,
	793,1,0,0,0,793,794,1,0,0,0,794,795,3,204,102,0,795,797,1,0,0,0,796,732,
	1,0,0,0,796,752,1,0,0,0,796,768,1,0,0,0,796,784,1,0,0,0,797,83,1,0,0,0,
	798,800,5,8,0,0,799,801,5,125,0,0,800,799,1,0,0,0,800,801,1,0,0,0,801,806,
	1,0,0,0,802,804,3,174,87,0,803,805,5,125,0,0,804,803,1,0,0,0,804,805,1,
	0,0,0,805,807,1,0,0,0,806,802,1,0,0,0,806,807,1,0,0,0,807,812,1,0,0,0,808,
	810,3,88,44,0,809,811,5,125,0,0,810,809,1,0,0,0,810,811,1,0,0,0,811,813,
	1,0,0,0,812,808,1,0,0,0,812,813,1,0,0,0,813,815,1,0,0,0,814,816,3,94,47,
	0,815,814,1,0,0,0,815,816,1,0,0,0,816,821,1,0,0,0,817,819,3,86,43,0,818,
	820,5,125,0,0,819,818,1,0,0,0,819,820,1,0,0,0,820,822,1,0,0,0,821,817,1,
	0,0,0,821,822,1,0,0,0,822,823,1,0,0,0,823,824,5,9,0,0,824,85,1,0,0,0,825,
	828,3,188,94,0,826,828,3,192,96,0,827,825,1,0,0,0,827,826,1,0,0,0,828,87,
	1,0,0,0,829,831,5,10,0,0,830,832,5,125,0,0,831,830,1,0,0,0,831,832,1,0,
	0,0,832,833,1,0,0,0,833,847,3,98,49,0,834,836,5,125,0,0,835,834,1,0,0,0,
	835,836,1,0,0,0,836,837,1,0,0,0,837,839,5,11,0,0,838,840,5,10,0,0,839,838,
	1,0,0,0,839,840,1,0,0,0,840,842,1,0,0,0,841,843,5,125,0,0,842,841,1,0,0,
	0,842,843,1,0,0,0,843,844,1,0,0,0,844,846,3,98,49,0,845,835,1,0,0,0,846,
	849,1,0,0,0,847,845,1,0,0,0,847,848,1,0,0,0,848,89,1,0,0,0,849,847,1,0,
	0,0,850,857,3,92,46,0,851,853,5,125,0,0,852,851,1,0,0,0,852,853,1,0,0,0,
	853,854,1,0,0,0,854,856,3,92,46,0,855,852,1,0,0,0,856,859,1,0,0,0,857,855,
	1,0,0,0,857,858,1,0,0,0,858,91,1,0,0,0,859,857,1,0,0,0,860,862,5,10,0,0,
	861,863,5,125,0,0,862,861,1,0,0,0,862,863,1,0,0,0,863,864,1,0,0,0,864,865,
	3,96,48,0,865,93,1,0,0,0,866,868,5,5,0,0,867,869,5,125,0,0,868,867,1,0,
	0,0,868,869,1,0,0,0,869,874,1,0,0,0,870,872,3,182,91,0,871,873,5,125,0,
	0,872,871,1,0,0,0,872,873,1,0,0,0,873,875,1,0,0,0,874,870,1,0,0,0,874,875,
	1,0,0,0,875,886,1,0,0,0,876,878,5,12,0,0,877,879,5,125,0,0,878,877,1,0,
	0,0,878,879,1,0,0,0,879,884,1,0,0,0,880,882,3,182,91,0,881,883,5,125,0,
	0,882,881,1,0,0,0,882,883,1,0,0,0,883,885,1,0,0,0,884,880,1,0,0,0,884,885,
	1,0,0,0,885,887,1,0,0,0,886,876,1,0,0,0,886,887,1,0,0,0,887,95,1,0,0,0,
	888,889,3,194,97,0,889,97,1,0,0,0,890,891,3,194,97,0,891,99,1,0,0,0,892,
	897,3,138,69,0,893,895,5,125,0,0,894,893,1,0,0,0,894,895,1,0,0,0,895,896,
	1,0,0,0,896,898,3,136,68,0,897,894,1,0,0,0,898,899,1,0,0,0,899,897,1,0,
	0,0,899,900,1,0,0,0,900,101,1,0,0,0,901,902,3,104,52,0,902,103,1,0,0,0,
	903,910,3,106,53,0,904,905,5,125,0,0,905,906,5,73,0,0,906,907,5,125,0,0,
	907,909,3,106,53,0,908,904,1,0,0,0,909,912,1,0,0,0,910,908,1,0,0,0,910,
	911,1,0,0,0,911,105,1,0,0,0,912,910,1,0,0,0,913,920,3,108,54,0,914,915,
	5,125,0,0,915,916,5,74,0,0,916,917,5,125,0,0,917,919,3,108,54,0,918,914,
	1,0,0,0,919,922,1,0,0,0,920,918,1,0,0,0,920,921,1,0,0,0,921,107,1,0,0,0,
	922,920,1,0,0,0,923,930,3,110,55,0,924,925,5,125,0,0,925,926,5,75,0,0,926,
	927,5,125,0,0,927,929,3,110,55,0,928,924,1,0,0,0,929,932,1,0,0,0,930,928,
	1,0,0,0,930,931,1,0,0,0,931,109,1,0,0,0,932,930,1,0,0,0,933,935,5,76,0,
	0,934,936,5,125,0,0,935,934,1,0,0,0,935,936,1,0,0,0,936,938,1,0,0,0,937,
	933,1,0,0,0,938,941,1,0,0,0,939,937,1,0,0,0,939,940,1,0,0,0,940,942,1,0,
	0,0,941,939,1,0,0,0,942,943,3,112,56,0,943,111,1,0,0,0,944,951,3,116,58,
	0,945,947,5,125,0,0,946,945,1,0,0,0,946,947,1,0,0,0,947,948,1,0,0,0,948,
	950,3,114,57,0,949,946,1,0,0,0,950,953,1,0,0,0,951,949,1,0,0,0,951,952,
	1,0,0,0,952,113,1,0,0,0,953,951,1,0,0,0,954,956,5,3,0,0,955,957,5,125,0,
	0,956,955,1,0,0,0,956,957,1,0,0,0,957,958,1,0,0,0,958,985,3,116,58,0,959,
	961,5,13,0,0,960,962,5,125,0,0,961,960,1,0,0,0,961,962,1,0,0,0,962,963,
	1,0,0,0,963,985,3,116,58,0,964,966,5,14,0,0,965,967,5,125,0,0,966,965,1,
	0,0,0,966,967,1,0,0,0,967,968,1,0,0,0,968,985,3,116,58,0,969,971,5,15,0,
	0,970,972,5,125,0,0,971,970,1,0,0,0,971,972,1,0,0,0,972,973,1,0,0,0,973,
	985,3,116,58,0,974,976,5,16,0,0,975,977,5,125,0,0,976,975,1,0,0,0,976,977,
	1,0,0,0,977,978,1,0,0,0,978,985,3,116,58,0,979,981,5,17,0,0,980,982,5,125,
	0,0,981,980,1,0,0,0,981,982,1,0,0,0,982,983,1,0,0,0,983,985,3,116,58,0,
	984,954,1,0,0,0,984,959,1,0,0,0,984,964,1,0,0,0,984,969,1,0,0,0,984,974,
	1,0,0,0,984,979,1,0,0,0,985,115,1,0,0,0,986,992,3,124,62,0,987,991,3,118,
	59,0,988,991,3,120,60,0,989,991,3,122,61,0,990,987,1,0,0,0,990,988,1,0,
	0,0,990,989,1,0,0,0,991,994,1,0,0,0,992,990,1,0,0,0,992,993,1,0,0,0,993,
	117,1,0,0,0,994,992,1,0,0,0,995,996,5,125,0,0,996,997,5,77,0,0,997,998,
	5,125,0,0,998,1006,5,61,0,0,999,1000,5,125,0,0,1000,1001,5,78,0,0,1001,
	1002,5,125,0,0,1002,1006,5,61,0,0,1003,1004,5,125,0,0,1004,1006,5,79,0,
	0,1005,995,1,0,0,0,1005,999,1,0,0,0,1005,1003,1,0,0,0,1006,1008,1,0,0,0,
	1007,1009,5,125,0,0,1008,1007,1,0,0,0,1008,1009,1,0,0,0,1009,1010,1,0,0,
	0,1010,1011,3,124,62,0,1011,119,1,0,0,0,1012,1013,5,125,0,0,1013,1015,5,
	80,0,0,1014,1016,5,125,0,0,1015,1014,1,0,0,0,1015,1016,1,0,0,0,1016,1017,
	1,0,0,0,1017,1018,3,124,62,0,1018,121,1,0,0,0,1019,1020,5,125,0,0,1020,
	1021,5,81,0,0,1021,1022,5,125,0,0,1022,1030,5,82,0,0,1023,1024,5,125,0,
	0,1024,1025,5,81,0,0,1025,1026,5,125,0,0,1026,1027,5,76,0,0,1027,1028,5,
	125,0,0,1028,1030,5,82,0,0,1029,1019,1,0,0,0,1029,1023,1,0,0,0,1030,123,
	1,0,0,0,1031,1050,3,126,63,0,1032,1034,5,125,0,0,1033,1032,1,0,0,0,1033,
	1034,1,0,0,0,1034,1035,1,0,0,0,1035,1037,5,18,0,0,1036,1038,5,125,0,0,1037,
	1036,1,0,0,0,1037,1038,1,0,0,0,1038,1039,1,0,0,0,1039,1049,3,126,63,0,1040,
	1042,5,125,0,0,1041,1040,1,0,0,0,1041,1042,1,0,0,0,1042,1043,1,0,0,0,1043,
	1045,5,19,0,0,1044,1046,5,125,0,0,1045,1044,1,0,0,0,1045,1046,1,0,0,0,1046,
	1047,1,0,0,0,1047,1049,3,126,63,0,1048,1033,1,0,0,0,1048,1041,1,0,0,0,1049,
	1052,1,0,0,0,1050,1048,1,0,0,0,1050,1051,1,0,0,0,1051,125,1,0,0,0,1052,
	1050,1,0,0,0,1053,1080,3,128,64,0,1054,1056,5,125,0,0,1055,1054,1,0,0,0,
	1055,1056,1,0,0,0,1056,1057,1,0,0,0,1057,1059,5,5,0,0,1058,1060,5,125,0,
	0,1059,1058,1,0,0,0,1059,1060,1,0,0,0,1060,1061,1,0,0,0,1061,1079,3,128,
	64,0,1062,1064,5,125,0,0,1063,1062,1,0,0,0,1063,1064,1,0,0,0,1064,1065,
	1,0,0,0,1065,1067,5,20,0,0,1066,1068,5,125,0,0,1067,1066,1,0,0,0,1067,1068,
	1,0,0,0,1068,1069,1,0,0,0,1069,1079,3,128,64,0,1070,1072,5,125,0,0,1071,
	1070,1,0,0,0,1071,1072,1,0,0,0,1072,1073,1,0,0,0,1073,1075,5,21,0,0,1074,
	1076,5,125,0,0,1075,1074,1,0,0,0,1075,1076,1,0,0,0,1076,1077,1,0,0,0,1077,
	1079,3,128,64,0,1078,1055,1,0,0,0,1078,1063,1,0,0,0,1078,1071,1,0,0,0,1079,
	1082,1,0,0,0,1080,1078,1,0,0,0,1080,1081,1,0,0,0,1081,127,1,0,0,0,1082,
	1080,1,0,0,0,1083,1094,3,130,65,0,1084,1086,5,125,0,0,1085,1084,1,0,0,0,
	1085,1086,1,0,0,0,1086,1087,1,0,0,0,1087,1089,5,22,0,0,1088,1090,5,125,
	0,0,1089,1088,1,0,0,0,1089,1090,1,0,0,0,1090,1091,1,0,0,0,1091,1093,3,130,
	65,0,1092,1085,1,0,0,0,1093,1096,1,0,0,0,1094,1092,1,0,0,0,1094,1095,1,
	0,0,0,1095,129,1,0,0,0,1096,1094,1,0,0,0,1097,1104,3,132,66,0,1098,1100,
	7,1,0,0,1099,1101,5,125,0,0,1100,1099,1,0,0,0,1100,1101,1,0,0,0,1101,1102,
	1,0,0,0,1102,1104,3,132,66,0,1103,1097,1,0,0,0,1103,1098,1,0,0,0,1104,131,
	1,0,0,0,1105,1116,3,138,69,0,1106,1108,5,125,0,0,1107,1106,1,0,0,0,1107,
	1108,1,0,0,0,1108,1109,1,0,0,0,1109,1115,3,134,67,0,1110,1112,5,125,0,0,
	1111,1110,1,0,0,0,1111,1112,1,0,0,0,1112,1113,1,0,0,0,1113,1115,3,136,68,
	0,1114,1107,1,0,0,0,1114,1111,1,0,0,0,1115,1118,1,0,0,0,1116,1114,1,0,0,
	0,1116,1117,1,0,0,0,1117,1123,1,0,0,0,1118,1116,1,0,0,0,1119,1121,5,125,
	0,0,1120,1119,1,0,0,0,1120,1121,1,0,0,0,1121,1122,1,0,0,0,1122,1124,3,90,
	45,0,1123,1120,1,0,0,0,1123,1124,1,0,0,0,1124,133,1,0,0,0,1125,1126,5,8,
	0,0,1126,1127,3,102,51,0,1127,1128,5,9,0,0,1128,1139,1,0,0,0,1129,1131,
	5,8,0,0,1130,1132,3,102,51,0,1131,1130,1,0,0,0,1131,1132,1,0,0,0,1132,1133,
	1,0,0,0,1133,1135,5,12,0,0,1134,1136,3,102,51,0,1135,1134,1,0,0,0,1135,
	1136,1,0,0,0,1136,1137,1,0,0,0,1137,1139,5,9,0,0,1138,1125,1,0,0,0,1138,
	1129,1,0,0,0,1139,135,1,0,0,0,1140,1142,5,23,0,0,1141,1143,5,125,0,0,1142,
	1141,1,0,0,0,1142,1143,1,0,0,0,1143,1144,1,0,0,0,1144,1145,3,190,95,0,1145,
	137,1,0,0,0,1146,1171,3,176,88,0,1147,1171,3,192,96,0,1148,1171,3,140,70,
	0,1149,1151,5,83,0,0,1150,1152,5,125,0,0,1151,1150,1,0,0,0,1151,1152,1,
	0,0,0,1152,1153,1,0,0,0,1153,1155,5,6,0,0,1154,1156,5,125,0,0,1155,1154,
	1,0,0,0,1155,1156,1,0,0,0,1156,1157,1,0,0,0,1157,1159,5,5,0,0,1158,1160,
	5,125,0,0,1159,1158,1,0,0,0,1159,1160,1,0,0,0,1160,1161,1,0,0,0,1161,1171,
	5,7,0,0,1162,1171,3,144,72,0,1163,1171,3,146,73,0,1164,1171,3,148,74,0,
	1165,1171,3,152,76,0,1166,1171,3,154,77,0,1167,1171,3,158,79,0,1168,1171,
	3,162,81,0,1169,1171,3,174,87,0,1170,1146,1,0,0,0,1170,1147,1,0,0,0,1170,
	1148,1,0,0,0,1170,1149,1,0,0,0,1170,1162,1,0,0,0,1170,1163,1,0,0,0,1170,
	1164,1,0,0,0,1170,1165,1,0,0,0,1170,1166,1,0,0,0,1170,1167,1,0,0,0,1170,
	1168,1,0,0,0,1170,1169,1,0,0,0,1171,139,1,0,0,0,1172,1177,5,84,0,0,1173,
	1175,5,125,0,0,1174,1173,1,0,0,0,1174,1175,1,0,0,0,1175,1176,1,0,0,0,1176,
	1178,3,142,71,0,1177,1174,1,0,0,0,1178,1179,1,0,0,0,1179,1177,1,0,0,0,1179,
	1180,1,0,0,0,1180,1195,1,0,0,0,1181,1183,5,84,0,0,1182,1184,5,125,0,0,1183,
	1182,1,0,0,0,1183,1184,1,0,0,0,1184,1185,1,0,0,0,1185,1190,3,102,51,0,1186,
	1188,5,125,0,0,1187,1186,1,0,0,0,1187,1188,1,0,0,0,1188,1189,1,0,0,0,1189,
	1191,3,142,71,0,1190,1187,1,0,0,0,1191,1192,1,0,0,0,1192,1190,1,0,0,0,1192,
	1193,1,0,0,0,1193,1195,1,0,0,0,1194,1172,1,0,0,0,1194,1181,1,0,0,0,1195,
	1204,1,0,0,0,1196,1198,5,125,0,0,1197,1196,1,0,0,0,1197,1198,1,0,0,0,1198,
	1199,1,0,0,0,1199,1201,5,85,0,0,1200,1202,5,125,0,0,1201,1200,1,0,0,0,1201,
	1202,1,0,0,0,1202,1203,1,0,0,0,1203,1205,3,102,51,0,1204,1197,1,0,0,0,1204,
	1205,1,0,0,0,1205,1207,1,0,0,0,1206,1208,5,125,0,0,1207,1206,1,0,0,0,1207,
	1208,1,0,0,0,1208,1209,1,0,0,0,1209,1210,5,86,0,0,1210,141,1,0,0,0,1211,
	1213,5,87,0,0,1212,1214,5,125,0,0,1213,1212,1,0,0,0,1213,1214,1,0,0,0,1214,
	1215,1,0,0,0,1215,1217,3,102,51,0,1216,1218,5,125,0,0,1217,1216,1,0,0,0,
	1217,1218,1,0,0,0,1218,1219,1,0,0,0,1219,1221,5,88,0,0,1220,1222,5,125,
	0,0,1221,1220,1,0,0,0,1221,1222,1,0,0,0,1222,1223,1,0,0,0,1223,1224,3,102,
	51,0,1224,143,1,0,0,0,1225,1227,5,8,0,0,1226,1228,5,125,0,0,1227,1226,1,
	0,0,0,1227,1228,1,0,0,0,1228,1229,1,0,0,0,1229,1238,3,150,75,0,1230,1232,
	5,125,0,0,1231,1230,1,0,0,0,1231,1232,1,0,0,0,1232,1233,1,0,0,0,1233,1235,
	5,11,0,0,1234,1236,5,125,0,0,1235,1234,1,0,0,0,1235,1236,1,0,0,0,1236,1237,
	1,0,0,0,1237,1239,3,102,51,0,1238,1231,1,0,0,0,1238,1239,1,0,0,0,1239,1241,
	1,0,0,0,1240,1242,5,125,0,0,1241,1240,1,0,0,0,1241,1242,1,0,0,0,1242,1243,
	1,0,0,0,1243,1244,5,9,0,0,1244,145,1,0,0,0,1245,1247,5,8,0,0,1246,1248,
	5,125,0,0,1247,1246,1,0,0,0,1247,1248,1,0,0,0,1248,1257,1,0,0,0,1249,1251,
	3,174,87,0,1250,1252,5,125,0,0,1251,1250,1,0,0,0,1251,1252,1,0,0,0,1252,
	1253,1,0,0,0,1253,1255,5,3,0,0,1254,1256,5,125,0,0,1255,1254,1,0,0,0,1255,
	1256,1,0,0,0,1256,1258,1,0,0,0,1257,1249,1,0,0,0,1257,1258,1,0,0,0,1258,
	1259,1,0,0,0,1259,1261,3,76,38,0,1260,1262,5,125,0,0,1261,1260,1,0,0,0,
	1261,1262,1,0,0,0,1262,1267,1,0,0,0,1263,1265,3,66,33,0,1264,1266,5,125,
	0,0,1265,1264,1,0,0,0,1265,1266,1,0,0,0,1266,1268,1,0,0,0,1267,1263,1,0,
	0,0,1267,1268,1,0,0,0,1268,1269,1,0,0,0,1269,1271,5,11,0,0,1270,1272,5,
	125,0,0,1271,1270,1,0,0,0,1271,1272,1,0,0,0,1272,1273,1,0,0,0,1273,1275,
	3,102,51,0,1274,1276,5,125,0,0,1275,1274,1,0,0,0,1275,1276,1,0,0,0,1276,
	1277,1,0,0,0,1277,1278,5,9,0,0,1278,147,1,0,0,0,1279,1281,5,47,0,0,1280,
	1282,5,125,0,0,1281,1280,1,0,0,0,1281,1282,1,0,0,0,1282,1283,1,0,0,0,1283,
	1285,5,6,0,0,1284,1286,5,125,0,0,1285,1284,1,0,0,0,1285,1286,1,0,0,0,1286,
	1287,1,0,0,0,1287,1289,3,150,75,0,1288,1290,5,125,0,0,1289,1288,1,0,0,0,
	1289,1290,1,0,0,0,1290,1291,1,0,0,0,1291,1292,5,7,0,0,1292,1336,1,0,0,0,
	1293,1295,5,89,0,0,1294,1296,5,125,0,0,1295,1294,1,0,0,0,1295,1296,1,0,
	0,0,1296,1297,1,0,0,0,1297,1299,5,6,0,0,1298,1300,5,125,0,0,1299,1298,1,
	0,0,0,1299,1300,1,0,0,0,1300,1301,1,0,0,0,1301,1303,3,150,75,0,1302,1304,
	5,125,0,0,1303,1302,1,0,0,0,1303,1304,1,0,0,0,1304,1305,1,0,0,0,1305,1306,
	5,7,0,0,1306,1336,1,0,0,0,1307,1309,5,90,0,0,1308,1310,5,125,0,0,1309,1308,
	1,0,0,0,1309,1310,1,0,0,0,1310,1311,1,0,0,0,1311,1313,5,6,0,0,1312,1314,
	5,125,0,0,1313,1312,1,0,0,0,1313,1314,1,0,0,0,1314,1315,1,0,0,0,1315,1317,
	3,150,75,0,1316,1318,5,125,0,0,1317,1316,1,0,0,0,1317,1318,1,0,0,0,1318,
	1319,1,0,0,0,1319,1320,5,7,0,0,1320,1336,1,0,0,0,1321,1323,5,91,0,0,1322,
	1324,5,125,0,0,1323,1322,1,0,0,0,1323,1324,1,0,0,0,1324,1325,1,0,0,0,1325,
	1327,5,6,0,0,1326,1328,5,125,0,0,1327,1326,1,0,0,0,1327,1328,1,0,0,0,1328,
	1329,1,0,0,0,1329,1331,3,150,75,0,1330,1332,5,125,0,0,1331,1330,1,0,0,0,
	1331,1332,1,0,0,0,1332,1333,1,0,0,0,1333,1334,5,7,0,0,1334,1336,1,0,0,0,
	1335,1279,1,0,0,0,1335,1293,1,0,0,0,1335,1307,1,0,0,0,1335,1321,1,0,0,0,
	1336,149,1,0,0,0,1337,1342,3,156,78,0,1338,1340,5,125,0,0,1339,1338,1,0,
	0,0,1339,1340,1,0,0,0,1340,1341,1,0,0,0,1341,1343,3,66,33,0,1342,1339,1,
	0,0,0,1342,1343,1,0,0,0,1343,151,1,0,0,0,1344,1345,3,76,38,0,1345,153,1,
	0,0,0,1346,1348,5,6,0,0,1347,1349,5,125,0,0,1348,1347,1,0,0,0,1348,1349,
	1,0,0,0,1349,1350,1,0,0,0,1350,1352,3,102,51,0,1351,1353,5,125,0,0,1352,
	1351,1,0,0,0,1352,1353,1,0,0,0,1353,1354,1,0,0,0,1354,1355,5,7,0,0,1355,
	155,1,0,0,0,1356,1357,3,174,87,0,1357,1358,5,125,0,0,1358,1359,5,80,0,0,
	1359,1360,5,125,0,0,1360,1361,3,102,51,0,1361,157,1,0,0,0,1362,1364,3,160,
	80,0,1363,1365,5,125,0,0,1364,1363,1,0,0,0,1364,1365,1,0,0,0,1365,1366,
	1,0,0,0,1366,1368,5,6,0,0,1367,1369,5,125,0,0,1368,1367,1,0,0,0,1368,1369,
	1,0,0,0,1369,1374,1,0,0,0,1370,1372,5,63,0,0,1371,1373,5,125,0,0,1372,1371,
	1,0,0,0,1372,1373,1,0,0,0,1373,1375,1,0,0,0,1374,1370,1,0,0,0,1374,1375,
	1,0,0,0,1375,1393,1,0,0,0,1376,1378,3,102,51,0,1377,1379,5,125,0,0,1378,
	1377,1,0,0,0,1378,1379,1,0,0,0,1379,1390,1,0,0,0,1380,1382,5,2,0,0,1381,
	1383,5,125,0,0,1382,1381,1,0,0,0,1382,1383,1,0,0,0,1383,1384,1,0,0,0,1384,
	1386,3,102,51,0,1385,1387,5,125,0,0,1386,1385,1,0,0,0,1386,1387,1,0,0,0,
	1387,1389,1,0,0,0,1388,1380,1,0,0,0,1389,1392,1,0,0,0,1390,1388,1,0,0,0,
	1390,1391,1,0,0,0,1391,1394,1,0,0,0,1392,1390,1,0,0,0,1393,1376,1,0,0,0,
	1393,1394,1,0,0,0,1394,1395,1,0,0,0,1395,1396,5,7,0,0,1396,159,1,0,0,0,
	1397,1398,3,172,86,0,1398,1399,3,198,99,0,1399,161,1,0,0,0,1400,1402,5,
	92,0,0,1401,1403,5,125,0,0,1402,1401,1,0,0,0,1402,1403,1,0,0,0,1403,1404,
	1,0,0,0,1404,1406,5,24,0,0,1405,1407,5,125,0,0,1406,1405,1,0,0,0,1406,1407,
	1,0,0,0,1407,1416,1,0,0,0,1408,1417,3,6,3,0,1409,1414,3,68,34,0,1410,1412,
	5,125,0,0,1411,1410,1,0,0,0,1411,1412,1,0,0,0,1412,1413,1,0,0,0,1413,1415,
	3,66,33,0,1414,1411,1,0,0,0,1414,1415,1,0,0,0,1415,1417,1,0,0,0,1416,1408,
	1,0,0,0,1416,1409,1,0,0,0,1417,1419,1,0,0,0,1418,1420,5,125,0,0,1419,1418,
	1,0,0,0,1419,1420,1,0,0,0,1420,1421,1,0,0,0,1421,1422,5,25,0,0,1422,163,
	1,0,0,0,1423,1425,3,170,85,0,1424,1426,5,125,0,0,1425,1424,1,0,0,0,1425,
	1426,1,0,0,0,1426,1427,1,0,0,0,1427,1429,5,6,0,0,1428,1430,5,125,0,0,1429,
	1428,1,0,0,0,1429,1430,1,0,0,0,1430,1448,1,0,0,0,1431,1433,3,102,51,0,1432,
	1434,5,125,0,0,1433,1432,1,0,0,0,1433,1434,1,0,0,0,1434,1445,1,0,0,0,1435,
	1437,5,2,0,0,1436,1438,5,125,0,0,1437,1436,1,0,0,0,1437,1438,1,0,0,0,1438,
	1439,1,0,0,0,1439,1441,3,102,51,0,1440,1442,5,125,0,0,1441,1440,1,0,0,0,
	1441,1442,1,0,0,0,1442,1444,1,0,0,0,1443,1435,1,0,0,0,1444,1447,1,0,0,0,
	1445,1443,1,0,0,0,1445,1446,1,0,0,0,1446,1449,1,0,0,0,1447,1445,1,0,0,0,
	1448,1431,1,0,0,0,1448,1449,1,0,0,0,1449,1450,1,0,0,0,1450,1451,5,7,0,0,
	1451,165,1,0,0,0,1452,1453,3,170,85,0,1453,167,1,0,0,0,1454,1455,3,198,
	99,0,1455,169,1,0,0,0,1456,1457,3,172,86,0,1457,1458,3,198,99,0,1458,171,
	1,0,0,0,1459,1460,3,198,99,0,1460,1461,5,23,0,0,1461,1463,1,0,0,0,1462,
	1459,1,0,0,0,1463,1466,1,0,0,0,1464,1462,1,0,0,0,1464,1465,1,0,0,0,1465,
	173,1,0,0,0,1466,1464,1,0,0,0,1467,1468,3,198,99,0,1468,175,1,0,0,0,1469,
	1476,3,178,89,0,1470,1476,5,82,0,0,1471,1476,3,180,90,0,1472,1476,5,107,
	0,0,1473,1476,3,186,93,0,1474,1476,3,188,94,0,1475,1469,1,0,0,0,1475,1470,
	1,0,0,0,1475,1471,1,0,0,0,1475,1472,1,0,0,0,1475,1473,1,0,0,0,1475,1474,
	1,0,0,0,1476,177,1,0,0,0,1477,1478,7,2,0,0,1478,179,1,0,0,0,1479,1482,3,
	184,92,0,1480,1482,3,182,91,0,1481,1479,1,0,0,0,1481,1480,1,0,0,0,1482,
	181,1,0,0,0,1483,1484,7,3,0,0,1484,183,1,0,0,0,1485,1486,7,4,0,0,1486,185,
	1,0,0,0,1487,1489,5,8,0,0,1488,1490,5,125,0,0,1489,1488,1,0,0,0,1489,1490,
	1,0,0,0,1490,1508,1,0,0,0,1491,1493,3,102,51,0,1492,1494,5,125,0,0,1493,
	1492,1,0,0,0,1493,1494,1,0,0,0,1494,1505,1,0,0,0,1495,1497,5,2,0,0,1496,
	1498,5,125,0,0,1497,1496,1,0,0,0,1497,1498,1,0,0,0,1498,1499,1,0,0,0,1499,
	1501,3,102,51,0,1500,1502,5,125,0,0,1501,1500,1,0,0,0,1501,1502,1,0,0,0,
	1502,1504,1,0,0,0,1503,1495,1,0,0,0,1504,1507,1,0,0,0,1505,1503,1,0,0,0,
	1505,1506,1,0,0,0,1506,1509,1,0,0,0,1507,1505,1,0,0,0,1508,1491,1,0,0,0,
	1508,1509,1,0,0,0,1509,1510,1,0,0,0,1510,1511,5,9,0,0,1511,187,1,0,0,0,
	1512,1514,5,24,0,0,1513,1515,5,125,0,0,1514,1513,1,0,0,0,1514,1515,1,0,
	0,0,1515,1549,1,0,0,0,1516,1518,3,190,95,0,1517,1519,5,125,0,0,1518,1517,
	1,0,0,0,1518,1519,1,0,0,0,1519,1520,1,0,0,0,1520,1522,5,10,0,0,1521,1523,
	5,125,0,0,1522,1521,1,0,0,0,1522,1523,1,0,0,0,1523,1524,1,0,0,0,1524,1526,
	3,102,51,0,1525,1527,5,125,0,0,1526,1525,1,0,0,0,1526,1527,1,0,0,0,1527,
	1546,1,0,0,0,1528,1530,5,2,0,0,1529,1531,5,125,0,0,1530,1529,1,0,0,0,1530,
	1531,1,0,0,0,1531,1532,1,0,0,0,1532,1534,3,190,95,0,1533,1535,5,125,0,0,
	1534,1533,1,0,0,0,1534,1535,1,0,0,0,1535,1536,1,0,0,0,1536,1538,5,10,0,
	0,1537,1539,5,125,0,0,1538,1537,1,0,0,0,1538,1539,1,0,0,0,1539,1540,1,0,
	0,0,1540,1542,3,102,51,0,1541,1543,5,125,0,0,1542,1541,1,0,0,0,1542,1543,
	1,0,0,0,1543,1545,1,0,0,0,1544,1528,1,0,0,0,1545,1548,1,0,0,0,1546,1544,
	1,0,0,0,1546,1547,1,0,0,0,1547,1550,1,0,0,0,1548,1546,1,0,0,0,1549,1516,
	1,0,0,0,1549,1550,1,0,0,0,1550,1551,1,0,0,0,1551,1552,5,25,0,0,1552,189,
	1,0,0,0,1553,1554,3,194,97,0,1554,191,1,0,0,0,1555,1558,5,26,0,0,1556,1559,
	3,198,99,0,1557,1559,5,96,0,0,1558,1556,1,0,0,0,1558,1557,1,0,0,0,1559,
	193,1,0,0,0,1560,1563,3,198,99,0,1561,1563,3,196,98,0,1562,1560,1,0,0,0,
	1562,1561,1,0,0,0,1563,195,1,0,0,0,1564,1565,7,5,0,0,1565,197,1,0,0,0,1566,
	1567,7,6,0,0,1567,199,1,0,0,0,1568,1569,7,7,0,0,1569,201,1,0,0,0,1570,1571,
	7,8,0,0,1571,203,1,0,0,0,1572,1573,7,9,0,0,1573,205,1,0,0,0,291,207,211,
	214,217,225,229,234,241,246,249,253,257,261,267,271,276,281,285,288,290,
	294,298,303,307,312,316,325,330,334,338,342,345,349,359,366,379,383,389,
	393,397,402,407,411,417,421,427,431,437,441,445,449,453,457,462,469,473,
	478,485,491,496,502,505,511,513,517,521,526,530,533,540,547,550,556,559,
	565,569,573,577,581,586,591,595,600,603,612,621,626,639,642,650,654,659,
	664,668,673,679,684,691,695,700,704,708,710,714,716,720,722,728,734,738,
	741,744,748,754,758,761,764,770,773,776,780,786,789,792,796,800,804,806,
	810,812,815,819,821,827,831,835,839,842,847,852,857,862,868,872,874,878,
	882,884,886,894,899,910,920,930,935,939,946,951,956,961,966,971,976,981,
	984,990,992,1005,1008,1015,1029,1033,1037,1041,1045,1048,1050,1055,1059,
	1063,1067,1071,1075,1078,1080,1085,1089,1094,1100,1103,1107,1111,1114,1116,
	1120,1123,1131,1135,1138,1142,1151,1155,1159,1170,1174,1179,1183,1187,1192,
	1194,1197,1201,1204,1207,1213,1217,1221,1227,1231,1235,1238,1241,1247,1251,
	1255,1257,1261,1265,1267,1271,1275,1281,1285,1289,1295,1299,1303,1309,1313,
	1317,1323,1327,1331,1335,1339,1342,1348,1352,1364,1368,1372,1374,1378,1382,
	1386,1390,1393,1402,1406,1411,1414,1416,1419,1425,1429,1433,1437,1441,1445,
	1448,1464,1475,1481,1489,1493,1497,1501,1505,1508,1514,1518,1522,1526,1530,
	1534,1538,1542,1546,1549,1558,1562];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CypherParser.__ATN) {
			CypherParser.__ATN = new ATNDeserializer().deserialize(CypherParser._serializedATN);
		}

		return CypherParser.__ATN;
	}


	static DecisionsToDFA = CypherParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class OC_CypherContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_Statement(): OC_StatementContext {
		return this.getTypedRuleContext(OC_StatementContext, 0) as OC_StatementContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(CypherParser.EOF, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_Cypher;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_Cypher) {
	 		listener.enterOC_Cypher(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_Cypher) {
	 		listener.exitOC_Cypher(this);
		}
	}
}


export class OC_StatementContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_Query(): OC_QueryContext {
		return this.getTypedRuleContext(OC_QueryContext, 0) as OC_QueryContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_Statement;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_Statement) {
	 		listener.enterOC_Statement(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_Statement) {
	 		listener.exitOC_Statement(this);
		}
	}
}


export class OC_QueryContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_RegularQuery(): OC_RegularQueryContext {
		return this.getTypedRuleContext(OC_RegularQueryContext, 0) as OC_RegularQueryContext;
	}
	public oC_StandaloneCall(): OC_StandaloneCallContext {
		return this.getTypedRuleContext(OC_StandaloneCallContext, 0) as OC_StandaloneCallContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_Query;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_Query) {
	 		listener.enterOC_Query(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_Query) {
	 		listener.exitOC_Query(this);
		}
	}
}


export class OC_RegularQueryContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_SingleQuery(): OC_SingleQueryContext {
		return this.getTypedRuleContext(OC_SingleQueryContext, 0) as OC_SingleQueryContext;
	}
	public oC_Union_list(): OC_UnionContext[] {
		return this.getTypedRuleContexts(OC_UnionContext) as OC_UnionContext[];
	}
	public oC_Union(i: number): OC_UnionContext {
		return this.getTypedRuleContext(OC_UnionContext, i) as OC_UnionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_RegularQuery;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_RegularQuery) {
	 		listener.enterOC_RegularQuery(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_RegularQuery) {
	 		listener.exitOC_RegularQuery(this);
		}
	}
}


export class OC_UnionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNION(): TerminalNode {
		return this.getToken(CypherParser.UNION, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ALL(): TerminalNode {
		return this.getToken(CypherParser.ALL, 0);
	}
	public oC_SingleQuery(): OC_SingleQueryContext {
		return this.getTypedRuleContext(OC_SingleQueryContext, 0) as OC_SingleQueryContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_Union;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_Union) {
	 		listener.enterOC_Union(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_Union) {
	 		listener.exitOC_Union(this);
		}
	}
}


export class OC_SingleQueryContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_SinglePartQuery(): OC_SinglePartQueryContext {
		return this.getTypedRuleContext(OC_SinglePartQueryContext, 0) as OC_SinglePartQueryContext;
	}
	public oC_MultiPartQuery(): OC_MultiPartQueryContext {
		return this.getTypedRuleContext(OC_MultiPartQueryContext, 0) as OC_MultiPartQueryContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_SingleQuery;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_SingleQuery) {
	 		listener.enterOC_SingleQuery(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_SingleQuery) {
	 		listener.exitOC_SingleQuery(this);
		}
	}
}


export class OC_SinglePartQueryContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_Return(): OC_ReturnContext {
		return this.getTypedRuleContext(OC_ReturnContext, 0) as OC_ReturnContext;
	}
	public oC_ReadingClause_list(): OC_ReadingClauseContext[] {
		return this.getTypedRuleContexts(OC_ReadingClauseContext) as OC_ReadingClauseContext[];
	}
	public oC_ReadingClause(i: number): OC_ReadingClauseContext {
		return this.getTypedRuleContext(OC_ReadingClauseContext, i) as OC_ReadingClauseContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public oC_UpdatingClause_list(): OC_UpdatingClauseContext[] {
		return this.getTypedRuleContexts(OC_UpdatingClauseContext) as OC_UpdatingClauseContext[];
	}
	public oC_UpdatingClause(i: number): OC_UpdatingClauseContext {
		return this.getTypedRuleContext(OC_UpdatingClauseContext, i) as OC_UpdatingClauseContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_SinglePartQuery;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_SinglePartQuery) {
	 		listener.enterOC_SinglePartQuery(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_SinglePartQuery) {
	 		listener.exitOC_SinglePartQuery(this);
		}
	}
}


export class OC_MultiPartQueryContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_SinglePartQuery(): OC_SinglePartQueryContext {
		return this.getTypedRuleContext(OC_SinglePartQueryContext, 0) as OC_SinglePartQueryContext;
	}
	public oC_With_list(): OC_WithContext[] {
		return this.getTypedRuleContexts(OC_WithContext) as OC_WithContext[];
	}
	public oC_With(i: number): OC_WithContext {
		return this.getTypedRuleContext(OC_WithContext, i) as OC_WithContext;
	}
	public oC_ReadingClause_list(): OC_ReadingClauseContext[] {
		return this.getTypedRuleContexts(OC_ReadingClauseContext) as OC_ReadingClauseContext[];
	}
	public oC_ReadingClause(i: number): OC_ReadingClauseContext {
		return this.getTypedRuleContext(OC_ReadingClauseContext, i) as OC_ReadingClauseContext;
	}
	public oC_UpdatingClause_list(): OC_UpdatingClauseContext[] {
		return this.getTypedRuleContexts(OC_UpdatingClauseContext) as OC_UpdatingClauseContext[];
	}
	public oC_UpdatingClause(i: number): OC_UpdatingClauseContext {
		return this.getTypedRuleContext(OC_UpdatingClauseContext, i) as OC_UpdatingClauseContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_MultiPartQuery;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_MultiPartQuery) {
	 		listener.enterOC_MultiPartQuery(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_MultiPartQuery) {
	 		listener.exitOC_MultiPartQuery(this);
		}
	}
}


export class OC_UpdatingClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_Create(): OC_CreateContext {
		return this.getTypedRuleContext(OC_CreateContext, 0) as OC_CreateContext;
	}
	public oC_Merge(): OC_MergeContext {
		return this.getTypedRuleContext(OC_MergeContext, 0) as OC_MergeContext;
	}
	public oC_Delete(): OC_DeleteContext {
		return this.getTypedRuleContext(OC_DeleteContext, 0) as OC_DeleteContext;
	}
	public oC_Set(): OC_SetContext {
		return this.getTypedRuleContext(OC_SetContext, 0) as OC_SetContext;
	}
	public oC_Remove(): OC_RemoveContext {
		return this.getTypedRuleContext(OC_RemoveContext, 0) as OC_RemoveContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_UpdatingClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_UpdatingClause) {
	 		listener.enterOC_UpdatingClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_UpdatingClause) {
	 		listener.exitOC_UpdatingClause(this);
		}
	}
}


export class OC_ReadingClauseContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_Match(): OC_MatchContext {
		return this.getTypedRuleContext(OC_MatchContext, 0) as OC_MatchContext;
	}
	public oC_Unwind(): OC_UnwindContext {
		return this.getTypedRuleContext(OC_UnwindContext, 0) as OC_UnwindContext;
	}
	public oC_InQueryCall(): OC_InQueryCallContext {
		return this.getTypedRuleContext(OC_InQueryCallContext, 0) as OC_InQueryCallContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_ReadingClause;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_ReadingClause) {
	 		listener.enterOC_ReadingClause(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_ReadingClause) {
	 		listener.exitOC_ReadingClause(this);
		}
	}
}


export class OC_MatchContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MATCH(): TerminalNode {
		return this.getToken(CypherParser.MATCH, 0);
	}
	public oC_Pattern(): OC_PatternContext {
		return this.getTypedRuleContext(OC_PatternContext, 0) as OC_PatternContext;
	}
	public OPTIONAL(): TerminalNode {
		return this.getToken(CypherParser.OPTIONAL, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public oC_Where(): OC_WhereContext {
		return this.getTypedRuleContext(OC_WhereContext, 0) as OC_WhereContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_Match;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_Match) {
	 		listener.enterOC_Match(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_Match) {
	 		listener.exitOC_Match(this);
		}
	}
}


export class OC_UnwindContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNWIND(): TerminalNode {
		return this.getToken(CypherParser.UNWIND, 0);
	}
	public oC_Expression(): OC_ExpressionContext {
		return this.getTypedRuleContext(OC_ExpressionContext, 0) as OC_ExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public AS(): TerminalNode {
		return this.getToken(CypherParser.AS, 0);
	}
	public oC_Variable(): OC_VariableContext {
		return this.getTypedRuleContext(OC_VariableContext, 0) as OC_VariableContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_Unwind;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_Unwind) {
	 		listener.enterOC_Unwind(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_Unwind) {
	 		listener.exitOC_Unwind(this);
		}
	}
}


export class OC_MergeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MERGE(): TerminalNode {
		return this.getToken(CypherParser.MERGE, 0);
	}
	public oC_PatternPart(): OC_PatternPartContext {
		return this.getTypedRuleContext(OC_PatternPartContext, 0) as OC_PatternPartContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public oC_MergeAction_list(): OC_MergeActionContext[] {
		return this.getTypedRuleContexts(OC_MergeActionContext) as OC_MergeActionContext[];
	}
	public oC_MergeAction(i: number): OC_MergeActionContext {
		return this.getTypedRuleContext(OC_MergeActionContext, i) as OC_MergeActionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_Merge;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_Merge) {
	 		listener.enterOC_Merge(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_Merge) {
	 		listener.exitOC_Merge(this);
		}
	}
}


export class OC_MergeActionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ON(): TerminalNode {
		return this.getToken(CypherParser.ON, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public MATCH(): TerminalNode {
		return this.getToken(CypherParser.MATCH, 0);
	}
	public oC_Set(): OC_SetContext {
		return this.getTypedRuleContext(OC_SetContext, 0) as OC_SetContext;
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_MergeAction;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_MergeAction) {
	 		listener.enterOC_MergeAction(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_MergeAction) {
	 		listener.exitOC_MergeAction(this);
		}
	}
}


export class OC_CreateContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public oC_Pattern(): OC_PatternContext {
		return this.getTypedRuleContext(OC_PatternContext, 0) as OC_PatternContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_Create;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_Create) {
	 		listener.enterOC_Create(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_Create) {
	 		listener.exitOC_Create(this);
		}
	}
}


export class OC_SetContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SET(): TerminalNode {
		return this.getToken(CypherParser.SET, 0);
	}
	public oC_SetItem_list(): OC_SetItemContext[] {
		return this.getTypedRuleContexts(OC_SetItemContext) as OC_SetItemContext[];
	}
	public oC_SetItem(i: number): OC_SetItemContext {
		return this.getTypedRuleContext(OC_SetItemContext, i) as OC_SetItemContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_Set;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_Set) {
	 		listener.enterOC_Set(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_Set) {
	 		listener.exitOC_Set(this);
		}
	}
}


export class OC_SetItemContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_PropertyExpression(): OC_PropertyExpressionContext {
		return this.getTypedRuleContext(OC_PropertyExpressionContext, 0) as OC_PropertyExpressionContext;
	}
	public oC_Expression(): OC_ExpressionContext {
		return this.getTypedRuleContext(OC_ExpressionContext, 0) as OC_ExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public oC_Variable(): OC_VariableContext {
		return this.getTypedRuleContext(OC_VariableContext, 0) as OC_VariableContext;
	}
	public oC_NodeLabels(): OC_NodeLabelsContext {
		return this.getTypedRuleContext(OC_NodeLabelsContext, 0) as OC_NodeLabelsContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_SetItem;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_SetItem) {
	 		listener.enterOC_SetItem(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_SetItem) {
	 		listener.exitOC_SetItem(this);
		}
	}
}


export class OC_DeleteContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DELETE(): TerminalNode {
		return this.getToken(CypherParser.DELETE, 0);
	}
	public oC_Expression_list(): OC_ExpressionContext[] {
		return this.getTypedRuleContexts(OC_ExpressionContext) as OC_ExpressionContext[];
	}
	public oC_Expression(i: number): OC_ExpressionContext {
		return this.getTypedRuleContext(OC_ExpressionContext, i) as OC_ExpressionContext;
	}
	public DETACH(): TerminalNode {
		return this.getToken(CypherParser.DETACH, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_Delete;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_Delete) {
	 		listener.enterOC_Delete(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_Delete) {
	 		listener.exitOC_Delete(this);
		}
	}
}


export class OC_RemoveContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public REMOVE(): TerminalNode {
		return this.getToken(CypherParser.REMOVE, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public oC_RemoveItem_list(): OC_RemoveItemContext[] {
		return this.getTypedRuleContexts(OC_RemoveItemContext) as OC_RemoveItemContext[];
	}
	public oC_RemoveItem(i: number): OC_RemoveItemContext {
		return this.getTypedRuleContext(OC_RemoveItemContext, i) as OC_RemoveItemContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_Remove;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_Remove) {
	 		listener.enterOC_Remove(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_Remove) {
	 		listener.exitOC_Remove(this);
		}
	}
}


export class OC_RemoveItemContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_Variable(): OC_VariableContext {
		return this.getTypedRuleContext(OC_VariableContext, 0) as OC_VariableContext;
	}
	public oC_NodeLabels(): OC_NodeLabelsContext {
		return this.getTypedRuleContext(OC_NodeLabelsContext, 0) as OC_NodeLabelsContext;
	}
	public oC_PropertyExpression(): OC_PropertyExpressionContext {
		return this.getTypedRuleContext(OC_PropertyExpressionContext, 0) as OC_PropertyExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_RemoveItem;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_RemoveItem) {
	 		listener.enterOC_RemoveItem(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_RemoveItem) {
	 		listener.exitOC_RemoveItem(this);
		}
	}
}


export class OC_InQueryCallContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CALL(): TerminalNode {
		return this.getToken(CypherParser.CALL, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public oC_ExplicitProcedureInvocation(): OC_ExplicitProcedureInvocationContext {
		return this.getTypedRuleContext(OC_ExplicitProcedureInvocationContext, 0) as OC_ExplicitProcedureInvocationContext;
	}
	public YIELD(): TerminalNode {
		return this.getToken(CypherParser.YIELD, 0);
	}
	public oC_YieldItems(): OC_YieldItemsContext {
		return this.getTypedRuleContext(OC_YieldItemsContext, 0) as OC_YieldItemsContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_InQueryCall;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_InQueryCall) {
	 		listener.enterOC_InQueryCall(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_InQueryCall) {
	 		listener.exitOC_InQueryCall(this);
		}
	}
}


export class OC_StandaloneCallContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CALL(): TerminalNode {
		return this.getToken(CypherParser.CALL, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public oC_ExplicitProcedureInvocation(): OC_ExplicitProcedureInvocationContext {
		return this.getTypedRuleContext(OC_ExplicitProcedureInvocationContext, 0) as OC_ExplicitProcedureInvocationContext;
	}
	public oC_ImplicitProcedureInvocation(): OC_ImplicitProcedureInvocationContext {
		return this.getTypedRuleContext(OC_ImplicitProcedureInvocationContext, 0) as OC_ImplicitProcedureInvocationContext;
	}
	public YIELD(): TerminalNode {
		return this.getToken(CypherParser.YIELD, 0);
	}
	public oC_YieldItems(): OC_YieldItemsContext {
		return this.getTypedRuleContext(OC_YieldItemsContext, 0) as OC_YieldItemsContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_StandaloneCall;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_StandaloneCall) {
	 		listener.enterOC_StandaloneCall(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_StandaloneCall) {
	 		listener.exitOC_StandaloneCall(this);
		}
	}
}


export class OC_YieldItemsContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_YieldItem_list(): OC_YieldItemContext[] {
		return this.getTypedRuleContexts(OC_YieldItemContext) as OC_YieldItemContext[];
	}
	public oC_YieldItem(i: number): OC_YieldItemContext {
		return this.getTypedRuleContext(OC_YieldItemContext, i) as OC_YieldItemContext;
	}
	public oC_Where(): OC_WhereContext {
		return this.getTypedRuleContext(OC_WhereContext, 0) as OC_WhereContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_YieldItems;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_YieldItems) {
	 		listener.enterOC_YieldItems(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_YieldItems) {
	 		listener.exitOC_YieldItems(this);
		}
	}
}


export class OC_YieldItemContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_Variable(): OC_VariableContext {
		return this.getTypedRuleContext(OC_VariableContext, 0) as OC_VariableContext;
	}
	public oC_ProcedureResultField(): OC_ProcedureResultFieldContext {
		return this.getTypedRuleContext(OC_ProcedureResultFieldContext, 0) as OC_ProcedureResultFieldContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public AS(): TerminalNode {
		return this.getToken(CypherParser.AS, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_YieldItem;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_YieldItem) {
	 		listener.enterOC_YieldItem(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_YieldItem) {
	 		listener.exitOC_YieldItem(this);
		}
	}
}


export class OC_WithContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITH(): TerminalNode {
		return this.getToken(CypherParser.WITH, 0);
	}
	public oC_ProjectionBody(): OC_ProjectionBodyContext {
		return this.getTypedRuleContext(OC_ProjectionBodyContext, 0) as OC_ProjectionBodyContext;
	}
	public oC_Where(): OC_WhereContext {
		return this.getTypedRuleContext(OC_WhereContext, 0) as OC_WhereContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_With;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_With) {
	 		listener.enterOC_With(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_With) {
	 		listener.exitOC_With(this);
		}
	}
}


export class OC_ReturnContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURN(): TerminalNode {
		return this.getToken(CypherParser.RETURN, 0);
	}
	public oC_ProjectionBody(): OC_ProjectionBodyContext {
		return this.getTypedRuleContext(OC_ProjectionBodyContext, 0) as OC_ProjectionBodyContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_Return;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_Return) {
	 		listener.enterOC_Return(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_Return) {
	 		listener.exitOC_Return(this);
		}
	}
}


export class OC_ProjectionBodyContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public oC_ProjectionItems(): OC_ProjectionItemsContext {
		return this.getTypedRuleContext(OC_ProjectionItemsContext, 0) as OC_ProjectionItemsContext;
	}
	public DISTINCT(): TerminalNode {
		return this.getToken(CypherParser.DISTINCT, 0);
	}
	public oC_Order(): OC_OrderContext {
		return this.getTypedRuleContext(OC_OrderContext, 0) as OC_OrderContext;
	}
	public oC_Skip(): OC_SkipContext {
		return this.getTypedRuleContext(OC_SkipContext, 0) as OC_SkipContext;
	}
	public oC_Limit(): OC_LimitContext {
		return this.getTypedRuleContext(OC_LimitContext, 0) as OC_LimitContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_ProjectionBody;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_ProjectionBody) {
	 		listener.enterOC_ProjectionBody(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_ProjectionBody) {
	 		listener.exitOC_ProjectionBody(this);
		}
	}
}


export class OC_ProjectionItemsContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_ProjectionItem_list(): OC_ProjectionItemContext[] {
		return this.getTypedRuleContexts(OC_ProjectionItemContext) as OC_ProjectionItemContext[];
	}
	public oC_ProjectionItem(i: number): OC_ProjectionItemContext {
		return this.getTypedRuleContext(OC_ProjectionItemContext, i) as OC_ProjectionItemContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_ProjectionItems;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_ProjectionItems) {
	 		listener.enterOC_ProjectionItems(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_ProjectionItems) {
	 		listener.exitOC_ProjectionItems(this);
		}
	}
}


export class OC_ProjectionItemContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_Expression(): OC_ExpressionContext {
		return this.getTypedRuleContext(OC_ExpressionContext, 0) as OC_ExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public AS(): TerminalNode {
		return this.getToken(CypherParser.AS, 0);
	}
	public oC_Variable(): OC_VariableContext {
		return this.getTypedRuleContext(OC_VariableContext, 0) as OC_VariableContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_ProjectionItem;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_ProjectionItem) {
	 		listener.enterOC_ProjectionItem(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_ProjectionItem) {
	 		listener.exitOC_ProjectionItem(this);
		}
	}
}


export class OC_OrderContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ORDER(): TerminalNode {
		return this.getToken(CypherParser.ORDER, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public BY(): TerminalNode {
		return this.getToken(CypherParser.BY, 0);
	}
	public oC_SortItem_list(): OC_SortItemContext[] {
		return this.getTypedRuleContexts(OC_SortItemContext) as OC_SortItemContext[];
	}
	public oC_SortItem(i: number): OC_SortItemContext {
		return this.getTypedRuleContext(OC_SortItemContext, i) as OC_SortItemContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_Order;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_Order) {
	 		listener.enterOC_Order(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_Order) {
	 		listener.exitOC_Order(this);
		}
	}
}


export class OC_SkipContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public L_SKIP(): TerminalNode {
		return this.getToken(CypherParser.L_SKIP, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public oC_Expression(): OC_ExpressionContext {
		return this.getTypedRuleContext(OC_ExpressionContext, 0) as OC_ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_Skip;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_Skip) {
	 		listener.enterOC_Skip(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_Skip) {
	 		listener.exitOC_Skip(this);
		}
	}
}


export class OC_LimitContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LIMIT(): TerminalNode {
		return this.getToken(CypherParser.LIMIT, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public oC_Expression(): OC_ExpressionContext {
		return this.getTypedRuleContext(OC_ExpressionContext, 0) as OC_ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_Limit;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_Limit) {
	 		listener.enterOC_Limit(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_Limit) {
	 		listener.exitOC_Limit(this);
		}
	}
}


export class OC_SortItemContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_Expression(): OC_ExpressionContext {
		return this.getTypedRuleContext(OC_ExpressionContext, 0) as OC_ExpressionContext;
	}
	public ASCENDING(): TerminalNode {
		return this.getToken(CypherParser.ASCENDING, 0);
	}
	public ASC(): TerminalNode {
		return this.getToken(CypherParser.ASC, 0);
	}
	public DESCENDING(): TerminalNode {
		return this.getToken(CypherParser.DESCENDING, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(CypherParser.DESC, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_SortItem;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_SortItem) {
	 		listener.enterOC_SortItem(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_SortItem) {
	 		listener.exitOC_SortItem(this);
		}
	}
}


export class OC_WhereContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHERE(): TerminalNode {
		return this.getToken(CypherParser.WHERE, 0);
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
	public oC_Expression(): OC_ExpressionContext {
		return this.getTypedRuleContext(OC_ExpressionContext, 0) as OC_ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_Where;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_Where) {
	 		listener.enterOC_Where(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_Where) {
	 		listener.exitOC_Where(this);
		}
	}
}


export class OC_PatternContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_PatternPart_list(): OC_PatternPartContext[] {
		return this.getTypedRuleContexts(OC_PatternPartContext) as OC_PatternPartContext[];
	}
	public oC_PatternPart(i: number): OC_PatternPartContext {
		return this.getTypedRuleContext(OC_PatternPartContext, i) as OC_PatternPartContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_Pattern;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_Pattern) {
	 		listener.enterOC_Pattern(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_Pattern) {
	 		listener.exitOC_Pattern(this);
		}
	}
}


export class OC_PatternPartContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_Variable(): OC_VariableContext {
		return this.getTypedRuleContext(OC_VariableContext, 0) as OC_VariableContext;
	}
	public oC_AnonymousPatternPart(): OC_AnonymousPatternPartContext {
		return this.getTypedRuleContext(OC_AnonymousPatternPartContext, 0) as OC_AnonymousPatternPartContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_PatternPart;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_PatternPart) {
	 		listener.enterOC_PatternPart(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_PatternPart) {
	 		listener.exitOC_PatternPart(this);
		}
	}
}


export class OC_AnonymousPatternPartContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_PatternElement(): OC_PatternElementContext {
		return this.getTypedRuleContext(OC_PatternElementContext, 0) as OC_PatternElementContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_AnonymousPatternPart;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_AnonymousPatternPart) {
	 		listener.enterOC_AnonymousPatternPart(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_AnonymousPatternPart) {
	 		listener.exitOC_AnonymousPatternPart(this);
		}
	}
}


export class OC_PatternElementContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_NodePattern(): OC_NodePatternContext {
		return this.getTypedRuleContext(OC_NodePatternContext, 0) as OC_NodePatternContext;
	}
	public oC_PatternElementChain_list(): OC_PatternElementChainContext[] {
		return this.getTypedRuleContexts(OC_PatternElementChainContext) as OC_PatternElementChainContext[];
	}
	public oC_PatternElementChain(i: number): OC_PatternElementChainContext {
		return this.getTypedRuleContext(OC_PatternElementChainContext, i) as OC_PatternElementChainContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public oC_PatternElement(): OC_PatternElementContext {
		return this.getTypedRuleContext(OC_PatternElementContext, 0) as OC_PatternElementContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_PatternElement;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_PatternElement) {
	 		listener.enterOC_PatternElement(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_PatternElement) {
	 		listener.exitOC_PatternElement(this);
		}
	}
}


export class OC_RelationshipsPatternContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_NodePattern(): OC_NodePatternContext {
		return this.getTypedRuleContext(OC_NodePatternContext, 0) as OC_NodePatternContext;
	}
	public oC_PatternElementChain_list(): OC_PatternElementChainContext[] {
		return this.getTypedRuleContexts(OC_PatternElementChainContext) as OC_PatternElementChainContext[];
	}
	public oC_PatternElementChain(i: number): OC_PatternElementChainContext {
		return this.getTypedRuleContext(OC_PatternElementChainContext, i) as OC_PatternElementChainContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_RelationshipsPattern;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_RelationshipsPattern) {
	 		listener.enterOC_RelationshipsPattern(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_RelationshipsPattern) {
	 		listener.exitOC_RelationshipsPattern(this);
		}
	}
}


export class OC_NodePatternContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public oC_Variable(): OC_VariableContext {
		return this.getTypedRuleContext(OC_VariableContext, 0) as OC_VariableContext;
	}
	public oC_NodeLabels(): OC_NodeLabelsContext {
		return this.getTypedRuleContext(OC_NodeLabelsContext, 0) as OC_NodeLabelsContext;
	}
	public oC_Properties(): OC_PropertiesContext {
		return this.getTypedRuleContext(OC_PropertiesContext, 0) as OC_PropertiesContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_NodePattern;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_NodePattern) {
	 		listener.enterOC_NodePattern(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_NodePattern) {
	 		listener.exitOC_NodePattern(this);
		}
	}
}


export class OC_PatternElementChainContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_RelationshipPattern(): OC_RelationshipPatternContext {
		return this.getTypedRuleContext(OC_RelationshipPatternContext, 0) as OC_RelationshipPatternContext;
	}
	public oC_NodePattern(): OC_NodePatternContext {
		return this.getTypedRuleContext(OC_NodePatternContext, 0) as OC_NodePatternContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_PatternElementChain;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_PatternElementChain) {
	 		listener.enterOC_PatternElementChain(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_PatternElementChain) {
	 		listener.exitOC_PatternElementChain(this);
		}
	}
}


export class OC_RelationshipPatternContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_LeftArrowHead(): OC_LeftArrowHeadContext {
		return this.getTypedRuleContext(OC_LeftArrowHeadContext, 0) as OC_LeftArrowHeadContext;
	}
	public oC_Dash_list(): OC_DashContext[] {
		return this.getTypedRuleContexts(OC_DashContext) as OC_DashContext[];
	}
	public oC_Dash(i: number): OC_DashContext {
		return this.getTypedRuleContext(OC_DashContext, i) as OC_DashContext;
	}
	public oC_RightArrowHead(): OC_RightArrowHeadContext {
		return this.getTypedRuleContext(OC_RightArrowHeadContext, 0) as OC_RightArrowHeadContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public oC_RelationshipDetail(): OC_RelationshipDetailContext {
		return this.getTypedRuleContext(OC_RelationshipDetailContext, 0) as OC_RelationshipDetailContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_RelationshipPattern;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_RelationshipPattern) {
	 		listener.enterOC_RelationshipPattern(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_RelationshipPattern) {
	 		listener.exitOC_RelationshipPattern(this);
		}
	}
}


export class OC_RelationshipDetailContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public oC_Variable(): OC_VariableContext {
		return this.getTypedRuleContext(OC_VariableContext, 0) as OC_VariableContext;
	}
	public oC_RelationshipTypes(): OC_RelationshipTypesContext {
		return this.getTypedRuleContext(OC_RelationshipTypesContext, 0) as OC_RelationshipTypesContext;
	}
	public oC_RangeLiteral(): OC_RangeLiteralContext {
		return this.getTypedRuleContext(OC_RangeLiteralContext, 0) as OC_RangeLiteralContext;
	}
	public oC_Properties(): OC_PropertiesContext {
		return this.getTypedRuleContext(OC_PropertiesContext, 0) as OC_PropertiesContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_RelationshipDetail;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_RelationshipDetail) {
	 		listener.enterOC_RelationshipDetail(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_RelationshipDetail) {
	 		listener.exitOC_RelationshipDetail(this);
		}
	}
}


export class OC_PropertiesContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_MapLiteral(): OC_MapLiteralContext {
		return this.getTypedRuleContext(OC_MapLiteralContext, 0) as OC_MapLiteralContext;
	}
	public oC_Parameter(): OC_ParameterContext {
		return this.getTypedRuleContext(OC_ParameterContext, 0) as OC_ParameterContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_Properties;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_Properties) {
	 		listener.enterOC_Properties(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_Properties) {
	 		listener.exitOC_Properties(this);
		}
	}
}


export class OC_RelationshipTypesContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_RelTypeName_list(): OC_RelTypeNameContext[] {
		return this.getTypedRuleContexts(OC_RelTypeNameContext) as OC_RelTypeNameContext[];
	}
	public oC_RelTypeName(i: number): OC_RelTypeNameContext {
		return this.getTypedRuleContext(OC_RelTypeNameContext, i) as OC_RelTypeNameContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_RelationshipTypes;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_RelationshipTypes) {
	 		listener.enterOC_RelationshipTypes(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_RelationshipTypes) {
	 		listener.exitOC_RelationshipTypes(this);
		}
	}
}


export class OC_NodeLabelsContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_NodeLabel_list(): OC_NodeLabelContext[] {
		return this.getTypedRuleContexts(OC_NodeLabelContext) as OC_NodeLabelContext[];
	}
	public oC_NodeLabel(i: number): OC_NodeLabelContext {
		return this.getTypedRuleContext(OC_NodeLabelContext, i) as OC_NodeLabelContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_NodeLabels;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_NodeLabels) {
	 		listener.enterOC_NodeLabels(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_NodeLabels) {
	 		listener.exitOC_NodeLabels(this);
		}
	}
}


export class OC_NodeLabelContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_LabelName(): OC_LabelNameContext {
		return this.getTypedRuleContext(OC_LabelNameContext, 0) as OC_LabelNameContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_NodeLabel;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_NodeLabel) {
	 		listener.enterOC_NodeLabel(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_NodeLabel) {
	 		listener.exitOC_NodeLabel(this);
		}
	}
}


export class OC_RangeLiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public oC_IntegerLiteral_list(): OC_IntegerLiteralContext[] {
		return this.getTypedRuleContexts(OC_IntegerLiteralContext) as OC_IntegerLiteralContext[];
	}
	public oC_IntegerLiteral(i: number): OC_IntegerLiteralContext {
		return this.getTypedRuleContext(OC_IntegerLiteralContext, i) as OC_IntegerLiteralContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_RangeLiteral;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_RangeLiteral) {
	 		listener.enterOC_RangeLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_RangeLiteral) {
	 		listener.exitOC_RangeLiteral(this);
		}
	}
}


export class OC_LabelNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_SchemaName(): OC_SchemaNameContext {
		return this.getTypedRuleContext(OC_SchemaNameContext, 0) as OC_SchemaNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_LabelName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_LabelName) {
	 		listener.enterOC_LabelName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_LabelName) {
	 		listener.exitOC_LabelName(this);
		}
	}
}


export class OC_RelTypeNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_SchemaName(): OC_SchemaNameContext {
		return this.getTypedRuleContext(OC_SchemaNameContext, 0) as OC_SchemaNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_RelTypeName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_RelTypeName) {
	 		listener.enterOC_RelTypeName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_RelTypeName) {
	 		listener.exitOC_RelTypeName(this);
		}
	}
}


export class OC_PropertyExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_Atom(): OC_AtomContext {
		return this.getTypedRuleContext(OC_AtomContext, 0) as OC_AtomContext;
	}
	public oC_PropertyLookup_list(): OC_PropertyLookupContext[] {
		return this.getTypedRuleContexts(OC_PropertyLookupContext) as OC_PropertyLookupContext[];
	}
	public oC_PropertyLookup(i: number): OC_PropertyLookupContext {
		return this.getTypedRuleContext(OC_PropertyLookupContext, i) as OC_PropertyLookupContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_PropertyExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_PropertyExpression) {
	 		listener.enterOC_PropertyExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_PropertyExpression) {
	 		listener.exitOC_PropertyExpression(this);
		}
	}
}


export class OC_ExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_OrExpression(): OC_OrExpressionContext {
		return this.getTypedRuleContext(OC_OrExpressionContext, 0) as OC_OrExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_Expression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_Expression) {
	 		listener.enterOC_Expression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_Expression) {
	 		listener.exitOC_Expression(this);
		}
	}
}


export class OC_OrExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_XorExpression_list(): OC_XorExpressionContext[] {
		return this.getTypedRuleContexts(OC_XorExpressionContext) as OC_XorExpressionContext[];
	}
	public oC_XorExpression(i: number): OC_XorExpressionContext {
		return this.getTypedRuleContext(OC_XorExpressionContext, i) as OC_XorExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public OR_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.OR);
	}
	public OR(i: number): TerminalNode {
		return this.getToken(CypherParser.OR, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_OrExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_OrExpression) {
	 		listener.enterOC_OrExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_OrExpression) {
	 		listener.exitOC_OrExpression(this);
		}
	}
}


export class OC_XorExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_AndExpression_list(): OC_AndExpressionContext[] {
		return this.getTypedRuleContexts(OC_AndExpressionContext) as OC_AndExpressionContext[];
	}
	public oC_AndExpression(i: number): OC_AndExpressionContext {
		return this.getTypedRuleContext(OC_AndExpressionContext, i) as OC_AndExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public XOR_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.XOR);
	}
	public XOR(i: number): TerminalNode {
		return this.getToken(CypherParser.XOR, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_XorExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_XorExpression) {
	 		listener.enterOC_XorExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_XorExpression) {
	 		listener.exitOC_XorExpression(this);
		}
	}
}


export class OC_AndExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_NotExpression_list(): OC_NotExpressionContext[] {
		return this.getTypedRuleContexts(OC_NotExpressionContext) as OC_NotExpressionContext[];
	}
	public oC_NotExpression(i: number): OC_NotExpressionContext {
		return this.getTypedRuleContext(OC_NotExpressionContext, i) as OC_NotExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public AND_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.AND);
	}
	public AND(i: number): TerminalNode {
		return this.getToken(CypherParser.AND, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_AndExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_AndExpression) {
	 		listener.enterOC_AndExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_AndExpression) {
	 		listener.exitOC_AndExpression(this);
		}
	}
}


export class OC_NotExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_ComparisonExpression(): OC_ComparisonExpressionContext {
		return this.getTypedRuleContext(OC_ComparisonExpressionContext, 0) as OC_ComparisonExpressionContext;
	}
	public NOT_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.NOT);
	}
	public NOT(i: number): TerminalNode {
		return this.getToken(CypherParser.NOT, i);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_NotExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_NotExpression) {
	 		listener.enterOC_NotExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_NotExpression) {
	 		listener.exitOC_NotExpression(this);
		}
	}
}


export class OC_ComparisonExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_StringListNullPredicateExpression(): OC_StringListNullPredicateExpressionContext {
		return this.getTypedRuleContext(OC_StringListNullPredicateExpressionContext, 0) as OC_StringListNullPredicateExpressionContext;
	}
	public oC_PartialComparisonExpression_list(): OC_PartialComparisonExpressionContext[] {
		return this.getTypedRuleContexts(OC_PartialComparisonExpressionContext) as OC_PartialComparisonExpressionContext[];
	}
	public oC_PartialComparisonExpression(i: number): OC_PartialComparisonExpressionContext {
		return this.getTypedRuleContext(OC_PartialComparisonExpressionContext, i) as OC_PartialComparisonExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_ComparisonExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_ComparisonExpression) {
	 		listener.enterOC_ComparisonExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_ComparisonExpression) {
	 		listener.exitOC_ComparisonExpression(this);
		}
	}
}


export class OC_PartialComparisonExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_StringListNullPredicateExpression(): OC_StringListNullPredicateExpressionContext {
		return this.getTypedRuleContext(OC_StringListNullPredicateExpressionContext, 0) as OC_StringListNullPredicateExpressionContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_PartialComparisonExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_PartialComparisonExpression) {
	 		listener.enterOC_PartialComparisonExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_PartialComparisonExpression) {
	 		listener.exitOC_PartialComparisonExpression(this);
		}
	}
}


export class OC_StringListNullPredicateExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_AddOrSubtractExpression(): OC_AddOrSubtractExpressionContext {
		return this.getTypedRuleContext(OC_AddOrSubtractExpressionContext, 0) as OC_AddOrSubtractExpressionContext;
	}
	public oC_StringPredicateExpression_list(): OC_StringPredicateExpressionContext[] {
		return this.getTypedRuleContexts(OC_StringPredicateExpressionContext) as OC_StringPredicateExpressionContext[];
	}
	public oC_StringPredicateExpression(i: number): OC_StringPredicateExpressionContext {
		return this.getTypedRuleContext(OC_StringPredicateExpressionContext, i) as OC_StringPredicateExpressionContext;
	}
	public oC_ListPredicateExpression_list(): OC_ListPredicateExpressionContext[] {
		return this.getTypedRuleContexts(OC_ListPredicateExpressionContext) as OC_ListPredicateExpressionContext[];
	}
	public oC_ListPredicateExpression(i: number): OC_ListPredicateExpressionContext {
		return this.getTypedRuleContext(OC_ListPredicateExpressionContext, i) as OC_ListPredicateExpressionContext;
	}
	public oC_NullPredicateExpression_list(): OC_NullPredicateExpressionContext[] {
		return this.getTypedRuleContexts(OC_NullPredicateExpressionContext) as OC_NullPredicateExpressionContext[];
	}
	public oC_NullPredicateExpression(i: number): OC_NullPredicateExpressionContext {
		return this.getTypedRuleContext(OC_NullPredicateExpressionContext, i) as OC_NullPredicateExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_StringListNullPredicateExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_StringListNullPredicateExpression) {
	 		listener.enterOC_StringListNullPredicateExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_StringListNullPredicateExpression) {
	 		listener.exitOC_StringListNullPredicateExpression(this);
		}
	}
}


export class OC_StringPredicateExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_AddOrSubtractExpression(): OC_AddOrSubtractExpressionContext {
		return this.getTypedRuleContext(OC_AddOrSubtractExpressionContext, 0) as OC_AddOrSubtractExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public STARTS(): TerminalNode {
		return this.getToken(CypherParser.STARTS, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(CypherParser.WITH, 0);
	}
	public ENDS(): TerminalNode {
		return this.getToken(CypherParser.ENDS, 0);
	}
	public CONTAINS(): TerminalNode {
		return this.getToken(CypherParser.CONTAINS, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_StringPredicateExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_StringPredicateExpression) {
	 		listener.enterOC_StringPredicateExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_StringPredicateExpression) {
	 		listener.exitOC_StringPredicateExpression(this);
		}
	}
}


export class OC_ListPredicateExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public IN(): TerminalNode {
		return this.getToken(CypherParser.IN, 0);
	}
	public oC_AddOrSubtractExpression(): OC_AddOrSubtractExpressionContext {
		return this.getTypedRuleContext(OC_AddOrSubtractExpressionContext, 0) as OC_AddOrSubtractExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_ListPredicateExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_ListPredicateExpression) {
	 		listener.enterOC_ListPredicateExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_ListPredicateExpression) {
	 		listener.exitOC_ListPredicateExpression(this);
		}
	}
}


export class OC_NullPredicateExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public IS(): TerminalNode {
		return this.getToken(CypherParser.IS, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(CypherParser.NULL, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(CypherParser.NOT, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_NullPredicateExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_NullPredicateExpression) {
	 		listener.enterOC_NullPredicateExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_NullPredicateExpression) {
	 		listener.exitOC_NullPredicateExpression(this);
		}
	}
}


export class OC_AddOrSubtractExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_MultiplyDivideModuloExpression_list(): OC_MultiplyDivideModuloExpressionContext[] {
		return this.getTypedRuleContexts(OC_MultiplyDivideModuloExpressionContext) as OC_MultiplyDivideModuloExpressionContext[];
	}
	public oC_MultiplyDivideModuloExpression(i: number): OC_MultiplyDivideModuloExpressionContext {
		return this.getTypedRuleContext(OC_MultiplyDivideModuloExpressionContext, i) as OC_MultiplyDivideModuloExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_AddOrSubtractExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_AddOrSubtractExpression) {
	 		listener.enterOC_AddOrSubtractExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_AddOrSubtractExpression) {
	 		listener.exitOC_AddOrSubtractExpression(this);
		}
	}
}


export class OC_MultiplyDivideModuloExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_PowerOfExpression_list(): OC_PowerOfExpressionContext[] {
		return this.getTypedRuleContexts(OC_PowerOfExpressionContext) as OC_PowerOfExpressionContext[];
	}
	public oC_PowerOfExpression(i: number): OC_PowerOfExpressionContext {
		return this.getTypedRuleContext(OC_PowerOfExpressionContext, i) as OC_PowerOfExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_MultiplyDivideModuloExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_MultiplyDivideModuloExpression) {
	 		listener.enterOC_MultiplyDivideModuloExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_MultiplyDivideModuloExpression) {
	 		listener.exitOC_MultiplyDivideModuloExpression(this);
		}
	}
}


export class OC_PowerOfExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_UnaryAddOrSubtractExpression_list(): OC_UnaryAddOrSubtractExpressionContext[] {
		return this.getTypedRuleContexts(OC_UnaryAddOrSubtractExpressionContext) as OC_UnaryAddOrSubtractExpressionContext[];
	}
	public oC_UnaryAddOrSubtractExpression(i: number): OC_UnaryAddOrSubtractExpressionContext {
		return this.getTypedRuleContext(OC_UnaryAddOrSubtractExpressionContext, i) as OC_UnaryAddOrSubtractExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_PowerOfExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_PowerOfExpression) {
	 		listener.enterOC_PowerOfExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_PowerOfExpression) {
	 		listener.exitOC_PowerOfExpression(this);
		}
	}
}


export class OC_UnaryAddOrSubtractExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_NonArithmeticOperatorExpression(): OC_NonArithmeticOperatorExpressionContext {
		return this.getTypedRuleContext(OC_NonArithmeticOperatorExpressionContext, 0) as OC_NonArithmeticOperatorExpressionContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_UnaryAddOrSubtractExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_UnaryAddOrSubtractExpression) {
	 		listener.enterOC_UnaryAddOrSubtractExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_UnaryAddOrSubtractExpression) {
	 		listener.exitOC_UnaryAddOrSubtractExpression(this);
		}
	}
}


export class OC_NonArithmeticOperatorExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_Atom(): OC_AtomContext {
		return this.getTypedRuleContext(OC_AtomContext, 0) as OC_AtomContext;
	}
	public oC_NodeLabels(): OC_NodeLabelsContext {
		return this.getTypedRuleContext(OC_NodeLabelsContext, 0) as OC_NodeLabelsContext;
	}
	public oC_ListOperatorExpression_list(): OC_ListOperatorExpressionContext[] {
		return this.getTypedRuleContexts(OC_ListOperatorExpressionContext) as OC_ListOperatorExpressionContext[];
	}
	public oC_ListOperatorExpression(i: number): OC_ListOperatorExpressionContext {
		return this.getTypedRuleContext(OC_ListOperatorExpressionContext, i) as OC_ListOperatorExpressionContext;
	}
	public oC_PropertyLookup_list(): OC_PropertyLookupContext[] {
		return this.getTypedRuleContexts(OC_PropertyLookupContext) as OC_PropertyLookupContext[];
	}
	public oC_PropertyLookup(i: number): OC_PropertyLookupContext {
		return this.getTypedRuleContext(OC_PropertyLookupContext, i) as OC_PropertyLookupContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_NonArithmeticOperatorExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_NonArithmeticOperatorExpression) {
	 		listener.enterOC_NonArithmeticOperatorExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_NonArithmeticOperatorExpression) {
	 		listener.exitOC_NonArithmeticOperatorExpression(this);
		}
	}
}


export class OC_ListOperatorExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_Expression_list(): OC_ExpressionContext[] {
		return this.getTypedRuleContexts(OC_ExpressionContext) as OC_ExpressionContext[];
	}
	public oC_Expression(i: number): OC_ExpressionContext {
		return this.getTypedRuleContext(OC_ExpressionContext, i) as OC_ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_ListOperatorExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_ListOperatorExpression) {
	 		listener.enterOC_ListOperatorExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_ListOperatorExpression) {
	 		listener.exitOC_ListOperatorExpression(this);
		}
	}
}


export class OC_PropertyLookupContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_PropertyKeyName(): OC_PropertyKeyNameContext {
		return this.getTypedRuleContext(OC_PropertyKeyNameContext, 0) as OC_PropertyKeyNameContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_PropertyLookup;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_PropertyLookup) {
	 		listener.enterOC_PropertyLookup(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_PropertyLookup) {
	 		listener.exitOC_PropertyLookup(this);
		}
	}
}


export class OC_AtomContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_Literal(): OC_LiteralContext {
		return this.getTypedRuleContext(OC_LiteralContext, 0) as OC_LiteralContext;
	}
	public oC_Parameter(): OC_ParameterContext {
		return this.getTypedRuleContext(OC_ParameterContext, 0) as OC_ParameterContext;
	}
	public oC_CaseExpression(): OC_CaseExpressionContext {
		return this.getTypedRuleContext(OC_CaseExpressionContext, 0) as OC_CaseExpressionContext;
	}
	public COUNT(): TerminalNode {
		return this.getToken(CypherParser.COUNT, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public oC_ListComprehension(): OC_ListComprehensionContext {
		return this.getTypedRuleContext(OC_ListComprehensionContext, 0) as OC_ListComprehensionContext;
	}
	public oC_PatternComprehension(): OC_PatternComprehensionContext {
		return this.getTypedRuleContext(OC_PatternComprehensionContext, 0) as OC_PatternComprehensionContext;
	}
	public oC_Quantifier(): OC_QuantifierContext {
		return this.getTypedRuleContext(OC_QuantifierContext, 0) as OC_QuantifierContext;
	}
	public oC_PatternPredicate(): OC_PatternPredicateContext {
		return this.getTypedRuleContext(OC_PatternPredicateContext, 0) as OC_PatternPredicateContext;
	}
	public oC_ParenthesizedExpression(): OC_ParenthesizedExpressionContext {
		return this.getTypedRuleContext(OC_ParenthesizedExpressionContext, 0) as OC_ParenthesizedExpressionContext;
	}
	public oC_FunctionInvocation(): OC_FunctionInvocationContext {
		return this.getTypedRuleContext(OC_FunctionInvocationContext, 0) as OC_FunctionInvocationContext;
	}
	public oC_ExistentialSubquery(): OC_ExistentialSubqueryContext {
		return this.getTypedRuleContext(OC_ExistentialSubqueryContext, 0) as OC_ExistentialSubqueryContext;
	}
	public oC_Variable(): OC_VariableContext {
		return this.getTypedRuleContext(OC_VariableContext, 0) as OC_VariableContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_Atom;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_Atom) {
	 		listener.enterOC_Atom(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_Atom) {
	 		listener.exitOC_Atom(this);
		}
	}
}


export class OC_CaseExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public END(): TerminalNode {
		return this.getToken(CypherParser.END, 0);
	}
	public ELSE(): TerminalNode {
		return this.getToken(CypherParser.ELSE, 0);
	}
	public oC_Expression_list(): OC_ExpressionContext[] {
		return this.getTypedRuleContexts(OC_ExpressionContext) as OC_ExpressionContext[];
	}
	public oC_Expression(i: number): OC_ExpressionContext {
		return this.getTypedRuleContext(OC_ExpressionContext, i) as OC_ExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public CASE(): TerminalNode {
		return this.getToken(CypherParser.CASE, 0);
	}
	public oC_CaseAlternative_list(): OC_CaseAlternativeContext[] {
		return this.getTypedRuleContexts(OC_CaseAlternativeContext) as OC_CaseAlternativeContext[];
	}
	public oC_CaseAlternative(i: number): OC_CaseAlternativeContext {
		return this.getTypedRuleContext(OC_CaseAlternativeContext, i) as OC_CaseAlternativeContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_CaseExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_CaseExpression) {
	 		listener.enterOC_CaseExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_CaseExpression) {
	 		listener.exitOC_CaseExpression(this);
		}
	}
}


export class OC_CaseAlternativeContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHEN(): TerminalNode {
		return this.getToken(CypherParser.WHEN, 0);
	}
	public oC_Expression_list(): OC_ExpressionContext[] {
		return this.getTypedRuleContexts(OC_ExpressionContext) as OC_ExpressionContext[];
	}
	public oC_Expression(i: number): OC_ExpressionContext {
		return this.getTypedRuleContext(OC_ExpressionContext, i) as OC_ExpressionContext;
	}
	public THEN(): TerminalNode {
		return this.getToken(CypherParser.THEN, 0);
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_CaseAlternative;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_CaseAlternative) {
	 		listener.enterOC_CaseAlternative(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_CaseAlternative) {
	 		listener.exitOC_CaseAlternative(this);
		}
	}
}


export class OC_ListComprehensionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_FilterExpression(): OC_FilterExpressionContext {
		return this.getTypedRuleContext(OC_FilterExpressionContext, 0) as OC_FilterExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public oC_Expression(): OC_ExpressionContext {
		return this.getTypedRuleContext(OC_ExpressionContext, 0) as OC_ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_ListComprehension;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_ListComprehension) {
	 		listener.enterOC_ListComprehension(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_ListComprehension) {
	 		listener.exitOC_ListComprehension(this);
		}
	}
}


export class OC_PatternComprehensionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_RelationshipsPattern(): OC_RelationshipsPatternContext {
		return this.getTypedRuleContext(OC_RelationshipsPatternContext, 0) as OC_RelationshipsPatternContext;
	}
	public oC_Expression(): OC_ExpressionContext {
		return this.getTypedRuleContext(OC_ExpressionContext, 0) as OC_ExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public oC_Variable(): OC_VariableContext {
		return this.getTypedRuleContext(OC_VariableContext, 0) as OC_VariableContext;
	}
	public oC_Where(): OC_WhereContext {
		return this.getTypedRuleContext(OC_WhereContext, 0) as OC_WhereContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_PatternComprehension;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_PatternComprehension) {
	 		listener.enterOC_PatternComprehension(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_PatternComprehension) {
	 		listener.exitOC_PatternComprehension(this);
		}
	}
}


export class OC_QuantifierContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALL(): TerminalNode {
		return this.getToken(CypherParser.ALL, 0);
	}
	public oC_FilterExpression(): OC_FilterExpressionContext {
		return this.getTypedRuleContext(OC_FilterExpressionContext, 0) as OC_FilterExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public ANY(): TerminalNode {
		return this.getToken(CypherParser.ANY, 0);
	}
	public NONE(): TerminalNode {
		return this.getToken(CypherParser.NONE, 0);
	}
	public SINGLE(): TerminalNode {
		return this.getToken(CypherParser.SINGLE, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_Quantifier;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_Quantifier) {
	 		listener.enterOC_Quantifier(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_Quantifier) {
	 		listener.exitOC_Quantifier(this);
		}
	}
}


export class OC_FilterExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_IdInColl(): OC_IdInCollContext {
		return this.getTypedRuleContext(OC_IdInCollContext, 0) as OC_IdInCollContext;
	}
	public oC_Where(): OC_WhereContext {
		return this.getTypedRuleContext(OC_WhereContext, 0) as OC_WhereContext;
	}
	public SP(): TerminalNode {
		return this.getToken(CypherParser.SP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_FilterExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_FilterExpression) {
	 		listener.enterOC_FilterExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_FilterExpression) {
	 		listener.exitOC_FilterExpression(this);
		}
	}
}


export class OC_PatternPredicateContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_RelationshipsPattern(): OC_RelationshipsPatternContext {
		return this.getTypedRuleContext(OC_RelationshipsPatternContext, 0) as OC_RelationshipsPatternContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_PatternPredicate;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_PatternPredicate) {
	 		listener.enterOC_PatternPredicate(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_PatternPredicate) {
	 		listener.exitOC_PatternPredicate(this);
		}
	}
}


export class OC_ParenthesizedExpressionContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_Expression(): OC_ExpressionContext {
		return this.getTypedRuleContext(OC_ExpressionContext, 0) as OC_ExpressionContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_ParenthesizedExpression;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_ParenthesizedExpression) {
	 		listener.enterOC_ParenthesizedExpression(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_ParenthesizedExpression) {
	 		listener.exitOC_ParenthesizedExpression(this);
		}
	}
}


export class OC_IdInCollContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_Variable(): OC_VariableContext {
		return this.getTypedRuleContext(OC_VariableContext, 0) as OC_VariableContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public IN(): TerminalNode {
		return this.getToken(CypherParser.IN, 0);
	}
	public oC_Expression(): OC_ExpressionContext {
		return this.getTypedRuleContext(OC_ExpressionContext, 0) as OC_ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_IdInColl;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_IdInColl) {
	 		listener.enterOC_IdInColl(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_IdInColl) {
	 		listener.exitOC_IdInColl(this);
		}
	}
}


export class OC_FunctionInvocationContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_FunctionName(): OC_FunctionNameContext {
		return this.getTypedRuleContext(OC_FunctionNameContext, 0) as OC_FunctionNameContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public DISTINCT(): TerminalNode {
		return this.getToken(CypherParser.DISTINCT, 0);
	}
	public oC_Expression_list(): OC_ExpressionContext[] {
		return this.getTypedRuleContexts(OC_ExpressionContext) as OC_ExpressionContext[];
	}
	public oC_Expression(i: number): OC_ExpressionContext {
		return this.getTypedRuleContext(OC_ExpressionContext, i) as OC_ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_FunctionInvocation;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_FunctionInvocation) {
	 		listener.enterOC_FunctionInvocation(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_FunctionInvocation) {
	 		listener.exitOC_FunctionInvocation(this);
		}
	}
}


export class OC_FunctionNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_Namespace(): OC_NamespaceContext {
		return this.getTypedRuleContext(OC_NamespaceContext, 0) as OC_NamespaceContext;
	}
	public oC_SymbolicName(): OC_SymbolicNameContext {
		return this.getTypedRuleContext(OC_SymbolicNameContext, 0) as OC_SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_FunctionName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_FunctionName) {
	 		listener.enterOC_FunctionName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_FunctionName) {
	 		listener.exitOC_FunctionName(this);
		}
	}
}


export class OC_ExistentialSubqueryContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXISTS(): TerminalNode {
		return this.getToken(CypherParser.EXISTS, 0);
	}
	public oC_RegularQuery(): OC_RegularQueryContext {
		return this.getTypedRuleContext(OC_RegularQueryContext, 0) as OC_RegularQueryContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public oC_Pattern(): OC_PatternContext {
		return this.getTypedRuleContext(OC_PatternContext, 0) as OC_PatternContext;
	}
	public oC_Where(): OC_WhereContext {
		return this.getTypedRuleContext(OC_WhereContext, 0) as OC_WhereContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_ExistentialSubquery;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_ExistentialSubquery) {
	 		listener.enterOC_ExistentialSubquery(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_ExistentialSubquery) {
	 		listener.exitOC_ExistentialSubquery(this);
		}
	}
}


export class OC_ExplicitProcedureInvocationContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_ProcedureName(): OC_ProcedureNameContext {
		return this.getTypedRuleContext(OC_ProcedureNameContext, 0) as OC_ProcedureNameContext;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public oC_Expression_list(): OC_ExpressionContext[] {
		return this.getTypedRuleContexts(OC_ExpressionContext) as OC_ExpressionContext[];
	}
	public oC_Expression(i: number): OC_ExpressionContext {
		return this.getTypedRuleContext(OC_ExpressionContext, i) as OC_ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_ExplicitProcedureInvocation;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_ExplicitProcedureInvocation) {
	 		listener.enterOC_ExplicitProcedureInvocation(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_ExplicitProcedureInvocation) {
	 		listener.exitOC_ExplicitProcedureInvocation(this);
		}
	}
}


export class OC_ImplicitProcedureInvocationContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_ProcedureName(): OC_ProcedureNameContext {
		return this.getTypedRuleContext(OC_ProcedureNameContext, 0) as OC_ProcedureNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_ImplicitProcedureInvocation;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_ImplicitProcedureInvocation) {
	 		listener.enterOC_ImplicitProcedureInvocation(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_ImplicitProcedureInvocation) {
	 		listener.exitOC_ImplicitProcedureInvocation(this);
		}
	}
}


export class OC_ProcedureResultFieldContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_SymbolicName(): OC_SymbolicNameContext {
		return this.getTypedRuleContext(OC_SymbolicNameContext, 0) as OC_SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_ProcedureResultField;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_ProcedureResultField) {
	 		listener.enterOC_ProcedureResultField(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_ProcedureResultField) {
	 		listener.exitOC_ProcedureResultField(this);
		}
	}
}


export class OC_ProcedureNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_Namespace(): OC_NamespaceContext {
		return this.getTypedRuleContext(OC_NamespaceContext, 0) as OC_NamespaceContext;
	}
	public oC_SymbolicName(): OC_SymbolicNameContext {
		return this.getTypedRuleContext(OC_SymbolicNameContext, 0) as OC_SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_ProcedureName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_ProcedureName) {
	 		listener.enterOC_ProcedureName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_ProcedureName) {
	 		listener.exitOC_ProcedureName(this);
		}
	}
}


export class OC_NamespaceContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_SymbolicName_list(): OC_SymbolicNameContext[] {
		return this.getTypedRuleContexts(OC_SymbolicNameContext) as OC_SymbolicNameContext[];
	}
	public oC_SymbolicName(i: number): OC_SymbolicNameContext {
		return this.getTypedRuleContext(OC_SymbolicNameContext, i) as OC_SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_Namespace;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_Namespace) {
	 		listener.enterOC_Namespace(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_Namespace) {
	 		listener.exitOC_Namespace(this);
		}
	}
}


export class OC_VariableContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_SymbolicName(): OC_SymbolicNameContext {
		return this.getTypedRuleContext(OC_SymbolicNameContext, 0) as OC_SymbolicNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_Variable;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_Variable) {
	 		listener.enterOC_Variable(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_Variable) {
	 		listener.exitOC_Variable(this);
		}
	}
}


export class OC_LiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_BooleanLiteral(): OC_BooleanLiteralContext {
		return this.getTypedRuleContext(OC_BooleanLiteralContext, 0) as OC_BooleanLiteralContext;
	}
	public NULL(): TerminalNode {
		return this.getToken(CypherParser.NULL, 0);
	}
	public oC_NumberLiteral(): OC_NumberLiteralContext {
		return this.getTypedRuleContext(OC_NumberLiteralContext, 0) as OC_NumberLiteralContext;
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(CypherParser.StringLiteral, 0);
	}
	public oC_ListLiteral(): OC_ListLiteralContext {
		return this.getTypedRuleContext(OC_ListLiteralContext, 0) as OC_ListLiteralContext;
	}
	public oC_MapLiteral(): OC_MapLiteralContext {
		return this.getTypedRuleContext(OC_MapLiteralContext, 0) as OC_MapLiteralContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_Literal;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_Literal) {
	 		listener.enterOC_Literal(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_Literal) {
	 		listener.exitOC_Literal(this);
		}
	}
}


export class OC_BooleanLiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRUE(): TerminalNode {
		return this.getToken(CypherParser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(CypherParser.FALSE, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_BooleanLiteral;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_BooleanLiteral) {
	 		listener.enterOC_BooleanLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_BooleanLiteral) {
	 		listener.exitOC_BooleanLiteral(this);
		}
	}
}


export class OC_NumberLiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_DoubleLiteral(): OC_DoubleLiteralContext {
		return this.getTypedRuleContext(OC_DoubleLiteralContext, 0) as OC_DoubleLiteralContext;
	}
	public oC_IntegerLiteral(): OC_IntegerLiteralContext {
		return this.getTypedRuleContext(OC_IntegerLiteralContext, 0) as OC_IntegerLiteralContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_NumberLiteral;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_NumberLiteral) {
	 		listener.enterOC_NumberLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_NumberLiteral) {
	 		listener.exitOC_NumberLiteral(this);
		}
	}
}


export class OC_IntegerLiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public HexInteger(): TerminalNode {
		return this.getToken(CypherParser.HexInteger, 0);
	}
	public OctalInteger(): TerminalNode {
		return this.getToken(CypherParser.OctalInteger, 0);
	}
	public DecimalInteger(): TerminalNode {
		return this.getToken(CypherParser.DecimalInteger, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_IntegerLiteral;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_IntegerLiteral) {
	 		listener.enterOC_IntegerLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_IntegerLiteral) {
	 		listener.exitOC_IntegerLiteral(this);
		}
	}
}


export class OC_DoubleLiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ExponentDecimalReal(): TerminalNode {
		return this.getToken(CypherParser.ExponentDecimalReal, 0);
	}
	public RegularDecimalReal(): TerminalNode {
		return this.getToken(CypherParser.RegularDecimalReal, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_DoubleLiteral;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_DoubleLiteral) {
	 		listener.enterOC_DoubleLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_DoubleLiteral) {
	 		listener.exitOC_DoubleLiteral(this);
		}
	}
}


export class OC_ListLiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public oC_Expression_list(): OC_ExpressionContext[] {
		return this.getTypedRuleContexts(OC_ExpressionContext) as OC_ExpressionContext[];
	}
	public oC_Expression(i: number): OC_ExpressionContext {
		return this.getTypedRuleContext(OC_ExpressionContext, i) as OC_ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_ListLiteral;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_ListLiteral) {
	 		listener.enterOC_ListLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_ListLiteral) {
	 		listener.exitOC_ListLiteral(this);
		}
	}
}


export class OC_MapLiteralContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SP_list(): TerminalNode[] {
	    	return this.getTokens(CypherParser.SP);
	}
	public SP(i: number): TerminalNode {
		return this.getToken(CypherParser.SP, i);
	}
	public oC_PropertyKeyName_list(): OC_PropertyKeyNameContext[] {
		return this.getTypedRuleContexts(OC_PropertyKeyNameContext) as OC_PropertyKeyNameContext[];
	}
	public oC_PropertyKeyName(i: number): OC_PropertyKeyNameContext {
		return this.getTypedRuleContext(OC_PropertyKeyNameContext, i) as OC_PropertyKeyNameContext;
	}
	public oC_Expression_list(): OC_ExpressionContext[] {
		return this.getTypedRuleContexts(OC_ExpressionContext) as OC_ExpressionContext[];
	}
	public oC_Expression(i: number): OC_ExpressionContext {
		return this.getTypedRuleContext(OC_ExpressionContext, i) as OC_ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_MapLiteral;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_MapLiteral) {
	 		listener.enterOC_MapLiteral(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_MapLiteral) {
	 		listener.exitOC_MapLiteral(this);
		}
	}
}


export class OC_PropertyKeyNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_SchemaName(): OC_SchemaNameContext {
		return this.getTypedRuleContext(OC_SchemaNameContext, 0) as OC_SchemaNameContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_PropertyKeyName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_PropertyKeyName) {
	 		listener.enterOC_PropertyKeyName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_PropertyKeyName) {
	 		listener.exitOC_PropertyKeyName(this);
		}
	}
}


export class OC_ParameterContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_SymbolicName(): OC_SymbolicNameContext {
		return this.getTypedRuleContext(OC_SymbolicNameContext, 0) as OC_SymbolicNameContext;
	}
	public DecimalInteger(): TerminalNode {
		return this.getToken(CypherParser.DecimalInteger, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_Parameter;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_Parameter) {
	 		listener.enterOC_Parameter(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_Parameter) {
	 		listener.exitOC_Parameter(this);
		}
	}
}


export class OC_SchemaNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public oC_SymbolicName(): OC_SymbolicNameContext {
		return this.getTypedRuleContext(OC_SymbolicNameContext, 0) as OC_SymbolicNameContext;
	}
	public oC_ReservedWord(): OC_ReservedWordContext {
		return this.getTypedRuleContext(OC_ReservedWordContext, 0) as OC_ReservedWordContext;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_SchemaName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_SchemaName) {
	 		listener.enterOC_SchemaName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_SchemaName) {
	 		listener.exitOC_SchemaName(this);
		}
	}
}


export class OC_ReservedWordContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALL(): TerminalNode {
		return this.getToken(CypherParser.ALL, 0);
	}
	public ASC(): TerminalNode {
		return this.getToken(CypherParser.ASC, 0);
	}
	public ASCENDING(): TerminalNode {
		return this.getToken(CypherParser.ASCENDING, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(CypherParser.BY, 0);
	}
	public CREATE(): TerminalNode {
		return this.getToken(CypherParser.CREATE, 0);
	}
	public DELETE(): TerminalNode {
		return this.getToken(CypherParser.DELETE, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(CypherParser.DESC, 0);
	}
	public DESCENDING(): TerminalNode {
		return this.getToken(CypherParser.DESCENDING, 0);
	}
	public DETACH(): TerminalNode {
		return this.getToken(CypherParser.DETACH, 0);
	}
	public EXISTS(): TerminalNode {
		return this.getToken(CypherParser.EXISTS, 0);
	}
	public LIMIT(): TerminalNode {
		return this.getToken(CypherParser.LIMIT, 0);
	}
	public MATCH(): TerminalNode {
		return this.getToken(CypherParser.MATCH, 0);
	}
	public MERGE(): TerminalNode {
		return this.getToken(CypherParser.MERGE, 0);
	}
	public ON(): TerminalNode {
		return this.getToken(CypherParser.ON, 0);
	}
	public OPTIONAL(): TerminalNode {
		return this.getToken(CypherParser.OPTIONAL, 0);
	}
	public ORDER(): TerminalNode {
		return this.getToken(CypherParser.ORDER, 0);
	}
	public REMOVE(): TerminalNode {
		return this.getToken(CypherParser.REMOVE, 0);
	}
	public RETURN(): TerminalNode {
		return this.getToken(CypherParser.RETURN, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(CypherParser.SET, 0);
	}
	public L_SKIP(): TerminalNode {
		return this.getToken(CypherParser.L_SKIP, 0);
	}
	public WHERE(): TerminalNode {
		return this.getToken(CypherParser.WHERE, 0);
	}
	public WITH(): TerminalNode {
		return this.getToken(CypherParser.WITH, 0);
	}
	public UNION(): TerminalNode {
		return this.getToken(CypherParser.UNION, 0);
	}
	public UNWIND(): TerminalNode {
		return this.getToken(CypherParser.UNWIND, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(CypherParser.AND, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(CypherParser.AS, 0);
	}
	public CONTAINS(): TerminalNode {
		return this.getToken(CypherParser.CONTAINS, 0);
	}
	public DISTINCT(): TerminalNode {
		return this.getToken(CypherParser.DISTINCT, 0);
	}
	public ENDS(): TerminalNode {
		return this.getToken(CypherParser.ENDS, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(CypherParser.IN, 0);
	}
	public IS(): TerminalNode {
		return this.getToken(CypherParser.IS, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(CypherParser.NOT, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(CypherParser.OR, 0);
	}
	public STARTS(): TerminalNode {
		return this.getToken(CypherParser.STARTS, 0);
	}
	public XOR(): TerminalNode {
		return this.getToken(CypherParser.XOR, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(CypherParser.FALSE, 0);
	}
	public TRUE(): TerminalNode {
		return this.getToken(CypherParser.TRUE, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(CypherParser.NULL, 0);
	}
	public CONSTRAINT(): TerminalNode {
		return this.getToken(CypherParser.CONSTRAINT, 0);
	}
	public DO(): TerminalNode {
		return this.getToken(CypherParser.DO, 0);
	}
	public FOR(): TerminalNode {
		return this.getToken(CypherParser.FOR, 0);
	}
	public REQUIRE(): TerminalNode {
		return this.getToken(CypherParser.REQUIRE, 0);
	}
	public UNIQUE(): TerminalNode {
		return this.getToken(CypherParser.UNIQUE, 0);
	}
	public CASE(): TerminalNode {
		return this.getToken(CypherParser.CASE, 0);
	}
	public WHEN(): TerminalNode {
		return this.getToken(CypherParser.WHEN, 0);
	}
	public THEN(): TerminalNode {
		return this.getToken(CypherParser.THEN, 0);
	}
	public ELSE(): TerminalNode {
		return this.getToken(CypherParser.ELSE, 0);
	}
	public END(): TerminalNode {
		return this.getToken(CypherParser.END, 0);
	}
	public MANDATORY(): TerminalNode {
		return this.getToken(CypherParser.MANDATORY, 0);
	}
	public SCALAR(): TerminalNode {
		return this.getToken(CypherParser.SCALAR, 0);
	}
	public OF(): TerminalNode {
		return this.getToken(CypherParser.OF, 0);
	}
	public ADD(): TerminalNode {
		return this.getToken(CypherParser.ADD, 0);
	}
	public DROP(): TerminalNode {
		return this.getToken(CypherParser.DROP, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_ReservedWord;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_ReservedWord) {
	 		listener.enterOC_ReservedWord(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_ReservedWord) {
	 		listener.exitOC_ReservedWord(this);
		}
	}
}


export class OC_SymbolicNameContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UnescapedSymbolicName(): TerminalNode {
		return this.getToken(CypherParser.UnescapedSymbolicName, 0);
	}
	public EscapedSymbolicName(): TerminalNode {
		return this.getToken(CypherParser.EscapedSymbolicName, 0);
	}
	public HexLetter(): TerminalNode {
		return this.getToken(CypherParser.HexLetter, 0);
	}
	public COUNT(): TerminalNode {
		return this.getToken(CypherParser.COUNT, 0);
	}
	public FILTER(): TerminalNode {
		return this.getToken(CypherParser.FILTER, 0);
	}
	public EXTRACT(): TerminalNode {
		return this.getToken(CypherParser.EXTRACT, 0);
	}
	public ANY(): TerminalNode {
		return this.getToken(CypherParser.ANY, 0);
	}
	public NONE(): TerminalNode {
		return this.getToken(CypherParser.NONE, 0);
	}
	public SINGLE(): TerminalNode {
		return this.getToken(CypherParser.SINGLE, 0);
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_SymbolicName;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_SymbolicName) {
	 		listener.enterOC_SymbolicName(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_SymbolicName) {
	 		listener.exitOC_SymbolicName(this);
		}
	}
}


export class OC_LeftArrowHeadContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_LeftArrowHead;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_LeftArrowHead) {
	 		listener.enterOC_LeftArrowHead(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_LeftArrowHead) {
	 		listener.exitOC_LeftArrowHead(this);
		}
	}
}


export class OC_RightArrowHeadContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_RightArrowHead;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_RightArrowHead) {
	 		listener.enterOC_RightArrowHead(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_RightArrowHead) {
	 		listener.exitOC_RightArrowHead(this);
		}
	}
}


export class OC_DashContext extends ParserRuleContext {
	constructor(parser?: CypherParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return CypherParser.RULE_oC_Dash;
	}
	public enterRule(listener: CypherListener): void {
	    if(listener.enterOC_Dash) {
	 		listener.enterOC_Dash(this);
		}
	}
	public exitRule(listener: CypherListener): void {
	    if(listener.exitOC_Dash) {
	 		listener.exitOC_Dash(this);
		}
	}
}

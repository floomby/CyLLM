// Generated from Cypher.g4 by ANTLR 4.13.0

import {ParseTreeListener} from "antlr4";


import { OC_CypherContext } from "./CypherParser";
import { OC_StatementContext } from "./CypherParser";
import { OC_QueryContext } from "./CypherParser";
import { OC_RegularQueryContext } from "./CypherParser";
import { OC_UnionContext } from "./CypherParser";
import { OC_SingleQueryContext } from "./CypherParser";
import { OC_SinglePartQueryContext } from "./CypherParser";
import { OC_MultiPartQueryContext } from "./CypherParser";
import { OC_UpdatingClauseContext } from "./CypherParser";
import { OC_ReadingClauseContext } from "./CypherParser";
import { OC_MatchContext } from "./CypherParser";
import { OC_UnwindContext } from "./CypherParser";
import { OC_MergeContext } from "./CypherParser";
import { OC_MergeActionContext } from "./CypherParser";
import { OC_CreateContext } from "./CypherParser";
import { OC_SetContext } from "./CypherParser";
import { OC_SetItemContext } from "./CypherParser";
import { OC_DeleteContext } from "./CypherParser";
import { OC_RemoveContext } from "./CypherParser";
import { OC_RemoveItemContext } from "./CypherParser";
import { OC_InQueryCallContext } from "./CypherParser";
import { OC_StandaloneCallContext } from "./CypherParser";
import { OC_YieldItemsContext } from "./CypherParser";
import { OC_YieldItemContext } from "./CypherParser";
import { OC_WithContext } from "./CypherParser";
import { OC_ReturnContext } from "./CypherParser";
import { OC_ProjectionBodyContext } from "./CypherParser";
import { OC_ProjectionItemsContext } from "./CypherParser";
import { OC_ProjectionItemContext } from "./CypherParser";
import { OC_OrderContext } from "./CypherParser";
import { OC_SkipContext } from "./CypherParser";
import { OC_LimitContext } from "./CypherParser";
import { OC_SortItemContext } from "./CypherParser";
import { OC_WhereContext } from "./CypherParser";
import { OC_PatternContext } from "./CypherParser";
import { OC_PatternPartContext } from "./CypherParser";
import { OC_AnonymousPatternPartContext } from "./CypherParser";
import { OC_PatternElementContext } from "./CypherParser";
import { OC_RelationshipsPatternContext } from "./CypherParser";
import { OC_NodePatternContext } from "./CypherParser";
import { OC_PatternElementChainContext } from "./CypherParser";
import { OC_RelationshipPatternContext } from "./CypherParser";
import { OC_RelationshipDetailContext } from "./CypherParser";
import { OC_PropertiesContext } from "./CypherParser";
import { OC_RelationshipTypesContext } from "./CypherParser";
import { OC_NodeLabelsContext } from "./CypherParser";
import { OC_NodeLabelContext } from "./CypherParser";
import { OC_RangeLiteralContext } from "./CypherParser";
import { OC_LabelNameContext } from "./CypherParser";
import { OC_RelTypeNameContext } from "./CypherParser";
import { OC_PropertyExpressionContext } from "./CypherParser";
import { OC_ExpressionContext } from "./CypherParser";
import { OC_OrExpressionContext } from "./CypherParser";
import { OC_XorExpressionContext } from "./CypherParser";
import { OC_AndExpressionContext } from "./CypherParser";
import { OC_NotExpressionContext } from "./CypherParser";
import { OC_ComparisonExpressionContext } from "./CypherParser";
import { OC_PartialComparisonExpressionContext } from "./CypherParser";
import { OC_StringListNullPredicateExpressionContext } from "./CypherParser";
import { OC_StringPredicateExpressionContext } from "./CypherParser";
import { OC_ListPredicateExpressionContext } from "./CypherParser";
import { OC_NullPredicateExpressionContext } from "./CypherParser";
import { OC_AddOrSubtractExpressionContext } from "./CypherParser";
import { OC_MultiplyDivideModuloExpressionContext } from "./CypherParser";
import { OC_PowerOfExpressionContext } from "./CypherParser";
import { OC_UnaryAddOrSubtractExpressionContext } from "./CypherParser";
import { OC_NonArithmeticOperatorExpressionContext } from "./CypherParser";
import { OC_ListOperatorExpressionContext } from "./CypherParser";
import { OC_PropertyLookupContext } from "./CypherParser";
import { OC_AtomContext } from "./CypherParser";
import { OC_CaseExpressionContext } from "./CypherParser";
import { OC_CaseAlternativeContext } from "./CypherParser";
import { OC_ListComprehensionContext } from "./CypherParser";
import { OC_PatternComprehensionContext } from "./CypherParser";
import { OC_QuantifierContext } from "./CypherParser";
import { OC_FilterExpressionContext } from "./CypherParser";
import { OC_PatternPredicateContext } from "./CypherParser";
import { OC_ParenthesizedExpressionContext } from "./CypherParser";
import { OC_IdInCollContext } from "./CypherParser";
import { OC_FunctionInvocationContext } from "./CypherParser";
import { OC_FunctionNameContext } from "./CypherParser";
import { OC_ExistentialSubqueryContext } from "./CypherParser";
import { OC_ExplicitProcedureInvocationContext } from "./CypherParser";
import { OC_ImplicitProcedureInvocationContext } from "./CypherParser";
import { OC_ProcedureResultFieldContext } from "./CypherParser";
import { OC_ProcedureNameContext } from "./CypherParser";
import { OC_NamespaceContext } from "./CypherParser";
import { OC_VariableContext } from "./CypherParser";
import { OC_LiteralContext } from "./CypherParser";
import { OC_BooleanLiteralContext } from "./CypherParser";
import { OC_NumberLiteralContext } from "./CypherParser";
import { OC_IntegerLiteralContext } from "./CypherParser";
import { OC_DoubleLiteralContext } from "./CypherParser";
import { OC_ListLiteralContext } from "./CypherParser";
import { OC_MapLiteralContext } from "./CypherParser";
import { OC_PropertyKeyNameContext } from "./CypherParser";
import { OC_ParameterContext } from "./CypherParser";
import { OC_SchemaNameContext } from "./CypherParser";
import { OC_ReservedWordContext } from "./CypherParser";
import { OC_SymbolicNameContext } from "./CypherParser";
import { OC_LeftArrowHeadContext } from "./CypherParser";
import { OC_RightArrowHeadContext } from "./CypherParser";
import { OC_DashContext } from "./CypherParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CypherParser`.
 */
export default class CypherListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `CypherParser.oC_Cypher`.
	 * @param ctx the parse tree
	 */
	enterOC_Cypher?: (ctx: OC_CypherContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_Cypher`.
	 * @param ctx the parse tree
	 */
	exitOC_Cypher?: (ctx: OC_CypherContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_Statement`.
	 * @param ctx the parse tree
	 */
	enterOC_Statement?: (ctx: OC_StatementContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_Statement`.
	 * @param ctx the parse tree
	 */
	exitOC_Statement?: (ctx: OC_StatementContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_Query`.
	 * @param ctx the parse tree
	 */
	enterOC_Query?: (ctx: OC_QueryContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_Query`.
	 * @param ctx the parse tree
	 */
	exitOC_Query?: (ctx: OC_QueryContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_RegularQuery`.
	 * @param ctx the parse tree
	 */
	enterOC_RegularQuery?: (ctx: OC_RegularQueryContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_RegularQuery`.
	 * @param ctx the parse tree
	 */
	exitOC_RegularQuery?: (ctx: OC_RegularQueryContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_Union`.
	 * @param ctx the parse tree
	 */
	enterOC_Union?: (ctx: OC_UnionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_Union`.
	 * @param ctx the parse tree
	 */
	exitOC_Union?: (ctx: OC_UnionContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_SingleQuery`.
	 * @param ctx the parse tree
	 */
	enterOC_SingleQuery?: (ctx: OC_SingleQueryContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_SingleQuery`.
	 * @param ctx the parse tree
	 */
	exitOC_SingleQuery?: (ctx: OC_SingleQueryContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_SinglePartQuery`.
	 * @param ctx the parse tree
	 */
	enterOC_SinglePartQuery?: (ctx: OC_SinglePartQueryContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_SinglePartQuery`.
	 * @param ctx the parse tree
	 */
	exitOC_SinglePartQuery?: (ctx: OC_SinglePartQueryContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_MultiPartQuery`.
	 * @param ctx the parse tree
	 */
	enterOC_MultiPartQuery?: (ctx: OC_MultiPartQueryContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_MultiPartQuery`.
	 * @param ctx the parse tree
	 */
	exitOC_MultiPartQuery?: (ctx: OC_MultiPartQueryContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_UpdatingClause`.
	 * @param ctx the parse tree
	 */
	enterOC_UpdatingClause?: (ctx: OC_UpdatingClauseContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_UpdatingClause`.
	 * @param ctx the parse tree
	 */
	exitOC_UpdatingClause?: (ctx: OC_UpdatingClauseContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_ReadingClause`.
	 * @param ctx the parse tree
	 */
	enterOC_ReadingClause?: (ctx: OC_ReadingClauseContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_ReadingClause`.
	 * @param ctx the parse tree
	 */
	exitOC_ReadingClause?: (ctx: OC_ReadingClauseContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_Match`.
	 * @param ctx the parse tree
	 */
	enterOC_Match?: (ctx: OC_MatchContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_Match`.
	 * @param ctx the parse tree
	 */
	exitOC_Match?: (ctx: OC_MatchContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_Unwind`.
	 * @param ctx the parse tree
	 */
	enterOC_Unwind?: (ctx: OC_UnwindContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_Unwind`.
	 * @param ctx the parse tree
	 */
	exitOC_Unwind?: (ctx: OC_UnwindContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_Merge`.
	 * @param ctx the parse tree
	 */
	enterOC_Merge?: (ctx: OC_MergeContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_Merge`.
	 * @param ctx the parse tree
	 */
	exitOC_Merge?: (ctx: OC_MergeContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_MergeAction`.
	 * @param ctx the parse tree
	 */
	enterOC_MergeAction?: (ctx: OC_MergeActionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_MergeAction`.
	 * @param ctx the parse tree
	 */
	exitOC_MergeAction?: (ctx: OC_MergeActionContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_Create`.
	 * @param ctx the parse tree
	 */
	enterOC_Create?: (ctx: OC_CreateContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_Create`.
	 * @param ctx the parse tree
	 */
	exitOC_Create?: (ctx: OC_CreateContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_Set`.
	 * @param ctx the parse tree
	 */
	enterOC_Set?: (ctx: OC_SetContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_Set`.
	 * @param ctx the parse tree
	 */
	exitOC_Set?: (ctx: OC_SetContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_SetItem`.
	 * @param ctx the parse tree
	 */
	enterOC_SetItem?: (ctx: OC_SetItemContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_SetItem`.
	 * @param ctx the parse tree
	 */
	exitOC_SetItem?: (ctx: OC_SetItemContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_Delete`.
	 * @param ctx the parse tree
	 */
	enterOC_Delete?: (ctx: OC_DeleteContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_Delete`.
	 * @param ctx the parse tree
	 */
	exitOC_Delete?: (ctx: OC_DeleteContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_Remove`.
	 * @param ctx the parse tree
	 */
	enterOC_Remove?: (ctx: OC_RemoveContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_Remove`.
	 * @param ctx the parse tree
	 */
	exitOC_Remove?: (ctx: OC_RemoveContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_RemoveItem`.
	 * @param ctx the parse tree
	 */
	enterOC_RemoveItem?: (ctx: OC_RemoveItemContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_RemoveItem`.
	 * @param ctx the parse tree
	 */
	exitOC_RemoveItem?: (ctx: OC_RemoveItemContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_InQueryCall`.
	 * @param ctx the parse tree
	 */
	enterOC_InQueryCall?: (ctx: OC_InQueryCallContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_InQueryCall`.
	 * @param ctx the parse tree
	 */
	exitOC_InQueryCall?: (ctx: OC_InQueryCallContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_StandaloneCall`.
	 * @param ctx the parse tree
	 */
	enterOC_StandaloneCall?: (ctx: OC_StandaloneCallContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_StandaloneCall`.
	 * @param ctx the parse tree
	 */
	exitOC_StandaloneCall?: (ctx: OC_StandaloneCallContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_YieldItems`.
	 * @param ctx the parse tree
	 */
	enterOC_YieldItems?: (ctx: OC_YieldItemsContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_YieldItems`.
	 * @param ctx the parse tree
	 */
	exitOC_YieldItems?: (ctx: OC_YieldItemsContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_YieldItem`.
	 * @param ctx the parse tree
	 */
	enterOC_YieldItem?: (ctx: OC_YieldItemContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_YieldItem`.
	 * @param ctx the parse tree
	 */
	exitOC_YieldItem?: (ctx: OC_YieldItemContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_With`.
	 * @param ctx the parse tree
	 */
	enterOC_With?: (ctx: OC_WithContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_With`.
	 * @param ctx the parse tree
	 */
	exitOC_With?: (ctx: OC_WithContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_Return`.
	 * @param ctx the parse tree
	 */
	enterOC_Return?: (ctx: OC_ReturnContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_Return`.
	 * @param ctx the parse tree
	 */
	exitOC_Return?: (ctx: OC_ReturnContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_ProjectionBody`.
	 * @param ctx the parse tree
	 */
	enterOC_ProjectionBody?: (ctx: OC_ProjectionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_ProjectionBody`.
	 * @param ctx the parse tree
	 */
	exitOC_ProjectionBody?: (ctx: OC_ProjectionBodyContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_ProjectionItems`.
	 * @param ctx the parse tree
	 */
	enterOC_ProjectionItems?: (ctx: OC_ProjectionItemsContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_ProjectionItems`.
	 * @param ctx the parse tree
	 */
	exitOC_ProjectionItems?: (ctx: OC_ProjectionItemsContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_ProjectionItem`.
	 * @param ctx the parse tree
	 */
	enterOC_ProjectionItem?: (ctx: OC_ProjectionItemContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_ProjectionItem`.
	 * @param ctx the parse tree
	 */
	exitOC_ProjectionItem?: (ctx: OC_ProjectionItemContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_Order`.
	 * @param ctx the parse tree
	 */
	enterOC_Order?: (ctx: OC_OrderContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_Order`.
	 * @param ctx the parse tree
	 */
	exitOC_Order?: (ctx: OC_OrderContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_Skip`.
	 * @param ctx the parse tree
	 */
	enterOC_Skip?: (ctx: OC_SkipContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_Skip`.
	 * @param ctx the parse tree
	 */
	exitOC_Skip?: (ctx: OC_SkipContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_Limit`.
	 * @param ctx the parse tree
	 */
	enterOC_Limit?: (ctx: OC_LimitContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_Limit`.
	 * @param ctx the parse tree
	 */
	exitOC_Limit?: (ctx: OC_LimitContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_SortItem`.
	 * @param ctx the parse tree
	 */
	enterOC_SortItem?: (ctx: OC_SortItemContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_SortItem`.
	 * @param ctx the parse tree
	 */
	exitOC_SortItem?: (ctx: OC_SortItemContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_Where`.
	 * @param ctx the parse tree
	 */
	enterOC_Where?: (ctx: OC_WhereContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_Where`.
	 * @param ctx the parse tree
	 */
	exitOC_Where?: (ctx: OC_WhereContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_Pattern`.
	 * @param ctx the parse tree
	 */
	enterOC_Pattern?: (ctx: OC_PatternContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_Pattern`.
	 * @param ctx the parse tree
	 */
	exitOC_Pattern?: (ctx: OC_PatternContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_PatternPart`.
	 * @param ctx the parse tree
	 */
	enterOC_PatternPart?: (ctx: OC_PatternPartContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_PatternPart`.
	 * @param ctx the parse tree
	 */
	exitOC_PatternPart?: (ctx: OC_PatternPartContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_AnonymousPatternPart`.
	 * @param ctx the parse tree
	 */
	enterOC_AnonymousPatternPart?: (ctx: OC_AnonymousPatternPartContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_AnonymousPatternPart`.
	 * @param ctx the parse tree
	 */
	exitOC_AnonymousPatternPart?: (ctx: OC_AnonymousPatternPartContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_PatternElement`.
	 * @param ctx the parse tree
	 */
	enterOC_PatternElement?: (ctx: OC_PatternElementContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_PatternElement`.
	 * @param ctx the parse tree
	 */
	exitOC_PatternElement?: (ctx: OC_PatternElementContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_RelationshipsPattern`.
	 * @param ctx the parse tree
	 */
	enterOC_RelationshipsPattern?: (ctx: OC_RelationshipsPatternContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_RelationshipsPattern`.
	 * @param ctx the parse tree
	 */
	exitOC_RelationshipsPattern?: (ctx: OC_RelationshipsPatternContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_NodePattern`.
	 * @param ctx the parse tree
	 */
	enterOC_NodePattern?: (ctx: OC_NodePatternContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_NodePattern`.
	 * @param ctx the parse tree
	 */
	exitOC_NodePattern?: (ctx: OC_NodePatternContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_PatternElementChain`.
	 * @param ctx the parse tree
	 */
	enterOC_PatternElementChain?: (ctx: OC_PatternElementChainContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_PatternElementChain`.
	 * @param ctx the parse tree
	 */
	exitOC_PatternElementChain?: (ctx: OC_PatternElementChainContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_RelationshipPattern`.
	 * @param ctx the parse tree
	 */
	enterOC_RelationshipPattern?: (ctx: OC_RelationshipPatternContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_RelationshipPattern`.
	 * @param ctx the parse tree
	 */
	exitOC_RelationshipPattern?: (ctx: OC_RelationshipPatternContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_RelationshipDetail`.
	 * @param ctx the parse tree
	 */
	enterOC_RelationshipDetail?: (ctx: OC_RelationshipDetailContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_RelationshipDetail`.
	 * @param ctx the parse tree
	 */
	exitOC_RelationshipDetail?: (ctx: OC_RelationshipDetailContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_Properties`.
	 * @param ctx the parse tree
	 */
	enterOC_Properties?: (ctx: OC_PropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_Properties`.
	 * @param ctx the parse tree
	 */
	exitOC_Properties?: (ctx: OC_PropertiesContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_RelationshipTypes`.
	 * @param ctx the parse tree
	 */
	enterOC_RelationshipTypes?: (ctx: OC_RelationshipTypesContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_RelationshipTypes`.
	 * @param ctx the parse tree
	 */
	exitOC_RelationshipTypes?: (ctx: OC_RelationshipTypesContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_NodeLabels`.
	 * @param ctx the parse tree
	 */
	enterOC_NodeLabels?: (ctx: OC_NodeLabelsContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_NodeLabels`.
	 * @param ctx the parse tree
	 */
	exitOC_NodeLabels?: (ctx: OC_NodeLabelsContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_NodeLabel`.
	 * @param ctx the parse tree
	 */
	enterOC_NodeLabel?: (ctx: OC_NodeLabelContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_NodeLabel`.
	 * @param ctx the parse tree
	 */
	exitOC_NodeLabel?: (ctx: OC_NodeLabelContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_RangeLiteral`.
	 * @param ctx the parse tree
	 */
	enterOC_RangeLiteral?: (ctx: OC_RangeLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_RangeLiteral`.
	 * @param ctx the parse tree
	 */
	exitOC_RangeLiteral?: (ctx: OC_RangeLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_LabelName`.
	 * @param ctx the parse tree
	 */
	enterOC_LabelName?: (ctx: OC_LabelNameContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_LabelName`.
	 * @param ctx the parse tree
	 */
	exitOC_LabelName?: (ctx: OC_LabelNameContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_RelTypeName`.
	 * @param ctx the parse tree
	 */
	enterOC_RelTypeName?: (ctx: OC_RelTypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_RelTypeName`.
	 * @param ctx the parse tree
	 */
	exitOC_RelTypeName?: (ctx: OC_RelTypeNameContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_PropertyExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_PropertyExpression?: (ctx: OC_PropertyExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_PropertyExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_PropertyExpression?: (ctx: OC_PropertyExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_Expression`.
	 * @param ctx the parse tree
	 */
	enterOC_Expression?: (ctx: OC_ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_Expression`.
	 * @param ctx the parse tree
	 */
	exitOC_Expression?: (ctx: OC_ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_OrExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_OrExpression?: (ctx: OC_OrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_OrExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_OrExpression?: (ctx: OC_OrExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_XorExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_XorExpression?: (ctx: OC_XorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_XorExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_XorExpression?: (ctx: OC_XorExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_AndExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_AndExpression?: (ctx: OC_AndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_AndExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_AndExpression?: (ctx: OC_AndExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_NotExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_NotExpression?: (ctx: OC_NotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_NotExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_NotExpression?: (ctx: OC_NotExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_ComparisonExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_ComparisonExpression?: (ctx: OC_ComparisonExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_ComparisonExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_ComparisonExpression?: (ctx: OC_ComparisonExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_PartialComparisonExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_PartialComparisonExpression?: (ctx: OC_PartialComparisonExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_PartialComparisonExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_PartialComparisonExpression?: (ctx: OC_PartialComparisonExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_StringListNullPredicateExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_StringListNullPredicateExpression?: (ctx: OC_StringListNullPredicateExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_StringListNullPredicateExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_StringListNullPredicateExpression?: (ctx: OC_StringListNullPredicateExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_StringPredicateExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_StringPredicateExpression?: (ctx: OC_StringPredicateExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_StringPredicateExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_StringPredicateExpression?: (ctx: OC_StringPredicateExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_ListPredicateExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_ListPredicateExpression?: (ctx: OC_ListPredicateExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_ListPredicateExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_ListPredicateExpression?: (ctx: OC_ListPredicateExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_NullPredicateExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_NullPredicateExpression?: (ctx: OC_NullPredicateExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_NullPredicateExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_NullPredicateExpression?: (ctx: OC_NullPredicateExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_AddOrSubtractExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_AddOrSubtractExpression?: (ctx: OC_AddOrSubtractExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_AddOrSubtractExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_AddOrSubtractExpression?: (ctx: OC_AddOrSubtractExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_MultiplyDivideModuloExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_MultiplyDivideModuloExpression?: (ctx: OC_MultiplyDivideModuloExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_MultiplyDivideModuloExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_MultiplyDivideModuloExpression?: (ctx: OC_MultiplyDivideModuloExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_PowerOfExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_PowerOfExpression?: (ctx: OC_PowerOfExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_PowerOfExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_PowerOfExpression?: (ctx: OC_PowerOfExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_UnaryAddOrSubtractExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_UnaryAddOrSubtractExpression?: (ctx: OC_UnaryAddOrSubtractExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_UnaryAddOrSubtractExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_UnaryAddOrSubtractExpression?: (ctx: OC_UnaryAddOrSubtractExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_NonArithmeticOperatorExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_NonArithmeticOperatorExpression?: (ctx: OC_NonArithmeticOperatorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_NonArithmeticOperatorExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_NonArithmeticOperatorExpression?: (ctx: OC_NonArithmeticOperatorExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_ListOperatorExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_ListOperatorExpression?: (ctx: OC_ListOperatorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_ListOperatorExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_ListOperatorExpression?: (ctx: OC_ListOperatorExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_PropertyLookup`.
	 * @param ctx the parse tree
	 */
	enterOC_PropertyLookup?: (ctx: OC_PropertyLookupContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_PropertyLookup`.
	 * @param ctx the parse tree
	 */
	exitOC_PropertyLookup?: (ctx: OC_PropertyLookupContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_Atom`.
	 * @param ctx the parse tree
	 */
	enterOC_Atom?: (ctx: OC_AtomContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_Atom`.
	 * @param ctx the parse tree
	 */
	exitOC_Atom?: (ctx: OC_AtomContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_CaseExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_CaseExpression?: (ctx: OC_CaseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_CaseExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_CaseExpression?: (ctx: OC_CaseExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_CaseAlternative`.
	 * @param ctx the parse tree
	 */
	enterOC_CaseAlternative?: (ctx: OC_CaseAlternativeContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_CaseAlternative`.
	 * @param ctx the parse tree
	 */
	exitOC_CaseAlternative?: (ctx: OC_CaseAlternativeContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_ListComprehension`.
	 * @param ctx the parse tree
	 */
	enterOC_ListComprehension?: (ctx: OC_ListComprehensionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_ListComprehension`.
	 * @param ctx the parse tree
	 */
	exitOC_ListComprehension?: (ctx: OC_ListComprehensionContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_PatternComprehension`.
	 * @param ctx the parse tree
	 */
	enterOC_PatternComprehension?: (ctx: OC_PatternComprehensionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_PatternComprehension`.
	 * @param ctx the parse tree
	 */
	exitOC_PatternComprehension?: (ctx: OC_PatternComprehensionContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_Quantifier`.
	 * @param ctx the parse tree
	 */
	enterOC_Quantifier?: (ctx: OC_QuantifierContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_Quantifier`.
	 * @param ctx the parse tree
	 */
	exitOC_Quantifier?: (ctx: OC_QuantifierContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_FilterExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_FilterExpression?: (ctx: OC_FilterExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_FilterExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_FilterExpression?: (ctx: OC_FilterExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_PatternPredicate`.
	 * @param ctx the parse tree
	 */
	enterOC_PatternPredicate?: (ctx: OC_PatternPredicateContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_PatternPredicate`.
	 * @param ctx the parse tree
	 */
	exitOC_PatternPredicate?: (ctx: OC_PatternPredicateContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_ParenthesizedExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_ParenthesizedExpression?: (ctx: OC_ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_ParenthesizedExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_ParenthesizedExpression?: (ctx: OC_ParenthesizedExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_IdInColl`.
	 * @param ctx the parse tree
	 */
	enterOC_IdInColl?: (ctx: OC_IdInCollContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_IdInColl`.
	 * @param ctx the parse tree
	 */
	exitOC_IdInColl?: (ctx: OC_IdInCollContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_FunctionInvocation`.
	 * @param ctx the parse tree
	 */
	enterOC_FunctionInvocation?: (ctx: OC_FunctionInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_FunctionInvocation`.
	 * @param ctx the parse tree
	 */
	exitOC_FunctionInvocation?: (ctx: OC_FunctionInvocationContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_FunctionName`.
	 * @param ctx the parse tree
	 */
	enterOC_FunctionName?: (ctx: OC_FunctionNameContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_FunctionName`.
	 * @param ctx the parse tree
	 */
	exitOC_FunctionName?: (ctx: OC_FunctionNameContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_ExistentialSubquery`.
	 * @param ctx the parse tree
	 */
	enterOC_ExistentialSubquery?: (ctx: OC_ExistentialSubqueryContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_ExistentialSubquery`.
	 * @param ctx the parse tree
	 */
	exitOC_ExistentialSubquery?: (ctx: OC_ExistentialSubqueryContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_ExplicitProcedureInvocation`.
	 * @param ctx the parse tree
	 */
	enterOC_ExplicitProcedureInvocation?: (ctx: OC_ExplicitProcedureInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_ExplicitProcedureInvocation`.
	 * @param ctx the parse tree
	 */
	exitOC_ExplicitProcedureInvocation?: (ctx: OC_ExplicitProcedureInvocationContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_ImplicitProcedureInvocation`.
	 * @param ctx the parse tree
	 */
	enterOC_ImplicitProcedureInvocation?: (ctx: OC_ImplicitProcedureInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_ImplicitProcedureInvocation`.
	 * @param ctx the parse tree
	 */
	exitOC_ImplicitProcedureInvocation?: (ctx: OC_ImplicitProcedureInvocationContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_ProcedureResultField`.
	 * @param ctx the parse tree
	 */
	enterOC_ProcedureResultField?: (ctx: OC_ProcedureResultFieldContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_ProcedureResultField`.
	 * @param ctx the parse tree
	 */
	exitOC_ProcedureResultField?: (ctx: OC_ProcedureResultFieldContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_ProcedureName`.
	 * @param ctx the parse tree
	 */
	enterOC_ProcedureName?: (ctx: OC_ProcedureNameContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_ProcedureName`.
	 * @param ctx the parse tree
	 */
	exitOC_ProcedureName?: (ctx: OC_ProcedureNameContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_Namespace`.
	 * @param ctx the parse tree
	 */
	enterOC_Namespace?: (ctx: OC_NamespaceContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_Namespace`.
	 * @param ctx the parse tree
	 */
	exitOC_Namespace?: (ctx: OC_NamespaceContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_Variable`.
	 * @param ctx the parse tree
	 */
	enterOC_Variable?: (ctx: OC_VariableContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_Variable`.
	 * @param ctx the parse tree
	 */
	exitOC_Variable?: (ctx: OC_VariableContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_Literal`.
	 * @param ctx the parse tree
	 */
	enterOC_Literal?: (ctx: OC_LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_Literal`.
	 * @param ctx the parse tree
	 */
	exitOC_Literal?: (ctx: OC_LiteralContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_BooleanLiteral`.
	 * @param ctx the parse tree
	 */
	enterOC_BooleanLiteral?: (ctx: OC_BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_BooleanLiteral`.
	 * @param ctx the parse tree
	 */
	exitOC_BooleanLiteral?: (ctx: OC_BooleanLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_NumberLiteral`.
	 * @param ctx the parse tree
	 */
	enterOC_NumberLiteral?: (ctx: OC_NumberLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_NumberLiteral`.
	 * @param ctx the parse tree
	 */
	exitOC_NumberLiteral?: (ctx: OC_NumberLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_IntegerLiteral`.
	 * @param ctx the parse tree
	 */
	enterOC_IntegerLiteral?: (ctx: OC_IntegerLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_IntegerLiteral`.
	 * @param ctx the parse tree
	 */
	exitOC_IntegerLiteral?: (ctx: OC_IntegerLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_DoubleLiteral`.
	 * @param ctx the parse tree
	 */
	enterOC_DoubleLiteral?: (ctx: OC_DoubleLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_DoubleLiteral`.
	 * @param ctx the parse tree
	 */
	exitOC_DoubleLiteral?: (ctx: OC_DoubleLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_ListLiteral`.
	 * @param ctx the parse tree
	 */
	enterOC_ListLiteral?: (ctx: OC_ListLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_ListLiteral`.
	 * @param ctx the parse tree
	 */
	exitOC_ListLiteral?: (ctx: OC_ListLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_MapLiteral`.
	 * @param ctx the parse tree
	 */
	enterOC_MapLiteral?: (ctx: OC_MapLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_MapLiteral`.
	 * @param ctx the parse tree
	 */
	exitOC_MapLiteral?: (ctx: OC_MapLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_PropertyKeyName`.
	 * @param ctx the parse tree
	 */
	enterOC_PropertyKeyName?: (ctx: OC_PropertyKeyNameContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_PropertyKeyName`.
	 * @param ctx the parse tree
	 */
	exitOC_PropertyKeyName?: (ctx: OC_PropertyKeyNameContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_Parameter`.
	 * @param ctx the parse tree
	 */
	enterOC_Parameter?: (ctx: OC_ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_Parameter`.
	 * @param ctx the parse tree
	 */
	exitOC_Parameter?: (ctx: OC_ParameterContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_SchemaName`.
	 * @param ctx the parse tree
	 */
	enterOC_SchemaName?: (ctx: OC_SchemaNameContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_SchemaName`.
	 * @param ctx the parse tree
	 */
	exitOC_SchemaName?: (ctx: OC_SchemaNameContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_ReservedWord`.
	 * @param ctx the parse tree
	 */
	enterOC_ReservedWord?: (ctx: OC_ReservedWordContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_ReservedWord`.
	 * @param ctx the parse tree
	 */
	exitOC_ReservedWord?: (ctx: OC_ReservedWordContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_SymbolicName`.
	 * @param ctx the parse tree
	 */
	enterOC_SymbolicName?: (ctx: OC_SymbolicNameContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_SymbolicName`.
	 * @param ctx the parse tree
	 */
	exitOC_SymbolicName?: (ctx: OC_SymbolicNameContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_LeftArrowHead`.
	 * @param ctx the parse tree
	 */
	enterOC_LeftArrowHead?: (ctx: OC_LeftArrowHeadContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_LeftArrowHead`.
	 * @param ctx the parse tree
	 */
	exitOC_LeftArrowHead?: (ctx: OC_LeftArrowHeadContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_RightArrowHead`.
	 * @param ctx the parse tree
	 */
	enterOC_RightArrowHead?: (ctx: OC_RightArrowHeadContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_RightArrowHead`.
	 * @param ctx the parse tree
	 */
	exitOC_RightArrowHead?: (ctx: OC_RightArrowHeadContext) => void;
	/**
	 * Enter a parse tree produced by `CypherParser.oC_Dash`.
	 * @param ctx the parse tree
	 */
	enterOC_Dash?: (ctx: OC_DashContext) => void;
	/**
	 * Exit a parse tree produced by `CypherParser.oC_Dash`.
	 * @param ctx the parse tree
	 */
	exitOC_Dash?: (ctx: OC_DashContext) => void;
}


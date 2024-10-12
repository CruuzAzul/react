import {CATEGORY_CLASSES_COLORS} from '../lib/constant';

enum LoweringCategory {
  HIR = 'HIR',
}

enum OptimizationAndNormalizationCategory {
  PruneMaybeThrows = 'PruneMaybeThrows',
  DropManualMemoization = 'DropManualMemoization',
  InlineImmediatelyInvokedFunctionExpressions = 'InlineImmediatelyInvokedFunctionExpressions',
  MergeConsecutiveBlocks = 'MergeConsecutiveBlocks',
}

enum StaticAnalysisAndTypeInferenceCategory {
  SSA = 'SSA',
  EliminateRedundantPhi = 'EliminateRedundantPhi',
  ConstantPropagation = 'ConstantPropagation',
  InferTypes = 'InferTypes',
  AnalyseFunctions = 'AnalyseFunctions',
  InferReferenceEffects = 'InferReferenceEffects',
  DeadCodeElimination = 'DeadCodeElimination',
  InferMutableRanges = 'InferMutableRanges',
  InferReactivePlaces = 'InferReactivePlaces',
  RewriteInstructionKindsBasedOnReassignment = 'RewriteInstructionKindsBasedOnReassignment',
  PropagatePhiTypes = 'PropagatePhiTypes',
}

enum ReactiveOptimizationHIRCategory {
  InferReactiveScopeVariables = 'InferReactiveScopeVariables',
  MemoizeFbtAndMacroOperandsInSameScope = 'MemoizeFbtAndMacroOperandsInSameScope',
  OutlineFunctions = 'OutlineFunctions',
  AlignMethodCallScopes = 'AlignMethodCallScopes',
  AlignObjectMethodScopes = 'AlignObjectMethodScopes',
  PruneUnusedLabelsHIR = 'PruneUnusedLabelsHIR',
  AlignReactiveScopesToBlockScopesHIR = 'AlignReactiveScopesToBlockScopesHIR',
  MergeOverlappingReactiveScopesHIR = 'MergeOverlappingReactiveScopesHIR',
  BuildReactiveScopeTerminalsHIR = 'BuildReactiveScopeTerminalsHIR',
  FlattenReactiveLoopsHIR = 'FlattenReactiveLoopsHIR',
  FlattenScopesWithHooksOrUseHIR = 'FlattenScopesWithHooksOrUseHIR',
  BuildReactiveFunction = 'BuildReactiveFunction',
}

enum ReactiveOptimizationReactiveFunctionCategory {
  PruneUnusedLabels = 'PruneUnusedLabels',
  PropagateScopeDependencies = 'PropagateScopeDependencies',
  PruneNonEscapingScopes = 'PruneNonEscapingScopes',
  PruneNonReactiveDependencies = 'PruneNonReactiveDependencies',
  PruneUnusedScopes = 'PruneUnusedScopes',
  MergeReactiveScopesThatInvalidateTogether = 'MergeReactiveScopesThatInvalidateTogether',
  PruneAlwaysInvalidatingScopes = 'PruneAlwaysInvalidatingScopes',
  PropagateEarlyReturns = 'PropagateEarlyReturns',
  PruneUnusedLValues = 'PruneUnusedLValues',
  PromoteUsedTemporaries = 'PromoteUsedTemporaries',
  ExtractScopeDeclarationsFromDestructuring = 'ExtractScopeDeclarationsFromDestructuring',
  StabilizeBlockIds = 'StabilizeBlockIds',
  RenameVariables = 'RenameVariables',
  PruneHoistedContexts = 'PruneHoistedContexts',
}

export const getCategoryColor = (category: string): string | null => {
  if (LOWERING_CATEGORIES.has(category as LoweringCategory)) {
    return CATEGORY_CLASSES_COLORS.LOWERING;
  }
  if (
    OPTIMIZATION_AND_NORMALIZATION_CATEGORIES.has(
      category as OptimizationAndNormalizationCategory,
    )
  ) {
    return CATEGORY_CLASSES_COLORS.OPTIMIZATION_AND_NORMALIZATION;
  }
  if (
    STATIC_ANALYSIS_AND_TYPE_INFERENCE_CATEGORIES.has(
      category as StaticAnalysisAndTypeInferenceCategory,
    )
  ) {
    return CATEGORY_CLASSES_COLORS.STATIC_ANALYSIS_AND_TYPE_INFERENCE;
  }
  if (
    REACTIVE_OPTIMIZATION_HIR_CATEGORIES.has(
      category as ReactiveOptimizationHIRCategory,
    )
  ) {
    return CATEGORY_CLASSES_COLORS.REACTIVE_OPTIMIZATION_HIR;
  }
  if (
    REACTIVE_OPTIMIZATION_REACTIVE_FUNCTION_CATEGORIES.has(
      category as ReactiveOptimizationReactiveFunctionCategory,
    )
  ) {
    return CATEGORY_CLASSES_COLORS.REACTIVE_OPTIMIZATION_REACTIVE_FUNCTION;
  }
  return null;
};

const LOWERING_CATEGORIES = new Set(Object.values(LoweringCategory));
const OPTIMIZATION_AND_NORMALIZATION_CATEGORIES = new Set(
  Object.values(OptimizationAndNormalizationCategory),
);
const STATIC_ANALYSIS_AND_TYPE_INFERENCE_CATEGORIES = new Set(
  Object.values(StaticAnalysisAndTypeInferenceCategory),
);
const REACTIVE_OPTIMIZATION_HIR_CATEGORIES = new Set(
  Object.values(ReactiveOptimizationHIRCategory),
);
const REACTIVE_OPTIMIZATION_REACTIVE_FUNCTION_CATEGORIES = new Set(
  Object.values(ReactiveOptimizationReactiveFunctionCategory),
);

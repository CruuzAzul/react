import { CATEGORY_CLASSES_COLORS } from "../../lib/constant";

const legendItems = [
  { label: "Lowering", color: CATEGORY_CLASSES_COLORS.LOWERING },
  { label: "Optimization and Normalization", color: CATEGORY_CLASSES_COLORS.OPTIMIZATION_AND_NORMALIZATION },
  { label: "Static Analysis and Type Inference", color: CATEGORY_CLASSES_COLORS.STATIC_ANALYSIS_AND_TYPE_INFERENCE },
  { label: "Reactive Optimization (HIR)", color: CATEGORY_CLASSES_COLORS.REACTIVE_OPTIMIZATION_HIR },
  { label: "Reactive Optimization (Reactive Function)", color: CATEGORY_CLASSES_COLORS.REACTIVE_OPTIMIZATION_REACTIVE_FUNCTION },
];

export default function Legend() {
  return (
    <div className="flex flex-row items-center justify-center w-screen pr-5 pb-5">
      {legendItems.map((item) => (
        <li key={item.label} className="flex items-center p-2">
          <span
            className="inline-block w-5 h-5 rounded-full mr-2"
            style={{ backgroundColor: item.color }}
          ></span>
          {item.label}
        </li>
      ))}
    </div>
  );
}

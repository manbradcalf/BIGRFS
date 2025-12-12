import { SlotType } from "./Enums/SlotType";
// TODO: How can we make this work with runtime generated chunks and their slotstypes?
export const ENTITY_PROPERTIES: Record<SlotType, string[]> = {
  [SlotType.Filter]: [],
  [SlotType.FilterCondition]: [">", "=>", "=", "<", "<=", "<>", "in"],
  [SlotType.FilterValue]: [],
  [SlotType.SelectProperty]: []
};

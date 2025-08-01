import { z } from "zod";

/**
 * Zod schema for History model validation
 * Provides runtime type safety and validation for history data
 */
export const HistorySchema = z.object({
  id: z.string().min(1, "validation.errors.field_empty"),
  entityType: z.string().min(1, "validation.errors.field_empty"),
  entityId: z.string().min(1, "validation.errors.field_empty"),
  action: z.string().min(1, "validation.errors.field_empty"),
  performedBy: z.string().min(1, "validation.errors.field_empty"),
  timestamp: z.date(),
  changes: z.record(z.string(), z.record(z.string(), z.union([z.boolean(), z.number(), z.string(), z.object({})]))),
});

export type History = z.infer<typeof HistorySchema>;

/**
 * Validation helpers
 */
export const validateHistory = (data: unknown): History => {
  return HistorySchema.parse(data);
};

export const validateHistorySafe = (data: unknown) => {
  return HistorySchema.safeParse(data);
};

export const validateHistoryPartial = (data: unknown): Partial<History> => {
  return HistorySchema.partial().parse(data);
};

/**
 * Type guard for History validation
 */
export const isValidHistory = (data: unknown): data is History => {
  return HistorySchema.safeParse(data).success;
};
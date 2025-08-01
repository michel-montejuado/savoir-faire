export * from './models/History';
export * from './models/Setting';
export * from './models/User';

export const EntityOperations = {
  validate: <T>(schema: import("zod").ZodSchema<T>, data: unknown): T => {
    return schema.parse(data);
  },
  validateSafe: <T>(schema: import("zod").ZodSchema<T>, data: unknown) => {
    return schema.safeParse(data);
  },
};
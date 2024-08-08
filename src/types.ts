export type TscDiagnostic = { value: number, unit?: "s" | "K" };
export type TscDiagnostics = Record<string, TscDiagnostic>;

export type DiffDiagnostic = { old: number, new: number, diff: number, unit?: string };
export type DiffDiagnostics = Record<string, DiffDiagnostic>
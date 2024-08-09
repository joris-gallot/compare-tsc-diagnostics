export interface TscDiagnostic {
  value: number
  unit?: 's' | 'K'
}
export type TscDiagnostics = Record<string, TscDiagnostic>

export interface DiffDiagnostic {
  oldValue: number
  oldValueWithUnit: string
  newValue: number
  newValueWithUnit: string
  diff: number
  diffPercent: number
  unit?: 's' | 'K'
}
export type DiffDiagnostics = Record<string, DiffDiagnostic>

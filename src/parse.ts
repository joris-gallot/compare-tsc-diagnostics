import { camelCase } from 'es-toolkit/string'
import type { TscDiagnostic, TscDiagnostics } from './types.js';

const TSC_DIAGNOSTICS_KEYS = [
  "Files",
  "Lines of Library",
  "Lines of Definitions",
  "Lines of TypeScript",
  "Lines of JavaScript",
  "Lines of JSON",
  "Lines of Other",
  "Identifiers",
  "Symbols",
  "Types",
  "Instantiations",
  "Memory used",
  "Assignability cache size",
  "Identity cache size",
  "Subtype cache size",
  "Strict subtype cache size",
  "I/O Read time",
  "Parse time",
  "ResolveModule time",
  "ResolveTypeReference time",
  "ResolveLibrary time",
  "Program time",
  "Bind time",
  "Check time",
  "printTime time",
  "Emit time",
  "Total time",
] as const;

export function parseDiagnostics(diagnostics: string) {
  const lines = diagnostics.split("\n");

  const result: TscDiagnostics = {};

  for (const line of lines) {
    const [key, value] = line.split(":");

    if (!value || !key || !TSC_DIAGNOSTICS_KEYS.includes(key)) {
      continue;
    }

    let currentValue: TscDiagnostic = {
      value: 0
    }

    if (value.endsWith("s")) {
      currentValue = {
        value: parseFloat(value.trim().slice(0, -1)),
        unit: "s"
      }
    } else if (value.endsWith("K")) {
      currentValue = {
        value: parseInt(value.trim().slice(0, -1)),
        unit: "K"
      }
    } else {
      currentValue = {
        value: parseInt(value.trim()),
      }
    }

    result[camelCase(key)] = currentValue
  }

  return result;
}

import { startCase } from "es-toolkit/string";
import type { DiffDiagnostics, TscDiagnostics } from "./types.js";

export function diffDiagnostics(oldDiagnostics: TscDiagnostics, newDiagnostics: TscDiagnostics) {
  const diff: DiffDiagnostics = {};

  for (const key in oldDiagnostics) {
    if (!newDiagnostics[key]) {
      console.warn(`Key ${key} is missing in new diagnostics`);
      continue;
    }

    const { value: oldValue, unit } = oldDiagnostics[key];
    const { value: newValue } = newDiagnostics[key];

    diff[key] = {
      old: oldValue,
      new: newValue,
      unit,
      diff: newValue - oldValue
    }
  };

  return diff;
}

export function diffDiagnosticsToString(diagnostics: DiffDiagnostics) {
  const lines: string[] = [];

  for (const key in diagnostics) {
    const { new: value, diff, unit } = diagnostics[key];

    lines.push(`${startCase(key)}: ${value}${unit ?? ""} (${diff > 0 ? "+" : ""}${diff})`);
  }

  return lines.join("\n");
}
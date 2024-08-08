import { argv } from "node:process";
import { readFileSync } from "node:fs";
import { parseDiagnostics } from "./parse.js";
import { diffDiagnostics, diffDiagnosticsToString } from "./diff.js";

const args = argv.slice(2);

if (args.length !== 2) {
  console.error("Usage: tsc-diag-diff <old-file> <new-file>");
  process.exit(1);
}

const oldFile = args[0];
const newFile = args[1];

const oldDiagnostics = parseDiagnostics(readFileSync(oldFile, "utf8"));
const newDiagnostics = parseDiagnostics(readFileSync(newFile, "utf8"));

const diff = diffDiagnostics(oldDiagnostics, newDiagnostics);
console.log(diffDiagnosticsToString(diff))
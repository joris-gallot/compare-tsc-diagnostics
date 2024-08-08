import {expect, test} from "vitest";
import { parseDiagnostics } from "../src/parse.js";

test("parse diagnostics", () => {
  const diagnostics = `
Files:                         4171
Lines of Library:             39611
Lines of Definitions:        839770
Lines of TypeScript:         368580
Lines of JavaScript:           6622
Lines of JSON:                 1628
Lines of Other:                   0
Identifiers:                1600612
Symbols:                    2725484
Types:                       739960
Instantiations:            25672773
Memory used:               3439541K
Assignability cache size:    470818
Identity cache size:          39313
Subtype cache size:           70244
Strict subtype cache size:    39076
I/O Read time:                0.64s
Parse time:                   3.11s
ResolveModule time:           3.39s
ResolveTypeReference time:    0.00s
ResolveLibrary time:          0.01s
Program time:                 9.57s
Bind time:                    1.70s
Check time:                  25.68s
printTime time:               0.00s
Emit time:                    0.00s
Total time:                  36.96s
`;

  const expectedResult = {
    "files": {
      value: 4171
    }, 
    "linesOfLibrary": {
      value: 39611
    }, 
    "linesOfDefinitions": {
      value: 839770
    }, 
    "linesOfTypeScript": {
      value: 368580
    }, 
    "linesOfJavaScript": {
      value: 6622
    }, 
    "linesOfJson": {
      value: 1628
    }, 
    "linesOfOther": {
      value: 0
    }, 
    "identifiers": {
      value: 1600612
    }, 
    "symbols": {
      value: 2725484
    }, 
    "types": {
      value: 739960
    }, 
    "instantiations": {
      value: 25672773
    }, 
    "memoryUsed": {
      value: 3439541,
      unit: "K"
    },  
    "assignabilityCacheSize": {
      value: 470818
    }, 
    "identityCacheSize": {
      value: 39313
    }, 
    "subtypeCacheSize": {
      value: 70244
    }, 
    "strictSubtypeCacheSize": {
      value: 39076
    }, 
    "iOReadTime": {
      value: 0.64,
      unit: "s"
    }, 
    "parseTime": {
      value: 3.11,
      unit: "s"
    }, 
    "resolveModuleTime": {
      value: 3.39,
      unit: "s"
    }, 
    "resolveTypeReferenceTime": {
      value: 0,
      unit: "s"
    }, 
    "resolveLibraryTime": {
      value: 0.01,
      unit: "s"
    }, 
    "programTime": {
      value: 9.57,
      unit: "s"
    }, 
    "bindTime": {
      value: 1.7,
      unit: "s"
    }, 
    "checkTime": {
      value: 25.68,
      unit: "s"
    }, 
    "printTimeTime": {
      value: 0,
      unit: "s"
    }, 
    "emitTime": {
      value: 0,
      unit: "s"
    }, 
    "totalTime": {
      value: 36.96,
      unit: "s"
    },
  }

  expect(parseDiagnostics(diagnostics)).toEqual(expectedResult);
})
  
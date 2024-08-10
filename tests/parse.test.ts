import { describe, expect, it } from 'vitest'
import { parseDiagnostics } from '../src/parse.js'

describe('parse diagnostics', () => {
  it('should work with well formatted diagnostics', () => {
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
`

    const expectedResult = {
      files: {
        value: 4171,
      },
      linesOfLibrary: {
        value: 39611,
      },
      linesOfDefinitions: {
        value: 839770,
      },
      linesOfTypeScript: {
        value: 368580,
      },
      linesOfJavaScript: {
        value: 6622,
      },
      linesOfJson: {
        value: 1628,
      },
      linesOfOther: {
        value: 0,
      },
      identifiers: {
        value: 1600612,
      },
      symbols: {
        value: 2725484,
      },
      types: {
        value: 739960,
      },
      instantiations: {
        value: 25672773,
      },
      memoryUsed: {
        value: 3439541,
        unit: 'K',
      },
      assignabilityCacheSize: {
        value: 470818,
      },
      identityCacheSize: {
        value: 39313,
      },
      subtypeCacheSize: {
        value: 70244,
      },
      strictSubtypeCacheSize: {
        value: 39076,
      },
      iOReadTime: {
        value: 0.64,
        unit: 's',
      },
      parseTime: {
        value: 3.11,
        unit: 's',
      },
      resolveModuleTime: {
        value: 3.39,
        unit: 's',
      },
      resolveTypeReferenceTime: {
        value: 0,
        unit: 's',
      },
      resolveLibraryTime: {
        value: 0.01,
        unit: 's',
      },
      programTime: {
        value: 9.57,
        unit: 's',
      },
      bindTime: {
        value: 1.7,
        unit: 's',
      },
      checkTime: {
        value: 25.68,
        unit: 's',
      },
      printTimeTime: {
        value: 0,
        unit: 's',
      },
      emitTime: {
        value: 0,
        unit: 's',
      },
      totalTime: {
        value: 36.96,
        unit: 's',
      },
    }

    expect(parseDiagnostics(diagnostics)).toEqual(expectedResult)
  })

  it ('should work with error lines', () => {
    const diagnostics = `
src/bar.ts(18,58): error TS2305: Module '"Bar"' has no exported member 'foo'.
src/foo.ts(416,26): error TS7006: Parameter 'value' implicitly has an 'any' type.
Files:                         3296
Lines of Library:             39135
Lines of Definitions:        779214
Lines of TypeScript:         317505
Lines of JavaScript:          90736
Lines of JSON:                 1561
Lines of Other:                   0
Identifiers:                2286606
Symbols:                    2994789
Types:                       837791
Instantiations:            28402429
Memory used:               3844452K
Assignability cache size:    450626
Identity cache size:          47134
Subtype cache size:           69170
Strict subtype cache size:    31769
I/O Read time:                0.55s
Parse time:                   3.81s
ResolveModule time:           2.86s
ResolveTypeReference time:    0.01s
ResolveLibrary time:          0.01s
Program time:                 9.55s
Bind time:                    2.22s
Check time:                  34.62s
printTime time:               0.00s
Emit time:                    0.00s
Total time:                  46.39s
    `

    const expectedResult = {
      files: {
        value: 3296,
      },
      linesOfLibrary: {
        value: 39135,
      },
      linesOfDefinitions: {
        value: 779214,
      },
      linesOfTypeScript: {
        value: 317505,
      },
      linesOfJavaScript: {
        value: 90736,
      },
      linesOfJson: {
        value: 1561,
      },
      linesOfOther: {
        value: 0,
      },
      identifiers: {
        value: 2286606,
      },
      symbols: {
        value: 2994789,
      },
      types: {
        value: 837791,
      },
      instantiations: {
        value: 28402429,
      },
      memoryUsed: {
        value: 3844452,
        unit: 'K',
      },
      assignabilityCacheSize: {
        value: 450626,
      },
      identityCacheSize: {
        value: 47134,
      },
      subtypeCacheSize: {
        value: 69170,
      },
      strictSubtypeCacheSize: {
        value: 31769,
      },
      iOReadTime: {
        value: 0.55,
        unit: 's',
      },
      parseTime: {
        value: 3.81,
        unit: 's',
      },
      resolveModuleTime: {
        value: 2.86,
        unit: 's',
      },
      resolveTypeReferenceTime: {
        value: 0.01,
        unit: 's',
      },
      resolveLibraryTime: {
        value: 0.01,
        unit: 's',
      },
      programTime: {
        value: 9.55,
        unit: 's',
      },
      bindTime: {
        value: 2.22,
        unit: 's',
      },
      checkTime: {
        value: 34.62,
        unit: 's',
      },
      printTimeTime: {
        value: 0,
        unit: 's',
      },
      emitTime: {
        value: 0,
        unit: 's',
      },
      totalTime: {
        value: 46.39,
        unit: 's',
      },
    }

    expect(parseDiagnostics(diagnostics)).toEqual(expectedResult)
  })
})

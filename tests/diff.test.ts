import { describe, expect, it } from 'vitest'
import { diffDiagnostics } from '../src/diff.js'
import type { TscDiagnostics } from '../src/types.js'

describe('diff diagnostics', () => {
  it('should make the diff', () => {
    const oldDiagnostics: TscDiagnostics = {
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

    const newDiagnostics: TscDiagnostics = {
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

    const diff = diffDiagnostics(oldDiagnostics, newDiagnostics)

    const expectedResult = {
      files: {
        oldValue: 4171,
        newValue: 3296,
        unit: undefined,
        newValueWithUnit: '3296',
        oldValueWithUnit: '4171',
        diff: -875,
        diffPercent: -20.98,
      },
      linesOfLibrary: {
        oldValue: 39611,
        newValue: 39135,
        unit: undefined,
        newValueWithUnit: '39135',
        oldValueWithUnit: '39611',
        diff: -476,
        diffPercent: -1.20,
      },
      linesOfDefinitions: {
        oldValue: 839770,
        newValue: 779214,
        unit: undefined,
        newValueWithUnit: '779214',
        oldValueWithUnit: '839770',
        diff: -60556,
        diffPercent: -7.21,
      },
      linesOfTypeScript: {
        oldValue: 368580,
        newValue: 317505,
        unit: undefined,
        newValueWithUnit: '317505',
        oldValueWithUnit: '368580',
        diff: -51075,
        diffPercent: -13.86,
      },
      linesOfJavaScript: {
        oldValue: 6622,
        newValue: 90736,
        unit: undefined,
        newValueWithUnit: '90736',
        oldValueWithUnit: '6622',
        diff: 84114,
        diffPercent: 1270.22,
      },
      linesOfJson: {
        oldValue: 1628,
        newValue: 1561,
        unit: undefined,
        newValueWithUnit: '1561',
        oldValueWithUnit: '1628',
        diff: -67,
        diffPercent: -4.12,
      },
      linesOfOther: {
        oldValue: 0,
        newValue: 0,
        unit: undefined,
        newValueWithUnit: '0',
        oldValueWithUnit: '0',
        diff: 0,
        diffPercent: 0,
      },
      identifiers: {
        oldValue: 1600612,
        newValue: 2286606,
        unit: undefined,
        newValueWithUnit: '2286606',
        oldValueWithUnit: '1600612',
        diff: 685994,
        diffPercent: 42.86,
      },
      symbols: {
        oldValue: 2725484,
        newValue: 2994789,
        unit: undefined,
        newValueWithUnit: '2994789',
        oldValueWithUnit: '2725484',
        diff: 269305,
        diffPercent: 9.88,
      },
      types: {
        oldValue: 739960,
        newValue: 837791,
        unit: undefined,
        newValueWithUnit: '837791',
        oldValueWithUnit: '739960',
        diff: 97831,
        diffPercent: 13.22,
      },
      instantiations: {
        oldValue: 25672773,
        newValue: 28402429,
        unit: undefined,
        newValueWithUnit: '28402429',
        oldValueWithUnit: '25672773',
        diff: 2729656,
        diffPercent: 10.63,
      },
      memoryUsed: {
        oldValue: 3439541,
        newValue: 3844452,
        unit: 'K',
        newValueWithUnit: '3844452K',
        oldValueWithUnit: '3439541K',
        diff: 404911,
        diffPercent: 11.77,
      },
      assignabilityCacheSize: {
        oldValue: 470818,
        newValue: 450626,
        unit: undefined,
        newValueWithUnit: '450626',
        oldValueWithUnit: '470818',
        diff: -20192,
        diffPercent: -4.29,
      },
      identityCacheSize: {
        oldValue: 39313,
        newValue: 47134,
        unit: undefined,
        newValueWithUnit: '47134',
        oldValueWithUnit: '39313',
        diff: 7821,
        diffPercent: 19.89,
      },
      subtypeCacheSize: {
        oldValue: 70244,
        newValue: 69170,
        unit: undefined,
        newValueWithUnit: '69170',
        oldValueWithUnit: '70244',
        diff: -1074,
        diffPercent: -1.53,
      },
      strictSubtypeCacheSize: {
        oldValue: 39076,
        newValue: 31769,
        unit: undefined,
        newValueWithUnit: '31769',
        oldValueWithUnit: '39076',
        diff: -7307,
        diffPercent: -18.70,
      },
      iOReadTime: {
        oldValue: 0.64,
        newValue: 0.55,
        unit: 's',
        newValueWithUnit: '0.55s',
        oldValueWithUnit: '0.64s',
        diff: -0.09,
        diffPercent: -14.06,
      },
      parseTime: {
        oldValue: 3.11,
        newValue: 3.81,
        unit: 's',
        newValueWithUnit: '3.81s',
        oldValueWithUnit: '3.11s',
        diff: 0.7,
        diffPercent: 22.51,
      },
      resolveModuleTime: {
        oldValue: 3.39,
        newValue: 2.86,
        unit: 's',
        newValueWithUnit: '2.86s',
        oldValueWithUnit: '3.39s',
        diff: -0.53,
        diffPercent: -15.63,
      },
      resolveTypeReferenceTime: {
        oldValue: 0,
        newValue: 0.01,
        unit: 's',
        newValueWithUnit: '0.01s',
        oldValueWithUnit: '0s',
        diff: 0.01,
        diffPercent: 0,
      },
      resolveLibraryTime: {
        oldValue: 0.01,
        newValue: 0.01,
        unit: 's',
        newValueWithUnit: '0.01s',
        oldValueWithUnit: '0.01s',
        diff: 0,
        diffPercent: 0,
      },
      programTime: {
        oldValue: 9.57,
        newValue: 9.55,
        unit: 's',
        newValueWithUnit: '9.55s',
        oldValueWithUnit: '9.57s',
        diff: -0.02,
        diffPercent: -0.21,
      },
      bindTime: {
        oldValue: 1.7,
        newValue: 2.22,
        unit: 's',
        newValueWithUnit: '2.22s',
        oldValueWithUnit: '1.7s',
        diff: 0.52,
        diffPercent: 30.59,
      },
      checkTime: {
        oldValue: 25.68,
        newValue: 34.62,
        unit: 's',
        newValueWithUnit: '34.62s',
        oldValueWithUnit: '25.68s',
        diff: 8.94,
        diffPercent: 34.81,
      },
      printTimeTime: {
        oldValue: 0,
        newValue: 0,
        unit: 's',
        newValueWithUnit: '0s',
        oldValueWithUnit: '0s',
        diff: 0,
        diffPercent: 0,
      },
      emitTime: {
        oldValue: 0,
        newValue: 0,
        unit: 's',
        newValueWithUnit: '0s',
        oldValueWithUnit: '0s',
        diff: 0,
        diffPercent: 0,
      },
      totalTime: {
        oldValue: 36.96,
        newValue: 46.39,
        unit: 's',
        newValueWithUnit: '46.39s',
        oldValueWithUnit: '36.96s',
        diff: 9.43,
        diffPercent: 25.51,
      },
    }

    expect(diff).toEqual(expectedResult)
  })
})

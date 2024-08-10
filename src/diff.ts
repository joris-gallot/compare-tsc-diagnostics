import { startCase } from 'es-toolkit/string'
import { colorize, rightAlign } from 'consola/utils'
import consola from 'consola'
import type { DiffDiagnostic, DiffDiagnostics, TscDiagnostics } from './types.js'

function round2Decimals(diff: number) {
  return Math.round(diff * 100) / 100
}

export function diffDiagnostics(oldDiagnostics: TscDiagnostics, newDiagnostics: TscDiagnostics) {
  const diff: DiffDiagnostics = {}

  for (const key in oldDiagnostics) {
    if (!newDiagnostics[key]) {
      consola.warn(`Key ${key} is missing in new diagnostics`)
      continue
    }

    const { value: oldValue, unit } = oldDiagnostics[key]
    const { value: newValue } = newDiagnostics[key]

    diff[key] = {
      oldValue,
      newValue,
      unit,
      newValueWithUnit: newValue + (unit ?? ''),
      oldValueWithUnit: oldValue + (unit ?? ''),
      diff: round2Decimals(newValue - oldValue),
      diffPercent: oldValue === 0 ? 0 : round2Decimals(((newValue - oldValue) / oldValue) * 100),
    }
  };

  return diff
}

function getColoredDiff({ diff, diffPercent }: DiffDiagnostic) {
  if (diff === 0)
    return ''

  const gainMapping = {
    true: {
      color: 'green',
      diffCharacter: '',
    },
    false: {
      color: 'red',
      diffCharacter: '+',
    },
  } as const

  const isGain = diff < 0
  const { color, diffCharacter } = gainMapping[`${isGain}`]
  const diffStr = `${diffCharacter}${diffPercent}%`
  return colorize(color, diffStr)
}

function transformKeyForDiff(key: string) {
  return startCase(key)
}

export function diffDiagnosticsToString(diagnostics: DiffDiagnostics) {
  const lines: string[] = []
  const maxKeyLength = Math.max(...Object.keys(diagnostics).map(key => transformKeyForDiff(key).length))
  const maxOldValueLength = Math.max(...Object.values(diagnostics).map(d => d.oldValueWithUnit.length))
  const maxNewValueLength = Math.max(...Object.values(diagnostics).map(d => d.newValueWithUnit.length))

  for (const key in diagnostics) {
    const { newValueWithUnit, oldValueWithUnit } = diagnostics[key]

    const alignedNewValue = rightAlign(newValueWithUnit, (maxOldValueLength + newValueWithUnit.length) - oldValueWithUnit.length)
    const coloredDiffStr = getColoredDiff(diagnostics[key])
    const alignedColoredDiffStr = rightAlign(coloredDiffStr, (maxNewValueLength + coloredDiffStr.length) - newValueWithUnit.length)
    const valueStr = `${oldValueWithUnit} ${alignedNewValue} ${alignedColoredDiffStr}`
    const keyStr = transformKeyForDiff(key)

    const alignedValueStr = rightAlign(valueStr, (maxKeyLength + valueStr.length) - keyStr.length)

    lines.push(`${keyStr}: ${alignedValueStr}`)
  }

  return lines.join('\n')
}

import { argv, exit } from 'node:process'
import { readFileSync } from 'node:fs'
import consola from 'consola'
import { parseDiagnostics } from './parse.js'
import { diffDiagnostics, diffDiagnosticsToString } from './diff.js'

const args = argv.slice(2)

if (args.length !== 2) {
  consola.error('Usage: compare-tsc-diagnostics old-diagnostics.log new-diagnostics.log')
  exit(1)
}

const oldFile = args[0]
const newFile = args[1]

const oldDiagnostics = parseDiagnostics(readFileSync(oldFile, 'utf8'))
const newDiagnostics = parseDiagnostics(readFileSync(newFile, 'utf8'))

const diff = diffDiagnostics(oldDiagnostics, newDiagnostics)

consola.log(diffDiagnosticsToString(diff))

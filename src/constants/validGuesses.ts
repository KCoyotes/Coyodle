import { CONFIG } from './config'

export const VALIDGUESSES = [
    'beagle',
    'crouse',
    'hayton',
    'jaskin',
    'keller',
    'kessel',
    'obrien',
    'mcbain',
    'dineen',
    'sateri',
    'howler',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}

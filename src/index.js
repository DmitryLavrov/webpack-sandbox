import Calc from './calc'
import Log from './log'

const calc = new Calc()
const log = new Log()

log.log(calc.calc(1, 2, 3))
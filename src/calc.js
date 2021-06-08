export default class Calc {
  calc(...args) {
    return args.reduce((accum, item) => item + accum, 0)
  }
}
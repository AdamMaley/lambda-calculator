import { create, all } from "math.js";

const config = {
    epsilon: 1e-12,
    matrix: 'Matrix',
    number: 'number',
    precision: 64,
    predictable: false,
    randomSeed: null
  }
  const math = create(all, config)

  export default math;
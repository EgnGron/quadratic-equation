module.exports = function solveEquation(equation) {
    function comparisonNumber(a, b) {
      return a - b
    }

    const result = equation.match(/^(-?\d+)(?:.*?)x\^2 ([-+]?.?\d+)(?:.*?)x ([-+]?.?\d+)/);
    if (result.length == 4) {
      const a = Number(String(result[1]))
      const b = Number(String(result[2]).replace(" ", ""))
      const c = Number(String(result[3]).replace(" ", ""))
      const discriminant = (Math.pow(b,2) - (4*a*c))

      let returnValue = []
      if (discriminant >= 0) {
        const x1 = (-1*b + Math.sqrt(discriminant)) / (2*a)
        const x2 = (-1*b - Math.sqrt(discriminant)) / (2*a);
        returnValue = [Math.round(x1), Math.round(x2)]
      }

      return returnValue.sort(comparisonNumber)
    }
}

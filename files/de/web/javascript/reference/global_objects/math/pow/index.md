---
title: Math.pow()
slug: Web/JavaScript/Reference/Global_Objects/Math/pow
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`Math.pow()`** statische Methode gibt den Wert einer Basis zurück, die mit einer Potenz potenziert wurde. Das heißt:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚙𝚘𝚠</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo>,</mo><mi>𝚢</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msup><mi>x</mi><mi>y</mi></msup></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.pow}(x, y)}} = x^y</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("JavaScript Demo: Math.pow()")}}

```js interactive-example
console.log(Math.pow(7, 3));
// Expected output: 343

console.log(Math.pow(4, 0.5));
// Expected output: 2

console.log(Math.pow(7, -2));
// Expected output: 0.02040816326530612
//                  (1/49)

console.log(Math.pow(-7, 0.5));
// Expected output: NaN
```

## Syntax

```js-nolint
Math.pow(base, exponent)
```

### Parameter

- `base`
  - : Die Basiszahl.
- `exponent`
  - : Die Exponent-Zahl.

### Rückgabewert

Eine Zahl, die `base` potenziert mit `exponent` darstellt. Gibt {{jsxref("NaN")}} in einem der folgenden Fälle zurück:

- `exponent` ist `NaN`.
- `base` ist `NaN` und `exponent` ist nicht `0`.
- `base` ist ±1 und `exponent` ist ±`Infinity`.
- `base < 0` und `exponent` ist keine ganze Zahl.

## Beschreibung

`Math.pow()` entspricht dem [`**`](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)-Operator, mit der Ausnahme, dass `Math.pow()` nur Zahlen akzeptiert.

`Math.pow(NaN, 0)` (und der entsprechende Ausdruck `NaN ** 0`) ist der einzige Fall, in dem {{jsxref("NaN")}} nicht durch mathematische Operationen propagiert wird – es gibt `1` zurück, obwohl der Operand `NaN` ist. Darüber hinaus unterscheidet sich das Verhalten, wenn `base` 1 ist und `exponent` nicht endlich ist (±Infinity oder `NaN`), von IEEE 754, das angibt, dass das Ergebnis 1 sein sollte. JavaScript gibt jedoch `NaN` zurück, um die Rückwärtskompatibilität mit seinem ursprünglichen Verhalten zu wahren.

Da `pow()` eine statische Methode von `Math` ist, wird es als `Math.pow()` verwendet und nicht als Methode eines `Math`-Objekts, das Sie erstellt haben (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.pow()

```js
// Basic cases
Math.pow(7, 2); // 49
Math.pow(7, 3); // 343
Math.pow(2, 10); // 1024

// Fractional exponents
Math.pow(4, 0.5); // 2 (square root of 4)
Math.pow(8, 1 / 3); // 2 (cube root of 8)
Math.pow(2, 0.5); // 1.4142135623730951 (square root of 2)
Math.pow(2, 1 / 3); // 1.2599210498948732 (cube root of 2)

// Signed exponents
Math.pow(7, -2); // 0.02040816326530612 (1/49)
Math.pow(8, -1 / 3); // 0.5

// Signed bases
Math.pow(-7, 2); // 49 (squares are positive)
Math.pow(-7, 3); // -343 (cubes can be negative)
Math.pow(-7, 0.5); // NaN (negative numbers don't have a real square root)
// Due to "even" and "odd" roots laying close to each other,
// and limits in the floating number precision,
// negative bases with fractional exponents always return NaN,
// even when the mathematical result is real
Math.pow(-7, 1 / 3); // NaN

// Zero and infinity
Math.pow(0, 0); // 1 (anything ** ±0 is 1)
Math.pow(Infinity, 0.1); // Infinity (positive exponent)
Math.pow(Infinity, -1); // 0 (negative exponent)
Math.pow(-Infinity, 1); // -Infinity (positive odd integer exponent)
Math.pow(-Infinity, 1.5); // Infinity (positive exponent)
Math.pow(-Infinity, -1); // -0 (negative odd integer exponent)
Math.pow(-Infinity, -1.5); // 0 (negative exponent)
Math.pow(0, 1); // 0 (positive exponent)
Math.pow(0, -1); // Infinity (negative exponent)
Math.pow(-0, 1); // -0 (positive odd integer exponent)
Math.pow(-0, 1.5); // 0 (positive exponent)
Math.pow(-0, -1); // -Infinity (negative odd integer exponent)
Math.pow(-0, -1.5); // Infinity (negative exponent)
Math.pow(0.9, Infinity); // 0
Math.pow(1, Infinity); // NaN
Math.pow(1.1, Infinity); // Infinity
Math.pow(0.9, -Infinity); // Infinity
Math.pow(1, -Infinity); // NaN
Math.pow(1.1, -Infinity); // 0

// NaN: only Math.pow(NaN, 0) does not result in NaN
Math.pow(NaN, 0); // 1
Math.pow(NaN, 1); // NaN
Math.pow(1, NaN); // NaN
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Math.cbrt()")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.sqrt()")}}
- [Exponentiation (`**`)](/de/docs/Web/JavaScript/Reference/Operators/Exponentiation)

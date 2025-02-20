---
title: Math.asinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/asinh
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`Math.asinh()`** statische Methode gibt den inversen hyperbolischen Sinus einer Zahl zurück. Das bedeutet:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mtable columnalign="right left right left right left right left right left" columnspacing="0em" displaystyle="true"><mtr><mtd><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚜𝚒𝚗𝚑</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow></mtd><mtd><mo>=</mo><mo lspace="0em" rspace="0.16666666666666666em">arsinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>die eindeutige&nbsp;</mtext><mi>y</mi><mtext>&nbsp;derart, dass&nbsp;</mtext><mo lspace="0em" rspace="0em">sinh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mtd></mtr><mtr><mtd></mtd><mtd><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mrow><mi>x</mi><mo>+</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn></mrow></msqrt></mrow><mo>)</mo></mrow></mtd></mtr></mtable><annotation encoding="TeX">\begin{aligned}\mathtt{\operatorname{Math.asinh}(x)}} &= \operatorname{arsinh}(x) = \text{die eindeutige } y \text{ derart, dass } \sinh(y) = x \\&= \ln\left(x + \sqrt{x^2 + 1}\right)\end{aligned}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("JavaScript Demo: Math.asinh()")}}

```js interactive-example
console.log(Math.asinh(1));
// Expected output: 0.881373587019543

console.log(Math.asinh(0));
// Expected output: 0

console.log(Math.asinh(-1));
// Expected output: -0.881373587019543

console.log(Math.asinh(2));
// Expected output: 1.4436354751788103
```

## Syntax

```js-nolint
Math.asinh(x)
```

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Der inverse hyperbolische Sinus von `x`.

## Beschreibung

Da `asinh()` eine statische Methode von `Math` ist, wird sie immer als `Math.asinh()` verwendet, nicht als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.asinh()

```js
Math.asinh(-Infinity); // -Infinity
Math.asinh(-1); // -0.881373587019543
Math.asinh(-0); // -0
Math.asinh(0); // 0
Math.asinh(1); // 0.881373587019543
Math.asinh(Infinity); // Infinity
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Math.asinh` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}

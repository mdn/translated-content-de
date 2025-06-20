---
title: Math.expm1()
short-title: expm1()
slug: Web/JavaScript/Reference/Global_Objects/Math/expm1
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Math.expm1()`** gibt [e](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/E) potenziert mit einer Zahl, abzüglich 1, zurück. Das heißt:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚎𝚡𝚙𝚖𝟷</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.expm1}(x)}} = \mathrm{e}^x - 1</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("JavaScript Demo: Math.expm1()")}}

```js interactive-example
console.log(Math.expm1(0));
// Expected output: 0

console.log(Math.expm1(1));
// Expected output: 1.718281828459045

console.log(Math.expm1(-1));
// Expected output: -0.6321205588285577

console.log(Math.expm1(2));
// Expected output: 6.38905609893065
```

## Syntax

```js-nolint
Math.expm1(x)
```

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Eine Zahl, die e<sup>x</sup> - 1 darstellt, wobei e [die Basis des natürlichen Logarithmus](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/E) ist.

## Beschreibung

Für sehr kleine Werte von _x_ kann das Hinzufügen von 1 die Genauigkeit verringern oder beseitigen. Die in JS verwendeten Double-Floats bieten Ihnen etwa 15 Ziffern Genauigkeit. 1 + 1e-15 \= 1.000000000000001, aber 1 + 1e-16 = 1.000000000000000 und daher genau 1.0 in dieser Arithmetik, da Ziffern über 15 hinaus gerundet werden.

<!-- prettier-ignore-start -->
Wenn Sie <math><semantics><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup><annotation encoding="TeX">\mathrm{e}^x</annotation></semantics></math> berechnen, wobei x eine Zahl ist, die sehr nahe bei 0 liegt, sollten Sie eine Antwort erhalten, die sehr nahe bei 1 + x liegt, weil: <math><semantics><mrow><munder><mo lspace="0em" rspace="0em">lim</mo><mrow><mi>x</mi><mo stretchy="false">→</mo><mn>0</mn></mrow></munder><mfrac><mrow><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn></mrow><mi>x</mi></mfrac><mo>=</mo><mn>1</mn></mrow><annotation encoding="TeX">\lim_{x \to 0} \frac{\mathrm{e}^x - 1}{x} = 1</annotation></semantics></math>. Wenn Sie `Math.exp(1.1111111111e-15) - 1` berechnen, sollten Sie eine Antwort nahe `1.1111111111e-15` erhalten. Stattdessen wird aufgrund der signifikanten Ziffer in der Ergebniszahl von `Math.exp`, der Ziffer `1`, der Endwert `1.1102230246251565e-15`, mit nur 3 korrekten Ziffern. Wenn Sie stattdessen `Math.expm1(1.1111111111e-15)` berechnen, erhalten Sie eine viel genauere Antwort, `1.1111111111000007e-15`, mit 11 korrekten Ziffern der Genauigkeit.
<!-- prettier-ignore-end -->

Da `expm1()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.expm1()` und nicht als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.expm1()

```js
Math.expm1(-Infinity); // -1
Math.expm1(-1); // -0.6321205588285577
Math.expm1(-0); // -0
Math.expm1(0); // 0
Math.expm1(1); // 1.718281828459045
Math.expm1(Infinity); // Infinity
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Math.expm1` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.E")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}

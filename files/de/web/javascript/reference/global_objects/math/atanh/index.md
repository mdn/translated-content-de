---
title: Math.atanh()
short-title: atanh()
slug: Web/JavaScript/Reference/Global_Objects/Math/atanh
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Math.atanh()`** gibt den inversen hyperbolischen Tangens einer Zahl zurück. Das heißt:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mtable columnalign="right left right left right left right left right left" columnspacing="0em" displaystyle="true"><mtr><mtd><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stretchy="false">(</mo><mrow><mo>−</mo><mn>1</mn></mrow><mo>,</mo><mn>1</mn><mo stretchy="false">)</mo><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚝𝚊𝚗𝚑</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow></mtd><mtd><mo>=</mo><mo lspace="0em" rspace="0.16666666666666666em">artanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>das eindeutige&nbsp;</mtext><mi>y</mi><mtext>&nbsp;für das gilt:&nbsp;</mtext><mo lspace="0em" rspace="0em">tanh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mtd></mtr><mtr><mtd></mtd><mtd><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mspace width="0.16666666666666666em"></mspace><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow><mrow><mn>1</mn><mo>−</mo><mi>x</mi></mrow></mfrac><mo>)</mo></mrow></mtd></mtr></mtable><annotation encoding="TeX">\begin{aligned}\forall x \in ({-1}, 1),\;\mathtt{\operatorname{Math.atanh}(x)}} &= \operatorname{artanh}(x) = \text{das eindeutige } y \text{ für das gilt: } \tanh(y) = x \\&= \frac{1}{2}\,\ln\left(\frac{1+x}{1-x}\right)\end{aligned}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("JavaScript Demo: Math.atanh()")}}

```js interactive-example
console.log(Math.atanh(-1));
// Expected output: -Infinity

console.log(Math.atanh(0));
// Expected output: 0

console.log(Math.atanh(0.5));
// Expected output: 0.549306144334055 (approximately)

console.log(Math.atanh(1));
// Expected output: Infinity
```

## Syntax

```js-nolint
Math.atanh(x)
```

### Parameter

- `x`
  - : Eine Zahl zwischen -1 und 1, einschließlich der Grenzwerte.

### Rückgabewert

Der inverse hyperbolische Tangens von `x`. Wenn `x` gleich 1 ist, wird {{jsxref("Infinity")}} zurückgegeben. Wenn `x` gleich -1 ist, wird `-Infinity` zurückgegeben. Wenn `x` kleiner als -1 oder größer als 1 ist, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Da `atanh()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.atanh()` und nicht als Methode eines von Ihnen erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Math.atanh() verwenden

```js
Math.atanh(-2); // NaN
Math.atanh(-1); // -Infinity
Math.atanh(-0); // -0
Math.atanh(0); // 0
Math.atanh(0.5); // 0.5493061443340548
Math.atanh(1); // Infinity
Math.atanh(2); // NaN
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Math.atanh` in `core-js`](https://core-js.io/docs/features/ecmascript/math)
- [Polyfill für `Math.atanh` von es-shims](https://www.npmjs.com/package/math.atanh)
- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}

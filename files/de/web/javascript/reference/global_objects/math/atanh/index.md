---
title: Math.atanh()
slug: Web/JavaScript/Reference/Global_Objects/Math/atanh
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

Die **`Math.atanh()`** statische Methode gibt den inversen hyperbolischen Tangens einer Zahl zurück. Das heißt,

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mtable columnalign="right left right left right left right left right left" columnspacing="0em" displaystyle="true"><mtr><mtd><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stretchy="false">(</mo><mrow><mo>−</mo><mn>1</mn></mrow><mo>,</mo><mn>1</mn><mo stretchy="false">)</mo><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚝𝚊𝚗𝚑</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow></mtd><mtd><mo>=</mo><mo lspace="0em" rspace="0.16666666666666666em">artanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;such that&nbsp;</mtext><mo lspace="0em" rspace="0em">tanh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mtd></mtr><mtr><mtd></mtd><mtd><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mspace width="0.16666666666666666em"></mspace><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow><mrow><mn>1</mn><mo>−</mo><mi>x</mi></mrow></mfrac><mo>)</mo></mrow></mtd></mtr></mtable><annotation encoding="TeX">\begin{aligned}\forall x \in ({-1}, 1),\;\mathtt{\operatorname{Math.atanh}(x)} &= \operatorname{artanh}(x) = \text{the unique } y \text{ such that } \tanh(y) = x \\&= \frac{1}{2}\,\ln\left(\frac{1+x}{1-x}\right)\end{aligned}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{EmbedInteractiveExample("pages/js/math-atanh.html")}}

## Syntax

```js-nolint
Math.atanh(x)
```

### Parameter

- `x`
  - : Eine Zahl zwischen -1 und 1, inklusive.

### Rückgabewert

Der inverse hyperbolische Tangens von `x`. Wenn `x` 1 ist, wird {{jsxref("Infinity")}} zurückgegeben. Wenn `x` -1 ist, wird `-Infinity` zurückgegeben. Wenn `x` kleiner als -1 oder größer als 1 ist, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Da `atanh()` eine statische Methode von `Math` ist, wird sie immer als `Math.atanh()` verwendet, nicht als Methode eines von Ihnen erstellten `Math`-Objekts (Math ist kein Konstruktor).

## Beispiele

### Verwendung von Math.atanh()

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

- [Polyfill von `Math.atanh` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}

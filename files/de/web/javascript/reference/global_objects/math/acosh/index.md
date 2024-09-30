---
title: Math.acosh()
slug: Web/JavaScript/Reference/Global_Objects/Math/acosh
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

Die statische Methode **`Math.acosh()`** gibt den inversen hyperbolischen Kosinus einer Zahl zurück. Das heißt,

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mtable columnalign="right left right left right left right left right left" columnspacing="0em" displaystyle="true"><mtr><mtd><mo>∀</mo><mi>x</mi><mo>≥</mo><mn>1</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚌𝚘𝚜𝚑</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow></mtd><mtd><mo>=</mo><mo lspace="0em" rspace="0.16666666666666666em">arcosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mo>≥</mo><mn>0</mn><mtext>&nbsp;such that&nbsp;</mtext><mo lspace="0em" rspace="0em">cosh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mtd></mtr><mtr><mtd></mtd><mtd><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mrow><mi>x</mi><mo>+</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></msqrt></mrow><mo>)</mo></mrow></mtd></mtr></mtable><annotation encoding="TeX">\begin{aligned}\forall x \geq 1,\;\mathtt{\operatorname{Math.acosh}(x)}} &= \operatorname{arcosh}(x) = \text{the unique } y \geq 0 \text{ such that } \cosh(y) = x\\&= \ln\left(x + \sqrt{x^2 - 1}\right)\end{aligned}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{EmbedInteractiveExample("pages/js/math-acosh.html")}}

## Syntax

```js-nolint
Math.acosh(x)
```

### Parameter

- `x`
  - : Eine Zahl größer oder gleich 1.

### Rückgabewert

Der inverse hyperbolische Kosinus von `x`. Wenn `x` kleiner als 1 ist, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Da `acosh()` eine statische Methode von `Math` ist, wird sie immer als `Math.acosh()` verwendet, nicht als Methode eines erstellten `Math`-Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.acosh()

```js
Math.acosh(0); // NaN
Math.acosh(1); // 0
Math.acosh(2); // 1.3169578969248166
Math.acosh(Infinity); // Infinity
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Math.acosh` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}

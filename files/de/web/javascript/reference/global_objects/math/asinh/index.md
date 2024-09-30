---
title: Math.asinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/asinh
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

Die **`Math.asinh()`** statische Methode gibt den inversen hyperbolischen Sinus einer Zahl zurück. Das heißt,

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mtable columnalign="right left right left right left right left right left" columnspacing="0em" displaystyle="true"><mtr><mtd><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚜𝚒𝚗𝚑</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow></mtd><mtd><mo>=</mo><mo lspace="0em" rspace="0.16666666666666666em">arsinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;such that&nbsp;</mtext><mo lspace="0em" rspace="0em">sinh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mtd></mtr><mtr><mtd></mtd><mtd><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mrow><mi>x</mi><mo>+</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn></mrow></msqrt></mrow><mo>)</mo></mrow></mtd></mtr></mtable><annotation encoding="TeX">\begin{aligned}\mathtt{\operatorname{Math.asinh}(x)}} &= \operatorname{arsinh}(x) = \text{the unique } y \text{ such that } \sinh(y) = x \\&= \ln\left(x + \sqrt{x^2 + 1}\right)\end{aligned}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{EmbedInteractiveExample("pages/js/math-asinh.html")}}

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

Da `asinh()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.asinh()` und nicht als eine Methode eines von Ihnen erstellten `Math` Objekts (`Math` ist kein Konstruktor).

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

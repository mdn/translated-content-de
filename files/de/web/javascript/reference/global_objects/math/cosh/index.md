---
title: Math.cosh()
slug: Web/JavaScript/Reference/Global_Objects/Math/cosh
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{JSRef}}

Die **`Math.cosh()`** statische Methode gibt den hyperbolischen Kosinus einer Zahl zurück. Das heißt,

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚌𝚘𝚜𝚑</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">cosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup><mo>+</mo><msup><mi mathvariant="normal">e</mi><mrow><mo>−</mo><mi>x</mi></mrow></msup></mrow><mn>2</mn></mfrac></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.cosh}(x)}} = \cosh(x) = \frac{\mathrm{e}^x + \mathrm{e}^{-x}}{2}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{EmbedInteractiveExample("pages/js/math-cosh.html")}}

## Syntax

```js-nolint
Math.cosh(x)
```

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Der hyperbolische Kosinus von `x`.

## Beschreibung

Da `cosh()` eine statische Methode von `Math` ist, verwenden Sie sie immer als `Math.cosh()` und nicht als Methode eines von Ihnen erstellten `Math` Objekts (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von Math.cosh()

```js
Math.cosh(-Infinity); // Infinity
Math.cosh(-1); // 1.5430806348152437
Math.cosh(-0); // 1
Math.cosh(0); // 1
Math.cosh(1); // 1.5430806348152437
Math.cosh(Infinity); // Infinity
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Math.cosh` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
